import React from 'react'
import { AuthProvider } from './AuthProvider'
import { Routes } from './Routes'

/**
* @author
* @function NavigationProviders
**/

export const NavigationProviders = (props) => {
  return(
    <AuthProvider>
      <Routes />
    </AuthProvider>
   )

 }