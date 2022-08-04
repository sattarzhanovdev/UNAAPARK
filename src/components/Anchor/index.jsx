import React from 'react'
import { HiOutlineArrowCircleUp } from 'react-icons/hi'
import cls from './Anchor.module.scss'

const Anchor = () => {

	const [anchorActive, setAnchorActive] = React.useState(true)

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	window.onscroll = () => {
		if (window.scrollY > 100) {
			setAnchorActive(true)
		} else {
			setAnchorActive(false)
		}
	}


	return (
		<div
			className={anchorActive ? cls.anchor : cls.anchorNone}
			onClick={scrollToTop}
		>
			<li>
				<HiOutlineArrowCircleUp />
			</li>
		</div>
	)
}

export default Anchor