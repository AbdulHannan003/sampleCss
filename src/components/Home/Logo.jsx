import React from 'react';
import { delay, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ai from '../../assets/logos/ai.png';
import css from '../../assets/logos/css.png';
import html5 from '../../assets/logos/html5.png';
import mongo from '../../assets/logos/mongo.png';
import node from '../../assets/logos/node.png';
import ps from '../../assets/logos/ps.png';
import react from '../../assets/logos/react.png';
import tailwind from '../../assets/logos/tailwind.png';

const Logo = () => {
    const { ref: Ref, inView: InView } = useInView({ triggerOnce: true });

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            delay: 1.5,
            transition: {
                duration: 1,
                ease: [0.4, 0, 0.2, 1]
            }
        }
    };

    return (
        <div className="bg-gradient-to-b from-[#662b9e] to-[#982aff] bg-opacity-60 overflow-hidden py-2">
            <div className='w-m-[1024px] text-xl md:text-4xl md:w-[60%] mx-auto'>
                <h1 className='font-bold px-4 md:px-0 py-10 text-center text-white-100'>Crafting <span className='text-black'>Solutions !</span> Not Just Products, for Your Business</h1>
                <div ref={Ref} className='flex flex-col-4 text-center gap-2 justify-between p-4'>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={ai} className='w-full h-full object-contain hover:scale-125 duration-200' alt="AI logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>React</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={css} className='w-full h-full object-contain hover:scale-125 duration-200' alt="CSS logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>CSS</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={html5} className='w-full h-full object-contain hover:scale-125 duration-200' alt="HTML5 logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>HTML5</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={mongo} className='w-full h-full object-contain hover:scale-125 duration-200' alt="MongoDB logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>MongoDB</span>
                    </motion.div>
                </div>
                <div ref={Ref} className='flex flex-col-4 text-center gap-2 justify-between p-4'>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={node} className='w-full h-full object-contain hover:scale-125 duration-200' alt="Node.js logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>Node JS</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={ps} className='w-full h-full object-contain hover:scale-125 duration-200' alt="Photoshop logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>Photoshop</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={react} className='w-full h-full object-contain hover:scale-125 duration-200' alt="React logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>Illustrator</span>
                    </motion.div>
                    <motion.div initial="hidden" animate={InView ? "visible" : "hidden"} variants={fadeInUpVariants}>
                        <div>
                            <div className='h-[80px] w-[80px]'>
                                <img src={tailwind} className='w-full h-full object-contain hover:scale-125 duration-200' alt="Tailwind CSS logo" />
                            </div>
                        </div>
                        <span className='text-sm text-white-100 italic font-semibold'>Tailwind CSS</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Logo;
