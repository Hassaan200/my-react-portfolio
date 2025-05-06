import { useState } from 'react'
import { Routes, Route } from 'react-router';
import './App.css'
import Home from './Components/HomePage/Home';
import Navbar from './Components/Navbar/Navbar';
import MobileNavbar from './Components/Navbar/MobileNavbar';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import 'animate.css';



function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <>
    <MobileNavbar/>
      <Navbar/>
       <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Contact" element={<Contact/>} />
      <Route path="/Projects" element={<Projects/>} />
      <Route path="/Services" element={<Services/>} />
    </Routes>
    <Footer/>
    <Toaster
  position="top-center"
  reverseOrder={false}
  toastOptions={{
    duration: 4000,
    style: {
      background: '#333',
      color: '#fff',
      fontSize: '16px',
      borderRadius: '10px',
    },
    success: {
      icon: '✅',
      style: {
        background: 'white',
        color: 'black',
      },
    },
    error: {
      icon: '❌',
      style: {
        background: 'white',
        color: 'black',
      },
    },
  }}
/>
    </>
  )
}


export default App
