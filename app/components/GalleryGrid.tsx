"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const categories = ["All", "Events", "Seminars", "Team"];

const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80", category: "Events", span: "row-span-2" },
    { id: 2, src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80", category: "Seminars", span: "row-span-1" },
    { id: 3, src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80", category: "Team", span: "row-span-1" },
    { id: 4, src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80", category: "Seminars", span: "row-span-1" },
    { id: 5, src: "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80", category: "Team", span: "row-span-2" },
    { id: 6, src: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80", category: "Events", span: "row-span-1" },
    { id: 7, src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80", category: "Meeting", span: "row-span-1" },
];

export default function GalleryGrid() {
    const [filter, setFilter] = useState("All");

    const filteredImages = filter === "All"
        ? images
        : images.filter(img => img.category === filter);

    return (
        <div>
            {/* Filters */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                            ? "bg-tac-purple text-foreground shadow-lg shadow-tac-purple/25"
                            : "bg-foreground/5 text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]"
            >
                <AnimatePresence>
                    {filteredImages.map((img) => (
                        <motion.div
                            layout
                            key={img.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.4 }}
                            className={`relative rounded-2xl overflow-hidden group cursor-pointer border border-white/5 ${img.span}`}
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                            <img
                                src={img.src}
                                alt={img.category}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                <span className="text-foreground text-sm font-medium">{img.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
