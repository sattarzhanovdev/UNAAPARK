import React from 'react'
import { useAuth } from '../../../providers/useAuth'
import CheckingAuth from './CheckingAuth'
import SupportChat from './supportChat'

const SupportChats = ({ chatActive , setChatActive }) => {
  const { users } = useAuth()
  
  return (
    <>
      {
        users ? 
        <CheckingAuth 
          chatActive={chatActive} 
          setChatActive={setChatActive} 
        />  
        : 
        <SupportChat 
          chatActive={chatActive} 
          setChatActive={setChatActive} 
        />
      }
    </>
  )
}

export default SupportChats