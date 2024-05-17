import React from 'react'
import Login from './components/Login'
import Home from './components/Home'
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className='w-full h-screen'>
       <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
   
  )
}

export default App