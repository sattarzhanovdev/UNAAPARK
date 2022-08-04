import React from 'react'
import { MdOutlineLocationOn } from 'react-icons/md'
import { IoMdClose } from 'react-icons/io'
import cls from './filter.module.scss'

const Filter = ({modal, setModal}) => {
  return (
    <div className={modal ? cls.filter_banner : cls.notActive}>
      <div className={cls.filter}>
        <form>
          <div className={cls.close} >
            <h1 onClick={() => setModal(false)}>
              <IoMdClose />
            </h1>
          </div>
          <ul className={cls.filter_form}>
            <div className={cls.address_form}>
              <p>Место получения</p>
              <div className={cls.address_form}>
                <input type="text"  placeholder="Адрес" />
                <li><MdOutlineLocationOn /></li>
              </div>
            </div>
            <div className={cls.form_time}>
              <ul className={cls.filter_form}>
                <p>Дата</p>
                  <div className={cls.time_form}>
                    <input type="date" placeholder='00.00.00' />
                  </div>
                </ul>
                <ul className={cls.filter_form}>
                  <p>Время</p>
                  <div className={cls.time_form}>
                    <input type="time" placeholder='00:00' />
                  </div>
                </ul>
            </div>
            <p>Дата возврата</p>
            <div className={cls.form_time}>
              <ul className={cls.filter_form}>
                <p>Дата</p>
                  <div className={cls.time_form}>
                    <input type="date" placeholder='00.00.00' />
                  </div>
                </ul>
                <ul className={cls.filter_form}>
                  <p>Время</p>
                  <div className={cls.time_form}>
                    <input type="time" placeholder='00:00' />
                  </div>
                </ul>
            </div>
            <div className={cls.search_btn}>
              <button>Забронировать</button>
            </div>
          </ul>

        </form>
      </div>
    </div>
  )
}

export default Filter