"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
    return (
        <section className="relative w-full h-[90vh] min-h-[700px] overflow-hidden bg-tac-dark">
            {/* Immersive Background Image */}
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
                    alt="Corporate Building"
                    className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-tac-dark via-tac-dark/80 to-transparent" />
            </div>

            <div className="relative z-10 h-full max-w-7xl mx-auto px-4 flex flex-col justify-center">
                <div className="max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-12 h-[2px] bg-tac-brand" />
                        <span className="text-tac-brand uppercase tracking-[0.4em] text-xs font-bold">Nigeria&apos;s Leading Consulting Firm</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8"
                    >
                        PIONEERING<br />
                        <span className="text-transparent stroke-text">BUSINESS</span><br />
                        EXCELLENCE.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="text-xl text-gray-400 max-w-xl mb-12 leading-relaxed font-light"
                    >
                        We deliver world-class audit, tax, and consulting solutions that drive unprecedented growth and strategic clarity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-wrap gap-6"
                    >
                        <button className="btn-premium flex items-center gap-3">
                            EXPLORE SERVICES <ArrowRight className="w-5 h-5" />
                        </button>
                        <button className="px-8 py-4 border border-white/10 text-white font-bold hover:bg-white hover:text-tac-dark transition-all duration-500">
                            GET IN TOUCH
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-tac-dark to-transparent" />

            <style jsx>{`
                .stroke-text {
                    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </section>
    );
}
