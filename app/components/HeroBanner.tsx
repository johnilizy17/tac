"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

const avatars = ["1s.jpg", "2s.jpeg", "3s.jpeg"];

export default function HeroBanner() {
    return (
        <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Vibrant Moving Glows */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {avatars.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0.3, 0.6, 0.3],
                            scale: [1, 1.1, 1],
                            x: [0, i % 2 === 0 ? 100 : -100, 0],
                            y: [0, i % 2 === 0 ? -50 : 50, 0]
                        }}
                        transition={{
                            duration: 12 + i * 3,
                            repeat: Infinity,
                            delay: i * 1
                        }}
                        className={`absolute w-40 h-40 rounded-full border-2 border-tac-brand/20 overflow-hidden shadow-[0_0_50px_rgba(102,185,41,0.2)] ${i === 0 ? "top-[15%] left-[5%]" :
                                i === 1 ? "bottom-[15%] right-[10%]" :
                                    "top-[10%] right-[20%]"
                            }`}
                    >
                        <img src={img} alt="Avatar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-tac-brand/10 border border-tac-brand/30 text-tac-brand text-[11px] font-black tracking-[0.5em] mb-10 uppercase shadow-[0_0_20px_rgba(102,185,41,0.1)]"
                    >
                        <Sparkles size={14} />
                        Total Design Synergy
                    </motion.div>

                    <h1 className="text-[14vw] md:text-[10vw] font-black leading-[0.8] tracking-tighter text-white mb-10">
                        THE ART OF<br />
                        <span className="text-vibrant-gradient drop-shadow-[0_0_30px_rgba(102,185,41,0.2)]">PRECISION.</span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-16 px-4">
                        We blend <span className="text-tac-brand font-bold">Nigeria&apos;s vibrant energy</span> with global consulting rigor to create undeniable corporate breakthroughs.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <motion.button
                            whileHover={{ scale: 1.05, x: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-6 bg-tac-brand text-tac-dark px-12 py-6 font-black text-sm tracking-widest hover:bg-white transition-all duration-500 rounded-none shadow-[0_0_30px_rgba(102,185,41,0.4)]"
                        >
                            ACQUIRE STRATEGY
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-4 text-white font-black text-sm tracking-widest px-12 py-6 border border-white/20 glass-vibrant hover:bg-white/10 transition-all rounded-none"
                        >
                            <div className="w-12 h-12 rounded-full bg-tac-brand flex items-center justify-center shadow-[0_0_20px_rgba(102,185,41,0.5)]">
                                <Play size={18} fill="black" stroke="black" />
                            </div>
                            WATCH VISION
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[2px] h-16 bg-gradient-to-b from-tac-brand via-tac-cyan to-transparent" />
                <span className="text-[9px] font-black text-white/40 tracking-[0.6em] uppercase">Deep Dive</span>
            </motion.div>
        </section>
    );
}
