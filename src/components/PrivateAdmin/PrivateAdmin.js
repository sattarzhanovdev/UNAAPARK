import React from 'react'
import { Outlet } from 'react-router-dom'
import LoginToAdmin from './LoginToAdmin'

const PrivateAdmin = () => {
  const email = localStorage.getItem('email')
  const password = localStorage.getItem('password')

  return email === 'admin' || password === '123' ? <Outlet /> : <LoginToAdmin error={'Неверный пароль или логин!  '} /> 
}

export default PrivateAdmin
