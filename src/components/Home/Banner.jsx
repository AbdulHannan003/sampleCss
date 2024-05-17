import React from 'react';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/saskabanner.png';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };

    return (
        <div style={divStyle} className="w-full px-[60px] content-center bg-cover bg-no-repeat bg-center h-[300px] md:h-[90vh]">
            <div className='text-left font-semibold'>
                <div className="md:text-4xl text-lg py-1 text-white-100 px-12 md:py-3">
                    we build
                </div>
                <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-primary">
                    websites & much more.
                </div>
                <div className="text-white-100 md:text-4xl text-lg py-1 px-12 md:py-3">
                    We are here to <span> </span>
                    <ReactTyped
                        className='text-primary md:text-4xl py-1 text-lg md:py-3'
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
                <div className="text-white-100 md:w-2/4 px-12 md:text-lg py-1 md:py-12 ">
                    <button className='border-2 border-primary mt-4 px-4 py-1 rounded-full text-primary hover:text-white-100 hover:bg-primary-700 duration-300'>Get Started</button>
                </div>
            </div>
        </div>

    );
}

export default Banner;