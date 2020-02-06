import React, { lazy } from 'react'

const Home = lazy(()=>import('../screens/home'))
const Login = lazy(()=>import('../screens/login'))

type Route = {
  component: React.FC<any>,
  path: string,
  locked: boolean
}

const Routes: Route[] = [
  {
    component: Home,
    path: '/home',
    locked: true
  },
  {
    component: Login,
    path: '/login',
    locked: false
  }
]

export default Routes