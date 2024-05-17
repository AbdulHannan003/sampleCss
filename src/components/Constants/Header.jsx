import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';
import saskaLogo from '../../assets/saskalogo.png';

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
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
    };

    return (
        <div className='bg-transparent absolute p-4 w-full'>
            <div className='max-w-[1240px] items-center py-2 flex justify-between mx-auto'>
                <motion.div
                    className='flex'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div className='w-[55px] h-[55px]' variants={itemVariants}>
                        <img src={saskaLogo} alt="" className='h-full w-full content-center' />
                    </motion.div>
                    <motion.div className='h-[50px] border-x-2 border-white mx-2' variants={itemVariants}></motion.div>
                    <motion.p className='content-center text-3xl text-white-100 font-bold' variants={itemVariants}>
                        SASKA Solution
                    </motion.p>
                </motion.div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white-100 text-3xl md:hidden block' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white-100 text-3xl md:hidden block' />
                }
                <ul className='hidden md:flex text-white-100 gap-12'>
                    {links.map((items, i) => (
                        <li key={i}>
                            <Link className='hover:border-b-4 border-primary duration-100 focus:border-b-2' to={items.path}>{items.link}</Link>
                        </li>
                    ))}
                </ul>
                {/* responsive menu */}
                <ul className={`duration-500 md:hidden w-full fixed h-screen bg-primary text-white-100 gap-5 top-[84px] ${toggle ? 'left-[0]' : 'left-[-100%]'}`}>
                    {links.map((items, i) => (
                        <li key={i}>
                            <Link className='flex justify-center text-lg py-5' onClick={() => setToggle(!toggle)} to={items.path}>{items.link}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Header