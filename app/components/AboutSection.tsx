"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-white">
                        One of Nigeria's Foremost <span className="text-gradient">Professional & Business</span> Consulting Firms
                    </h2>
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-8">
                        <p>
                            TAC stands as one of Nigeria's foremost indigenous professional and business consulting firms, renowned for excellence, integrity, and innovation. Since our establishment in 2001, we have evolved into a trusted name in professional practice and business advisory.
                        </p>
                        <p>
                            We are a composite, one-stop firm providing Audit & Assurance, Tax Planning, Compliance & Advisory, Business Advisory & Consulting, Financial Advisory, and Strategic Support Services to clients across diverse sectors of the economy.
                        </p>
                        <p>
                            As a proud member firm of <span className="text-white font-semibold">Integra International</span>, a global network of over 150 independent accounting and consulting firms across 90 countries, we combine local insight with global standards to provide world-class solutions tailored to your specific needs.
                        </p>
                        <p>
                            Our success is built on a culture of deep expertise, forward-thinking solutions, and an unwavering commitment to client value. At TAC, we are more than consultants — we are strategic partners committed to driving your sustainable success.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-8">
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">2001</span>
                            <span className="text-gray-500 text-sm">Established Since</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold text-white">150+</span>
                            <span className="text-gray-500 text-sm">Global Partners</span>
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
                    <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2">
                        <div className="absolute inset-0 bg-tac-brand/10 z-10 mix-blend-overlay" />
                        <Image
                            src="/2s.jpeg"
                            alt="TAC Architectural Excellence"
                            fill
                            className="object-cover rounded-xl"
                        />
                        <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-tac-dark/90 to-transparent z-20">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-4xl font-bold text-tac-brand"
                            >
                                TAC
                            </motion.div>
                            <div className="text-gray-300 font-medium tracking-widest uppercase text-sm">Professional Services</div>
                        </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-brand/20 blur-3xl rounded-full -z-10" />
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-tac-purple/20 blur-3xl rounded-full -z-10" />
                </motion.div>
            </div>
        </section>
    );
}
