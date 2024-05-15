import React, { useState } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function Plan() {
    const [plan, setPlan] = useState('logo');

    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const logoPlanData = [{
        price: "$30",
        title: "LOGO SPECIAL",
        design: "Free Icon Design",
        concepts: "4 Orignal Logo Concepts",
        dedicated: "2 Dedicated Logo Designs",
        revision: "4 Revision",
        formats: "Formats :JPEG Only",
        time: "24 - 48 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "100% Money Back Gurantee",
    },
    {
        price: "$99",
        title: "LOGO PLUS",
        design: "Free Icon Design",
        concepts: "12 Orignal Logo Concepts",
        dedicated: "4 Dedicated Logo Designs",
        revision: "Unlimited Revisions",
        formats: "Formats :JPEG, PSD, EPS, AI, PNG, SVG, ,TIFF",
        time: "24 - 48 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "100% Money Back Gurantee",
    },
    {
        price: "$250",
        title: "LOGO PREMIUM",
        design: "Stationery Design (Business Cards, Letterheads, Envelopes)",
        concepts: "Unlimited Orignal Logo Concepts",
        dedicated: "8 Dedicated Logo Designs",
        revision: "Unlimited Revisions",
        formats: "Formats :JPEG, PSD, EPS, AI, PNG, SVG, ,TIFF",
        time: "24 - 48 Hours Turnaround Time",
        owner: "100% Ownership",
        satisfaction: "100% Satisfaction",
        money: "100% Money Back Gurantee",
    }
    ]

    const webPlanData = [{
        price: "$399",
        title: "BASIC WEBSITE",
        design: "3 Page Website",
        concepts: "Contact/Query Form",
        dedicated: "1 Banner Design",
        revision: "Mobile Responsive will be Additional $100",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "100% Money Back Gurantee",
    },
    {
        price: "$799",
        title: "STARTUP WEBSITE",
        design: "5 Page Website",
        concepts: "Contact/Query/Login Form",
        dedicated: "3 Banner Design",
        revision: "Mobile Responsive will be Additional $100",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "100% Money Back Gurantee",
    },
    {
        price: "$1299",
        title: "PROFESSIONAL WEBSITE",
        design: "10 Page Website",
        concepts: "Contact/Query/Login Form & Admin Panel Integration",
        dedicated: "5+ Banner Design",
        revision: "Mobile Responsive",
        formats: "Complete Source Files Included",
        time: "Website Initial Concept in 48 Hours",
        owner: "100% Ownership",
        satisfaction: "Complete Design & Development",
        money: "100% Money Back Gurantee",
    }
    ]
    const brandPlanData = [{
        price: "$50",
        title: "STARTUP PACKAGE",
        design: "2 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        revision: "3 Revisions",
        formats: "",
        time: "3 Business Days Delivery",
        owner: "",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$75",
        title: "PROFESSIONAL PACKAGE",
        design: "4 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        revision: "5 Revisions",
        formats: "",
        time: "3 Business Days Delivery",
        owner: "",
        satisfaction: "100% Satisfaction",
        money: "",
    },
    {
        price: "$100",
        title: "ELITE PACKAGE",
        design: "4 Bussiness Card Concepts",
        concepts: "2 Letterhead Concepts",
        dedicated: "2 Envelope Concepts",
        revision: "3 Revisions",
        formats: "Invoice Design",
        time: "3 Business Days Delivery",
        owner: "T-Shirt Design",
        satisfaction: "100% Satisfaction",
        money: "",
    }
    ]

    let planData;
    if (plan === "logo") {
        planData = logoPlanData;
    } else if (plan === "web") {
        planData = webPlanData;
    } else if (plan === "brand") {
        planData = brandPlanData;
    }
    return (

        <motion.div
            initial={{ opacity: 0, x: -250 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -250 }}
            transition={{ duration: 1 }}
            className='py-10 px-2'
            ref={ref}
        >
            <div className='max-w-[1240px] mx-auto p-4'>
                <h1 className='font-serif text-orange-500 text-2xl md:text-5xl font-bold text-center'>Our Plans</h1>
                <p className='text-center pt-4 md:text-lg font-bold'>Choose Your Plan</p>
                <p className='text-center pt-2 text-orange-500 md:text-lg text-bold'>We Provide The Best Services For The Most Reasonable Price</p>
            </div>
            <div className="max-w-[1240px] mx-auto md:text-lg py-1 text-center md:py-3 flex justify-evenly">
                <button
                    onClick={() => setPlan('logo')}
                    className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 focus:bg-orange-500 focus:text-white focus:shadow-lg font-bold'
                >
                    Logo
                </button>
                <button
                    onClick={() => setPlan('web')}
                    className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 focus:bg-orange-500 focus:text-white focus:shadow-lg font-bold'
                >
                    Web Design
                </button>
                <button
                    onClick={() => setPlan('brand')}
                    className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 focus:bg-orange-500 focus:text-white focus:shadow-lg font-bold'
                >
                    Branding
                </button>
            </div>

            <div className="max-w-[1240px] mx-auto p-4 md:grid grid-cols-3 gap-8">
                {inView && planData.map((item, index) => (
                    <div key={index} className="flex flex-col sm:mx-2 shadow-xl h-auto rounded-xl px-4 py-12 border border-[#f97316] my-5 hover:shadow-2xl hover:scale-105 duration-500">
                        <span className='text-6xl md:text-2xl font-bold'>{item.price}</span>
                        <div className='my-4 border-y-2 border-gray-300'>
                            <h2 className='text-lg md:text-xl py-4 font-bold'>{item.title}</h2>
                        </div>
                        <div>
                            <ul>
                                {Object.keys(item).map((key, index) => {
                                    if (key === 'price' || key === 'title') return null
                                    return item[key] && <li key={index} className='text-lg md:text-md py-3 flex items-center'>
                                        <span className='mr-2'><AiOutlineCheckCircle className='text-lg md:text-xl text-orange-500' /></span>
                                        {item[key]}
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className='text-center mt-auto '>
                            <button className='border-2 border-orange-500 mt-4 px-4 py-1 rounded-full text-orange-500 hover:text-white hover:bg-[#f97316] duration-300'>Get Quote</button>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div >
    )
}

export default Plan