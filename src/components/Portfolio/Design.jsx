import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Design = () => {
    const word = "Design";
    const letters = word.split("");

    const word1 = "Develop";
    const letters1 = word1.split("");

    const [project, setProject] = useState('logo');

    const logoProjects = [{
        url: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    },
    {
        url: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    },
    {
        url: "https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    }
    ]

    const webProjects = [{
        url: "https://images.pexels.com/photos/1961778/pexels-photo-1961778.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Web Projects",
    },
    {
        url: "https://images.pexels.com/photos/1961778/pexels-photo-1961778.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Web Projects",
    },
    {
        url: "https://images.pexels.com/photos/1961778/pexels-photo-1961778.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Web Projects",
    }
    ]
    const brandProjects = [{
        url: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    },
    {
        url: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    },
    {
        url: "https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600",
        alt: "Logo Design",
    }
    ]

    let projectData;
    if (project === "logo") {
        projectData = logoProjects;
    } else if (project === "web") {
        projectData = webProjects;
    } else if (project === "brand") {
        projectData = brandProjects;
    }

    return (
        <div className='w-full'>
            <div className="max-w-[1240px] text-center p-0 mx-auto md:my-10 md:flex">
                <div className="pt-[150px] my-2 text-[#5b2a86] md:flex  -rotate-[-90deg] text-7xl font-serif font-bold col-span-1 w-1/4 overflow-visible hidden ">
                    {letters1.map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.3, duration: 0.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
                <div className=" text-center p-2 col-span-1 md:w-2/4">
                    <h1 className="text-center py-4 md:text-4xl text-xl font-bold text-[#5b2a86]">
                        Have a look at our work for our customers
                    </h1>
                    <p className="text-center py-4 md:text-lg">
                        We make sure to deliver high quality work for customers that is according to their demands. Catch a glimpse of our portfolio
                    </p>
                </div>
                <div className="pt-[140px] text-[#5b2a86] pl-[60px] md:inline  -rotate-90 text-7xl font-serif font-bold col-span-1 w-1/4 overflow-visible hidden ">
                    {letters.map((letter, index) => (

                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 200 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.4, duration: 0.3, repeat: Infinity, repeatType: "reverse", repeatDelay: 3 }}
                        >
                            {letter}
                        </motion.span>
                    ))}
                </div>
            </div>
            <div className="max-w-[1240px] mx-auto md:text-lg py-1 text-center md:py-3 flex justify-evenly">
                <button
                    onClick={() => setProject('logo')}
                    className='border-2 border-[#5b2a86] mt-4 px-4 py-1 rounded-full text-[#5b2a86] focus:bg-[#5b2a86] focus:text-white focus:shadow-lg font-bold'
                >
                    Logo
                </button>
                <button
                    onClick={() => setProject('web')}
                    className='border-2 border-[#5b2a86] mt-4 px-4 py-1 rounded-full text-[#5b2a86] focus:bg-[#5b2a86] focus:text-white focus:shadow-lg font-bold'
                >
                    Web Design
                </button>
                <button
                    onClick={() => setProject('brand')}
                    className='border-2 border-[#5b2a86] mt-4 px-4 py-1 rounded-full text-[#5b2a86] focus:bg-[#5b2a86] focus:text-white focus:shadow-lg font-bold'
                >
                    Branding
                </button>
            </div>
            <div className='w-full grid md:grid-cols-3'>
                {projectData.map((project, index) => (
                    <div key={index} className='col-span-1 border shadow-xl'>
                        <img src={project.url} alt={project.alt} className='w-full object-center' />
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Design;

