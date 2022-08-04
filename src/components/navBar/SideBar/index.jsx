import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { NavBar_utils } from '../../utils/navBar_utils'
import { IoMdClose } from 'react-icons/io'
import cls from './sidebar.module.scss'
import User from '../User'
import { useAuth } from '../../../providers/useAuth'
import usersDefaultAva from '../../images/defaultUserAvatar.png'

export const SideBar = ({sideActive, setSideActive}) => {

  const { users } = useAuth()

  const navigate = useNavigate()

  const sideBarActiveFalse = () => {
    setSideActive(false)
  }

  return (
    <div className={sideActive ? cls.sideBarActive : cls.sideBar}>
      <div className={cls.barsClose} onClick={() => sideBarActiveFalse()}>
        <li>
          <IoMdClose />
        </li>
      </div>
      <div className={cls.list}>
        {
          NavBar_utils.map(({id, title, path}) => (
            <li key={id} onClick={() => setSideActive(false)}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          ))
        }
      </div>
      <div className={!users ? cls.sign : cls.signNotActive}>
        <li onClick={() => sideBarActiveFalse()}>
          <Link to='/auth/login' >
            Войти
          </Link>
        </li>
        <span>/</span>
        <li onClick={() => sideBarActiveFalse()}>
          <Link to='/auth/register'>
            Регистрация
          </Link>
        </li>
      </div>
      {
        users !== null ? <div 
          className={cls.user}
          onClick={() => {
            sideBarActiveFalse()
            navigate('/profile')
          }}
        >
          <img src={users.photo ? users.photo : usersDefaultAva} alt="avatar" />
          <p>{users.name}</p>
        </div> : ''
        }
      {
        users !== null ? <User /> : ''
      }
    </div>
  )
}

export default SideBar