"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {ExternalLink} from "lucide-react";
import {FaGithub} from "react-icons/fa";

const Portfolio = () => {
    type typeProject = {
        title: string,
        description: string,
        image: string,
        category: string,
        tags: string[],
        liveUrl: string,
        githubUrl: string,
        gradient: string,

    }

    const projects: typeProject[] = [
        {
            title: "Testownik",
            description: "Contributed to the “Testownik” app, created by students from the Solvro student research club, which supports learning through user-created quizzes",
            image: "https://radioluz.pl/wp-content/uploads/2026/01/blog-1-750x422.png",
            category: "WebDev",
            tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://testownik.solvro.pl/",
            githubUrl: "https://github.com/Solvro/web-testownik",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Cocktails app",
            description: "Frontend recruitment assignment for KN Solvro",
            image:"cocktails.png",
            category: "WebDev",
            tags: ["Next.js","Shadcn","TanstackQuery", "Tailwind CSS"],
            liveUrl: "https://cocktails-solvro-frontend-k3xb6bbn5-kacperrrr2s-projects.vercel.app",
            githubUrl: "https://github.com/Kacperrrr2/cocktails-solvro-frontend",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            title: "Puzzle game",
            description: "High School competition",
            image:"puzzle_game.jpg",
            category: "GameDev",
            tags: ["ReactJS","CSS"],
            liveUrl: "",
            githubUrl: "",
            gradient: "from-cyan-500 to-blue-500",
        }
        ,


    ];
    const categories: string[] = ["WebDev", "Graphics"];

    return (
        <section id="portfolio" className="py-24 px-6 bg-muted/30  ">
            <div className="max-w-7xl mx-auto md:mt-27 ">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    <h2 className='mb-4'>Portfolio</h2>


                </motion.div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch auto-rows-fr">
                    {projects.map((project: typeProject, index) => (
                        <motion.div
                            key={project.title}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{delay: index * 0.1}}
                            className="group"
                        >
                            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-2xl h-full  transition-all duration-300 hover:-translate-y-2">
                                {/* Project Image */}
                                <div className="relative aspect-video overflow-hidden">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />

                                    {/* Overlay with links */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors"
                                        >
                                            <ExternalLink size={20} className="text-black" />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-white/90 hover:bg-white rounded-full transition-colors"
                                        >
                                            <FaGithub size={20} className="text-black" />
                                        </a>
                                    </div>
                                </div>

                                {/* Project Info */}
                                <div className="p-6">
                                    <h3 className="mb-3">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Tech Stack Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 text-xs bg-muted rounded-full"
                                            >
                        {tag}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </motion.div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default Portfolio;