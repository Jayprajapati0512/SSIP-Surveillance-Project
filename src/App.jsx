/* eslint-disable no-unused-vars */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import PastIncidents from './components/PastIncidents'
import Settings from './components/Settings'
import Login from './components/Login'
import Footer from "./components/Footer";
const App = () => {
  
  return (
    <div className=' bg-[url("https://img.freepik.com/premium-photo/cctv-security-online-camera-indoor_117856-2629.jpg")] bg-cover bg-center h-screen overflow-x-hidden'>
     <Navbar />
     <Routes> 
      <Route path='/' element={<Home />} />
      <Route path='/past incidents' element={<PastIncidents  />} />
      <Route path='/settings' element={<Settings  />} />
      <Route path='/login' element={<Login  />} />
      
     </Routes>
     <Footer />
    </div>
  )
}

export default App