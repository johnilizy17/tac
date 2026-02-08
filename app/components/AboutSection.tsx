"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="magazine-grid">
                    {/* Glowing Pulse Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 lg:col-span-1 border-l-4 border-tac-brand/50 pl-6 mb-12 lg:mb-0 relative"
                    >
                        <div className="sticky top-32">
                            <span className="text-[12px] font-black tracking-[1.2em] text-vibrant-gradient uppercase [writing-mode:vertical-lr] rotate-180 h-48 drop-shadow-[0_0_10px_rgba(102,185,41,0.3)]">
                                VIBRANT_LEGACY
                            </span>
                        </div>
                    </motion.div>

                    {/* Content Area */}
                    <div className="col-span-12 lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-vibrant p-12 md:p-24 relative overflow-hidden group border-2 border-white/5"
                        >
                            {/* Rich Color Overlays */}
                            <div className="absolute top-0 right-0 w-96 h-96 bg-tac-brand/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-tac-brand/20 transition-colors duration-1000" />
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tac-electric-purple/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

                            <h2 className="text-[8vw] lg:text-[7vw] font-black tracking-tighter leading-[0.8] mb-12 text-white">
                                REDEFINING THE <br />
                                <span className="text-vibrant-gradient italic drop-shadow-[0_0_20px_rgba(102,185,41,0.2)]">CORE.</span>
                            </h2>
                            <p className="text-xl md:text-2xl text-gray-400 font-medium leading-relaxed mb-16 max-w-xl">
                                TAC Group is a composite one-stop Professional and Consulting hub, legally registered and operating in Nigeria since 2014. We fuse <span className="text-white">vibrancy</span> with <span className="text-tac-brand">technical rigor</span>.
                            </p>

                            <div className="grid grid-cols-2 gap-12 border-t border-white/10 pt-16">
                                <div className="group/stat">
                                    <span className="text-tac-brand font-black text-sm tracking-[0.4em] block mb-4 uppercase">Established</span>
                                    <span className="text-6xl font-black text-white group-hover/stat:text-vibrant-gradient transition-colors">2014</span>
                                </div>
                                <div className="group/stat">
                                    <span className="text-tac-cyan font-black text-sm tracking-[0.4em] block mb-4 uppercase">Market Tier</span>
                                    <span className="text-6xl font-black text-white group-hover/stat:text-tac-cyan transition-colors">ELITE</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Area */}
                    <div className="col-span-12 lg:col-span-4 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 1.1, rotate: 2 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.2, ease: "easeOut" }}
                            className="relative group p-4 glass-vibrant border-tac-brand/20"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-tr from-tac-brand to-tac-cyan blur-[30px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000" />
                            <div className="aspect-[4/5] overflow-hidden border border-white/10 relative">
                                <img
                                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                                    alt="Professional Mastery"
                                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-tac-dark/80 via-transparent to-transparent" />
                                <div className="absolute bottom-10 left-10">
                                    <div className="flex items-center gap-3">
                                        <div className="w-4 h-4 rounded-full bg-tac-brand animate-pulse" />
                                        <span className="text-xs font-black text-white tracking-widest uppercase">System Active</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
