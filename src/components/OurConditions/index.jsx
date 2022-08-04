import React from 'react'
import { Conditions } from './Conditions'
import cls from './Conditions.module.scss'

const OurConditions = () => {
  return (
    <div className={cls.conditions}>
      <p className={cls.heading}>Наши условия</p>
      <div className={cls.cond}>
        {
          Conditions.map(({id, title, desc}) => (
            <div className={cls.condition}>
              <h1>
                {title}
              </h1>
              <p>
                {desc}
              </p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OurConditions