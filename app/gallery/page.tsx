"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalleryGrid from "../components/GalleryGrid";
import { motion } from "framer-motion";

export default function GalleryPage() {
    return (
        <main className="min-h-screen bg-background selection:bg-tac-purple selection:text-white">
            <Navbar />

            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Gallery</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Moments & <span className="text-gradient">Events</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                            Explore our journey, team building activities, and professional events that define the TAC culture.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="pb-24">
                <div className="max-w-7xl mx-auto px-4">
                    <GalleryGrid />
                </div>
            </section>

            <Footer />
        </main>
    );
}
