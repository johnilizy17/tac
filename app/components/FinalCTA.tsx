"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-24 relative bg-background overflow-hidden">
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
                                className="text-muted-foreground text-lg mb-12"
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
                                <a
                                    href="https://maps.app.goo.gl/nE8aRrqjVUhp1Rsj8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-6 p-8 glass-card rounded-3xl group border-foreground/5 hover:border-tac-brand/30 transition-all duration-500 cursor-pointer"
                                >
                                    <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <MapPin className="w-6 h-6 text-tac-brand" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-tac-brand transition-colors">Lagos - Head Office</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm mb-3">The TAC Place. Block 113, Plot 22, Adebisi Ogunniyi Crescent, Off Oladimeji Alo Street, Lekki Phase 1, Lagos.</p>
                                        <a 
                                            href="tel:+2349062840807"
                                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors text-sm font-semibold"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Phone className="w-4 h-4" />
                                            Call Us: +234 906 284 0807
                                        </a>
                                    </div>
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/qZP6aif2BBNZ8uom9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex gap-6 p-8 glass-card rounded-3xl group border-foreground/5 hover:border-tac-brand/30 transition-all duration-500 cursor-pointer"
                                >
                                    <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                        <MapPin className="w-6 h-6 text-tac-brand" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-tac-brand transition-colors">Abuja Office</h3>
                                        <p className="text-muted-foreground leading-relaxed text-sm mb-3">Suite 30, Block B, Landmark Plaza, Plot 3124, Ibrahim Babangida Way. Maitama, Abuja.</p>
                                        <a 
                                            href="tel:+2349062840810"
                                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors text-sm font-semibold"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <Phone className="w-4 h-4" />
                                            Call Us: +234 906 284 0810
                                        </a>
                                    </div>
                                </a>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-foreground/5 rounded-3xl p-10 backdrop-blur-md border border-foreground/10"
                        >
                            <div className="space-y-8">
                                <a href="mailto:info@tacgroupng.com" className="flex items-center gap-6 group cursor-pointer">
                                    <div className="w-14 h-14 rounded-full bg-tac-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Mail className="text-tac-gold" />
                                    </div>
                                    <div>
                                        <p className="text-muted-foreground text-xs uppercase tracking-widest font-bold">Email Us</p>
                                        <p className="text-xl font-bold text-foreground">info@tacgroupng.com</p>
                                    </div>
                                </a>
                               
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
