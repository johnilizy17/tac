"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const navLinks = [
        { name: "STRATEGY", href: "#about" },
        { name: "SERVICES", href: "#services" },
        { name: "RESOURCES", href: "#resources" },
        { name: "NETWORK", href: "#team" },
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className={`fixed top-0 left-0 right-0 z-[100] pt-6 px-6`}
        >
            <div className={`max-w-7xl mx-auto flex items-center justify-between px-10 py-5 transition-all duration-700 ${scrolled ? "glass-vibrant rounded-full border border-tac-brand/30 shadow-[0_0_30px_rgba(102,185,41,0.2)]" : "bg-transparent"
                }`}>
                {/* Logo Area */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="w-12 h-12 bg-tac-brand rounded-none flex items-center justify-center font-black text-2xl text-tac-dark group-hover:rotate-90 transition-transform duration-700 shadow-[0_0_20px_rgba(102,185,41,0.5)]">
                        T
                    </div>
                    <div className="flex flex-col">
                        <span className="text-2xl font-black tracking-tighter text-white group-hover:text-vibrant-gradient transition-colors">
                            TAC GROUP
                        </span>
                        <span className="text-[8px] font-black text-tac-brand tracking-[0.4em] uppercase">Vibrant Precision</span>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-black text-gray-400 hover:text-white tracking-[0.4em] transition-all duration-500 relative group overflow-hidden"
                        >
                            <span className="relative z-10 group-hover:text-tac-cyan transition-colors">{link.name}</span>
                            <motion.div
                                className="absolute bottom-0 left-0 w-full h-[1px] bg-vibrant-gradient translate-y-full group-hover:translate-y-0 transition-transform duration-500"
                            />
                        </Link>
                    ))}
                    <button className="flex items-center gap-3 px-8 py-3 bg-tac-brand text-tac-dark font-black text-[10px] tracking-widest hover:bg-white transition-all duration-500 rounded-full shadow-[0_0_20px_rgba(102,185,41,0.3)] hover:scale-105 active:scale-95">
                        <Sparkles size={12} />
                        CONNECT
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden w-12 h-12 flex items-center justify-center glass-vibrant rounded-full text-white"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    {mobileOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
                className={`lg:hidden fixed inset-0 z-[-1] bg-tac-dark/95 backdrop-blur-2xl p-10 pt-40 pointer-events-none ${mobileOpen ? "pointer-events-auto" : ""}`}
            >
                <div className="flex flex-col gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-5xl font-black text-white tracking-widest hover:text-vibrant-gradient transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            </motion.div>
        </motion.nav>
    );
}
