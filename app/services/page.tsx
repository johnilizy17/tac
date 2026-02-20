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
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
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
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Over Two Decades of <span className="text-gradient">Professional Excellence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed italic">
                            "TAC has established a solid footprint across both the public and private sectors, consistently delivering superior, value-driven solutions across key segments of the economy."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industrial Clientele Grid */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl font-bold text-foreground mb-6">Wide Spectrum <span className="text-gradient">Clientele</span></h2>
                            <p className="text-muted-foreground">Our expertise spans diverse sectors, helping organizations thrive through strategic insight and rigorous compliance.</p>
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
                                <span className="text-foreground font-bold group-hover:text-tac-brand transition-colors">{item.name}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Audit Image Section */}
            <section className="py-12 bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="rounded-[3rem] overflow-hidden border border-foreground/10 shadow-2xl"
                    >
                        <img
                            src="/audit.png"
                            alt="TAC Audit Excellence"
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Stakeholder & Compliance Section */}
            <section className="py-24 relative bg-background/50 overflow-hidden">
                <div className="absolute top-1/2 left-0 w-64 h-64 bg-tac-purple/10 blur-[120px] rounded-full -z-10" />
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl font-bold text-foreground leading-tight">
                            Shaping the <span className="text-gradient">Professional Landscape</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
                        <h3 className="text-2xl font-bold text-foreground mb-8">Registered with Regulatory Bodies</h3>
                        <div className="space-y-4">
                            {regulatoryBodies.map((body, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-colors border border-foreground/5">
                                    <div className="w-2 h-2 rounded-full bg-tac-brand mt-2" />
                                    <span className="text-muted-foreground font-medium">{body}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Service Delivery Excellence */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative order-2 lg:order-1"
                        >
                            <div className="glass-card p-12 rounded-[3rem] border-tac-purple/20 bg-gradient-to-br from-tac-purple/5 to-transparent">
                                <Users className="w-12 h-12 text-tac-purple mb-8" />
                                <h3 className="text-3xl font-bold text-foreground mb-6">Accounting Outsourcing & Transaction Advisory</h3>
                                <div className="space-y-4 text-muted-foreground">
                                    <p>We assist our clients with adequate financial record keeping, reconciliation, and addressing complex financial structures and regulatory reporting.</p>
                                    <div className="grid grid-cols-2 gap-4 mt-8">
                                        <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/5">
                                            <span className="text-tac-purple font-bold block mb-1">Onsite</span>
                                            <span className="text-xs">Direct deployment of skillful resources.</span>
                                        </div>
                                        <div className="p-4 rounded-2xl bg-foreground/5 border border-white/5">
                                            <span className="text-tac-purple font-bold block mb-1">Offsite</span>
                                            <span className="text-xs">Dedicated remote support & management.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative element */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-purple/10 blur-3xl -z-10" />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8 order-1 lg:order-2"
                        >
                            <span className="text-tac-purple font-bold tracking-widest uppercase text-sm">Advanced Methodology</span>
                            <h2 className="text-4xl font-bold text-foreground leading-tight">
                                Integrated <span className="text-gradient">AI & Automation</span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                We deploy Accounting Software, Automated Systems, and Strong AI Accounting tools to deliver value-added record keeping that complies with local and international financial reporting.
                            </p>
                            <ul className="space-y-6">
                                {[
                                    { title: "Competitive Rates", desc: "Unequalled cost-benefit ratios across all disciplines." },
                                    { title: "Quick Turnaround", desc: "Agile execution and timely service delivery." },
                                    { title: "Data Protection", desc: "Guaranteed security and confidentiality of client data." },
                                    { title: "Quality Delivery", desc: "High-value precision in every engagement." }
                                ].map((benefit, i) => (
                                    <li key={i} className="flex gap-4">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-tac-brand/20 flex items-center justify-center shrink-0">
                                            <div className="w-1.5 h-1.5 rounded-full bg-tac-brand" />
                                        </div>
                                        <div>
                                            <span className="text-foreground font-bold block">{benefit.title}</span>
                                            <span className="text-muted-foreground text-sm">{benefit.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Continuous Learning & Tech */}
            <section className="py-24 relative bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 glass-card p-12 rounded-[2.5rem] bg-gradient-to-br from-white/5 to-tac-brand/5 group"
                        >
                            <BookOpen className="w-12 h-12 text-tac-brand mb-8 group-hover:rotate-12 transition-transform" />
                            <h3 className="text-3xl font-bold text-foreground mb-6">Continuous Learning & Development</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
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
                            <h3 className="text-2xl font-bold text-foreground mb-6">Automated Solutions</h3>
                            <p className="text-muted-foreground">
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
                        <button className="px-12 py-5 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                            Partner with TAC Group
                        </button>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
