"use client";
import {useState} from 'react';
import {motion} from 'framer-motion';
import {Lightbulb, Mail, MapPinPlus, Phone, Send} from 'lucide-react'
const Contact = () => {
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const formData = new FormData(form);
        const payload = {
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            message: formData.get("message") as string,
        };

        setIsSending(true);
        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };
    return (
        <section id='contact' className='pt-20 pb-12 px-6 bg-muted/30 md:scroll-mt-24 '>
            <div className='max-w-6xl mx-auto '>
                <motion.div
                    className="text-center md:mb-16"
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
                            <h3 className="mb-6">Contact Info</h3>
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
                                        <p className="text-sm text-muted-foreground">Phone number</p>
                                        <p>+48 576 308 931</p>
                                    </div>

                                </div>

                                <div className="flex items-center gap-4 group">
                                    <div className="p-3 rounded-lg bg-[var(--neon-cyan)]/10 text-[var(--neon-cyan)] group-hover:bg-[var(--neon-cyan)] group-hover:text-white transition-all">
                                        <MapPinPlus size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-muted-foreground">Localization</p>
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
                                <strong>Available for freelance work</strong>
                                <br />
                                I’m available for web development projects. Get in touch to discuss your project!
                            </p>
                        </div>
                    </motion.div>
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-[var(--neon-purple)] focus:outline-none transition-colors"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-[var(--neon-purple)] focus:outline-none transition-colors"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:border-[var(--neon-purple)] focus:outline-none transition-colors resize-none"
                                    placeholder="Write about your project"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full px-8 py-4 bg-[var(--neon-purple)] hover:bg-[var(--neon-purple)]/80 text-white rounded-lg transition-all hover:scale-105 hover:shadow-lg hover:shadow-[var(--neon-purple)]/50 flex items-center justify-center gap-2 disabled:opacity-60"
                            >
                                {isSending ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send message
                                    </>
                                )}
                            </button>

                            {status === "success" && (
                                <p className="text-green-500 text-sm">Wiadomość została wysłana!</p>
                            )}
                            {status === "error" && (
                                <p className="text-red-500 text-sm">Coś poszło nie tak, spróbuj ponownie.</p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;