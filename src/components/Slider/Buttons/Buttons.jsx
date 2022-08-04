import React from 'react'
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md'
import '../Slider.scss'


const Buttons = ({ title, handleSlide }) => {
  return (
    <>
      {
        title === 'prev'
          ? <button className="slider_btn" onClick={handleSlide}> <MdOutlineNavigateBefore /> </button>
          : <button className="slider_btn" onClick={handleSlide}> <MdOutlineNavigateNext /> </button>
      }

    </>
  )
}

export default Buttons
