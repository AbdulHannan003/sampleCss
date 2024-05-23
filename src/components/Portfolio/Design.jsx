import React, { useState } from 'react';
import { motion } from 'framer-motion';
import temp1 from '../../assets/PortfolioWeb/web2.png';
import temp2 from '../../assets/PortfolioWeb/web3.png';
import temp3 from '../../assets/PortfolioWeb/web4.png';
import temp4 from '../../assets/PortfolioWeb/web5.png';
import temp5 from '../../assets/PortfolioWeb/web6.png';
import temp6 from '../../assets/PortfolioWeb/web7.png';
const Design = () => {
    const word = "Design";
    const letters = word.split("");

    const word1 = "Develop";
    const letters1 = word1.split("");

    const [project, setProject] = useState('logo');

    const logoProjects = [{
        url: "src/assets/PortfolioLogos/logotemp1.png",
        alt: "Logo Design",
    },
    {
        url: "src/assets/PortfolioLogos/logotemp2.png",
        alt: "Logo Design",
    },
    {
        url: "src/assets/PortfolioLogos/logotemp3.png",
        alt: "Logo Design",
    },
    {
        url: "src/assets/PortfolioLogos/logotemp4.png",
        alt: "Logo Design",
    },
    {
        url: "src/assets/PortfolioLogos/logotemp5.png",
        alt: "Logo Design",
    },
    {
        url: "src/assets/PortfolioLogos/logotemp6.png",
        alt: "Logo Design",
    },
    ]

    const webProjects = [{
        url: temp1,
        alt: "Web Template",
    },
    {
        url: temp2,
        alt: "Web Template",
    },
    {
        url: temp3,
        alt: "Web Template",
    },
    {
        url: temp4,
        alt: "Web Template",
    },
    {
        url: temp5,
        alt: "Web Template",
    },
    {
        url: temp6,
        alt: "Web Template",
    },


    ]
    const brandProjects = [{
        url: "src/assets/PortfolioBrands/Banners.png",
        alt: "AD Banners",
    },
    {
        url: "src/assets/PortfolioBrands/Standee.png",
        alt: "Standee",
    },
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
                    <div key={index} className='col-span-1 border shadow-xl max-h-[900px] overflow-hidden'>
                        <img src={project.url} alt={project.alt} className='w-full object-center hover:scale-110 duration-200' />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Design;

