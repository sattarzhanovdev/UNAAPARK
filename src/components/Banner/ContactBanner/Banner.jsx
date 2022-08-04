import React from 'react'
import banner from '../../images/contactBanner.png'
import cls from './Banner.module.scss'
import { MdExpandMore } from 'react-icons/md'
const Banner = () => {

    const scrollToDown = () => window.scrollTo({ top: 770, behavior: 'smooth' })

    return (
        <React.Fragment>
            <div className={cls.container}>
                <div className={cls.right}>
                    <div className={cls.content}>
                        <h1>Cвяжитесь с нами</h1>
                        <p>
                            Офис открыт ежедневно с 09: 00 до 18: 00, семь дней в неделю
                            Доставка автомобиля по предварительному заказу 24/7
                            круглосуточная поддержка клиентов
                        </p>
                        <li onClick={scrollToDown}>
                            <MdExpandMore /> Cвязаться
                        </li>
                    </div>
                </div>
                <div className={cls.left}>
                    <img src={banner} alt="car-image" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default Banner
