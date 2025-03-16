import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'
import EventsPage from './Pages/Eventspage'
import './App.css'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/eventspage' element={<EventsPage/>}/>
      </Routes>
    </>
  )
}

export default App
