"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function InternalControlPage() {
    const services = [
        "Act as an independent unit that will monitor & enforce system & policy compliance",
        "Ensure adequate accounting & internal control system",
        "Monitor & ensure strict compliance with operational, accounting & internal control system & procedure",
        "Ensure that management & staff abide by the company's rules & regulations",
        "Carry out continuous internal audit functions",
        "Carry out specialized and specific investigation or audit as mandated by the Board",
        "Act as watch dog and report to the Board of Directors"
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
                            Service #6
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Business Support Services
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground mb-8">
                            Internal Control & Risk Management
                        </h2>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/6.jpg"
                                alt="Internal Control & Risk Management"
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
                        className="glass-card p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Where we do not act as external auditors, we provide comprehensive internal audit outsourcing services to clients. With the trend of breach in internal control and active connivance of company staff (at high & low level) to defraud & mismanage organizations financial resources; companies outsource their internal audit functions to our organization.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We carry out client internal audit functions in an independent and professional manner that entrench & institute sound & adequate internal control system, process & procedure thereby reducing financial wastages, bloated expenditure, fraud & misappropriation of funds. Our internal audit services ensure transparency, accountability & good corporate governance that gives comfort & assurance to Owners of business, Investors & Board Members.
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
                            Our Broad <span className="text-gradient">Functions</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-6">
                            Our broad functions as an independent & uncompromising internal audit service provider include but not limited to the following:
                        </p>
                        <div className="space-y-4">
                            {services.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white dark:bg-foreground/5 shadow-md"
                                >
                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                    <span className="text-muted-foreground text-lg">{service}</span>
                                </motion.div>
                            ))}
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
                                "Independent and professional approach",
                                "Transparency and accountability focus",
                                "Good corporate governance assurance",
                                "Fraud prevention and detection"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white dark:bg-foreground/5 shadow-md"
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
