import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../../pages/Login'
import { useAuth } from '../../providers/useAuth'

const PrivateRoute = () => {

  const { users } = useAuth()

  return users ? <Outlet /> : <Login /> 
}

export default PrivateRoute
