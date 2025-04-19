"use client"
import React,{useState} from 'react'



import {motion} from "framer-motion"
import {Swiper,SwiperSlide}from 'swiper/react'
import "swiper/css";

import {BsArrowUpRight,BsGithub } from "react-icons/bs"

import { Tooltip ,TooltipContent, TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';


import Link from 'next/link';
import Image from 'next/image';
import { WorkSliderBtns } from '@/components/WorkSliderBtns';



const projects =[
  {
    num:'01',
    category:'fullstack',
    tittle:'project 1',
    description:"Prestige Motors is a premium car rental platform that allows users to book luxury vehicles with ease. It features a sleek interface, real-time availability, and secure payment options.",
    stack:[{name:"Html5"},{name:"TailwindCss"},{name:"Javascript"},{name:"React"},{name:"Asp.Net Core"},{name:"SQL Server"}],
    image:'/assets/work/thumb1.png',
    live:"",
    github:"https://github.com/aminemanssouri/PM"
  },
  {
    num:'02',
    category:'API',
    tittle:'project 2',
    description:"A RESTful API built with the MERN stack to manage real estate listings, allowing users to create, read, update, and delete property data with secure MongoDB storage and Express routing.",
    stack:[{name:"REACT"},{name:"Postman"},{name:"Rest API"},{name:"Express"},{name:"Node"},{name:"Javascript"},{name:"TailwindCss"},{name:"Mangodb"}],
    image:'/assets/work/thumb3.png',
    live:"",
    github:"https://github.com/aminemanssouri/Ejar"
  },
  {
    num:'03',
    category:'fullstack desktop App',
    tittle:'project 3',
    description:"A desktop-based License Management System developed using .NET and Windows Forms, connected to a SQL Server database to handle license creation, tracking, and expiration management for software or services.",
    stack:[{name:".NET"},{name:"Windows Form"},{name:" SQL Server"},{name:"ADO.NET"},{name:"C#"}],
    image:'/assets/work/thumb2.png',
    live:"",
    github:"https://github.com/aminemanssouri/Ejar"
  },
]


const Work = () => {
  const [project,setProject]=useState(projects[0])


const handleSlideChange=(swiper)=>{

  const currentIndex=swiper.activeIndex;
  setProject(projects[currentIndex]);

}

  return (
    <motion.section 
    initial={{opacity:0}}
     animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}} 

    className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
           <div className="flex flex-col gap-[30px]">
           <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
              {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-accent group-hover:text-accent transition-all duration-500 capitalize">
              {project.category} project
            </h2>

            <p className="text-accent">{project.description}</p>

            <ul className="flex flex-wrap gap-4 overflow-x-auto">
              {project.stack.map((item,index)=>{
                return <li key={index} className="text-xl text-accent whitespace-nowrap">
                  {item.name}
                  {index !== project.stack.length - 1 && ","}
                </li>
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                    <BsArrowUpRight className="text-accent text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Live Project
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>

              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                    <BsGithub className="text-accent text-3xl group-hover:text-[#E6D2C0]"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Github repository
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
           </div>

          </div>
          <div className="w-full xl:w-[50%]">

            <Swiper 
            spaceBetween={30} 
            slidesPerView={1}
             className="xl:h-[520px] mb-12"
             onSlideChange={handleSlideChange}
             >
              {projects.map((project,index)=>{
                return <SwiperSlide key={index} className='w-full'>
                  <div className="h-[460px] relative group flex justify-center
                  items-center bg-pink-50/20">
                    {/*overlay*/}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill alt='' className="object-cover"/>
                    </div>
                  </div>
                </SwiperSlide>
              })}

              {/*button*/}

              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "/>
            </Swiper>

          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work