"use client";

import { motion } from "framer-motion";

export default function Hero3D() {
    return (
        <div className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-tac-dark">
            {/* Background Gradients/Orbs */}
            <div className="absolute inset-0 pointer-events-none">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                        x: [0, 50, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-tac-brand rounded-full mix-blend-screen filter blur-[100px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.2, 0.4, 0.2],
                        x: [0, -30, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tac-brand rounded-full mix-blend-screen filter blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-tac-purple rounded-full mix-blend-overlay filter blur-[130px]"
                />
            </div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                        <span className="block text-white mb-2">Pioneering</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-tac-brand via-tac-purple to-tac-gold">
                            Business Excellence
                        </span>
                    </h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    TAC Group delivers world-class professional services, audit, and customized business solutions.
                    Empowering your growth with integrity and innovation.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <button className="px-8 py-4 bg-white text-tac-dark font-semibold rounded-full hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Our Services
                    </button>
                    <button className="px-8 py-4 border border-white/20 text-white rounded-full hover:bg-white/5 transition-colors backdrop-blur-sm">
                        Contact Us
                    </button>
                </motion.div>
            </div>

            {/* Floating 3D Elements (CSS/SVG Mockups) */}
            <motion.div
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-10 md:right-32 w-24 h-24 border border-tac-purple/30 rounded-xl backdrop-blur-sm rotate-12 hidden md:block"
            />
            <motion.div
                animate={{ y: [15, -15, 15], rotate: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-10 md:left-20 w-32 h-32 border border-tac-gold/20 rounded-full backdrop-blur-md hidden md:block"
            />
        </div>
    );
}
