import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Appointment from './pages/Appointment'
import Profile from './pages/Profile'
import MyAppointment from './pages/MyAppointment'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Navbar />

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/doctors' element={<Doctors />} />

        <Route path='/appointment/:docId' element={<Appointment />} />

        <Route path='/about' element={<About />} />

        <Route path='/contact' element={<Contact />} />

        <Route path='/login' element={<Login />} />

        <Route path='/profile' element={<Profile />} />

        <Route
          path='/my-appointment'
          element={<MyAppointment />}
        />

      </Routes>

      <Footer />

    </div>
  )
}

export default App