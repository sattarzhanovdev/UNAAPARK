import React from 'react'
import { Message } from '../../../../configs/api'
import { useAuth } from '../../../../providers/useAuth'
import cls from './FirstMessage.module.scss'
import { IoMdClose } from 'react-icons/io'
import { RiSendPlaneFill } from 'react-icons/ri'
import SupportChat from '../supportChat'

const FirstMessage = ({ setChatActive }) => {
  const [ database, setDataBase ] = React.useState(null)
  const [ text, setText ] = React.useState('')
  const [ supportActive , setSupportActive ] = React.useState(false)
  
  const { users } = useAuth()

  React.useEffect(() => {
    Message.postFirstMessage (users.id) 
      .then(res => {
        const result = Object.entries(res.data !== null ? res.data : '')
          .map(([key, value]) => {
            return {
              id: key, 
              ...value
            }
          })
        setDataBase(result);
      })

  }, [database])


  const send = () => {
    setSupportActive(!supportActive)

    localStorage.setItem('supportActive', supportActive)

    const time = new Date()

    localStorage.setItem('supportActive', supportActive)

    Message.post(users.id, {
      id: users.id,
      name: users.name,
      message: text.length < 0 ? alert('Напишите что-нибудь') : text, 
      answer: false,
      times: {
        hour: time.getHours(),
        minute: time.getMinutes()  
      }
    })

    setText('')

    
  }

  return (
    <React.Fragment>

      {
        supportActive ? <SupportChat setChatActive={setChatActive} /> : <div className={cls.support}>
        <div className={cls.support_head}>
          <div className={cls.left}>
            <img src="https://prosystems.kz/templates/template_name/images/pfr/its.png" alt="" />
            <p>Служба поддержки</p>
          </div>
          <div className={cls.right}>
            <li onClick={() => setChatActive(false)}>
              <IoMdClose />
            </li>
          </div>
          </div>
          <div 
            className={cls.chat_container}
          >
            <div 
              className={cls.send_container}
            >
              <div className={cls.send_form}>
                <input  
                  type="text"  
                  placeholder='Ваше первое сообщение'
                  value={text}
                  onChange={e => {
                    setText(e.target.value)
                  }}
                />
                <li onClick={e => {
                  e.preventDefault()
                  send()
                }}>
                  <RiSendPlaneFill />
                </li>
              </div>
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

export default FirstMessage