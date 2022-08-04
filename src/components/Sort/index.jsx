import React from 'react'
import SortSide from './SortSide'
import cls from './Sort.module.scss'
import { marks } from '../utils/Marks'
import { API } from '../../configs/api'

const Sort = () => { 
  const [ base, setBase ] = React.useState(null)
  const [ database, setDatabase ] = React.useState(null)
  const [ sortValue, setSortValue ] = React.useState('Все')
  const [ sideActive, setSideActive ] = React.useState(false)
  const [ category, setCategory ] = React.useState(null)
  
  React.useEffect(() => {
    API.get()
      .then(res => {
        const result = Object.entries(res.data)
          .map(([key, value]) => {
            return {
              id: key,
              ...value
            }
          })
        setDatabase(result)
      })


    console.log(category);
      const result = database && database.filter(item => {
        if(item.title === category){
          return item
        }
      })

      setBase(result)
      console.log(result);
    }, [category])

  return (
    <React.Fragment>
      <div className={cls.filter}>
        <div className={cls.filtration}>
          <div className={cls.container}>
                {
                  marks.map(({id, title, path }) => (
                    <button
                      className={cls.btn}
                      key={id}
                      onClick={() => {
                          setCategory(path)
                      }}
                      >
                        {title}
                    </button>
                  ))
                }
            </div>
          <div className={cls.sort}>
            <p>Сортировка: 
              <span onClick={() => setSideActive(!sideActive)}>
                {sortValue ? sortValue : setSortValue('Все')}
              </span>
            </p>
            <SortSide 
              sideActive={sideActive} 
              setSideActive={setSideActive}
              setSortValue={setSortValue}
            />
          </div>
        </div>
      </div>

    </React.Fragment>
  )
}

export default Sort