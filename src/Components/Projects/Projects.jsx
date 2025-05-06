import React from 'react'
import { NavLink } from 'react-router'

const Projects = () => {
    const projects = [
        {
        img: "/project-images/webxv.png",
        tittle: "Project 1",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
        {
        img: "/project-images/Store.png",
        tittle: "Project 2",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
        {
        img: "/project-images/z2.png",
        tittle: "Project 3",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
        {
        img: "/project-images/z2.png",
        tittle: "Project 3",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
        {
        img: "/project-images/z2.png",
        tittle: "Project 3",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
        {
        img: "/project-images/z2.png",
        tittle: "Project 3",
        description: "Lorem ipsum dolo sit amet consectetur adipisicing elit.Recusandae iusto minima ad",
        button1: "Live",
        button2: "View Code",
        },
    ]
    return (
        <div className='bg-black text-white'>
            <div className='text-center pt-32 p-10'>
                <div className=' relative' data-aos="zoom-in">

                    <h1 className='text-5xl lg:text-8xl text-white/10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 uppercase font-extrabold'>PROJECTS</h1>
                    <h1 className='sm:text-3xl lg:text-4xl text-2xl mb-20 tracking-widest font-bold text-center uppercase relative z-20'>Projects</h1>
                </div>
                <div className="flex justify-center gap-7 flex-wrap " data-aos="zoom-in">
                    {projects.map((value)=>(

                    <div className="box border-2 border-green-800 flex flex-col p-4 gap-5 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] transition-all duration-300 rounded-2xl min-w-[300px] group hover:py-5 hover:px-5">
                        <div>
                            <img src={value.img} alt="" className='w-xs h-[200px]' />
                        </div>
                        <div className='text-justify sm:w-[310px] w-[280px]'>
                            <h1 className='font-bold'>{value.tittle}</h1>
                            <p>{value.description}</p>
                        </div>
                        <div className="flex gap-6 justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:py-2">
                            <button className='border-1 rounded-md font-medium cursor-pointer  px-4 py-1'><NavLink to="/">{value.button1}</NavLink></button>
                            <button className="bg-green-900  px-4 py-1.5 rounded-sm transition-all duration-300 hover:shadow-[0_0_20px_5px_rgba(0,255,0,0.8)] hover:scale-110 text-white font-medium ">
                                <NavLink to="/">{value.button2}</NavLink>
                            </button>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
