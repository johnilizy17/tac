"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="glass-card rounded-full px-8 py-4 flex items-center justify-between gap-12 max-w-4xl w-full mx-auto">
                <Link href="/" className="text-xl font-bold tracking-tighter text-white">
                    TAC<span className="text-tac-brand">GROUP</span>
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
                    <Link href="/" className="hover:text-white transition-colors">Home</Link>
                    <Link href="/#about" className="hover:text-white transition-colors">About</Link>
                    <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                    <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                    <Link href="/#team" className="hover:text-white transition-colors">Team</Link>
                    <Link href="/gallery" className="hover:text-white transition-colors">Gallery</Link>
                </div>

                <Link
                    href="/contact"
                    className="hidden md:block px-5 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-full transition-colors border border-white/5"
                >
                    Get in Touch
                </Link>

                {/* Mobile Menu Toggle (Simplified) */}
                <button className="md:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                </button>
            </div>
        </motion.nav>
    );
}
