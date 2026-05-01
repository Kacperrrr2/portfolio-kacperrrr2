"use client"

import React, {useState} from 'react';
import Link from "next/link";
import Logo from "../public/logo.png";
import Image from "next/image";
import {Menu,X} from "lucide-react"
import {motion} from "framer-motion";

const site=['home', 'skills', 'porfolio', 'contact']

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (

        <header className='w-full bg-[#0a0a0a] p-6 text-white'>


            <div className='flex items-center justify-between w-full'>
                <div className='flex items-center gap-4 text-xl font-bold'>
                    <Image src={Logo} alt='logo'/> Kacper Petelicki
                </div>

                <nav className='hidden md:flex flex-row items-center gap-10 text-gray-400'>
                    <ul className='flex flex-row items-center gap-10'>
                        {site.map((item, index) => (
                            <li className='relative group hover:text-white' key={index}>
                                <Link href={`/${item}`}>
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href='/hire-me'>
                                <button className='px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors'>
                                    Hire me
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* MOBILE MENU BUTTON */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className='md:hidden p-2 rounded-lg hover:bg-zinc-800 transition-colors'
                >
                    {isOpen ? <X/> : <Menu/>}
                </button>
            </div>

            {isOpen && (
                <motion.div
                    className="md:hidden mt-4 py-4 border-t border-zinc-800"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                >
                    <ul className='flex flex-col gap-4'>
                        {site.map((item, index) => (
                            <li className='text-gray-400 hover:text-white transition-colors py-2' key={index}>
                                <Link href={`/${item}`} onClick={() => setIsOpen(false)} >
                                    {item.charAt(0).toUpperCase() + item.slice(1)}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </header>
    );
};

export default Header;