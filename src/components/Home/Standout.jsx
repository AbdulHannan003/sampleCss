import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { AiFillCaretRight } from "react-icons/ai";

const Standout = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='max-w-[1240px] p-4 mx-auto'>
            <div className='md:w-[90%] md:pt-10 mx-auto'>
                <h3 className='text-xl md:text-4xl font-semibold px-4 md:px-12'>No Reloads</h3>
                <motion.div initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -250 }}
                    transition={{ duration: 1 }} ref={ref} className='text-primary text-4xl md:text-7xl font-bold font-sans'> Just React!</motion.div>
                <p className='py-6 px-4 md:px-12 text-lg md:text-xl md:w-3/4'>
                    Maintaining continious interactivity without page reloads? You bet! With React, We keep web experience
                    alive and dynamic, emsuring user are engaged and delighted every step of the way.
                    <span className='hidden sm:inline'>
                        From seamless transitions to interactive elements, our expertise in React ensures your business shine with modernity and sophistication.
                    </span>
                    <button className=' border-2 md:px-12 border-primary mt-4 px-4 flex flex-row py-1 rounded-full text-primary hover:text-white hover:bg-primary duration-300 items-center'>Portfolio<span className='pl-2'><AiFillCaretRight /></span></button>
                </p>
            </div>
            <div className='md:w-[90%] mx-auto'>
                <img src="https://img.freepik.com/free-vector/online-education-concept-illustration_114360-1130.jpg?w=2000" alt="" className='object-cover h-[400px] w-[500px]' />
            </div>
        </div>
    )
}

export default Standout