import React from 'react'
import cls from './howWorks.module.scss'
import { steps_list } from './lists'

const HowCarsharingWorks = () => {

  const [ num, setNum ] = React.useState(1)

  return (
    <div className={cls.howCarsharingWorks}>
      <p className={cls.heading}>Как работает каршеринг</p>
      
      <div className={cls.toCenter}>
        <div className={cls.steps}>
          {
            steps_list.map(({id, title}) => (
              <div className={cls.res} key={id}>
                <div className={num === id ? cls.circleActive : cls.circle} onClick={() => setNum(id)}>
                  <p>
                    {title}
                  </p>
                </div>
                <span className={id === 5 ? cls.none : ''}></span>
              </div>
            ))
          }
        </div>
      </div>
      <div className={cls.desc}>
        {
          steps_list.map(({id, heading, desc}) => (
            <div key={id}>
              <h1>{id === num ? heading : ''}</h1>
              <p>{id === num ? desc : ''}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default HowCarsharingWorks