import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar_utils } from '../utils/navBar_utils'
import cls from './footer.module.scss'
import logo from '../images/Logo.png'

const Footer = () => {
  return (
    <div className={cls.footer}>
      <div className={cls.logo}>
        <img src={logo} alt="" />
      </div>
      <div className={cls.list}>
        {
          NavBar_utils.map(({ id, title, path }) => (
            <li key={id}>
              <Link to={path}>
                {title}
              </Link>
            </li>
          ))
        }
      </div>
    </div>
  )
}

export default Footer