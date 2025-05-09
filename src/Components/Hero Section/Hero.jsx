import React from 'react'
import  { useEffect, useState } from "react";
const Counter = ({ targetNumber }) => {
    const [count, setCount] = useState(0);
    
  
    useEffect(() => {
      let start = 0;
      const duration = 2000; // 2 seconds
      const step = Math.max(Math.floor(duration / targetNumber), 10);
  
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= targetNumber) clearInterval(timer);
      }, step);
  
      return () => clearInterval(timer);
    }, [targetNumber]);
  
    return <span>{count}+</span>;
  };
  
const Hero = ({ setIsOpen }) => {
  
 


  return (
    <>
    <div className='bg-[url("/images/bg-green.png")] bg-cover bg-center w-full h-[1200px]'>

   
    <div className='flex flex-wrap xl:pt-35 lg:pt-21 md:pt-38 pt-26 justify-center items-center xl:gap-[15rem] gap-20  px-4 'data-aos="fade-up">
  <div className='lg:w-[400px] w-[320px] text-white text-center md:text-left '>
    <h1 className='text-4xl font-medium leading-relaxed font'>Hello, I'm</h1>
    <span className='sm:text-5xl text-4xl font-bold'>Muhammad Hassan</span><br />
    <p className='text-sm leading-tight mt-2'>
      I am a Front-End Developer with a strong foundation in HTML, CSS, JavaScript, and modern libraries like React.js and Tailwind CSS. With hands-on experience in building responsive, user-friendly websites.
    </p>
    <button className="bg-gradient-to-r from-green-800 to-green-950  px-4 py-2 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium mt-6 cursor-pointer" onClick={() => setIsOpen(true)}>
      Know Me
    </button>

    


    <div className="flex justify-around bg-gradient-to-b from-green-950 to-black border-2 border-green-900 rounded-xl   duration-300 md:max-w-[400px] !mt-[44px] p-4 hover:shadow-[0_0_20px_5px_rgba(0,375,0,0.8)] " ><div className="flex flex-col items-center gap-2"><p className="text-2xl font-bold"><Counter targetNumber={3} /></p><p className="text-sm">Experience</p></div><div className="flex flex-col items-center gap-2"><p className="text-2xl font-bold"><Counter targetNumber={100} /></p><p className="text-sm">Projects</p></div><div className="flex flex-col items-center gap-2"><p className="text-2xl font-bold"><Counter targetNumber={35} /></p><p className="text-sm">Clients</p></div></div>
  </div>

  <div className=' bg-black rounded-2xl w-[310px] xl:w-[360px] md:[30px] rotate-container group transition-all duration-300 md:hover:py-12 md:hover:px-4 py-5  cursor-pointer hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] '>
    <img src="/images/hero.png" alt="Hero" className='rotating-image mx-auto' />
    <img 
    src="/images/upper.png" 
    alt="Overlay" 
    className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[320px] ' 
  />
  </div>
</div>
</div>
    </>
  )
}

export default Hero
