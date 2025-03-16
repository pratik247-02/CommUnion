import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import Eventspage from './Pages/Eventspage'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/eventspage' element={<Eventspage/>}/>
      </Routes>
    </>
  )
}

export default App
