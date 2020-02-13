import React, { lazy } from 'react'

export default {
  AdminHome: lazy(()=>import('./admin-routes/AdminRoutes')),
  InstitutesScreen: lazy(()=>import('./institutes/InstitutesScreen'))
}