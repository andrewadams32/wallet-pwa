import React, { lazy } from 'react'
import { role } from '../store/models/User'

import { RecipientScreens, SharedScreens, AdminScreens } from '../screens/index'


type Route = {
  component: React.FC<any>,
  path: string,
  locked: boolean
  rolesAccepted: role[]
}

const Routes: Route[] = [
  {
    component: RecipientScreens.HomeScreen,
    path: '/home',
    locked: true,
    rolesAccepted: ["recipient"]
  },
  {
    component: SharedScreens.LoginScreen,
    path: '/login',
    locked: false,
    rolesAccepted: ["any"]
  },
  {
    component: AdminScreens.AdminHome,
    path: '/admin',
    locked: true,
    rolesAccepted: ["admin"]
  },
  {
    component: RecipientScreens.CertificateView,
    path: '/certificate/:certID',
    locked: true,
    rolesAccepted: ["recipient"]
  }
]

export default Routes