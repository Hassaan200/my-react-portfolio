import React from 'react'
import { MdOutlineFileDownload } from "react-icons/md";

const Container = ({ setIsOpen }) => {
  return (
    <div className='my-component pt-0 sm:pt-20'>
      <div className=' rounded-2xl bg-gradient-to-b from-green-950 to-black border-1 border-green-950 xl:w-[80%] sm:min-w-[600px] mx-auto min-w-[250px] ' data-aos="fade-up">
     <div className='flex flex-wrap justify-center sm:gap-10 gap-5 items-center p-10'>
    <div data-aos="fade-right">
        <img src="/images/coder.png" alt="" className='w-[300px] h-[270px] sm:w-[390px] sm:h-[390px] rounded-md' />
    </div>
    <div className='sm:max-w-[400px] max-w-[350px] sm:space-y-4 space-y-3 sm:text-left text-center' data-aos="zoom-in">
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>I am a Full Stack Developer</h1>
        <p className='text-xm'>Full Stack Developer skilled in React.js, Vue.js, Tailwind CSS, Node.js, Express.js, MySQL/MariaDB, and MongoDB, with experience building responsive front-end interfaces and scalable back-end systems.</p>
        <div className='flex flex-wrap justify-center sm:justify-start sm:gap-8 gap-4 items-center mt-5'>
          <div>
        <button className="bg-gradient-to-r from-green-800 to-green-950  px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium  cursor-pointer " onClick={() => setIsOpen(true)}>
      Know Me
    </button>
          </div>
          <div>
      <a href="/My Resume.pdf" download="My_Resume.pdf" className='border-1 rounded-sm cursor-pointer  px-4 py-2  items-center flex'><MdOutlineFileDownload className='text-xl '/>Download Resume</a>
          </div>
        </div>
    </div>
     </div>
      </div>
    </div>
  )
}

export default Container
