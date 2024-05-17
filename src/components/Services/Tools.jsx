import React, { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { ReactTyped } from "react-typed";
const Tools = () => {
    const typedRef = useRef();
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    return (
        <div className='max-w-[1240px] px-4 py-10 md:mx-auto text-center' ref={ref}>
            <div className='text-orange-500 font-bold md:text-4xl py-1 text-lg md:py-3 md:flex justify-center' ref={typedRef}>
                <h1 className='text-lg md:text-4xl py-4 md:text-left text-black font-semibold'>Empowering Businesses with a</h1>
                {inView && (
                    <ReactTyped
                        strings={[" Multitude of Tools..."]}
                        typeSpeed={50}
                        className='mx-4 pt-4'
                    />
                )}
            </div>
        </div>
    )
}

export default Tools