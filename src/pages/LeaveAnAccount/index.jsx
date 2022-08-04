import React from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebase'

const Leave = () => {
  const navigate = useNavigate()

  const leave = () => {
    auth.currentUser.delete()
    navigate('/')
    window.location.reload()
  }

  leave()

  return (
    <div>
      
    </div>
  )
}

export default Leave