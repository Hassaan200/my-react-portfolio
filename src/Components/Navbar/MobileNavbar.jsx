import React from 'react'
import { NavLink } from "react-router";
import { Link } from 'react-router';
import { useState } from 'react';
import { RiMenu3Fill } from "react-icons/ri";
const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      
    <div className="border-1 border-gray-900 fixed w-full z-50 shadow-xl  bg-black text-white items-center py-4 px-6 flex justify-between  lg:hidden">
    
    <div className='flex items-center'>
          <div className="h-[40px] w-[40px] flex justify-center items-center bg-green-800 text-white rounded-full text-3xl font-bold">P</div>
          <h1 className="text-3xl font-bold">ortfolio.</h1>
        </div>

<div className="flex items-center">      

{/* Toggle Button */}
    <button
      onClick={() => setIsOpen(true)}
      className="fixed right-6 text-white  text-2xl xl:hidden"
    >
      <RiMenu3Fill />
    </button>

    {/* Overlay */}
    <div
      className={`fixed inset-0  bg-opacity-40 z-40 transition-opacity duration-300 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setIsOpen(false)}
    />

    {/* Sidebar */}
    <div
      className={`fixed top-0 left-0 h-full w-64  bg-black shadow-lg z-50 transform transition-transform duration-300 rounded-r-xl ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4 flex justify-between items-center border-b">
        <h2 className="text-lg font-semibold">Menu</h2>
        <button onClick={() => setIsOpen(false)}>✕</button>
      </div>
      <ul className="p-4 space-y-2">

      <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:scale-110 text-white  font-medium">
              <NavLink
                to="/" onClick={() => setIsOpen(false)} 
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:scale-110 text-white  font-medium">
              <NavLink
                to="/Contact" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:scale-110 text-white  font-medium">
              <NavLink
                to="/Projects" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:scale-110 text-white  font-medium">
              <NavLink
                to="/Services" onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Services
              </NavLink>
            </li>
           
            <li className='bg-gradient-to-r from-green-800 to-green-950 px-3 py-2 rounded-sm hover:scale-110 transition-all duration-300 font-medium text-center'><Link to="" onClick={() => setIsOpen(false)}>Get Resume</Link></li>
      </ul>
    </div>
   </div>
 

</div>
    
  </>
  )
}

export default MobileNavbar
