import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/contactbanner.jpg';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };
    return (
        <div
            style={divStyle}
            className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat  bg-center flex md:justify-end">
            <div className="max-w-[1240px] text-left font-bold self-center w-full md:w-auto">
                <div className='col-span-1 md:w-4/4 px-10'>
                    <div className="md:text-4xl text-lg text-white pl-4 md:py-3">
                        web & design
                    </div>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#009d96]">
                        experts
                    </div>
                    <div className=" text-white md:text-3xl text-lg pl-4 md:py-3">
                        <ReactTyped
                            className='md:text-3xl py-1 text-lg md:py-3'
                            strings={[
                                "Professional web designs and development",
                            ]}
                            typeSpeed={60}
                            backSpeed={50}
                        ></ReactTyped>
                    </div>
                    <div className="items-center text-white md:text-lg pl-4 py-1 md:py-3">
                        <button className='border-2 border-[#009d96] mt-4 px-4 py-1 rounded-full text-[#009d96] hover:text-white hover:bg-[#009d96] duration-300'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;