import React from 'react'
import cls from './Static.module.scss'
import ProgressCircle from '../ProgressCircle/ProgressCircle'
import BetweenTitle from '../TitleForStatics/BetweenTitle'
import { useCard } from '../hooks/useCard'
import { useParams } from 'react-router-dom'





const Static = () => {

  const { base } = useCard()

  const { id } = useParams()

  const filter = base && base.filter(item => item.id === id ? item : '')
  
  console.log(base);

  return (
    <React.Fragment>
      <div className={cls.statistics}>
        <BetweenTitle color="black" />
        <div className={cls.stat_block}>
          {
            filter && filter.map(base => <ProgressCircle percentage={base.maxSpeed} article="км" />)
          }
          <p>МАХ.Скорость</p>
        </div>
        <div className={cls.stat_block}>
          {
            filter && filter.map(base => <ProgressCircle percentage={base.power} article="л.с" />)
          }
          <p>Мощность двигаетеля</p>
        </div>
        <div className={cls.stat_block}>
          {
            // <ProgressCircle percentage={43} article="л" />
            filter && filter.map(base => <ProgressCircle percentage={base.benz} article="л" />)

          }
          <p>Объем топливного бака</p>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Static
