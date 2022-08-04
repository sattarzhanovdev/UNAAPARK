import React from 'react'
import { getSavedCars, removeSavedCar } from '../../configs/api'
import { useAuth } from '../../providers/useAuth'
import { MdClose } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import notImage from '../../components/images/notCar.png'
import cls from './Favorites.module.scss'
import { BsArrowLeftShort } from 'react-icons/bs'
import { modalAlert } from '../../components/Alerts'



const Favorites = () => {
	const [base, setBase] = React.useState(null)
	const { users } = useAuth()

	const navigate = useNavigate()

	const getCartBase = () => {
		getSavedCars(users && users.id)
			.then(res => {
				if (res.data) {
					const baseWithID = Object.entries(res.data).map(([id, item]) => {
						return {
							id,
							...item
						}
					})
					setBase(baseWithID)
				}
			})
	}

	React.useEffect(() => {
		getCartBase()
	}, [])



	console.log(base);

	const handleRemoveCar = (id) => {
		modalAlert.isSaved('Успешно удалено !', 'success')
		removeSavedCar(users.id, id).then(() => {
			getCartBase()
		})
	}

	return (
		<React.Fragment>
			{
				base ? <div className={cls.savedCars}>
					<h1>Ваши сохраненные машины</h1>
					<div className='card_container'>
						{
							base && base.map(({ id, title, year, model, photo, price }, index) => (
								<div to={`/carsmore/${id}`} className="cars_card" key={id}>
									<div className="card_body">
										<div className="card_img">
											<Link to={`/carsmore/${id}`}>
												<img src={photo.url ? photo.url : notImage} alt={title} />
											</Link>
										</div>
										<div className='card_title'>
											<button
												className='favorites_btn1'
												onClick={e => {
													e.preventDefault()
													handleRemoveCar(id)
												}}
											>
												<MdClose />
											</button>
											<h1>{title}</h1>
											<h2>{model}</h2>
											<h4>{year}</h4>
											<h4>{price} $ в сутки</h4>
										</div>
									</div>
									<div className="card_footer">
										<Link className='card_footer_btn' to={`/carsmore/${id}`}>Детали</Link>
										<button
											className='card_footer_btn'
											onClick={() => {
												window.open('https://t.me/sattarzanov')
											}}
										>
											Забронировать
										</button>
									</div>
								</div>
							)).reverse()
						}
					</div>
				</div>
					:
					<div className={cls.savesIsHavent}>
						<h3>
							Закладок нет!
						</h3>
						<p>Вероятнее всего, вы ничего не добавляли в закладки</p>

						<button onClick={() => navigate('/cars')}>
							<BsArrowLeftShort />
							Вернуться назад
						</button>
					</div>
			}
		</React.Fragment>
	)
}

export default Favorites