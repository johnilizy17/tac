"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Globe,
    BookOpen,
    Cpu,
    Users,
    Building2,
    Wallet,
    Flame,
    Zap,
    Factory,
    Home,
    Truck,
    Play,
    Plane,
    Phone,
    HandHeart,
    Gavel
} from "lucide-react";

const industries = [
    { name: "Financial Services", icon: Wallet },
    { name: "Insurance", icon: ShieldCheck },
    { name: "Oil & Gas", icon: Flame },
    { name: "Power", icon: Zap },
    { name: "Manufacturing", icon: Factory },
    { name: "Real Estate", icon: Home },
    { name: "FMCG", icon: Home },
    { name: "Trade", icon: Truck },
    { name: "Media", icon: Play },
    { name: "Aviation", icon: Plane },
    { name: "Telecommunications", icon: Phone },
    { name: "NGOs", icon: HandHeart },
    { name: "Government", icon: Gavel },
];

const regulatoryBodies = [
    "Financial Reporting Council (FRC)",
    "Securities and Exchange Commission (SEC)",
    "Institute of Chartered Accountants of Nigeria (ICAN)",
    "Chartered Institute of Taxation of Nigeria (CITN)",
    "Association of Certified Fraud Examiners (ACFE)"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-tac-dark selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-tac-dark via-tac-dark to-tac-dark/50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Impact & Reach</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Over Two Decades of <span className="text-gradient">Professional Excellence</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed italic">
                            "TAC has established a solid footprint across both the public and private sectors, consistently delivering superior, value-driven solutions across key segments of the economy."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industrial Clientele Grid */}
            <section className="py-24 relative bg-tac-dark">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-white mb-6">Wide Spectrum <span className="text-gradient">Clientele</span></h2>
                            <p className="text-gray-400">Our expertise spans diverse sectors, helping organizations thrive through strategic insight and rigorous compliance.</p>
                        </div>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
                    >
                        {industries.map((item) => (
                            <motion.div
                                key={item.name}
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-tac-brand/30 transition-all duration-500"
                            >
                                <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-tac-brand/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-tac-brand" />
                                </div>
                                <span className="text-white font-bold group-hover:text-tac-brand transition-colors">{item.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Stakeholder & Compliance Section */}
            <section className="py-24 relative bg-tac-dark/50 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-tac-purple/10 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-white leading-tight">
                            Shaping the <span className="text-gradient">Professional Landscape</span>
                        </h2>
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Over the years, our partners have played pivotal roles as stakeholders in shaping the professional practice landscape in Nigeria—actively contributing to the growth of client organizations and collaborating with regulatory bodies to strengthen compliance frameworks.
                            </p>
                            <p>
                                Through these efforts, we continue to ensure that our clients not only meet statutory requirements but also enhance operational efficiency and avoid regulatory pitfalls.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[3rem] border-tac-brand/20 relative"
                    >
                        <Building2 className="absolute top-8 right-8 w-12 h-12 text-tac-brand/10" />
                        <h3 className="text-2xl font-bold text-white mb-8">Registered with Regulatory Bodies</h3>
                        <div className="space-y-4">
                            {regulatoryBodies.map((body, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
                                    <div className="w-2 h-2 rounded-full bg-tac-brand mt-2" />
                                    <span className="text-gray-300 font-medium">{body}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Continuous Learning & Tech */}
            <section className="py-24 relative bg-tac-dark overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 glass-card p-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-tac-brand/5 group"
                        >
                            <BookOpen className="w-12 h-12 text-tac-brand mb-8 group-hover:rotate-12 transition-transform" />
                            <h3 className="text-3xl font-bold text-white mb-6">Continuous Learning & Development</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                In pursuit of global standards of excellence, TAC prioritizes continuous learning and professional development. Our team regularly undergoes local and international training to stay abreast of evolving methodologies in audit, assurance, and financial reporting.
                            </p>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span className="px-4 py-2 bg-tac-brand/10 text-tac-brand rounded-full border border-tac-brand/20">Seminars</span>
                                <span className="px-4 py-2 bg-tac-brand/10 text-tac-brand rounded-full border border-tac-brand/20">Intl. Courses</span>
                                <span className="px-4 py-2 bg-tac-brand/10 text-tac-brand rounded-full border border-tac-brand/20">Fin. Reporting</span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-12 rounded-[2.5rem] border-tac-purple/20 flex flex-col justify-center text-center"
                        >
                            <Cpu className="w-16 h-16 text-tac-purple mx-auto mb-8 animate-pulse" />
                            <h3 className="text-2xl font-bold text-white mb-6">Automated Solutions</h3>
                            <p className="text-gray-400">
                                Backed by robust technology, our automated solutions and software enable us to deliver high-value audit, accounting, and tax advisory services with precision and speed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="py-20 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-tac-dark mb-8">Ready to evolve with integrity?</h2>
                        <button className="px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                            Partner with TAC Group
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
