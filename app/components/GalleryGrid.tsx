"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const galleryImages = [
    "thumbs_DSC_5085__1627367718_129.205.99.98.jpg",
    "thumbs_DSC_5135-1-scaled.jpg",
    "thumbs_DSC_5154-1-scaled.jpg",
    "thumbs_DSC_5161-1-scaled.jpg",
    "thumbs_DSC_5166-1-scaled.jpg",
    "thumbs_DSC_5169-1-scaled.jpg",
    "thumbs_IMG_0056__1627367760_129.205.99.98 (1).jpg",
    "thumbs_IMG_0056__1627367760_129.205.99.98.jpg",
    "thumbs_IMG_0069__1627367803_129.205.99.98.jpg",
    "thumbs_IMG_0082__1627367831_129.205.99.98.jpg",
    "thumbs_IMG_0088__1627367881_129.205.99.98.jpg",
    "thumbs_IMG_0161__1627367907_129.205.99.98.jpg",
    "thumbs_IMG_8311-002__1627367950_129.205.99.98.jpg",
    "thumbs_IMG_8315-002__1627367975_129.205.99.98.jpg",
    "thumbs_IMG-20200327-WA0001.jpg",
    "thumbs_IMG-20200327-WA0002.jpg",
    "thumbs_IMG-20200327-WA0003.jpg",
    "thumbs_IMG-20200327-WA0005.jpg",
    "thumbs_IMG-20200327-WA0006.jpg"
];

const categories = ["All", "Events", "Team", "Office"];

const images = galleryImages.map((img, index) => ({
    id: index + 1,
    src: `/gallery/${img}`,
    category: index < 6 ? "Events" : index < 12 ? "Team" : "Office",
    span: index % 5 === 0 ? "row-span-2" : "row-span-1"
}));

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
