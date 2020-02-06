import React, { lazy } from 'react'

import Screens from '../screens'
type Route = {
  component: React.FC<any>,
  path: string,
  locked: boolean
}

const Routes: Route[] = [
  {
    component: Screens.HomeScreen,
    path: '/home',
    locked: true
  },
  {
    component: Screens.LoginScreen,
    path: '/login',
    locked: false
  }
]

export default Routes