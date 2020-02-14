import React, { lazy } from 'react'

export default {
  HomeScreen: lazy(()=>import('./home/HomeScreen')),
  CertificateView: lazy(()=>import('./home/certificates/CertificateView'))
}