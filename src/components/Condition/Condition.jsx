import React from 'react'
import { useParams } from 'react-router-dom'
import cls from './Condition.module.scss'
import { ConList, ConList2 as base } from './ConList'
const Condition = () => {

    const data = base.filter(item => item.id == 1)
    const data2 = base.filter(item => item.id == 2)

    return (
        <>
            <div className={cls.container}>
                <div className={cls.condition}>
                    {
                        data.map(({ id, text, image }) => (
                            <div className={cls.card2} key={id}>
                                <div className={cls.text}>
                                    <p>{text}</p>
                                </div>
                                <div className={cls.img}>
                                    <img src={image} alt="car-image" />
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={cls.title}>
                    <h1>Что нужно для аренды авто в Кыргызстане?</h1>
                    <div className={cls.title_desc}>
                        <p>
                            Если вы решили взять машину на сутки или на более длительный срок в нашем автопарке, то для этого есть несколько требований:
                        </p>
                    </div>
                </div>
                <div className={cls.content}>
                    {
                        ConList.map(({ id, title, url }) => (
                            <div className={cls.card} key={id}>
                                <div className={cls.image}>
                                    <img src={url} alt="" />
                                </div>
                                <p>{title}</p>
                            </div>
                        ))
                    }
                </div>
                <div className={cls.condition}>
                    {
                        data2.map(({ id, text, image }) => (
                            <div className={cls.card2} key={id}>
                                <div className={cls.text}>
                                    <p>{text}</p>
                                </div>
                                <div className={cls.img}>
                                    <img src={image} alt="car-image" />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Condition
