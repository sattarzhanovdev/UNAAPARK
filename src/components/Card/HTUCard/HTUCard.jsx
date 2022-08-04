import React from 'react'
import { HTUList as list } from './HTUList'
import cls from './HTU.module.scss'
import { useEffect } from 'react'
import Loader from '../../Loader'
const HTUCard = () => {

    const [data, setData] = React.useState('')

    useEffect(() => {
        setData(list)
    }, [])

    if (data.length === 0) return <Loader />

    return (
        <>
            <div className={cls.title}>
                <h2>Как пользоваться?</h2>
            </div>
            <div className={cls.container}>
                {
                    list.map(({ id, title, desc ,desc2}) => (
                        <div className={cls.card} key={id}>
                            <div className={cls.card_title}>
                                <h3>{title}</h3>
                                <div className={cls.card_num}>
                                    <p>{id}</p>
                                </div>
                            </div>
                            <div className={cls.card_desc}>
                                <p className={cls.desc2}>{desc2 && desc2}</p>
                                <p>{desc}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default HTUCard
