'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Server } from 'lucide-react';

const Skills = () => {
    type Skills = {
        icon: React.ComponentType;
        title: string;
        description: string;
        skills: {
            name: string;
            image: string;
        }[];
        color: string; // np. '#a855f7' (purple-500), '#3b82f6' (blue-500)
    };

    const skillCategories: Skills[] = [
        {
            icon: Palette,
            title: 'Design',
            description: 'Tworzę estetyczne interfejsy użytkownika z dbałością o każdy detal.',
            skills: [
                {
                    name: 'Figma',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
                },
                {
                    name: 'Adobe XD',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/adobexd.svg',
                },
                {
                    name: 'UI/UX Design',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
                },
                {
                    name: 'Tailwind CSS',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/tailwindcss.svg',
                },
                {
                    name: 'Responsive Design',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/figma.svg',
                },
            ],
            color: '#a855f7', // purple-500
        },
        {
            icon: Code2,
            title: 'Frontend',
            description: 'Buduję nowoczesne aplikacje webowe z wykorzystaniem najnowszych technologii.',
            skills: [
                {
                    name: 'React',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
                },
                {
                    name: 'Next.js',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nextdotjs.svg',
                },
                {
                    name: 'TypeScript',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/typescript.svg',
                },
                {
                    name: 'Vue.js',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vuedotjs.svg',
                },
                {
                    name: 'Vite',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/vite.svg',
                },
                {
                    name: 'React Query',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/react.svg',
                },
            ],
            color: '#3b82f6', // blue-500
        },
        {
            icon: Server,
            title: 'Backend',
            description: 'Tworzę skalowalne i bezpieczne rozwiązania serwerowe.',
            skills: [
                {
                    name: 'Node.js',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/nodedotjs.svg',
                },
                {
                    name: 'Express',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/express.svg',
                },
                {
                    name: 'PostgreSQL',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/postgresql.svg',
                },
                {
                    name: 'MongoDB',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/mongodb.svg',
                },
                {
                    name: 'GraphQL',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/graphql.svg',
                },
                {
                    name: 'REST APIs',
                    image: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/rest.svg',
                },
            ],
            color: '#06b6d4', // cyan-500
        },
    ];

    return (
        <section id="skills" className="py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-4">My Skills</h2>
                    <p className="text-white max-w-2xl mx-auto">
                        I have experience in creating full-stack apps
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="group relative"
                            >
                                <div
                                    className="p-8 bg-card border border-border rounded-2xl h-full flex flex-col hover:border-[var(--color)] transition-all hover:shadow-xl hover:shadow-[var(--color)]/20"
                                    style={{ '--color': category.color } as React.CSSProperties}
                                >
                                    <div
                                        className="p-4 rounded-xl mb-6 group-hover:scale-110 transition-transform aspect-square w-fit flex items-center justify-center"
                                        style={{
                                            backgroundColor: `color-mix(in srgb, ${category.color} 10%, transparent)`,
                                            color: category.color,
                                        }}
                                    >
                                        <Icon />
                                    </div>
                                    <h3 className="mb-3">{category.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-6">
                                        {category.description}
                                    </p>

                                    {/* Skills Tags */}
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className="inline-flex items-center gap-2 px-3 py-1 text-xs rounded-full border border-border hover:border-[var(--color)] transition-colors"
                                                style={{ '--color': category.color } as React.CSSProperties}
                                            >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-4 h-4 brightness-0 invert opacity-80"
                        />
                        <span>{skill.name}</span>
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;