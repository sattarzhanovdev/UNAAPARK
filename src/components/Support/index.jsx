import React from 'react'
import cls from './Support.module.scss'
import { HiOutlineChatAlt2 } from 'react-icons/hi'
import CheckingAuth from './Chat/CheckingAuth'

const Support = () => {
 
  const [ chatActive , setChatActive ] = React.useState(false)

  return (
    <>
      {
        chatActive ? 
          <CheckingAuth 
            chatActive={chatActive}
            setChatActive={setChatActive}
          />
        : 
          ''
      }
      <div 
        className={cls.support}
        onClick={() => {
          setChatActive(!chatActive)
        }}
      >
        <li>
          <HiOutlineChatAlt2 />
        </li>
      </div>
    </>
  )
}

export default Support