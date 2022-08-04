import React from 'react'
import cls from './Map.module.scss'

const Map = () => {
    return (
        <div>
            <div className={cls.container}>
                <h1>Aдрес:</h1>
                <iframe
                    src="https://clck.ru/rbBua"
                    className={cls.iframe}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
                <p>
                    Ул. Ленина, 316
                    Коворкинг "Ololo", 2 этаж
                    Ош, Кыргызстан
                </p>
            </div>
        </div>
    )
}

export default Map
