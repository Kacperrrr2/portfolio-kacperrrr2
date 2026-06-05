"use client"
import React from 'react';
import { motion } from "motion/react";
import {Mail, Download } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
const Hero = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 relative pt-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{opacity:0, x:-50}}
                    animate={{opacity: 1, x:0}}
                    transition={{duration:0.6}}
                >
                    <div className="mb-6">
                       <motion.h1
                        className="mb-4"
                        initial={{opacity:0, y:20}}
                        animate={{opacity:1, y:0}}
                        transition={{delay:0.4}}
                       >
                           Hi, I’m <span className="text-[var(--neon-purple)]">Kacper Petelicki</span>
                           <motion.span
                               className="inline-block text-3xl"
                               animate={{
                                   rotate: [0, 14, -8, 14, -4, 10, 0],
                                   scale: [1, 1.3, 1.1, 1.2, 1],
                               }}
                               transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}

                           >
                               👋
                           </motion.span>
                       </motion.h1>
                        <motion.p
                            className="text-white max-w-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            I’m a Full-Stack Developer with a passion for great design. I turn ideas into modern, fast web applications that users love
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex flex-wrap gap-4 mb-8"
                        initial={{ opacity: 0, y:20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{delay:0.6}}
                    >
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--neon-purple)]/50"
                        >
                            Write to me
                        </Link>

                    </motion.div>
                    <motion.div
                        className="flex gap-4"
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{delay:0.8}}
                        >
                        <a
                            href="https://github.com/kacperrrr2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border hover:border-gray-500 hover:bg-gray-600 transition-all"
                        >
                            <FaGithub size={20}/>
                        </a>

                        <a href="https://www.linkedin.com/in/kacper-petelicki"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-full border border-border hover:border-blue-500 hover:bg-blue-600 transition-all">
                            <FaLinkedin size={20}/>
                        </a>

                        <a href="k4cper.petelicki@gmail.com"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="p-3 rounded-full border border-border hover:border-cyan-500 hover:bg-cyan-600 transition-all">
                            <Mail size={20}/>
                        </a>
                    </motion.div>
                </motion.div>
                <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative">
                    <div className="group relative w-full aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full blur-2xl opacity-30 group-hover:scale-120"></div>
                        <div className="relative aspect-square rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-300 ">
                            <Image
                                src="/profile-photo.jpg"
                                alt="Kacper Petelicki"
                                width={600}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </div>
                </motion.div>
            </div>

        </div>
    );
};

export default Hero;