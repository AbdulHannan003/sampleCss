import React, { useState } from 'react'

function Plan() {
    const [plan, setPlan] = useState('logo');

    const logoProjects = [{
        // imgSrc: "logo.png",
    },
    ]

    const webProjects = [{
        // imgSrc: "web.png",
    }
    ]
    const brandProjects = [{
        // imgSrc: "brand.png",
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

        <div className='py-10 px-2'>
            <div className='max-w-[1240px] mx-auto p-4'>
                <h1 className='font-serif text-[#662e9b] text-2xl md:text-5xl font-bold text-center'>Our Plans</h1>
                <p className='text-center pt-4 md:text-lg font-bold'>Choose Your Plan</p>
                <p className='text-center pt-2 text-[#662e9b] md:text-lg text-bold'>We Provide The Best Services For The Most Reasonable Price</p>
            </div>
            <div className="max-w-[1240px] mx-auto md:text-lg py-1 text-center md:py-3 flex justify-evenly">
                <button
                    onClick={() => setPlan('logo')}
                    className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] focus:bg-[#662e9b] focus:text-white focus:shadow-lg font-bold'
                >
                    Logo
                </button>
                <button
                    onClick={() => setPlan('web')}
                    className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] focus:bg-[#662e9b] focus:text-white focus:shadow-lg font-bold'
                >
                    Web Design
                </button>
                <button
                    onClick={() => setPlan('brand')}
                    className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] focus:bg-[#662e9b] focus:text-white focus:shadow-lg font-bold'
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
                                        <span className='mr-2'><AiOutlineCheckCircle className='text-lg md:text-xl text-[#662e9b]' /></span>
                                        {item[key]}
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className='text-center mt-auto '>
                            <button className='border-2 border-[#662e9b] mt-4 px-4 py-1 rounded-full text-[#662e9b] hover:text-white hover:bg-[#f97316] duration-300'>Get Quote</button>
                        </div>
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Plan