"use client";
import React from 'react';
import {motion} from 'framer-motion';
import {Lightbulb, Mail, MapPinPlus, Phone} from 'lucide-react'
const Contact = () => {
    return (
        <section id='contact' className='py-24 px-6 bg-muted/30'>
            <div className='max-w-6xl mx-auto'>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="mb-4">Skontaktuj się ze mną</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Masz projekt w głowie? Napisz do mnie, a omówimy szczegóły współpracy
                    </p>

                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{once: true }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="mb-6">Informacje kontaktowe</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <Mail size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">Email</p>
                                        <p>k4cper.petelicki@gmail.com</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-purple-500/10 text-purple-500 group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        <Phone size={20} />
                                    </div>

                                    <div>
                                        <p className="text-sm text-muted-foreground">Telefon</p>
                                        <p>+48 576 308 931</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-white transition-all">
                                        <MapPinPlus size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Lokalizacja</p>
                                        <p>Wrocław, Kielce Polska</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="p-6 bg-gradient-to-br from-[var(--neon-purple)]/20 via-[var(--neon-blue)]/20 to-[var(--neon-cyan)]/20 rounded-2xl border border-[var(--neon-purple)]/30">
                            <p className="text-sm gap-4">
                                <span>
                                    <Lightbulb className="text-white"/>
                                </span>
                                <strong>Dostępny na freelance</strong>
                                <br />
                                Przyjmuję zlecenia na projekty web development. Skontaktuj się, aby omówić Twój projekt!
                            </p>
                        </div>
                    </motion.div>
                    {/* Contact Form */}



                </div>
            </div>
        </section>
    );
};

export default Contact;