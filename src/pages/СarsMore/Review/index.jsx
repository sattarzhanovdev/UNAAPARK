import React from 'react'
import { useAuth } from '../../../providers/useAuth'
import { Link } from 'react-router-dom'
import cls from './Review.module.scss'
import { API } from '../../../configs/api'
import userDefaultAva from '../../../components/images/defaultUserAvatar.png'
import { modalAlert } from '../../../components/Alerts'
import errorSound from '../../../components/sound/error.mp3'
import successSound from '../../../components/sound/success.mp3'

const Review = () => {
  const [reviews, setReviews] = React.useState('')
  const [text, setText] = React.useState('')

  const error = new Audio(errorSound)
  const success = new Audio(successSound)

  const id = localStorage.getItem('idOfCar')

  const { users } = useAuth()

  React.useEffect(() => {
    API.getReview(id)
      .then(res => {
        const result = Object.entries(res.data)
          .map(([id, item]) => {
            return {
              id: id,
              ...item
            }
          })

        setReviews(result)
      })
  }, [reviews])

  const send = () => {
    const time = new Date()

    if(text.length === 0){
      error.play()
      modalAlert.notSaved(
        'Заполните поле !',
        'Напишите что-нибудь, чтобы отправить отзыв',
        'error',
        'Оk',
      )
    }else{
      success.play()
      API.postReview(id, {
        name: users.name,
        review: text,
        times: {
          day: time.getDate(),
          month: time.getMonth(),
          year: time.getFullYear(),
          hour: time.getHours(),
          minute: time.getMinutes()
        }
      })
      modalAlert.notSaved(
        'Успешно добавлено !',
        '',
        'success',
        'Оk',
      )
    }
      
    setText('')
  }

  return (
    <div className={cls.review}>
      <h1>Отзывы</h1>
      {
        !users
          ?
          <div className={cls.review_form_with_auth}>
            <div className={cls.auth}>
              <li>
                <Link to={'/auth/login'}>
                  Войти
                </Link>
              </li>
              <span>/</span>
              <li>
                <Link to={'/auth/register'}>
                  Регистрация
                </Link>
              </li>
            </div>
          </div>
          :
          <div className={cls.addReview}>
            <input
              type="text"
              placeholder='Напишите отзыв'
              value={text}
              onChange={e => setText(e.target.value)}
            />
            <button onClick={() => send(id)}>Отправить</button>
          </div>
      }
      <div className={cls.reviews}>
        {
          reviews && reviews.map(({ name, review, times }, i) => (
            <div className={cls.reviewCard} key={i}>
              <div className={cls.reviewersInfo}>
                <div className={cls.avatar}>
                  <img src={users && users.photo ? users.photo : userDefaultAva} alt="avatar" />
                </div>
                <div className={cls.info}>
                  <i>{name}</i>

                  <div className={cls.timeInfo}>
                    <div className={cls.date}>
                      <p>{times.day < 10 ? `0${times.day}` : times.day}</p>
                      <span>/</span>
                      <p>{times.month < 10 ? `0${times.month}` : times.month}</p>
                      <span>/</span>
                      <p>{times.year}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cls.reviewText}>
                <p>{review}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Review