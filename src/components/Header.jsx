import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='bg-orange-500 p-4'>
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
                <ul className='hidden md:flex text-white gap-5'>
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Portfolio
                    </li>
                    <li>
                        Contact
                    </li>
                </ul>
                {/* responsive menu */}
                <ul className={`duration-500 md:hidden w-full fixed h-screen bg-slate-900 text-white gap-5 top-[84px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
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