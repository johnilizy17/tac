"use client";

import { motion } from "framer-motion";

export default function FluidBackground() {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#010101]">
            {/* Vibrant Liquid Blobs */}
            <motion.div
                animate={{
                    x: [0, 150, -100, 0],
                    y: [0, -150, 100, 0],
                    scale: [1, 1.4, 0.8, 1],
                    rotate: [0, 90, -90, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-tac-brand/20 rounded-full blur-[120px]"
            />
            <motion.div
                animate={{
                    x: [0, -200, 100, 0],
                    y: [0, 200, -100, 0],
                    scale: [1, 1.2, 1.5, 1],
                    rotate: [0, -120, 120, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-tac-electric-purple/15 rounded-full blur-[150px]"
            />
            <motion.div
                animate={{
                    x: [-100, 200, -100, 100],
                    y: [50, 100, 200, 50],
                    scale: [1, 1.3, 0.9, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[20%] right-[10%] w-[50%] h-[50%] bg-tac-cyan/15 rounded-full blur-[100px]"
            />

            {/* Pulsing Core */}
            <motion.div
                animate={{
                    opacity: [0.05, 0.15, 0.05],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-tac-brand/5 rounded-full blur-[200px]"
            />

            {/* Grainy Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            {/* Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
