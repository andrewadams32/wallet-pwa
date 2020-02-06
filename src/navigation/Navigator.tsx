import React, { useEffect, useMemo, Suspense } from 'react'
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  RouteComponentProps
} from 'react-router-dom'
import { useStoreRehydrated } from 'easy-peasy'
import { useStoreState, useStoreActions } from '../hooks/TypedState'

import Routes from './Routes'
import NotFound from '../screens/not-found'

const Navigator: React.FC = () => {
  const rehydrated = useStoreRehydrated();
  const User = useStoreState(({ User }) => User)
  const setLoggedIn = useStoreActions(({ User }) => User.setLoggedIn)
  const history = useHistory()
  const showNav = useMemo(() => (history.location.pathname !== '/login'), [history])

  useEffect(() => {
    if (rehydrated)
      if (User.authExpireTime)
        if (new Date().getTime() > User.authExpireTime)
          setLoggedIn(false)
  }, [rehydrated, User.authExpireTime, setLoggedIn])

  return rehydrated ? (
    <Suspense fallback={<div>suspensing...</div>}>
      <Switch>
        {Routes.map(({ component: Component, locked, path }, index: number) => {
          return (
            locked ?
              <PrivateRoute exact path={path} Component={Component} key={index} loggedIn={User.loggedIn} />
              :
              <Route path={path} key={index} render={(props: RouteComponentProps<any>) => (
                <Component {...props} />
              )} />
          )
        })}
        <Route exact path="/" render={(props: RouteComponentProps<any>) => (
          <Redirect {...props} to='/home' />
        )} />
        <Route render={(props: RouteComponentProps<any>) => (
          <NotFound {...props} />
        )} />
      </Switch>
    </Suspense>
  ) : <div>loading state...</div> // this will be a loading screen while state rehydrates
}

type routeProps = {
  Component: React.FC<any>,
  loggedIn: boolean,
  [key: string]: any
}
const PrivateRoute = ({ Component, loggedIn, ...rest }: routeProps) => (
  <Route {...rest} render={(props: RouteComponentProps<any>) => (
    loggedIn ?
      (<Component {...props} />)
      :
      (<Redirect to='/login' />)
  )} />
)

export default Navigator