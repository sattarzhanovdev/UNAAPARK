// import React, { useEffect, useMemo, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import Card from '../../components/Card/Card'
// import CategoryBtn from '../../components/CategoryButtons/CategoryBtn'
// import { CarBase } from '../../components/utils/CarBase/CarBase'

// const Category = () => {

//     const { category } = useParams()

//     const [data, setData] = useState(null)

//     const filterBase = () => {
//         if (!category) {
//             return CarBase
//         }

//         return CarBase.filter(car => car.category === category)
//     }

//     useEffect(() => {
//         setData(CarBase)
//     }, [])

//     const filteredCars = useMemo(filterBase, [category, data])


//     if (!data) return <h1>Loading...</h1>
//     return (
//         <div className='card_container'>
//             {
//                 <Card CarBase={filteredCars}/>
//             }
//         </div>
//     )
// }

// export default Category