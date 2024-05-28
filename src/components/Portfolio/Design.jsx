import React, { useState } from 'react';
import { motion } from 'framer-motion';
import temp1 from '../../assets/PortfolioWeb/web2.png';
import temp2 from '../../assets/PortfolioWeb/web3.png';
import temp3 from '../../assets/PortfolioWeb/web4.png';
import temp4 from '../../assets/PortfolioWeb/web5.png';
import temp5 from '../../assets/PortfolioWeb/web6.png';
import temp6 from '../../assets/PortfolioWeb/web7.png';
import brand1 from '../../assets/PortfolioBrands/Banners.png';
import brand2 from '../../assets/PortfolioBrands/Standee.png';
import brand3 from '../../assets/PortfolioBrands/card2.png';
import brand4 from '../../assets/PortfolioBrands/card1.png';
import brand5 from '../../assets/PortfolioBrands/brochure1.png';
import logo1 from '../../assets/PortfolioLogos/logotemp1.png';
import logo2 from '../../assets/PortfolioLogos/logotemp2.png';
import logo3 from '../../assets/PortfolioLogos/logotemp3.png';
import logo4 from '../../assets/PortfolioLogos/logotemp4.png';
import logo5 from '../../assets/PortfolioLogos/logotemp5.png';
import logo6 from '../../assets/PortfolioLogos/logotemp6.png';

const Design = () => {
    const word = "Design";
    const letters = word.split("");

    const word1 = "Develop";
    const letters1 = word1.split("");

    const [project, setProject] = useState('logo');
    const [showModal, setShowModal] = useState(false);
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const handleProjectClick = (index) => {
        setSelectedProjectIndex(index);
        setShowModal(true);
        // Remove the existing source
        const imageElements = document.querySelectorAll('.project-image');
        imageElements.forEach((image) => {
            image.src = '';
        });
        // Update the new source
        const projectData = project === 'logo' ? logoProjects : project === 'web' ? webProjects : brandProjects;
        const imageElement = document.querySelector('.project-image');
        imageElement.src = projectData[index].url;
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const logoProjects = [
        {
            url: logo1,
            alt: "Logo Template",
        },
        {
            url: logo2,
            alt: "Logo Template",
        },
        {
            url: logo3,
            alt: "Logo Template",
        },
        {
            url: logo4,
            alt: "Logo Template",
        },
        {
            url: logo5,
            alt: "Logo Template",
        },
        {
            url: logo6,
            alt: "Logo Template",
        },
    ];

    const webProjects = [
        {
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
    ];

    const brandProjects = [
        {
            url: brand1,
            alt: "AD Banners",
        },
        {
            url: brand2,
            alt: "Standee",
        },
        {
            url: brand3,
            alt: "Business Card",
        },
        {
            url: brand4,
            alt: "Business Card",
        },
        {
            url: brand5,
            alt: "Brochure",
        },
    ];

    let projectData;
    if (project === "logo") {
        projectData = logoProjects;
    } else if (project === "web") {
        projectData = webProjects;
    } else if (project === "brand") {
        projectData = brandProjects;
    }

    return (
        <div className='w-full border border-[#662e9b] bg-gradient-to-r from-[#662e9b] to-[#982aff]'>
            <div className="max-w-[1240px] text-center p-0 mx-auto md:my-10 md:flex">
                <div className="pt-[150px] my-2 text-white-100 md:flex -rotate-[-90deg] text-7xl font-serif font-bold col-span-1 w-1/4 overflow-visible hidden ">
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
                <div className="text-center p-2 col-span-1 md:w-2/4">
                    <h1 className="text-center py-4 md:text-4xl text-xl font-bold text-white-100">
                        Have a look at our work for our customers
                    </h1>
                    <p className="text-center text-white-100 py-4 md:text-lg">
                        We make sure to deliver high quality work for customers that is according to their demands. Catch a glimpse of our portfolio
                    </p>
                </div>
                <div className="pt-[140px] text-white-100 pl-[60px] md:inline -rotate-90 text-7xl font-serif font-bold col-span-1 w-1/4 overflow-visible hidden ">
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
            <div className="max-w-[1240px] mx-auto md:text-lg py-1 text-white-100 text-center md:py-3 flex justify-evenly">
                <button
                    onClick={() => setProject('logo')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'logo' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Logo
                </button>
                <button
                    onClick={() => setProject('web')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'web' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Web Design
                </button>
                <button
                    onClick={() => setProject('brand')}
                    className={`border-2 border-white-100 mt-4 px-4 py-1 rounded-full font-bold ${project === 'brand' ? 'bg-white-100 text-[#662e9b] shadow-lg' : 'hover:bg-white-100 hover:text-[#662e9b] hover:shadow-md'}`}
                >
                    Branding
                </button>
            </div>
            <div className='w-full grid gap-4 md:grid-cols-3 md:gap-8 mt-8'>
                {projectData.map((project, index) => (
                    <div key={index} className='relative overflow-hidden rounded-md shadow-lg'>
                        <img
                            src={project.url}
                            alt={project.alt}
                            className='w-full h-full object-cover transition-transform duration-300 transform hover:scale-105 cursor-pointer'
                            onClick={() => handleProjectClick(index)}
                            height={100}
                            width={100}
                            style={{ aspectRatio: "7/5" }}
                        />
                    </div>
                ))}
            </div>
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
                    <div className="max-w-screen-lg overflow-hidden">
                        <button className="absolute top-4 right-4 text-white text-2xl focus:outline-none" onClick={closeModal}>
                            &times;
                        </button>
                        <img src={projectData[selectedProjectIndex].url} alt={projectData[selectedProjectIndex].alt} height={100} width={100} loading="lazy" style={{ aspectRatio: "1/1" }} className="w-full h-full object-contain" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Design;
