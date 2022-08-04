import React from 'react'
import { Link } from 'react-router-dom';
import notImage from '../images/notCar.png'
import { API, toBase } from '../../configs/api'
import { useAuth } from '../../providers/useAuth'
import { BsBookmark } from 'react-icons/bs'
import './Cards.scss'
import Loader from '../Loader';

const FilteredCars = ({ item }) => {

	const [CarBase, setCarBase] = React.useState(null)
	// console.log(item);
	return (
		<h1>{item}</h1>
	)
	// React.useEffect(() => {
	//   API.get()
	//     .then(res => {
	//       const result = Object.entries(res.data)
	//         .map(([id, item]) => {
	//           return {
	//             id: id, 
	//             ...item
	//           }
	//         })

	//       setCarBase(result)
	//     })
	// })

	// let base = searchBase && CarBase.filter(item => 
	//   item.title.includes(searchBase.mark)
	//   && item.type.includes(searchBase.type) 
	//   && item.price.includes(searchBase.priceTo) 
	//   ?
	//   item : searchBase.type === 'Все' 
	//   && item.title.includes(searchBase.mark)
	//   && item.price.includes(searchBase.priceTo)
	//   ?
	//   item 
	// 	:
	// 	''
	// )

	// console.log(searchBase);

	// const { users } = useAuth()

	// const handleFavorite = (id) => {
	// 	const favoriteCar = CarBase && CarBase.find(item => item.id === id)

	// 	toBase.post(users.id, favoriteCar)
	// }

	// console.log(base);

	// // if (!CarBase) return <Loader />
	// // return (
	// //   <div>
	// //     <div className='card_container'>
	// // 			{
	// // 				base && base.map(({ id, title, photo, price }) => (
	// // 					<div className="cars_card" key={id}>
	// // 						<button
	// // 							className='favorites_btn'
	// // 							onClick={() => {
	// // 								handleFavorite(id)
	// // 							}}
	// // 						>
	// // 							<BsBookmark />
	// // 						</button>
	// // 						<div className="card_image">
	// // 							<img src={photo ? photo : notImage} alt={title} />
	// // 						</div>
	// // 						<div className="card_body">
	// // 							<h2>{title}</h2>
	// // 							<div className="card_price">
	// // 								<h4>Цена:</h4>
	// // 								<p>
	// // 									{price}$
	// // 									<span> / в сутки</span>
	// // 								</p>
	// // 							</div>
	// // 						</div>
	// // 						<div className="card_footer">
	// // 							<Link 
	// // 								className='card_footer_btn' 
	// // 								to={`/carsmore/${id}`}
	// // 								onClick={() => {
	// // 									localStorage.setItem('idOfCar', id)
	// // 								}}
	// // 							>Подробнее</Link>
	// // 						</div>
	// // 					</div>
	// // 				)).reverse()
	// // 			}
	// // 		</div>
	// //   </div>
	// )
}
export default FilteredCars