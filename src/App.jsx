import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Beercard from './Components/Beercard'
import Home from './Components/Home'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Faveratebeer from './Components/Faveratebeer'



function App() {
  return (
    <>
      <div className='container-fluid'>
          <Navbar />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favourite' element={<Faveratebeer />} />
              </Routes>
          <Footer />
      </div>
    </>
  )
}

export default App
