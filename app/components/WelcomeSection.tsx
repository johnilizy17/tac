"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function WelcomeSection() {
    return (
        <section className="py-24 relative bg-background overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tac-brand/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-tac-purple/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                {/* Image side */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-5 relative"
                >
                    <div className="relative z-10 glass-card p-4 rounded-2xl overflow-hidden group">
                        <div className="aspect-[4/5] relative rounded-xl overflow-hidden">
                            <Image
                                src="/3s.jpeg"
                                alt="Tunde Adaramaja - Managing Partner / CEO"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tac-dark/80 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="mt-6 text-center">
                            <h3 className="text-2xl font-bold text-foreground">Tunde Adaramaja</h3>
                            <p className="text-tac-brand font-medium">Managing Partner / CEO</p>
                        </div>
                    </div>
                    {/* Decorative back element */}
                    <div className="absolute -top-6 -left-6 w-full h-full border-2 border-tac-brand/20 rounded-2xl -z-0" />
                </motion.div>

                {/* Content side */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:col-span-7"
                >
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[2px] w-12 bg-tac-brand" />
                        <span className="text-tac-brand font-semibold tracking-widest uppercase text-sm">Welcome Note</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-10 text-foreground">
                        Helping Your Business <span className="text-gradient">Thrive</span>
                    </h2>

                    <div className="space-y-8 text-muted-foreground text-lg leading-relaxed italic">
                        <div className="relative pl-8">
                            <span className="absolute left-0 top-0 text-6xl text-tac-brand/20 font-serif leading-none">"</span>
                            <p>
                                At TAC, we are passionate about helping businesses thrive. We partner with our clients to create a distinct competitive edge—powered by innovation, technology, and a team of dedicated professionals who bring expertise and insight to every engagement.
                            </p>
                        </div>

                        <p className="pl-8">
                            We go beyond providing services; we deliver smart, high-quality, and solution-oriented support that helps leaders make confident, strategic decisions.
                        </p>

                        <div className="pl-8 relative">
                            <p>
                                With TAC, you gain more than a consultant—you gain a trusted partner committed to your long-term success.
                            </p>
                            <span className="absolute -right-4 -bottom-4 text-6xl text-tac-brand/20 font-serif rotate-180 leading-none">"</span>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-6 p-6 border-l-4 border-tac-brand bg-foreground/5 rounded-r-xl">
                        <div className="text-muted-foreground">
                            <p className="text-xl text-foreground font-bold mb-1">Solution & Quality Assured...</p>
                            <p className="text-sm tracking-[0.2em] uppercase">TAC Professional Services</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
