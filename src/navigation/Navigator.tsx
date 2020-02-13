import React, { useMemo, Suspense, lazy, useEffect } from 'react'
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  RouteComponentProps
} from 'react-router-dom'
import { useStoreRehydrated } from 'easy-peasy'
import { useStoreState } from '../hooks/TypedState'

import NavBar from './NavBar'

import Routes from './Routes'
import { role } from '../store/models/User'

const NotFound = lazy(()=>import('../screens/shared/not-found'))

const hasCommon = (arr1: Array<any>, arr2: Array<any>): boolean => { 
  return arr1.some(item => arr2.includes(item)) 
} 

const Navigator: React.FC = () => {
  const rehydrated = useStoreRehydrated();
  const User = useStoreState(({ User }) => User)
  const history = useHistory()
  
  const showNav = useMemo(() => ( // list of routes to not show navbar
    history.location.pathname !== '/login' &&
    history.location.pathname !== '/unauthorized'
  ), [history.location.pathname])

  // const routes = useMemo(()=>{
  //   const r = Routes.filter((route)=>(
  //     hasCommon(User.roles, route.rolesAccepted) || route.rolesAccepted.includes("any")
  //   ))
  //   console.log('routes', r, User.roles)
  //   return r
  // },[User.roles])

  return rehydrated ? (<div style={{height: '100%'}}>
    {showNav && <NavBar routeName={history.location.pathname} style={{height: '15%'}}/>}
    <Suspense fallback={<div>loading screen...</div>}>
    <Switch>
      {Routes.map(({ component: Component, locked, path, rolesAccepted }, index: number) => {
        return (
          locked ?
            <PrivateRoute exact={false} path={path} Component={Component} key={index} loggedIn={User.loggedIn} roles={User.roles} rolesAccepted={rolesAccepted} />
            :
            <Route path={path} key={index} render={(props: RouteComponentProps<any>) => (
              <Component {...props} />
            )} />
        )
      })}
      <Route exact path="/" render={(props: RouteComponentProps<any>) => (
        <Redirect {...props} to='/home' />
      )} />
      <Route exact path="/unauthorized" render={(props: RouteComponentProps<any>) => (<> 
        <div>unauthorized route</div>
        <button onClick={()=>history.goBack()}>go back</button>
        </>
      )} />
      <Route render={(props: RouteComponentProps<any>) => (
        <NotFound {...props} />
      )}/>
    </Switch>
    </Suspense>
  </div>
  ) : <div>loading state...</div> // TODO add loading screen while data rehydrates
}

type routeProps = {
  Component: React.FC<any>,
  loggedIn: boolean,
  rolesAccepted: role[],
  roles: role[],
  [key: string]: any
}
const PrivateRoute = ({ Component, loggedIn, rolesAccepted, roles, ...rest }: routeProps) => (
  <Route {...rest} render={(props: RouteComponentProps<any>) => {
    if (loggedIn) {
      if (rolesAccepted.includes('any'))
        return <Component {...props} />
      else if (roles.map(role => rolesAccepted.includes(role)).includes(true))
        return <Component {...props} />
      else{
        if(roles.includes("recipient"))
          return <Redirect to="/home" />
        else if(roles.includes("admin"))
          return <Redirect to="/admin/home"/>
      }
    } else {
      return <Redirect to='/login' />
    }
  }} />
)

export default Navigator