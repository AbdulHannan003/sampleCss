import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner2.jpg';
import img from '../../assets/bannerImg.png';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };
    return (
        <div
            style={divStyle}
            className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center flex">
            <div className="max-w-[1240px] text-left font-bold self-center w-full mx-auto md:w-[1000px] flex md:justify-between">
                <div className='p-2 hidden md:block md:w-3/4'>
                    <img src={img} className='w-full h-full object-contain' img alt="" />
                </div>
                <div className='col-span-1 md:w-3/4 px-10'>
                    <div className="md:text-4xl text-lg text-white-100 pl-4 md:py-3">
                        web & design
                    </div>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#662e9b]">
                        experts
                    </div>
                    <div className=" text-white-100 md:text-3xl text-lg pl-4 md:py-3">
                        <ReactTyped
                            className='md:text-3xl py-1 text-lg md:py-3'
                            strings={[
                                "Professional web designs and development",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                        ></ReactTyped>
                    </div>
                    <div className="items-center text-white-100 md:text-lg pl-4 py-1 md:py-3">
                        <button className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] hover:text-white-100 hover:bg-[#662e9b] duration-300'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;