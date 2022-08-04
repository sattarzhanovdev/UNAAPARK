import React from 'react'
import cls from './Loader.module.css'

const Loader = () => {
  return (
    <div className={cls.container}>
      <div className={cls.loader}></div>
    </div>
  )
}

export default Loader