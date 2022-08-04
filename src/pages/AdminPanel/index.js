import React from 'react'
import { Link } from 'react-router-dom'
import Notifications from '../../components/Notifications'
import cls from './btns.module.scss'

const AdminPanel = () => {

  return (
    <div>
      <Notifications />
      <button className={cls.btn}>  
        <Link to={'/send_ads'} style={{'textDecoration': 'none'}}>
          Добавить машину
        </Link>
      </button>
    </div>
  )
}

export default AdminPanel