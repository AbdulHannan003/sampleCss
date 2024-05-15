import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../assets/banner.jpg';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0)), url(${backgroundImage})`,
    };

    return (
        <div style={divStyle} className="w-full py-12 bg-cover bg-opacity-30 bg-no-repeat bg-center">
            <div className='text-center font-bold'>
                <div className="md:text-3xl py-1  text-white text-lg md:py-3">
                    we build
                </div>
                <div className="md:text-5xl py-1 text-2xl md:py-2 font-serif text-orange-500">
                    websites & much more.
                </div>
                <div className="text-white md:text-3xl py-1 text-lg md:py-3">
                    We are here to <span> </span>
                    <ReactTyped
                        className='text-orange-500 md:text-3xl py-1 text-lg md:py-3'
                        strings={[
                            " get your ideas on track",
                            " solve your problems",
                            " grow your business",
                        ]}
                        typeSpeed={60}
                        backSpeed={50}
                        loop
                    ></ReactTyped>
                </div>
                <div className="text-white md:text-lg py-1 md:py-3 ">
                    <button className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 hover:text-white hover:bg-[#f97316] duration-300'>Get Started</button>
                </div>
            </div>
        </div>

    );
}

export default Banner;