// import React from 'react';
// import { ReactTyped } from "react-typed";
// import backgroundImage from '../../assets/banner2.jpg';
// import img from '../../assets/bannerImg.png';

// function Banner() {
//     const divStyle = {
//         backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)) , url(${backgroundImage})`,
//     };
//     return (
//         <div
//             style={divStyle}
//             className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center flex"
//             id='contact'>
//             <div className="max-w-[1240px] text-left font-bold self-center w-full mx-auto md:w-[1000px] flex md:justify-between">
//                 <div className='p-2 hidden md:block md:w-3/4'>
//                     <img src={img} className='w-full h-full object-contain' img alt="" />
//                 </div>
//                 <div className='col-span-1 md:w-3/4 px-10'>
//                     <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#982aff]">
//                         Contact Us Today !
//                     </div>
//                     <div className=" text-white-100 md:text-3xl text-lg pl-4 md:py-3">
//                         <ReactTyped
//                             className='md:text-4xl py-1 text-lg md:py-3'
//                             strings={[
//                                 "Need a stunning new website, a redesign, or custom development ?",
//                             ]}
//                             typeSpeed={30}
//                         ></ReactTyped>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     );
// }

// export default Banner;

import React from 'react';
import { motion } from 'framer-motion';
import { ReactTyped } from "react-typed";
import backgroundImage from '../../assets/banner2.jpg';
import img from '../../assets/bannerImg.png';

function Banner() {
    const divStyle = {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0)), linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0)) , url(${backgroundImage})`,
    };
    const floatingVariants = {
        animate: {
            y: [0, -10, 0, 10, 0], // Move up, down, back to start
            transition: {
                duration: 6,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
            },
        },
    };

    return (
        <div
            style={divStyle}
            className="w-full h-[300px] md:h-[90vh] bg-cover bg-no-repeat bg-center flex"
            id='contact'>
            <div className="max-w-[1240px] text-left font-bold self-center w-full mx-auto md:w-[1000px] flex md:justify-between">
                <div className='p-2 hidden md:block md:w-3/4'>
                    <motion.img
                        src={img}
                        className='w-full h-full object-contain'
                        alt=""
                        variants={floatingVariants}
                        animate="animate"
                    />
                </div>
                <div className='col-span-1 md:w-3/4 px-10'>
                    <div className="md:text-7xl text-2xl py-1 md:py-2 font-serif text-[#982aff]">
                        Contact Us Today !
                    </div>
                    <div className=" text-white-100 md:text-3xl text-lg pl-4 md:py-3">
                        <ReactTyped
                            className='md:text-4xl py-1 text-lg md:py-3'
                            strings={[
                                "Need a stunning new website, a redesign, or custom development ?",
                            ]}
                            typeSpeed={30}
                        ></ReactTyped>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner;