"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        setScrolled(latest > 50);
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const navLinks = [
        { name: "ABOUT", href: "/#about" },
        { name: "METHOD", href: "/#ramp" },
        { name: "SERVICES", href: "/#services" },
        { name: "INDUSTRIES", href: "/#industries" },
        { name: "TEAM", href: "/#team" },
        { name: "GALLERY", href: "/gallery" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-tac-dark border-b border-white/5 py-4" : "bg-transparent py-8"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo Area */}
                <div className="flex items-center gap-4">
                    <Link href="/" className="text-2xl font-black tracking-tighter text-white flex items-center">
                        TAC<span className="text-tac-brand">GROUP</span>
                    </Link>
                    <div className="w-[1px] h-4 bg-white/20 hidden lg:block ml-2" />
                </div>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-black text-gray-400 hover:text-white hover:tracking-[0.2em] transition-all duration-300 tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        href="/contact"
                        className="px-8 py-3 bg-tac-brand text-tac-dark font-black text-[11px] tracking-widest hover:bg-white transition-all duration-500"
                    >
                        ESTABLISH CONTACT
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className="lg:hidden text-white hover:text-tac-brand transition-colors"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Slide-out */}
            <motion.div
                initial={false}
                animate={isMenuOpen ? { x: 0 } : { x: "100%" }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="fixed inset-0 bg-tac-dark z-50 flex flex-col p-10 lg:hidden"
            >
                <div className="flex justify-end mb-20">
                    <button onClick={() => setIsMenuOpen(false)} className="text-white">
                        <X size={32} />
                    </button>
                </div>

                <div className="flex flex-col gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-4xl font-black text-white hover:text-tac-brand transition-colors tracking-tighter"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-8 text-2xl font-black text-tac-brand tracking-tighter"
                    >
                        GET IN TOUCH →
                    </Link>
                </div>

                <div className="mt-auto border-t border-white/5 pt-10">
                    <p className="text-gray-500 text-xs tracking-widest uppercase">TAC Professional Services</p>
                    <p className="text-gray-600 text-[10px] mt-2 italic">Precision in every professional engagement.</p>
                </div>
            </motion.div>
        </motion.nav>
    );
}
