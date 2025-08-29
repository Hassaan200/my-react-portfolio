import React from 'react'
import { NavLink } from 'react-router'

const Projects = () => {
    const projects = [
        {
            id: 1,
            img: "/project-images/zaptroo.png",
            tittle: "Zaptro Store",
            description: "React js, Context API, Clerk APIs and Authenication, Tailwind CSS, React Router.",
            live: "https://e-commerce-store-react-lovat.vercel.app/",
            code: "https://github.com/Hassaan200/E-commerce-store-react",
        },
        {
            id: 2,
            img: "/project-images/webxv.png",
            tittle: "WebXV App",
            description: "React js, Tailwind CSS, React Router, Firbase for Authentication, Flowbite and Ant Design.",
            live: "https://web-xv-app.vercel.app/",
            code: "https://github.com/Hassaan200/WebXV-App",
        },
        {
            id: 3,
            img: "/project-images/kitaab.png",
            tittle: "Book Store App",
            description: "React js, Tailwind Css, React icons, React Router, Material UI and Ant Design.",
            live: "https://book-store-app-phi.vercel.app/",
            code: "https://github.com/Hassaan200/Book-store-app",
        },
        {
            id: 4,
            img: "/project-images/z3.png",
            tittle: "Business Website Template",
            description: "React js, Tailwind Css, React icons, Material UI and Ant Design.",
            live: "https://cozweb-react.vercel.app/",
            code: "https://github.com/Hassaan200/COZWEB-React-",
        },
        {
            id: 5,
            img: "/project-images/z4.png",
            tittle: "Todo List App By React",
            description: "React js, Tailwind Css, React icons, React Router and Ant Design.",
            live: "https://todo-react-app-beta-rosy.vercel.app/",
            code: "https://github.com/Hassaan200/Todo-React-app",
        },
        {
            id: 6,
            img: "/project-images/z5.png",
            tittle: "Animated Cards Store with API",
            description: "Html, CSS, JavaScript, Fetch API and Tailwind Css.",
            live: "https://api-cards-weld.vercel.app/",
            code: "https://github.com/Hassaan200/API-Assignment",
        },
    ]
    return (
        <div className='bg-black text-white'>
            <div className='text-center pt-32 p-10'>
                <div className=' relative' data-aos="zoom-in">

                    <h1 className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold'>PROJECTS</h1>
                    <h1 className='sm:text-3xl lg:text-4xl text-2xl mb-20 tracking-widest font-bold text-center uppercase relative z-20'>Projects</h1>
                </div>
                <div className="flex justify-center gap-7 flex-wrap lg:gap-y-20" data-aos="zoom-in">
                    {projects.map((value) => (

                        <div key={value.id} className="box border-2 border-green-800 flex flex-col sm:p-4 p-2 gap-5 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] transition-all duration-400 rounded-2xl min-w-[300px] group hover:scale-105">
                            <div>
                                <img src={value.img} alt="" className='w-xs h-[170px] rounded-md' />
                            </div>
                            <div className='text-justify sm:w-[310px] w-[280px]'>
                                <h1 className='font-bold text-center'>{value.tittle}</h1>
                                <p className='text-justify'><span className='font-bold'>Tech: </span>{value.description}</p>
                            </div>
                            <div className="flex gap-6 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:py-2">
                                <a href={value.live} target='blank' className='border-1 rounded-md font-medium cursor-pointer  px-4 py-1'>Live</a>
                                <a href={value.code} target='blank' className="bg-gradient-to-r from-green-800 to-green-950  px-4 py-1.5 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium ">
                                    View Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
