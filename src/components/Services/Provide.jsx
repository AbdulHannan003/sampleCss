import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Provide = () => {
  const DesServices = [
    "Web Design UI / UX",
    "Application Design",
    "Logo",
    "Print Design",
  ];
  const DevServices = [
    "Web Development",
    "Mobile App Development",
    "E-Commerce",
    "Software Development",
    "Functional Scripting",
    "Maintenance"
  ];

  const containerVariants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1
    }
  };

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.5, triggerOnce: true });

  return (
    <div className='bg-gradient-to-tl from-[#662e9b] to-[#982aff]'>
      <div className='max-w-[1240px] px-4 py-10 mx-auto' ref={ref}>
        <h1 className='text-lg md:text-3xl py-4 text-left text-black font-bold'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:py-0 pb-8'>
          <motion.div className='w-full col-span-1 flex gap-8 md:flex'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}>
            <motion.div
              className='w-2/4 p-4 md:mx-8 hover:scale-110 hover:shadow-2xl duration-300'
              variants={itemVariants}
            >
              <h1 className='text-lg md:text-3xl text-white-100 font-semibold'>Develop :</h1>
              <div className='border-2 w-2/12 border-black my-1'></div>
              <ul className='mt-2 px-5'>
                {DevServices.map((service, index) => (
                  <motion.li key={index} className='py-1' variants={itemVariants}>{service}</motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              className='w-2/4 p-4 md:mx-8 hover:scale-110 hover:shadow-2xl duration-300'
              variants={itemVariants}
            >
              <h1 className='text-lg md:text-3xl text-white-100 font-semibold'>Design :</h1>
              <div className='border-2 w-2/12 border-black my-1'></div>
              <ul className='mt-2 px-5'>
                {DesServices.map((service, index) => (
                  <motion.li key={index} className='py-1' variants={itemVariants}>{service}</motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            className='w-full md:w-3/4 col-span-1 md:rounded-none self-center'
            variants={itemVariants}
          >
            <img
              src="https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600"
              className='rounded-3xl object-center object-cover'
              alt=""
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Provide;
