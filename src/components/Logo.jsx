import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ai from '../assets/logos/ai.png';
import css from '../assets/logos/css.png';
import html5 from '../assets/logos/html5.png';
import mongo from '../assets/logos/mongo.png';
import node from '../assets/logos/node.png';
import ps from '../assets/logos/ps.png';
import react from '../assets/logos/react.png';
import tailwind from '../assets/logos/tailwind.png';

const Logo = () => {
    const { ref: aiRef, inView: aiInView } = useInView({ triggerOnce: true });
    const { ref: cssRef, inView: cssInView } = useInView({ triggerOnce: true });
    const { ref: html5Ref, inView: html5InView } = useInView({ triggerOnce: true });
    const { ref: mongoRef, inView: mongoInView } = useInView({ triggerOnce: true });
    const { ref: nodeRef, inView: nodeInView } = useInView({ triggerOnce: true });
    const { ref: psRef, inView: psInView } = useInView({ triggerOnce: true });
    const { ref: reactRef, inView: reactInView } = useInView({ triggerOnce: true });
    const { ref: tailwindRef, inView: tailwindInView } = useInView({ triggerOnce: true });
    // Repeat this for other logos

    const popVariants = {
        hidden: { scale: 0 },
        visible: { scale: 1, transition: { duration: 1.5, type: 'spring', bounce: 2.5 } },
    };

    return (
        <div className="bg-slate-400 bg-opacity-10 overflow-hidden py-2">
            <div className='w-m-[1024px] text-xl md:text-4xl md:w-[60%] mx-auto'>
                <h1 className='font-bold px-4 md:px-0 py-10 text-center'>Crafting <span className='text-orange-500'>Solutions</span>! Not Just Products, for Your Business</h1>
                <div className='flex flex-col-4 text-center gap-2 justify-between p-4'>
                    <div ref={aiRef}>
                        <motion.div initial="hidden" animate={aiInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={ai} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>React</span>
                    </div>
                    <div ref={cssRef}>
                        <motion.div initial="hidden" animate={cssInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={css} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>CSS</span>
                    </div>
                    <div ref={html5Ref}>
                        <motion.div initial="hidden" animate={html5InView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={html5} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>HTML5</span>
                    </div>
                    <div ref={mongoRef}>
                        <motion.div initial="hidden" animate={mongoInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={mongo} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>MongoDB</span>
                    </div>
                </div>
                <div className='flex flex-col-4 text-center gap-2 justify-between p-4'>
                    <div ref={nodeRef}>
                        <motion.div initial="hidden" animate={nodeInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={node} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>Node JS</span>
                    </div>
                    <div ref={psRef}>
                        <motion.div initial="hidden" animate={psInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={ps} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>Photoshop</span>
                    </div>
                    <div ref={reactRef}>
                        <motion.div initial="hidden" animate={reactInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={react} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>Illustrator</span>
                    </div>
                    <div ref={tailwindRef}>
                        <motion.div initial="hidden" animate={tailwindInView ? "visible" : "hidden"} variants={popVariants}>
                            <div className='h-[80px] w-[80px]'>
                                <img src={tailwind} className='w-full h-full object-contain hover:scale-125 duration-200' alt="" />
                            </div>
                        </motion.div>
                        <span className='text-lg'>Tailwind CSS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Logo;
