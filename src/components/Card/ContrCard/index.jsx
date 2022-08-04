import React from 'react'
import cls from './Contract.module.scss'
import { contracts } from './ContrList'

const Contract = () => {

  return (
    <>
      <div className={cls.title}>
          <h2>Договор</h2>
      </div>
      <div className={cls.toCenter}>
        <div className={cls.contracts}>
          {
            contracts.map(({id, title, url}) => (
              <div 
                className={cls.contract} 
                key={id}  
              >
                <h3>
                  {title}
                </h3>
                <button onClick={() => {
                  window.open(url)
                }}>
                  Читать
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </>
  
  )
}

export default Contract