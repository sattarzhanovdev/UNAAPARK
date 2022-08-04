import React from 'react'
import { CategoryOfCar } from '../../utils/Category/Category'
import cls from './SortSide.module.scss'

const SortSide = ({sideActive, setSideActive,  setSortValue, setSortText}) => {

  const [ category, setCategory ] = React.useState('')

  React.useEffect(() => {
    setSortValue(category)
  }, [category])

  return (
    <div className={sideActive ? cls.sortSideActivated : cls.sortSideDisactivated}>
      {
        CategoryOfCar && CategoryOfCar.map(({id, title, route}) => (
          <div className={cls.sortSide} key={id}>
            <p onClick={() => {
              setCategory(route)
              setSideActive(!sideActive)
              setSortText(title)
            }}>{title}</p>
          </div>
        ))
      }
    </div>
  )
}

export default SortSide