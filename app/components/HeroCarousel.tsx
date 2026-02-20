"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
    {
        id: 1,
        title: "Pioneering",
        subtitle: "Business Excellence",
        description: "TAC Group delivers world-class professional services, audit, and customized business solutions since 2001.",
        image: "/asset/3.png",
        gradient: "from-tac-brand via-tac-purple to-tac-gold",
        tag: "Excellence & Heritage"
    },
    {
        id: 2,
        title: "Global",
        subtitle: "Connectivity",
        description: "Member of Integra International, connecting you to a network of professionals across 90 countries worldwide.",
        image: "/asset/4.png", // Using a placeholder for global reach
        gradient: "from-blue-500 via-tac-brand to-emerald-500",
        tag: "Integra International"
    },
    {
        id: 3,
        title: "Strategic",
        subtitle: "Partnerships",
        description: "We are more than consultants — we are strategic partners committed to driving your sustainable success.",
        image: "/asset/5.png",
        gradient: "from-tac-purple via-tac-brand to-tac-gold",
        tag: "Driving Growth"
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = useCallback(() => {
        setDirection(1);
        setCurrent((prev) => (prev + 1) % slides.length);
    }, []);

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 8000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 1.1
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 },
                scale: { duration: 1.2, ease: "easeOut" as const }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.8 }
            }
        })
    };

    return (
        <section className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-tac-dark">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={current}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                >
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src={slides[current].image}
                            alt={slides[current].subtitle}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-tac-dark via-tac-dark/80 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-tac-dark via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Content */}
                    <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center pt-24 md:pt-32">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                            >
                                <span className="inline-block px-4 py-1.5 rounded-full border border-tac-brand/30 bg-tac-brand/10 text-tac-brand text-xs font-bold tracking-widest uppercase mb-8">
                                    {slides[current].tag}
                                </span>

                                <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 leading-none">
                                    <span className="block text-white opacity-90">{slides[current].title}</span>
                                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${slides[current].gradient}`}>
                                        {slides[current].subtitle}
                                    </span>
                                </h1>

                                <p className="text-lg md:text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                                    {slides[current].description}
                                </p>

                                <div className="flex flex-wrap gap-6">
                                    <button className="px-10 py-5 bg-tac-brand text-tac-dark font-bold rounded-xl hover:bg-tac-brand/90 transition-all shadow-[0_0_30px_rgba(102,185,41,0.3)] hover:scale-105 active:scale-95">
                                        Explore Solutions
                                    </button>
                                    <button className="px-10 py-5 border-2 border-white/20 text-white font-bold rounded-xl hover:bg-white/5 transition-all backdrop-blur-md hover:scale-105 active:scale-95">
                                        Partner With Us
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-6">
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md group"
                >
                    <svg className="w-6 h-6 transform transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <div className="flex gap-3">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => {
                                setDirection(index > current ? 1 : -1);
                                setCurrent(index);
                            }}
                            className="group relative py-4"
                        >
                            <div className={`h-1.5 rounded-full transition-all duration-500 ${index === current ? "w-12 bg-tac-brand" : "w-4 bg-white/20 group-hover:bg-white/40"}`} />
                        </button>
                    ))}
                </div>

                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-white/20 transition-all backdrop-blur-md group"
                >
                    <svg className="w-6 h-6 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Side Progress Indicators (Desktop) */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col gap-8">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setDirection(index > current ? 1 : -1);
                            setCurrent(index);
                        }}
                        className="group flex items-center gap-4"
                    >
                        <span className={`text-xs font-bold transition-all duration-300 ${index === current ? "text-tac-brand scale-125" : "text-white/20 group-hover:text-white/40"}`}>
                            0{index + 1}
                        </span>
                        <div className={`h-[1px] transition-all duration-500 ${index === current ? "w-12 bg-tac-brand" : "w-4 bg-white/10 group-hover:bg-white/20"}`} />
                    </button>
                ))}
            </div>

            {/* Decorative Overlay for depth */}
            <div className="absolute inset-0 pointer-events-none border-[20px] border-tac-dark/10" />
        </section>
    );
}
