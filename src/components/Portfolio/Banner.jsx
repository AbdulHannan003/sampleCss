import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner.jpg';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)), url(${backgroundImage})`,
    };

    return (
        <div style={divStyle} className="w-full content-center bg-cover bg-opacity-30 bg-no-repeat bg-center h-[75vh]">
            <div className='text-center font-bold'>
                <div className="md:text-4xl text-lg py-1 text-white md:py-3">
                    check out
                </div>
                <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-primary">
                    our work
                </div>
                <div className="text-white md:text-4xl text-lg py-1 md:py-3">
                    We are here to <span> </span>
                    <ReactTyped
                        className='text-primary md:text-3xl py-1 text-lg md:py-3'
                        strings={[
                            "Providing stable and sustainable solutions",
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                    ></ReactTyped>
                </div>
                <div className="text-white md:text-lg py-1 md:py-3 ">
                    <button className='border-2 border-primary mt-4 px-4 py-1 rounded-full text-primary hover:text-white hover:bg-[#f97316] duration-300'>Get Started</button>
                </div>
            </div>
        </div>

    );
}

export default Banner;