import React from 'react'
import '../Slider.scss'

const Dot = ({ index, sliderindex, image }) => {



  console.log(image);
  return (
    <>
      {
        Object.values(image)
          .reverse().map((url, i) => (
            <img
              className={sliderindex === i + 1 ? "dot_img dotActive" : "dot_img"}
              src={url}
              alt="car-image"
              key={i} />
          ))
      }
    </>
  )
}

export default Dot
