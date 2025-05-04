import { useState } from 'react'
import { Routes, Route } from 'react-router';
import './App.css'
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar';
import MobileNavbar from './Components/Navbar/MobileNavbar';

function App() {

  return (
    <>
    <MobileNavbar/>
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
