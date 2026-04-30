import React from 'react';
import Link from "next/link";
import Logo from "@/components/ui/Logo";
const site=['home', 'skills', 'porfolio', 'contact']
const Header = () => {
    return (
        <header className='flex w-full items-center justify-between bg-[#0a0a0a] p-6 text-white'>
            <div className='flex items-center gap-4 text-xl font-bold'>
                <Logo/>Kacper Petelicki
            </div>

            <div className='flex flex-row items-center gap-4 text-gray-400'>
                <ul  className='flex flex-row items-center gap-10'>
                    {site.map((item: string, index: number) =>
                        <li className='relative group hover:text-white' key={index}>
                            <Link href={`/${item}`}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
                            </Link>

                        </li>)}

                    <li>
                        <Link href='/hire-me'>
                            <button className='px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600 transition-colors hover:scale-105'>
                                Hire me
                            </button>
                        </Link>
                    </li>


                </ul>
            </div>

        </header>
    );
};

export default Header;