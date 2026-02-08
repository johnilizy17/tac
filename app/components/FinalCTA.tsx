"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-24 relative bg-tac-dark overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-tac-purple/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="glass-card rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
                            >
                                Ready to <span className="text-gradient">Get Started?</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="text-gray-400 text-lg mb-12"
                            >
                                Contact us today to learn how our solution-driven approach can empower your business decisions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-tac-brand/20 transition-colors">
                                        <MapPin className="text-tac-brand" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Lekki Office (Head Office)</h4>
                                        <p className="text-gray-400 text-sm">Block 113, Plot 22, Adebisi Ogunniyi Crescent, Lekki Phase 1, Lagos.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 group">
                                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-tac-pink/20 transition-colors">
                                        <MapPin className="text-tac-pink" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">Abuja Office</h4>
                                        <p className="text-gray-400 text-sm">Suite 30, Block B, Landmark Plaza, Maitama, Abuja.</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white/5 rounded-3xl p-10 backdrop-blur-md border border-white/10"
                        >
                            <div className="space-y-8">
                                <a href="tel:+2349062840810" className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-tac-purple/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Phone className="text-tac-purple" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Call Us</p>
                                        <p className="text-xl font-bold text-white">+234 906 284 0810</p>
                                    </div>
                                </a>
                                <a href="mailto:info@tacgroupng.com" className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-tac-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="text-tac-gold" />
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase tracking-widest font-bold">Email Us</p>
                                        <p className="text-xl font-bold text-white">info@tacgroupng.com</p>
                                    </div>
                                </a>
                                <button className="w-full py-4 bg-white text-tac-dark font-bold rounded-2xl hover:bg-gray-100 transition-colors flex items-center justify-center gap-3 shadow-xl shadow-white/5 group">
                                    Contact Support <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
