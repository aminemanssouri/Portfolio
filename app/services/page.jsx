"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import {BsArrowDownRight} from "react-icons/bs";





const services=[
  {
    num:'01',
    title:'Web Development',
    description:'Comprehensive web solutions using modern technologies and best practices.',
    href:""
  },
  {
    num:'02',
    title:'Frontend Development',
    description:'Creating responsive and interactive user interfaces using React.js and Tailwind CSS.',
    href:""
  },
  {
    num:'03',
    title:'Backend Development',
    description:'Building robust server-side applications with Asp.Net and Express.js and SQL databases.',
    href:""
  },
  {
    num:'04',
    title:'Full Stack Development',
    description:' End-to-end web application development, from database design to user interface implementation.',
    href:"#"
  },
]

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
      <motion.div
      initial={{opacity:0}} animate={{
        opacity:1,
        transition:{
        delay:2.4,duration:0.4 ,ease:"easeIn"}}}

        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service,index)=>{
          return(<div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
           <div className="w-full flex justify-between items-center ">
           <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                <BsArrowDownRight className="text-primary text"/>
                </Link>
           </div>
           <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-accent">{service.title}</h2>

           <p className="text-black">{service.description}</p>

           <div className="border-b border-black/80 w-full">
           </div>
          </div>
          );

        })}

      </motion.div>
      </div>
    </section>
  )
}

export default Services