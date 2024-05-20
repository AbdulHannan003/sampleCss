import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/contact');
    }

    return (
        <div className='bg-[#662e9b] p-4'>
            <div className='max-w-[1240px] items-center py-2 flex justify-between mx-auto'>
                <div className='text-white'>
                    &copy; {new Date().getFullYear()} SASKA Solution. All rights reserved.
                </div>
                <ul className='hidden md:flex text-white gap-5'>
                    <li>
                        <a href='#' className='text-white'>Privacy Policy</a>
                    </li>
                    <li>
                        <a href='#' className='text-white'>Terms of Service</a>
                    </li>
                    <li>
                        <a onClick={handleClick} href='#' className='text-white'>Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;