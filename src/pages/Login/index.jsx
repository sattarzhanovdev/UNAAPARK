import React from 'react'
import cls from '../Register/login.module.scss'
import EmailLogin from './EmailLogin/EmailLogin'
import { useAuth } from '../../providers/useAuth'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/Loader'

const Login = () => {

  const { users, loading } = useAuth()

  const navigate = useNavigate()

  React.useEffect(() => {
      users && navigate('/')
  }, [users, navigate])

  console.log(users);

  if (loading) return <Loader />
  
  
  return (
    <div className={cls.login}>
      <EmailLogin/>
    </div>

  )
}

export default Login