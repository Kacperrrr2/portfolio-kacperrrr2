import {Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-12 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Copyright */}
                    <p className="text-muted-foreground text-sm flex items-center gap-2">
                        © {currentYear} Kacper Petelicki. Made with{" "}
                        <Heart size={14} className="fill-purple-500 text-purple-500" />{" "}
                        by Kacper Petelicki
                    </p>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a
                            href="https://github.com/kacperrrr2"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-[var(--neon-purple)]/10 hover:text-[var(--neon-purple)] transition-all"
                            aria-label="GitHub"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg hover:bg-[var(--neon-blue)]/10 hover:text-[var(--neon-blue)] transition-all"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={20} />
                        </a>
                        <a
                            href="mailto:alex.kowalski@example.com"
                            className="p-2 rounded-lg hover:bg-[var(--neon-cyan)]/10 hover:text-[var(--neon-cyan)] transition-all"
                            aria-label="Email"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
