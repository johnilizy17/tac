"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function AccountingOutsourcingPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark dark:to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">
                            Service #1
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Accounting Outsourcing & Transaction Advisory
                        </h1>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/1.jpg"
                                alt="Accounting Outsourcing & Transaction Advisory"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 relative bg-background/50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                At TAC, we assist our clients with Accounting Outsourcing and Transaction Advisory Services, which include adequate financial record keeping, reconciliation, and addressing complex financial structures, regulatory reporting etc. We provide these services either onsite or offsite, by deploying our skilful and dedicated resources.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We deploy Accounting Software, Automated System, and Strong AI Accounting tools, to deliver value-added accounting & financial transaction record keeping and reconciliation that comply with local and international financial reporting.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                With experts who come from a wide range of disciplines, we assure our clients of unequalled benefits such as competitive rates, quick turnaround time, guaranteed data protection, and quality service delivery.
                            </p>
                        </div>
                    </motion.div>

                    {/* Key Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8">
                            Why Choose <span className="text-gradient">TAC</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Expert team with decades of experience",
                                "Compliance with local and international standards",
                                "Cutting-edge technology and AI tools",
                                "Competitive rates and quick turnaround"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white/80 dark:bg-foreground/5 shadow-md"
                                >
                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-tac-dark mb-8">
                            Ready to get started?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
