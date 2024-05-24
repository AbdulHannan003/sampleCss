import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
import web from '../../assets/img1.png';



function Welcome() {
    const typedRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='max-w-[1240] p-4 mx-auto md:my-10 md:grid grid-cols-2'>
            <div className='col-span-1 md:w-[60%] h-full overflow-hidden md:overflow-visible mx-auto'>
                <img
                    src={web}
                    alt=""
                    className='object-cover object-center'
                />
            </div>
            <div className='col-span-1 p-4 flex flex-col justify-center' ref={ref}>
                <div className='text-[#662e9b] font-bold md:text-3xl py-1 text-xl md:py-3' ref={typedRef}>
                    {inView && (
                        <ReactTyped
                            strings={["Welcome to the next level !"]}
                            typeSpeed={60}
                        />
                    )}
                </div>
                <div className='py-4'>
                    <span className='text-sm md:text-base line-clamp-4'>
                        SASKA Solutions is a technology consultancy and solutions provider company, offering expert services in front-end and back-end development, UI and UX design, and automation solutions.
                    </span>
                    <span className='pt-5 text-sm md:text-base line-clamp-3'>
                        Our mission is to empower businesses to succeed in the digital age by providing innovative, effective, and efficient technology solutions.
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Welcome;