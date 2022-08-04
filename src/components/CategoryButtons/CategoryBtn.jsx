import React from 'react'
import { marks } from '../utils/Marks'
import cls from './CategoryBtn.module.scss'


const CategoryBtn = () => {
    const [ category , setCategory ] = React.useState()

    React.useEffect(() => {
        localStorage.setItem('category', category)
    }, [category])

    return (
        <>
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
        </>
    )

}

export default CategoryBtn
