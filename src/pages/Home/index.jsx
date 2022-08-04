import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer'
import HowCarsharingWorks from '../../components/Card/HowCarsharingWorks'
import OurAdvantages from '../../components/OurAdvantages'
import { useAuth } from '../../providers/useAuth'
import cls from './Home.module.scss'

const Home = () => {

  const {users} = useAuth()

  console.log(users);


  return (
    <div className={cls.home}>
      <div className={cls.banner}>
        <div className={cls.left_text}>
          <h1>
            Аренда автомобилей в <br />
            Кыргызстане
          </h1>
          <button>
            <Link to={'/auth/register'}>
              Забронировать
            </Link>
          </button>
        </div>
        <div className={cls.right_photo}>
            <img src="https://www.pikpng.com/pngl/b/237-2370341_toyota-camry-hybrid-toyota-camry-2019-colors-clipart.png" alt="" />
        </div>
      </div>
      <HowCarsharingWorks />
      <OurAdvantages />

      <Footer />
    </div>
  )
}

export default Home