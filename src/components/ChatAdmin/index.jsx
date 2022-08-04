import React from 'react'
import { Message } from '../../configs/api'
import cls from './ChatAdmin.module.scss'
import { RiSendPlaneFill } from 'react-icons/ri'
import { modalAlert } from '../Alerts'


const ChatAdmin = () => {
  const id = localStorage.getItem('userId')
  const [ chatBase, setChatBase ] = React.useState(null)
  const [ text, setText ] = React.useState('')

  React.useEffect(() => {
    Message.get(id)
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id: id, 
              ...item
            }
          })
          
        setChatBase(result)
      })
  }, [chatBase])

  const send = () => {
    const time = new Date()

    text.length === 0 ? modalAlert.emptyArea() : Message.post(id, {
      message: text.length < 0 ? alert('Напишите что-нибудь') : text, 
      answer: true,
      times: {
        hour: time.getHours(),
        minute: time.getMinutes()  
      }
    })

    setText('')
  }

  return (
    <div className={cls.toCenter}>
      <div className={cls.support}>
        <div className={cls.support_head}>
          <div className={cls.left}>
            <img src="https://prosystems.kz/templates/template_name/images/pfr/its.png" alt="" />
            <p>Служба поддержки</p>
          </div>
        </div>
        <div 
          className={cls.chat_container}
        >
          <div className={cls.myMessages}>
            {

              chatBase !== null ? chatBase.map(({ name, message, answer, times }, i) => (
                <div 
                  className={ answer ? cls.messageContainer : cls.answerContainer} 
                  key={i}
                >
                  <div 
                    className={answer ? cls.myMessage : cls.answer}
                  >              
                  <div className={cls.mess}>
                      <i>{answer ? 'Служба поддержки' : name}</i>
                      <p>{message}</p>
                    </div>
                    <div className={cls.time}>
                      <p>{times.hour}:{times.minute}</p>
                    </div>
                  </div>
                </div> 
              )) : ''
            } 
          </div>
        </div>
        <div 
          className={cls.send_container}
        >
          <input  
            type="text"  
            placeholder='Ваше сообщение'
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
  )
}

export default ChatAdmin