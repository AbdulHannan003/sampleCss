import React from 'react'
import { AiOutlinePhone } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }

    return (
        <div className=' w-max-[1240px] h-auto'>
            <div className='w-max-[1024px] py-10 md:grid justify-around md:grid-cols-2'>
                <div className='col-span-1 md:mx-auto p-4 flex flex-col justify-center'>
                    <p className='text-xl font-bold text-black'>Contact us</p>
                    <h1 className='text-3xl p-2 italic font-bold my-2  text-[#662e9b]'>Don't Wait, Create Your Success</h1>
                </div>
                <div className='p-4 mx-auto text-center col-span-1 w-3/4'>
                    <p className='text-lg'>We are here to help you.<br /> Feel free to contact us anytime. </p>
                    <button onClick={handleClick} className=' border-2 mx-auto md:px-12 border-[#662e9b] mt-4 px-4 flex flex-row py-1 rounded-full text-[#662e9b] hover:text-white hover:bg-[#662e9b] duration-300 items-center'>Contact<span className='pl-2 text-2xl'><AiOutlinePhone /></span></button>
                </div>
            </div>
        </div >
    )
}

export default Contact