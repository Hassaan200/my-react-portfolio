import React from 'react'
import { NavLink } from 'react-router'

const Services = () => {
  return (
    <div className='bg-[url("/images/service-pic.png")] bg-cover bg-center text-white'>
      <div className='flex flex-wrap pt-30 p-8 justify-center items-center gap-20  '>
       <div className='sm:max-w-[400px] max-w-[350px] sm:space-y-4 space-y-3 flex flex-col justify-center sm:text-left text-center' data-aos="fade-right">
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Services</h1>
        <p className='text-xm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eaque temporibus esse omnis exercitationem cum delectus distinctio. Vel, ea. Dolore rerum nesciunt error aspernatur libero doloremque amet quibusdam ab similique!</p>
        <div className='flex flex-wrap justify-center sm:justify-start sm:gap-8 gap-4 items-center'>
        <button className="bg-gradient-to-r from-green-800 to-green-950  px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium ">
      <NavLink to="/">Know Me</NavLink>
    </button>
      <button className='border-1 border-gray-400 rounded-sm cursor-pointer  px-4 py-1.5'><NavLink to="/">Download Resume</NavLink></button>
        </div>
       </div>
      <div className='grid grid-rows-2 gap-4 lg:grid-cols-2 sm:grid-rows-1'>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-10" data-aos="fade-down">

        <div className='bg-white w-fit text-red-600 p-1.5 rounded-full'>

        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Pen"><path d="M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z"></path></g></svg>

        </div>
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-10" data-aos="fade-down">
        <div className='bg-white w-fit text-red-600 p-1.5 rounded-full'>

        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Pen"><path d="M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z"></path></g></svg>

        </div>
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
        <div className="box flex flex-col bg-white/20 backdrop-blur-sm rounded-xl gap-4 justify-center w-[250px] p-5 py-10" data-aos="fade-down">
        <div className='bg-white w-fit text-red-600 p-1.5 rounded-full'>

        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-3xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g id="Pen"><path d="M20.235,11.284a2.3,2.3,0,0,0-3.01-.149L15.444,5.744a2.484,2.484,0,0,0-2.1-1.7l-8.581-.93A1.5,1.5,0,0,0,3.115,4.765l.93,8.579a2.479,2.479,0,0,0,1.7,2.1l5.39,1.77a2.258,2.258,0,0,0-.51,1.43,2.257,2.257,0,0,0,2.25,2.25,2.263,2.263,0,0,0,1.591-.661l5.77-5.769a2.249,2.249,0,0,0,0-3.181Zm-14.18,3.21a1.5,1.5,0,0,1-1.02-1.26l-.9-8.39,4.01,4.01a1.188,1.188,0,0,0,.281,1.221,1.167,1.167,0,1,0,1.649-1.651,1.143,1.143,0,0,0-1.209-.269l-4.02-4.02,8.39.9a1.476,1.476,0,0,1,1.259,1.02l1.931,5.86-4.51,4.51Zm11.709-2.51a1.25,1.25,0,0,1,2.13.891,1.237,1.237,0,0,1-.369.88l-5.771,5.77a1.277,1.277,0,0,1-1.769,0,1.253,1.253,0,0,1,0-1.76Z"></path></g></svg>

        </div>
          <h1 className='text-3xl font-bold'>Website Development</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem!</p>

        </div>
      </div>
       
      </div>
      
    </div>
  )
}

export default Services
