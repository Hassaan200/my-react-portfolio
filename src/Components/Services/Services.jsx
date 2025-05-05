import React from 'react'
import { NavLink } from 'react-router'

const Services = () => {
  return (
    <div className='bg-[url("/images/service-pic.png")] bg-cover bg-center text-white'>
      <div className='flex flex-wrap pt-20 p-8 justify-center items-center gap-20  '>
       <div className='sm:max-w-[400px] max-w-[350px] sm:space-y-4 space-y-3 flex flex-col justify-center sm:text-left text-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Services</h1>
        <p className='text-xm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eaque temporibus esse omnis exercitationem cum delectus distinctio. Vel, ea. Dolore rerum nesciunt error aspernatur libero doloremque amet quibusdam ab similique!</p>
        <div className='flex flex-wrap justify-center sm:justify-start sm:gap-8 gap-4 items-center'>
        <button className="bg-green-900  px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium ">
      <NavLink to="/">Know Me</NavLink>
    </button>
      <button className='border-1 rounded-sm cursor-pointer  px-4 py-1.5'><NavLink to="/">Download Resume</NavLink></button>
        </div>
       </div>
      <div className='grid grid-rows-2 gap-4 lg:grid-cols-2 sm:grid-rows-1'>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-13">
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-13">
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-13">
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
      </div>
       
      </div>
      
    </div>
  )
}

export default Services
