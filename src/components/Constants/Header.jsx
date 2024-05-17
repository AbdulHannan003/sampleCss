import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';

function Header() {
    const [toggle, setToggle] = useState(false)

    const links = [
        {
            id: 1,
            link: 'Home',
            path: '/'
        },
        {
            id: 3,
            link: 'Our Work',
            path: '/portfolio'
        },
        {
            id: 2,
            link: 'Services',
            path: '/services'
        },
        {
            id: 4,
            link: 'Contact',
            path: '/contact'
        },
    ]
    return (
        <div className='bg-orange-500 p-4 w-full'>
            <div className='max-w-[1240px] items-center py-2 flex justify-between mx-auto'>
                <div className='text-3xl text-white font-bold'>
                    SASKA Solution
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-3xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white gap-12'>
                    {links.map((items, i) => (
                        <li key={i}>
                            <Link to={items.path}>{items.link}</Link>
                        </li>
                    ))}
                </ul>
                {/* responsive menu */}
                <ul className={`duration-500 md:hidden w-full fixed h-screen bg-orange-500 text-white gap-5 top-[84px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    <li className='flex justify-center text-lg py-5'>
                        Home
                    </li>
                    <li className='flex justify-center text-lg py-5'>
                        About
                    </li>
                    <li className='flex justify-center text-lg py-5'>
                        Portfolio
                    </li>
                    <li className='flex justify-center text-lg py-5'>
                        Contact
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header