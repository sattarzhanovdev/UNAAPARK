import React from 'react'
import { useState } from 'react'
import Buttons from './Buttons/Buttons'
import Dot from './Dots/Dot'
import './Slider.scss'



const Slider = ({ img }) => {

  const [counter, setCounter] = useState(null)
  const [sliderindex, setSliderIndex] = useState(1)

  const imgList = Object.values(img)


  const next = () => {
    if (sliderindex !== imgList.length) {
      setSliderIndex(sliderindex + 1)
    } else if (sliderindex === imgList.length) {
      setSliderIndex(1)
    }
  }
  const prev = () => {
    if (sliderindex !== 1) {
      setSliderIndex(sliderindex - 1)
    } else if (sliderindex === 1) {
      setSliderIndex(imgList.length)
    }
  }

  return (
    <div>
      <div className="slider_parent">
        {
          Object.values(img)
            .reverse().map((url, i) => (
              <img
                className={sliderindex === i + 1 ? "slider_img active" : "slider_img"}
                src={url}
                key={i}
                alt="CAR-PHOTO" />
            ))
        }
        <div className='buttons_block'>
          <Buttons title="prev" handleSlide={prev} />
          <Buttons title="next" handleSlide={next} />
        </div>
      </div>
      <div className="dot_parrent">
        <Dot sliderindex={sliderindex} image={imgList} />
      </div>
    </div>
  )
}

export default Slider
