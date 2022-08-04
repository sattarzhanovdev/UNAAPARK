import React from 'react'
import './App.scss'
import { Routes, Route, Navigate } from 'react-router-dom'
import NavBar from './components/navBar'
import Filter from './components/Filter'
import Home from './pages/Home'
import Cars from './pages/Cars'
import CarsMore from './pages/СarsMore/CarsMore'
import FAQ from './pages/FAQ'
import Promo from './pages/Promo'
import Contacts from './pages/Contacts'
import Login from './pages/Login'
// import Send_Ads from './pages/Send_ads'
import SendAds from './pages/Send_ads/index'
import Anchor from './components/Anchor'
import Support from './components/Support'
import PrivateRoute from './components/Private/PrivateRoute'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Favorites from './pages/Favorites'
import AdminPanel from './pages/AdminPanel'
import ChatAdmin from './components/ChatAdmin'
import PrivateAdmin from './components/PrivateAdmin/PrivateAdmin'

function App() {

  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/auth/register' element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path='/send_ads' element={<SendAds />} />
            <Route path='/auth/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/saved' element={<Favorites />} />
          </Route>
          <Route path='/rent' element={<Promo />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/filter' element={<Filter />} />
          <Route element={<PrivateAdmin />}>
            <Route path='/admin' element={<AdminPanel />} />
          </Route>
          <Route path='/chat' element={<ChatAdmin />} />
          <Route path='/carsmore/:id' element={<CarsMore />} />
          {/* <Route path='/advantages' element={<Advantages />} /> */}
          {/* <Route path='/info' element={<Filter />} /> */}
        </Routes>
      </main>

      <Support />
      <Anchor />
    </div>

  )
}

export default App
