import React from 'react'
import { Advantages } from './Advantages'
import cls from './Advantages.module.scss'

const OurAdvantages = () => {
  return (
    <div className={cls.advantages}>
      <p className={cls.heading}>Наши преимущества</p>
      <div className={cls.cards}>
        {
          Advantages.map(({id, title, url, have}) => (
            <div className={cls.card} key={id}>
              <div className={cls.img}>
                <img src={url} alt="" />
              </div>
              <p className={have === false ? cls.have : ''}>{title}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurAdvantages