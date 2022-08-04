import React from 'react'
import cls from './Banner.module.scss'
import { MdExpandMore } from 'react-icons/md'
import banner from '../../images/banner.webp'


const Banner = () => {

    const scrollToDown = () => window.scrollTo({ top: 1300, behavior: 'smooth' })

    return (
        <>
            <div className={cls.container}>
                <div className={cls.right}>
                    <div className={cls.content}>
                        <h1>Условия аренды машины в Кыргызстане</h1>
                        <p>
                            Арендовать автомобиль достаточно просто и легко. Аренда машины в Кыргызстане является доступным решением – клиент выбирает транспортное средство и оплачивает стоимость услуги.
                        </p>
                        <li onClick={scrollToDown}>
                            Вниз <MdExpandMore />
                        </li>
                    </div>
                </div>
                <div className={cls.left}>
                    <img src={banner} alt="car-image" />
                </div>
            </div>
        </>
    )
}

export default Banner
