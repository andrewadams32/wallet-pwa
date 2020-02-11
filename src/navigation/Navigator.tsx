import React, { useEffect, useMemo, Suspense } from 'react'
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
import NotFound from '../screens/not-found'
import { role } from '../store/models/User'

const Navigator: React.FC = () => {
  const rehydrated = useStoreRehydrated();
  const User = useStoreState(({ User }) => User)
  const history = useHistory()

  const showNav = useMemo(() => ( // list of routes to not show navbar
    history.location.pathname !== '/login' &&
    history.location.pathname !== '/unauthorized'
  ), [history.location.pathname])

  return rehydrated ? (<>
    {showNav && <NavBar routeName={history.location.pathname} />}
    <Switch>
      {Routes.map(({ component: Component, locked, path, rolesAccepted }, index: number) => {
        return (
          locked ?
            <PrivateRoute exact path={path} Component={Component} key={index} loggedIn={User.loggedIn} roles={User.roles} rolesAccepted={rolesAccepted} />
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
      )} />
    </Switch>
  </>
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
      else
        return <Redirect to="/unauthorized" />
    } else {
      return <Redirect to='/login' />
    }
  }} />
)

export default Navigator