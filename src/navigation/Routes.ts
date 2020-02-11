import React, { lazy } from 'react'

import Screens from '../screens'
import { role } from '../store/models/User'

type Route = {
  component: React.FC<any>,
  path: string,
  locked: boolean
  rolesAccepted: role[]
}

const Routes: Route[] = [
  {
    component: Screens.HomeScreen,
    path: '/home',
    locked: true,
    rolesAccepted: ["any"]
  },
  {
    component: Screens.LoginScreen,
    path: '/login',
    locked: false,
    rolesAccepted: ["any"]
  }
]

export default Routes