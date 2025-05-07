import React from 'react'
import Hero from '../Hero Section/Hero'
import Container from '../Container/container'
import Services from '../Services/Services'
import Projects from '../Projects/Projects'
import Contact from '../Contact/Contact'
import { useState, useEffect } from 'react'

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);


  return (
   <>
   {/* Modal Section starts here */}

{isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm bg-opacity-50 flex justify-center items-center text-white transition-opacity duration-300 ease-in-out">
          {/* Modal content */}
          <div className="bg-gradient-to-r from-green-800 to-green-950 text-white p-6 rounded-lg w-full max-w-md mx-4 shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">👋 Get to Know Me</h2>
            <p className="text-white font-medium">
              I'm a frontend developer passionate about building beautiful and functional user experiences with React, Tailwind CSS, and JavaScript. I love solving problems, learning new things, and turning ideas into real apps.
            </p>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 bg-gray-200 text-black px-3 py-1 rounded hover:bg-gray-400 transition-all cursor-pointer font-medium duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* Modal Section ends here */}


   <Hero setIsOpen={setIsOpen}/>
   <Container setIsOpen={setIsOpen}/>
   <Services setIsOpen={setIsOpen}/>
   <Projects/>
   <Contact/>
   </>
  )
}

export default Home
