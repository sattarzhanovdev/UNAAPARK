import React from 'react'
import cls from './FAQ.module.scss'
import { FAQ_list as list} from './FAQ_list/FAQ_list'
import { IoIosArrowDown } from 'react-icons/io'

const FAQCard = () => {

  const [ active, setActive ] = React.useState(false)
  const [ num, setNum ] = React.useState(0)


  return (
    <div>
       <div className={cls.FAQ}>
      <div className={cls.title}>
        <h2>
          Вопросы и ответы
        </h2>
      </div>
      <div className={cls.toCenter}>
        <h1 className={cls.heading}>Аренда и пользование автомобилем</h1>
        {
          list.map(({id, title, desc}) => (
            <div className={cls.faq_card} key={id} >
              <div 
                className={cls.startView} 
                onClick={() => {
                  setNum(id)
                  setActive(!active)
                }}
              >
                <h1 className={id === num && active ? cls.newColor : ''}>
                  {title}
                </h1>
                <div>
                  <li className={id === num && active ? cls.rotated : ''}>
                    <IoIosArrowDown />
                  </li>
                </div>
              </div>
              <div className={ id === num && active ? cls.accordeonActive : cls.accordeon }>
                <p>{desc}</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
    </div>
  )
}

export default FAQCard
