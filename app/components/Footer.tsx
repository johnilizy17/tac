"use client";

import { motion } from "framer-motion";
import { ArrowUp, Instagram, Twitter, Linkedin, Facebook, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative pt-40 pb-16 overflow-hidden bg-transparent">
            {/* Vibrant Rainbow Bar */}
            <div className="absolute top-0 left-0 w-full h-[4px] bg-vibrant-gradient shadow-[0_0_20px_rgba(102,185,41,0.5)]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
                    {/* Brand Area */}
                    <div className="col-span-12 lg:col-span-5">
                        <Link href="/" className="flex items-center gap-4 mb-10 group">
                            <div className="w-16 h-16 bg-tac-brand rounded-none flex items-center justify-center font-black text-3xl text-tac-dark shadow-[0_0_30px_rgba(102,185,41,0.4)]">
                                T
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-black tracking-tighter text-white group-hover:text-vibrant-gradient transition-colors">TAC GROUP</span>
                                <span className="text-[10px] font-black text-tac-brand tracking-[0.5em] uppercase">Vibrant Precision</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-xl font-medium leading-relaxed max-w-md mb-12">
                            A world-class indigenous multi-disciplinary professional service firm based in Nigeria, providing <span className="text-white italic">vibrant strategic solutions</span> since 2014.
                        </p>

                        <div className="flex gap-6">
                            {[Linkedin, Twitter, Instagram, Facebook].map((Icon, i) => (
                                <motion.a
                                    key={i}
                                    href="#"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    className="w-14 h-14 rounded-full glass-vibrant flex items-center justify-center text-white hover:text-tac-brand transition-all duration-500 border border-white/10 card-glow"
                                >
                                    <Icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="col-span-12 md:col-span-4 lg:col-span-3">
                        <h4 className="text-white font-black text-sm tracking-[0.4em] mb-10 uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">Quick Access</h4>
                        <ul className="space-y-6">
                            {["Our Strategy", "Core Services", "Global Network", "Elite Careers", "Insights"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 font-bold text-sm tracking-widest hover:text-tac-cyan transition-all duration-300 flex items-center gap-3 group">
                                        <div className="w-1.5 h-1.5 rounded-full bg-tac-brand opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {link.toUpperCase()}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact & CTA */}
                    <div className="col-span-12 md:col-span-8 lg:col-span-4">
                        <h4 className="text-white font-black text-sm tracking-[0.4em] mb-10 uppercase">Secure Engagement</h4>
                        <div className="glass-vibrant p-10 rounded-none border border-white/5 relative group card-glow">
                            <div className="absolute top-0 right-0 p-4 text-tac-brand opacity-20"><Sparkles /></div>
                            <p className="text-gray-400 text-sm mb-8 leading-relaxed font-bold tracking-tight">Ready to synchronize your business with vibrant professional excellence?</p>
                            <button className="w-full bg-tac-brand text-tac-dark py-5 font-black text-sm tracking-widest hover:bg-white transition-all duration-700 shadow-[0_0_20px_rgba(102,185,41,0.3)]">
                                INITIATE DIALOGUE
                            </button>
                        </div>
                        <div className="mt-10 flex flex-col gap-3">
                            <span className="text-xs font-black text-gray-500 tracking-widest uppercase">Global Headquarters</span>
                            <span className="text-white font-bold text-sm">Lagos, Nigeria — Operational 24/7/365</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                    <span className="text-[10px] font-black text-gray-500 tracking-[0.4em] uppercase">
                        © 2026 TAC GROUP • PRECISION IN VIBRANCY
                    </span>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-4 group"
                    >
                        <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase group-hover:text-tac-brand transition-colors">Elevate to Summit</span>
                        <div className="w-14 h-14 rounded-full bg-tac-brand flex items-center justify-center text-tac-dark shadow-[0_0_20px_rgba(102,185,41,0.4)] transition-all">
                            <ArrowUp size={20} />
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Radiant Bottom Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-tac-brand/10 rounded-full blur-[150px] pointer-events-none" />
        </footer>
    );
}
