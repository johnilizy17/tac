"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingTexts = [
    "GLOBAL INSIGHT",
    "STRATEGIC PRECISION",
    "UNWAVERING INTEGRITY",
    "ELITE CONSULTING",
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
        }, 20);

        const textInterval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % loadingTexts.length);
        }, 600);

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
                        clipPath: "inset(0 0 100% 0)",
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] bg-white flex flex-col items-center justify-center pointer-events-auto"
                >
                    <div className="relative z-10 w-full max-w-7xl px-4 flex flex-col items-center">
                        {/* Serial Number / Counter Style */}
                        <div className="flex items-center gap-4 mb-12">
                            <span className="text-tac-dark font-black text-sm tracking-widest">TAC</span>
                            <div className="w-12 h-[1px] bg-tac-brand" />
                            <span className="text-tac-brand font-mono text-sm uppercase">Loading...</span>
                        </div>

                        {/* Large Percentage */}
                        <motion.div
                            className="text-[15vw] font-black text-tac-dark tracking-tighter leading-none mb-12"
                        >
                            {progress}<span className="text-tac-brand opacity-20">%</span>
                        </motion.div>

                        {/* Cycling Text - Magazine Style */}
                        <div className="h-10 overflow-hidden flex items-center justify-center w-full">
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={textIndex}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="text-tac-slate text-sm font-black tracking-[0.5em] text-center"
                                >
                                    {loadingTexts[textIndex]}
                                </motion.p>
                            </AnimatePresence>
                        </div>

                        {/* Minimalist Bar */}
                        <div className="mt-20 w-64 h-[2px] bg-gray-100 relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-tac-brand"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }}
                            />
                        </div>
                    </div>

                    {/* Side Accents */}
                    <div className="absolute top-1/2 left-10 -translate-y-1/2 hidden md:block">
                        <span className="text-gray-300 font-black text-[10px] [writing-mode:vertical-lr] tracking-[1em] opacity-30">GLOBAL_PRECISION_V3</span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
