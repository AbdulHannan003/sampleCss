import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { AiFillCaretRight } from "react-icons/ai";
import squareimg from '../../assets/squareimg.png';
import { Link } from 'react-router-dom';

const Standout = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='max-w-[1240px] p-4 mx-auto'>
            <div className='md:w-[90%] md:pt-10 mx-auto'>
                <h3 className='text-xl md:text-4xl font-semibold px-4 md:px-12 text-black'>No Reloads</h3>
                <motion.div initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -250 }}
                    transition={{ duration: 2 }} ref={ref} className='text-[#662e9b] text-4xl md:text-7xl font-bold font-sans ease-in-out'> Just React!</motion.div>
                <p className='py-6 px-4 md:px-12 text-lg md:text-xl md:w-3/4'>
                    Maintaining continious interactivity without page reloads? You bet! With React, We keep web experience
                    alive and dynamic, ensuring user are engaged and delighted every step of the way.
                    <span className='hidden sm:inline'>
                        From seamless transitions to interactive elements, our expertise in React ensures your business shine with modernity and sophistication.
                    </span>
                    <Link to={'/portfolio'}>
                        <button className='text-sm md:text-base font-semibold border-2 border-[#662e9b] mt-3 md:px-2 px-4 flex flex-row md:py-2 py-3 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300 items-center'>Portfolio<span className='pl-2 text-base md:text-2xl'><AiFillCaretRight /></span></button>
                    </Link>
                </p>
            </div>
            <div className='md:w-[90%] mx-auto'>
                <img
                    src={squareimg}
                    alt="React Image"
                    className='object-cover h-[400px] w-[500px]'
                    height="400"
                    width="500"
                    style={{ aspectRatio: '4/5' }}
                />
            </div>
        </div>
    )
}

export default Standout