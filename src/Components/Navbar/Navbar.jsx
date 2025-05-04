import React from 'react'
import { Link } from 'react-router'
import { NavLink } from 'react-router';
const Navbar = () => {
  return (
    <>
      <div className='lg:flex justify-around gap-25 bg-black text-white items-center h-20 hidden fixed w-full top-0 z-50 shadow-xl '>
        <div className='flex items-center'>
          <div className="h-[40px] w-[40px] flex justify-center items-center bg-green-800 text-white rounded-full text-3xl font-bold">P</div>
          <h1 className="text-3xl font-bold">ortfolio.</h1>
        </div>
        <div className=''>
          <ul className='flex gap-8 text-xl'>

            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white  font-medium">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600 hover:text-white' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white  font-medium">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600 hover:text-white' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white  font-medium">
              <NavLink
                to="/Projects"
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600 hover:text-white' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="hover:bg-green-800 px-3 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white  font-medium">
              <NavLink
                to="/Services"
                className={({ isActive }) =>
                  `${isActive ? 'text-green-600 hover:text-white' : 'text-white'
                  } hover:scale-110 transition-all duration-300`
                }
              >
                Services
              </NavLink>
            </li>
           
            <li className='bg-green-800 px-3 py-2 rounded-sm hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 transition-all duration-300 font-medium'><Link to="">Get Resume</Link></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
