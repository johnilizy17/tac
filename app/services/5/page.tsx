"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function BusinessConsultingPage() {
    const services = [
        "Business Assurance & Advisory Services",
        "Financial Advisory & Strategy",
        "Investment & Funding Advisory",
        "Corporate and Business Valuation",
        "Human Resource Consulting & Advisory",
        "Accounting, Systems & Human Capital Outsourcing",
        "Software & Systems Development Support"
    ];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-tac-brand/5 via-background to-background">
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
                            Service #5
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Business Consulting & Advisory
                        </h1>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/5.jpg"
                                alt="Business Consulting & Advisory"
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
                        className="glass-card p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-md"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                At TAC, our Business Consulting & Financial Advisory unit provides high quality solution driven Business & Management Consulting/Financial Advisory Services & Corporate Strategies to clients in various sectors of the economy. Our focus is to visibly improve the performance of our client, giving them that competitive advantage through sound solution driven advisory, strategy and assurance services that enhance performance.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We offer wide range of consultancy services tailored to meet specific needs of our clientele.
                            </p>
                        </div>
                    </motion.div>

                    {/* Services List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8">
                            Our Range of <span className="text-gradient">Services</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white dark:bg-foreground/5 shadow-md border border-gray-200 dark:border-transparent"
                                >
                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                    <span className="text-muted-foreground text-lg">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Additional Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="mt-16 glass-card p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-md"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                We are committed to satisfying our clients, giving them that competitive advantage though sound human capital base, structure & process to enhance performance. We are committed to assist in building organization to achieve optimum performance by developing their Human Resource to peak productivity level in order to achieve exceptional business result. We partner and collaborate with global firms and consultant advisers in our cross functional approach to executing assignments and also update our knowledge on current global trend and practice.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our Business Consulting and Advisory unit is run by expert managers and consultants with extensive experience with significant exposure and technical know-how in their area of specialization. We draw strong technical competence from our international affiliation "Integra International" and other global firms and consultant advisers in our cross functional approach to executing assignments and also update our knowledge on current global trend and practice.
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
                                "Expert managers and consultants",
                                "Integra International affiliation",
                                "Cross-functional approach",
                                "Tailored solutions for your business"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white dark:bg-foreground/5 shadow-md border border-gray-200 dark:border-transparent"
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
