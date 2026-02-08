"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
    "Pioneering Excellence",
    "Strategizing Growth",
    "Ensuring Integrity",
    "Optimizing Performance",
    "TAC Group Revamp"
];

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Progress counter
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500); // Small buffer
                    return 100;
                }
                return prev + 1;
            });
        }, 30);

        // Text cycling
        const textInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 800);

        return () => {
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="fixed inset-0 z-[100] bg-tac-dark flex flex-col items-center justify-center pointer-events-auto"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 overflow-hidden pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tac-brand/20 rounded-full blur-[120px] animate-pulse" />
                    </div>

                    <div className="relative z-10 text-center">
                        {/* Logo Animation */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2"
                        >
                            TAC<span className="text-tac-brand">GROUP</span>
                        </motion.div>

                        {/* Cycling Text */}
                        <div className="h-8 overflow-hidden mb-12">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-gray-500 uppercase tracking-[0.3em] text-[10px] md:text-xs font-semibold"
                                >
                                    {loadingTexts[textIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Percentage and Bar */}
                        <div className="relative w-64 md:w-80">
                            <div className="flex justify-between items-end mb-2">
                                <span className="text-gray-600 text-[10px] uppercase font-bold tracking-widest leading-none">Loading System</span>
                                <span className="text-tac-brand font-mono text-2xl font-light leading-none">
                                    {progress}%
                                </span>
                            </div>
                            <div className="w-full h-[1px] bg-white/5 relative">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-tac-brand shadow-[0_0_15px_#66B929]"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${progress}%` }}
                                    transition={{ ease: "linear" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Footer Style Decoration */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.3 }}
                        className="absolute bottom-10 text-[10px] text-gray-400 tracking-widest font-mono uppercase"
                    >
                        © 2026 Professional Business Consulting
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
