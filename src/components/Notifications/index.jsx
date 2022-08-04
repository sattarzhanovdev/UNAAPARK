import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Message } from '../../configs/api'
import cls from './Notifications.module.scss'


const Notifications = () => {
  const [chatBase, setChatBase] = React.useState(null)

  React.useEffect(() => {
    Message.getFirstMessage()
      .then(res => {
        const result = Object.values(res.data)

        const newResult = result && result.filter(item => {
          if (item.id === item.id) {
            return item
          }
        })

        setChatBase(newResult)
      })
  }, [chatBase])

  const navigate = useNavigate()

  const toChat = (id) => {
    localStorage.setItem('userId', id)
    navigate('/chat')
  }

  // const send = () => {
  //   const time = new Date()

  //   Message.post( users.id, {
  //     message: text, 
  //     answer: true,
  //     times: {
  //       hour: time.getHours(),
  //       minute: time.getMinutes()  
  //     }
  //   })
  // }

  return (
    <div className={cls.notifications}>
      {
        chatBase ? chatBase.map(({ id, name, message }, i) => (
          <div
            className={cls.message}
            onClick={() => toChat(id)}
            key={i}
          >

            <p>{name}</p>
            <p>{message}</p>
          </div>
        )) : <h1>Пусто!</h1>
      }
    </div>
  )
}

export default Notifications