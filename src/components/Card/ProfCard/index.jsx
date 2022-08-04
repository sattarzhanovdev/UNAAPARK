import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaEnvelope, FaUser } from 'react-icons/fa'
import { BsFillBookmarkFill } from 'react-icons/bs'
import { MdOutlineKeyboardArrowRight, MdArrowBackIosNew } from 'react-icons/md'
import { RiLogoutBoxFill } from 'react-icons/ri'
import { IoReturnUpBack } from 'react-icons/io5'
import { Link } from 'react-router-dom'

import { useAuth } from '../../../providers/useAuth'
import cls from './Profile.module.scss'
import { handleSignOut } from '../../../firebase/firebase'






const ProfileCard = () => {

  const { users } = useAuth()

  const [HEX, setHEX] = useState('')
  const navigate = useNavigate()

  useEffect(() => {

    const randomColor = '#' + Math.random().toString(16).slice(2, 8)

    setHEX(randomColor)
    if (!users) return navigate('/')
  }, [])


  const sign = () => {
    users && handleSignOut()  
    users && window.location.reload()  
  }

  return (
    <div>
      <div className={cls.container}>
        <div className={cls.profile}>
          <div className={cls.profile_info}>
            <div
              className={cls.profile_img}
              style={users && !users.photo
                ? { backgroundColor: HEX }
                : { backgroundColor: 'none' }
              }
            >
              {
                users && users.photo
                  ? <img src={users.photo} alt="avatar" />
                  : <p>{users && !users.photo && users.name[0]} </p>
              }
            </div>
            <ul className={cls.list}>
              <li>
                <FaUser />
                {users ? users.name : 'Нет имени'}
              </li>
              <li>
                <FaEnvelope />
                {users ? users.email : 'Нет почты'}
              </li>
            </ul>
          </div>
          <Link to={'/saved'} className={cls.saved}>
            <span>
              <BsFillBookmarkFill />
              Cохраненные
            </span>
            <span>
              <MdOutlineKeyboardArrowRight />
            </span>
          </Link>
          <button
            className={cls.btn}
            onClick={() => sign()}
          >
            <span>
              <p><RiLogoutBoxFill /></p>
              Выйти c аккаунта
            </span>
          </button>
          <Link to={'/'} className={cls.back}>
            <span>
              <IoReturnUpBack />
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
