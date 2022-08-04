import React from 'react'
import { useState } from 'react'
import Card from '../Card/CarCards/Card'
import { useCard } from '../hooks/useCard'
import cls from './Cars.module.scss'
import { marks } from '../utils/Marks'

const Carss = () => {

  const { base } = useCard()

  const [mark, setMark] = useState('')


  const [database, setDatabase] = React.useState(null)
  const [category, setCategory] = React.useState(null)

  // React.useEffect(() => {
  //   console.log(category);
  //   // const result = base && base.filter(item => {
  //   //   if (item.title === category) {
  //   //     return item
  //   //   }
  //   // })

  //   setDatabase(result)
  //   console.log(result);
  // }, [category])

  const filteredCars = base?.filter(car => {
    return car.model?.toLowerCase().includes(mark.toLowerCase()) || car.mark?.toLowerCase().includes(mark.toLowerCase())
  })

  // const sortCars = base?.sort((a, b) => a - b)

  return (
    <div className={cls.filterToCenter}>
      <div className={cls.filter}>
        <div className={cls.selectBox}>
          <select onChange={e => setMark(e.target.value)}>
            <option selected disabled>Фильтрация по маркам</option>
            <option value="">Все</option>
            <option value="Toyota">Тoyota</option>
            <option value="Honda">Honda</option>
            <option value="BMW">BMW</option>
            <option value="Lexus">Lexus</option>
            <option value="Kia">KIA</option>
            <option value="Kia">Shkoda</option>
          </select>
        </div>
        <div className={cls.filterForm}>
          <input
            type="text"
            placeholder='Марка машины...'
            onChange={e => setMark(e.target.value)}
            className={cls.searchInput}
          />
        </div>
      </div>
      <div className={cls.filter_block}>
        {
          <Card
            base={base}
            filteredCars={filteredCars}
          // filteredWithMark={database}
          />
        }
      </div>
    </div>
  )

}

export default Carss