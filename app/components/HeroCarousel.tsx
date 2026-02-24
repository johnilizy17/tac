"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, Sparkles, Globe2, Handshake } from "lucide-react";

const slides = [
    {
        id: 1,
        icon: Sparkles,
        tag: "Excellence & Heritage",
        title: "Pioneering Business Excellence",
        description: "TAC delivers world-class professional services, audit, and customized business solutions since 2001.",
        image: "/asset/3.png",
        gradient: "from-tac-brand to-tac-purple",
        primaryCTA: { text: "Explore Our Services", href: "/services" },
        secondaryCTA: { text: "Learn More", href: "/about" }
    },
    {
        id: 2,
        icon: Globe2,
        tag: "Integra International",
        title: "Global Connectivity",
        description: "Member of Integra International, connecting you to a network of professionals across 90 countries worldwide.",
        image: "/asset/4.png",
        gradient: "from-blue-500 to-tac-brand",
        primaryCTA: { text: "View Our Network", href: "/about" },
        secondaryCTA: { text: "Contact Us", href: "/contact" }
    },
    {
        id: 3,
        icon: Handshake,
        tag: "Driving Growth",
        title: "Strategic Partnerships",
        description: "We are more than consultants — we are strategic partners committed to driving your sustainable success.",
        image: "/asset/5.png",
        gradient: "from-tac-purple to-tac-gold",
        primaryCTA: { text: "Partner With Us", href: "/partners" },
        secondaryCTA: { text: "Our Team", href: "/team" }
    }
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        if (!isPaused) {
            setDirection(1);
            setCurrent((prev) => (prev + 1) % slides.length);
        }
    }, [isPaused]);

    const prevSlide = () => {
        setDirection(-1);
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > current ? 1 : -1);
        setCurrent(index);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 7000);
        return () => clearInterval(timer);
    }, [nextSlide]);

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            transition: {
                x: { type: "spring" as const, stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
            }
        })
    };

    const currentSlide = slides[current];
    const Icon = currentSlide.icon;

    return (
        <section 
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-background"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
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
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${currentSlide.image})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Content Layer */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
                <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                        key={current}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="max-w-3xl"
                    >
                        {/* Icon & Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${currentSlide.gradient} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="px-4 py-1.5 rounded-full bg-tac-brand/10 border border-tac-brand/30 text-tac-brand text-xs font-bold tracking-widest uppercase">
                                {currentSlide.tag}
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentSlide.gradient}`}>
                                {currentSlide.title}
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl"
                        >
                            {currentSlide.description}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Link
                                href={currentSlide.primaryCTA.href}
                                className="group px-8 py-4 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:bg-tac-brand/90 transition-all shadow-xl shadow-tac-brand/30 hover:shadow-2xl hover:shadow-tac-brand/40 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                {currentSlide.primaryCTA.text}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={currentSlide.secondaryCTA.href}
                                className="px-8 py-4 bg-white/10 dark:bg-foreground/5 backdrop-blur-md border-2 border-foreground/20 text-foreground font-bold rounded-2xl hover:bg-white/20 dark:hover:bg-foreground/10 hover:border-foreground/30 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
                            >
                                {currentSlide.secondaryCTA.text}
                            </Link>
                        </motion.div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Navigation Controls - Bottom Center */}
            <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
                {/* Previous Button */}
                <button
                    onClick={prevSlide}
                    className="w-12 h-12 rounded-full bg-white/10 dark:bg-foreground/5 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-white/20 dark:hover:bg-foreground/10 hover:border-tac-brand/50 transition-all group"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                </button>

                {/* Slide Indicators */}
                <div className="flex gap-2 px-4">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className="group relative"
                            aria-label={`Go to slide ${index + 1}`}
                        >
                            <div 
                                className={`h-2 rounded-full transition-all duration-500 ${
                                    index === current 
                                        ? "w-12 bg-tac-brand shadow-lg shadow-tac-brand/50" 
                                        : "w-2 bg-foreground/30 group-hover:bg-foreground/50 group-hover:w-8"
                                }`} 
                            />
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    onClick={nextSlide}
                    className="w-12 h-12 rounded-full bg-white/10 dark:bg-foreground/5 backdrop-blur-md border border-foreground/20 flex items-center justify-center text-foreground hover:bg-white/20 dark:hover:bg-foreground/10 hover:border-tac-brand/50 transition-all group"
                    aria-label="Next slide"
                >
                    <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                </button>
            </div>

            {/* Slide Counter - Top Right */}
            <div className="absolute top-24 md:top-32 right-4 md:right-8 z-20 glass-card px-4 py-2 rounded-full border-foreground/10">
                <span className="text-sm font-bold text-foreground">
                    <span className="text-tac-brand">{String(current + 1).padStart(2, '0')}</span>
                    <span className="text-foreground/30 mx-1">/</span>
                    <span className="text-foreground/50">{String(slides.length).padStart(2, '0')}</span>
                </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-tac-brand/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-tac-purple/10 blur-[100px] rounded-full pointer-events-none" />
        </section>
    );
}
