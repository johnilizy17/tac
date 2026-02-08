"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
    "VIBRANT STRATEGY",
    "ELECTRIC PRECISION",
    "NEON INTEGRITY",
    "CYAN ANALYTICS",
    "TAC GROUP"
];

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 800);
                    return 100;
                }
                return prev + 1;
            });
        }, 25);

        const textInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 500);

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
                    exit={{
                        clipPath: "circle(0% at 50% 50%)",
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[1000] bg-tac-dark flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
                >
                    {/* Vibrant Background Pulses */}
                    <div className="absolute inset-0 overflow-hidden">
                        <motion.div
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.1, 0.2, 0.1]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-tac-brand rounded-full blur-[150px]"
                        />
                        <motion.div
                            animate={{
                                scale: [1.2, 0.8, 1.2],
                                opacity: [0.05, 0.15, 0.05]
                            }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-tac-electric-purple rounded-full blur-[120px]"
                        />
                    </div>

                    <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
                        {/* Serial Number / Counter Style */}
                        <div className="flex items-center gap-6 mb-16">
                            <span className="text-white font-black text-[12px] tracking-[0.8em]">TAC_CORE</span>
                            <div className="w-16 h-[2px] bg-vibrant-gradient" />
                            <span className="text-tac-brand font-black text-[12px] uppercase animate-pulse">SYNCHRONIZING...</span>
                        </div>

                        {/* Large Percentage */}
                        <motion.div
                            className="text-[18vw] font-black text-white tracking-tighter leading-none mb-12 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                        >
                            {progress}<span className="text-vibrant-gradient opacity-40">%</span>
                        </motion.div>

                        {/* Cycling Text - Vibrant Mode */}
                        <div className="h-14 overflow-hidden flex items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="text-vibrant-gradient text-xl font-black tracking-[0.6em] text-center"
                                >
                                    {loadingTexts[textIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Vibrant Progress Bar */}
                        <div className="mt-24 w-80 h-[4px] bg-white/5 relative overflow-hidden rounded-full">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-vibrant-gradient"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* Side Accents */}
                    <div className="absolute bottom-10 left-10 hidden md:block">
                        <span className="text-tac-cyan font-black text-[10px] [writing-mode:vertical-lr] tracking-[1.5em] opacity-40 uppercase">Initiating_Vibrant_Protocol</span>
                    </div>
                    <div className="absolute top-10 right-10 hidden md:block">
                        <span className="text-tac-electric-purple font-black text-[10px] [writing-mode:vertical-lr] tracking-[1.5em] opacity-40 uppercase">v3.5_Vibrant_Fluidity</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
