import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import bs from '../../assets/logos/bootstrap.png';
import ai from '../../assets/logos/ai.png';
import tw from '../../assets/logos/tailwind.png';
import np from '../../assets/logos/numpy.png';
import xl from '../../assets/logos/openpyxl.png';
import css from '../../assets/logos/css.png';
import html from '../../assets/logos/html5.png';
import js from '../../assets/logos/javascript.png';
import py from '../../assets/logos/python.png';
import react from '../../assets/logos/react.png';
import figma from '../../assets/logos/figma.png';
import ps from '../../assets/logos/ps.png';


const Tools = () => {
    const typedRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='px-4 py-10 md:mx-auto text-center' ref={ref}>
            <div className='text-white-100 bg-gradient-to-tl from-[#662e9b] to-[#982aff] font-bold md:text-4xl py-1 text-lg md:py-3 md:flex justify-center border' ref={typedRef}>
                <h1 className='text-lg md:text-4xl py-4 md:text-left text-white-100 font-semibold'>Empowering Businesses with a</h1>
                {inView && (
                    <ReactTyped
                        strings={["multitude of tools..."]}
                        typeSpeed={50}
                        className='mx-4 pt-4'
                    />
                )}
            </div>
            <div className='font-semibold p-4 md:text-4xl py-1 text-lg md:py-3 justify-center max-w-[1024px] mx-auto'>
                <h1 className='pb-1 text-black'>Frameworks</h1>
                <div className='border-2 w-2/12 border-[#662e9b] my-1 mx-auto'></div>
                <div className='mx-auto flex py-10 my-6 md:my-10'>
                    <div className='flex justify-around gap-4 w-full'>
                        <div className='h-[60px] w-[60px]'>
                            <img src={bs} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Bootstrap</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={ai} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>React</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={tw} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Tailwind</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={np} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Numpy</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={xl} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Openpyxl</p>
                        </div>
                    </div>
                </div>
                <h1 className='pb-1 text-black'>Languages</h1>
                <div className='border-2 w-2/12 border-[#662e9b] my-1 mx-auto'></div>
                <div className='mx-auto flex py-10 my-6 md:my-10'>
                    <div className='flex justify-around gap-4 w-full'>
                        <div className='h-[60px] w-[60px]'>
                            <img src={css} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>CSS3</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={js} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Javascript</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={html} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>HTML5</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={py} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Python</p>
                        </div>
                    </div>
                </div>
                <h1 className='pb-1 text-black'>Design</h1>
                <div className='border-2 w-2/12 border-[#662e9b] my-1 mx-auto'></div>
                <div className='mx-auto flex py-10 my-6 md:my-10'>
                    <div className='flex justify-around gap-4 w-full'>
                        <div className='h-[60px] w-[60px]'>
                            <img src={react} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Illustrator</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={figma} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Figma</p>
                        </div>
                        <div className='h-[60px] w-[60px]'>
                            <img src={ps} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            <p className='text-sm text-gray-500 italic pt-2'>Photoshop</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tools