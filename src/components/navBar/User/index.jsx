import React from 'react'
import cls from './User.module.scss'
import { IoIosArrowDown, IoMdClose } from 'react-icons/io'
import UserDrop from './UserDrop'
import userDefaultAva from '../../images/defaultUserAvatar.png'

const User = ({ name, photo }) => {

  const [sideActive, setSideActive] = React.useState(false)

  return (
    <div>
      <div
        className={cls.userInfo}
        onClick={() => {
          setSideActive(!sideActive)
        }}
      >
        <div className={cls.person}>
          {
            photo 
            ? <img src={photo} alt="" /> 
            : name
          }
        </div>
        <li className={sideActive ? cls.rotated : cls.default}>
          <IoIosArrowDown />
        </li>
      </div>
      <UserDrop name={name} sideActive={sideActive} setSideActive={setSideActive} />
    </div>
  )
}

export default User