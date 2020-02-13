import React, { lazy } from 'react'

export default {
  CertificatesScreen: lazy(()=>import('./home/certificates/CertificatesScreen')),
  HomeScreen: lazy(()=>import('./home/HomeScreen'))
}