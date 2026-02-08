"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 relative bg-tac-dark/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-tac-brand font-semibold tracking-widest uppercase text-sm">Who We Are</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">
                        Pioneering <span className="text-gradient">Professional Excellence</span> Since 2001
                    </h2>
                    <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        TAC Professional Services is one of the leading indigenous Professional and Business Consulting firms in Nigeria.
                        We are a composite one-stop professional & consulting firm providing Professional Services, Business Consulting & Financial Advisory Services to clients in various sectors of the economy.
                    </p>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        Founded in 2001, we have evolved in the past two decades to become one of the most visible Professional Practice & Business Consulting Firms in Nigeria.
                        As a member firm of Integra International, we connect our clients to a global network of independent professional firms in almost every major business center of the world.
                    </p>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">20+</span>
                            <span className="text-gray-500 text-sm">Years of Experience</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">150+</span>
                            <span className="text-gray-500 text-sm">Integra Members</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">90+</span>
                            <span className="text-gray-500 text-sm">Countries Reached</span>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                    className="relative"
                >
                    <div className="aspect-square glass-card rounded-full flex items-center justify-center p-12 relative shadow-[0_0_50px_rgba(102,185,41,0.1)]">
                        <div className="absolute inset-0 border-2 border-dashed border-tac-brand/20 rounded-full animate-[spin_30s_linear_infinite]" />
                        <div className="relative z-10 text-center">
                            <motion.div
                                initial={{ scale: 0.8 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-6xl font-bold text-tac-brand mb-4"
                            >
                                TAC
                            </motion.div>
                            <div className="text-gray-300 font-medium tracking-widest uppercase text-sm">Professional Services</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
