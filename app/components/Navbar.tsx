"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, ChevronRight } from "lucide-react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { scrollY } = useScroll();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        setScrolled(latest > 50);
        if (latest > previous && latest > 150) {
            setHidden(true);
            setIsOpen(false);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Partners", href: "/partners" },
        { name: "Team", href: "/#team" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"}`}
            >
                <div className="glass-card rounded-[2rem] md:rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-12 max-w-5xl w-full mx-auto border-foreground/10 shadow-2xl">
                    <Link href="/" className="text-lg md:text-xl font-black tracking-tighter flex items-center gap-2">
                        <div className="w-8 h-8 bg-tac-brand rounded-lg flex items-center justify-center text-tac-dark text-sm">T</div>
                        <span className="text-foreground">TAC<span className="text-tac-brand">GROUP</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold uppercase tracking-widest text-foreground/70">
                        {navLinks.slice(0, 6).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="hover:text-tac-brand transition-colors cursor-pointer relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-tac-brand transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 md:p-3 rounded-full hover:bg-foreground/10 transition-colors text-foreground group relative"
                            title="Toggle Theme"
                        >
                            <AnimatePresence mode="wait">
                                {theme === "dark" ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    >
                                        <Sun size={18} />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="moon"
                                        initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                        animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                        exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                    >
                                        <Moon size={18} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>

                        <Link
                            href="/contact"
                            className="hidden md:flex px-6 py-2.5 bg-tac-brand hover:scale-105 active:scale-95 text-tac-dark text-[11px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-tac-brand/20"
                        >
                            Get in Touch
                        </Link>

                        {/* Mobile Toggle */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="lg:hidden p-2 rounded-xl bg-foreground/5 text-foreground hover:bg-foreground/10 transition-colors"
                        >
                            {isOpen ? <X size={20} /> : <Menu size={20} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 lg:hidden"
                    >
                        <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" onClick={() => setIsOpen(false)} />
                        <div className="absolute top-24 left-4 right-4 glass-card p-6 rounded-[2.5rem] border-tac-brand/20 shadow-2xl">
                            <div className="flex flex-col gap-2">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between p-4 rounded-2xl hover:bg-tac-brand/10 group transition-colors"
                                        >
                                            <span className="text-lg font-bold text-foreground group-hover:text-tac-brand transition-colors">
                                                {link.name}
                                            </span>
                                            <ChevronRight className="text-tac-brand opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                                        </Link>
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="mt-4 pt-6 border-t border-foreground/5"
                                >
                                    <Link
                                        href="/contact"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full bg-tac-brand py-4 rounded-2xl flex items-center justify-center gap-3 text-tac-dark font-black uppercase tracking-widest shadow-xl shadow-tac-brand/20"
                                    >
                                        Consultation
                                        <ChevronRight size={18} />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
