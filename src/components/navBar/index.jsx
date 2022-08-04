import React from 'react'
import cls from './navBar.module.scss'
import { GoThreeBars } from 'react-icons/go'
import { NavBar_utils } from '../utils/navBar_utils'
import { Link } from 'react-router-dom'
import { SideBar } from './SideBar'
import logo from '../images/Logo.png'
import User from './User'
import { useAuth } from '../../providers/useAuth'
import { BsBookmark } from 'react-icons/bs'
import { getSavedCars } from '../../configs/api'

const NavBar = () => {
  const [savedBase, setSavedBase] = React.useState()
  const [sideActive, setSideActive] = React.useState(false)

  const [listIndex, setListIndex] = React.useState(1)

  const { users } = useAuth()

  // const [ sideActive , setSideActive ] = React.useState(false)
  // const [ listIndex, setListIndex ] = React.useState()

  React.useEffect(() => {
    getSavedCars(users && users.id)
    .then(res => {
      const result = Object.entries(res.data)
      .map(([key, value]) => {
            return {
              id: key,
              ...value
            }
          })

        setSavedBase(result)
      })
  }, [savedBase])

  const sideBarActiveTrue = () => {
    setSideActive(true)
  }

  return (
    <>
      <div className={cls.navBar}>
        <div className={cls.logo}>
          <h2>
            <Link to='/'>
              <img src={logo} alt="" />
            </Link>
          </h2>
        </div>
        <ul className={cls.list}>
          <ul>
            {
              NavBar_utils.map(({ id, title, path }) =>
                <li
                  key={id}
                  className={id === listIndex ? cls.active : ''}
                  onClick={() => setListIndex(id)}
                >
                  <Link to={path}>{title}</Link>
                </li>)
            }
          </ul>
        </ul>

        {
          users && <div className={cls.rightNav}>
            <div className={cls.save}>
              <li>
                <Link to={'/saved'}>
                  <BsBookmark />
                </Link>
              </li>
            </div>
            <div className={cls.user}>
              {
                <User name={users.name[0]} photo={users.photo} />
              }
            </div>
          </div>
        }

        <div className={users && users ? cls.authNone : cls.auth}>
          <li>
            <Link to={'/auth/login'} >
              Войти
            </Link>
          </li>
          <span>/</span>
          <li>
            <Link to={'/auth/register'} >
              Регистрация
            </Link>
          </li>
        </div>
        <div className={cls.bars} onClick={() => sideBarActiveTrue()}>
          <li>
            <GoThreeBars />
          </li>
        </div>
      </div>
      <SideBar sideActive={sideActive} setSideActive={setSideActive} />
    </>
  )
}

export default NavBar