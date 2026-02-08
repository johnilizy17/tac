"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-32 relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="magazine-grid">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="col-span-12 lg:col-span-1 border-l-2 border-tac-brand pl-6 mb-12 lg:mb-0"
                    >
                        <span className="text-tac-dark font-black text-sm tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">EST. 2001</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-12 lg:col-span-6"
                    >
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold mb-4 block">Our Legacy</span>
                        <h2 className="text-5xl md:text-7xl font-black text-tac-dark mt-4 tracking-tighter leading-none mb-12">
                            DRIVING<br />
                            THE CORE<br />
                            OF BUSINESS.
                        </h2>
                        <div className="max-w-md">
                            <p className="text-tac-slate text-xl leading-relaxed font-light mb-8">
                                TAC Professional Services is a premier indigenous consulting firm, bridging the gap between local insight and international excellence.
                            </p>
                            <p className="text-gray-500 leading-relaxed mb-12">
                                Since 2001, we have built a reputation for integrity and unparalleled expertise. As an Integra International member, we provide our clients with a direct gateway to a global network of independent professional firms.
                            </p>

                            <div className="flex gap-12">
                                <div>
                                    <div className="text-4xl font-black text-tac-dark tracking-tighter">20+</div>
                                    <div className="text-xs font-bold text-tac-brand uppercase tracking-widest">Years Active</div>
                                </div>
                                <div>
                                    <div className="text-4xl font-black text-tac-dark tracking-tighter">150+</div>
                                    <div className="text-xs font-bold text-tac-brand uppercase tracking-widest">Global Peers</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0"
                    >
                        <div className="aspect-[4/5] bg-tac-dark p-1 overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
                                alt="Management"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                            />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tac-brand flex items-center justify-center p-8 hidden md:flex">
                            <div className="text-white font-black text-xl italic tracking-tighter leading-none">THE TAC STANDARD</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
