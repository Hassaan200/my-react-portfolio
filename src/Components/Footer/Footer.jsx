import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-black p-5 mt-14'>
      <div className="box bg-green-950 flex flex-col lg:flex-row justify-around items-center text-white  lg:w-[80%] mx-auto rounded-3xl lg:p-14 sm:p-10 p-6 lg:gap-10 gap-7 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] transition-all duration-300 border-2 border-green-900" data-aos="zoom-in">
    <div className='leading- lg:text-justify text-center'>
        <h1 className='sm:text-4xl text-3xl font-bold'>Muhammad Hassan</h1>
        <p className='sm:text-[18px] mt-3'>hassaankhaliq45@gmail.com</p>
        <p className='sm:text-[18px]'>copyright © 2025 | Hassan</p>
    </div>
    <div>
       <div className="flex gap-8">
        <div className='bg-white p-1 text-black text-3xl rounded-md cursor-pointer'>
        <FaLinkedinIn />
        </div>
        <div className='bg-white p-1 text-black text-3xl rounded-md cursor-pointer'>
        <FaGithub />
        </div>
        <div className='bg-white p-1 text-black text-3xl rounded-md cursor-pointer'>
        <FaPhoneAlt />
        </div>
       </div>
    </div>
      </div>
    </div>
  )
}

export default Footer
