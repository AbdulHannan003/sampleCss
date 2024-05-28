import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ai from '../../assets/logos/ai.webp';
import css from '../../assets/logos/css.png';
import html5 from '../../assets/logos/html5.png';
import mongo from '../../assets/logos/mongo.webp';
import node from '../../assets/logos/node.png';
import ps from '../../assets/logos/ps.webp';
import reactLogo from '../../assets/logos/react.png';
import tailwind from '../../assets/logos/tailwind.png';

const logos = [
    { src: ai, alt: "React logo", label: "React" },
    { src: css, alt: "CSS logo", label: "CSS" },
    { src: html5, alt: "HTML5 logo", label: "HTML5" },
    { src: mongo, alt: "MongoDB logo", label: "MongoDB" },
    { src: node, alt: "Node.js logo", label: "Node JS" },
    { src: ps, alt: "Photoshop logo", label: "Photoshop" },
    { src: reactLogo, alt: "Adobe Illustrator logo", label: "Illustrator" },
    { src: tailwind, alt: "Tailwind CSS logo", label: "Tailwind CSS" },
];

const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 1,
            ease: [0.4, 0, 0.2, 1]
        }
    }
};

const LogoItem = ({ src, alt, label, inView }) => (
    <motion.div initial="hidden" animate={inView ? "visible" : "hidden"} variants={fadeInUpVariants}>
        <div className='flex flex-col items-center py-4'>
            <div className='h-[60px] w-[60px] '>
                <img src={src} height={60} width={60} loading="lazy" alt={alt} className='w-full h-full object-contain hover:scale-125 duration-200' />
            </div>
            <span className='text-sm text-white-100 italic font-semibold'>{label}</span>
        </div>
    </motion.div>
);

const Logo = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    return (
        <div className="bg-gradient-to-b from-[#662b9e] to-[#982aff] bg-opacity-60 overflow-hidden py-2">
            <div className='w-m-[1024px] text-xl md:text-4xl md:w-[60%] mx-auto'>
                <h1 className='font-bold px-4 md:px-0 py-10 text-center text-white-100'>
                    Crafting <span className='text-white font-bold text-3xl md:text-5xl'>Solutions !</span> Not Just Products, for Your Business
                </h1>
                <div ref={ref} className='flex flex-wrap justify-center gap-x-6 md:justify-between p-4'>
                    {logos.map((logo, index) => (
                        <LogoItem key={index} src={logo.src} alt={logo.alt} label={logo.label} inView={inView} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Logo;
