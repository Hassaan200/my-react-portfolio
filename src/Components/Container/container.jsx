import React from 'react'
import { NavLink } from 'react-router'
const Container = () => {
  return (
    <div className='my-component pt-0 sm:pt-20'>
      <div className=' rounded-2xl bg-gradient-to-b from-green-950 to-black border-1 border-green-950 xl:w-[80%] sm:min-w-[600px] mx-auto min-w-[250px] '>
     <div className='flex flex-wrap justify-center sm:gap-10 gap-5 items-center p-10'>
    <div>
        <img src="/public/images/coder.png" alt="" className='w-[300px] h-[270px] sm:w-[390px] sm:h-[390px] rounded-md' />
    </div>
    <div className='sm:max-w-[400px] max-w-[350px] sm:space-y-4 space-y-3 sm:text-left text-center'>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>I am a Frontend <br /> Developer</h1>
        <p className='text-xm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto consequatur sunt nihil laboriosam, esse quibusdam doloribus cum aut amet consectetur.</p>
        <div className='flex flex-wrap justify-center sm:justify-start sm:gap-8 gap-4 items-center'>
        <button className="bg-green-900  px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium ">
      <NavLink to="/">Know Me</NavLink>
    </button>
      <button className='border-1 rounded-sm cursor-pointer  px-4 py-1.5'><NavLink to="/">Download Resume</NavLink></button>
        </div>
    </div>
     </div>
      </div>
    </div>
  )
}

export default Container
