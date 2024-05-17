import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner.jpg';

function Banner() {

    return (
        <div className="w-full content-center bg-cover bg-opacity-30 bg-no-repeat bg-center h-[300px] md:h-[75vh]">
            <div className='max-w-[1240px] mx-auto text-left font-bold flex'>
                <div className='col-span-1 md:w-2/4 px-10'>
                    <div className="md:text-4xl text-lg text-black pl-4 md:py-3">
                        web & design
                    </div>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-orange-500">
                        experts
                    </div>
                    <div className=" text-black md:text-3xl text-lg pl-4 md:py-3">
                        <ReactTyped
                            className='md:text-3xl py-1 text-lg md:py-3'
                            strings={[
                                "Professional web designs and development",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                        ></ReactTyped>
                    </div>
                    <div className="items-center text-white md:text-lg py-1 md:py-3">
                        <button className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 hover:text-white hover:bg-orange-500 duration-300'>Get Started</button>
                    </div>
                </div>
                <div className='hidden md:col-span-1 w-2/4 '>
                    <img src="https://images.pexels.com/photos/399161/pexels-photo-399161.jpeg?auto=compress&cs=tinysrgb&w=600" height={"100%"} width={"100%"} className='object-center rounded-tl-[400px] overflow-hidden' alt="" />
                </div>
            </div>
        </div>

    );
}

export default Banner;