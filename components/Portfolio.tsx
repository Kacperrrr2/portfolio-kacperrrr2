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
        tags: string[],
        liveUrl: string,
        githubUrl: string,
        gradient: string,

    }

    const projects: typeProject[] = [
        {
            title: "E-Commerce Platform",
            description: "Kompleksowa platforma e-commerce z systemem płatności, zarządzaniem produktami i panelem administracyjnym.",
            image: "https://images.unsplash.com/photo-1760536928911-40831dacdbc3?w=800&h=600&fit=crop",
            tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            title: "Task Management App",
            description: "Aplikacja do zarządzania projektami i zadaniami z funkcjami współpracy zespołowej i real-time updates.",
            image: "https://images.unsplash.com/photo-1758611970983-ff9f0ec0b0c0?w=800&h=600&fit=crop",
            tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            title: "Weather Dashboard",
            description: "Interaktywny dashboard pogodowy z prognozami, mapami i powiadomieniami o ekstremalnych warunkach.",
            image: "https://images.unsplash.com/photo-1617240016072-d92174e44171?w=800&h=600&fit=crop",
            tags: ["Vue.js", "OpenWeather API", "Chart.js", "Vite"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-cyan-500 to-blue-500",
        },
        {
            title: "Social Media Analytics",
            description: "Narzędzie do analizy danych z social media z wizualizacjami, raportami i AI-powered insights.",
            image: "https://images.unsplash.com/photo-1620607845876-214068622f8c?w=800&h=600&fit=crop",
            tags: ["React", "TypeScript", "Recharts", "Express"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-purple-500 to-blue-500",
        },
        {
            title: "AI Content Generator",
            description: "Generator treści wspomagany AI do tworzenia postów blogowych, opisów produktów i treści marketingowych.",
            image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?w=800&h=600&fit=crop",
            tags: ["Next.js", "OpenAI API", "Prisma", "tRPC"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-pink-500 to-purple-500",
        },
        {
            title: "Fitness Tracker",
            description: "Aplikacja mobilna do śledzenia treningów, diety i postępów z personalizowanymi planami treningowymi.",
            image: "https://images.unsplash.com/photo-1758611970983-ff9f0ec0b0c0?w=800&h=600&fit=crop",
            tags: ["React Native", "Firebase", "Redux", "Health APIs"],
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/kacperrrr2",
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section id="porfolio" className="py-24 px-6 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    <h2 className='mb-4'>Moje projekty</h2>


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