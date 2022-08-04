import React from 'react'
import cls from './Card.module.scss'
import { contactList } from './ContactList'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { IoLogoWhatsapp } from 'react-icons/io'

const ContactCard = () => {
	return (
		<React.Fragment>
			<div className={cls.container}>
				<div className={cls.card}>
					{
						contactList.map(({ id, name, image, desc, number, gmail, whats }) => (
							<div className={cls.content} key={id}>
								<div className={cls.top}>
									<div className={cls.image}>
										<img src={image} alt="" />
									</div>
									<div className={cls.title}>
										<h2>{name}</h2>
										<p>{desc}</p>
									</div>
								</div>
								<div className={cls.bottom}>
									<ul className={cls.list}>
										<a href='tel: 0700923082'>
											<span> <BsFillTelephoneFill /></span>
											<p>{number}</p>
										</a>

										<a href='mailto:user@gmail.com'>
											<span> <SiGmail /></span>
											<p>{gmail}</p>
										</a>
										<a>
											<span> <IoLogoWhatsapp /></span>
											<p>{whats}</p>
										</a>
									</ul>

								</div>
							</div>
						))
					}
				</div>
			</div>
		</React.Fragment>
	)
}

export default ContactCard
