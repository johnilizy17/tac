"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ShieldCheck,
    Globe,
    BookOpen,
    Cpu,
    Users,
    Building2
} from "lucide-react";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark dark:to-tac-dark/50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Services</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Comprehensive <span className="text-gradient">Professional Services</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            TAC is a Professional & Business Consulting firm delivering a comprehensive suite of professional services to a diverse portfolio of clients in both the private and public sectors. Our broad services includes but not limited to Audit & Assurance, Accounting & Transaction, Tax Compliance & Advisory, Forensic Investigation & Accounting, Financial & Business Advisory, and Other Auxiliary Professional & Consulting Services.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services List Section */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Our <span className="text-gradient">Service Offerings</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Explore our comprehensive range of professional services designed to meet your business needs
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { id: 1, title: "Accounting Outsourcing & Transaction Advisory", icon: Users, image: "/service/1.jpg" },
                            { id: 2, title: "Audit & Assurance", icon: ShieldCheck, image: "/service/2.jpg" },
                            { id: 3, title: "Tax Compliance & Advisory", icon: Globe, image: "/service/3.jpg" },
                            { id: 4, title: "Forensic Investigation & Accounting", icon: Building2, image: "/service/4.jpg" },
                            { id: 5, title: "Business Consulting & Advisory", icon: Users, image: "/service/5.jpg" },
                            { id: 6, title: "Internal Control & Risk Management", icon: ShieldCheck, image: "/service/6.jpg" }
                        ].map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/services/${service.id}`}
                                    className="block glass-card rounded-3xl bg-white/60 dark:bg-foreground/5 hover:border-tac-brand/30 transition-all group h-full overflow-hidden"
                                >
                                    {/* Image Section */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                                        <div className="absolute bottom-4 left-4">
                                            <div className="w-12 h-12 bg-tac-brand/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <service.icon className="w-6 h-6 text-white" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Content Section */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-tac-brand transition-colors leading-tight">
                                            {service.title}
                                        </h3>
                                        <span className="text-tac-brand text-sm font-semibold inline-flex items-center gap-2">
                                            Learn More
                                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
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
                            <div className="glass-card p-12 rounded-[3rem] border-tac-purple/20 bg-gradient-to-br from-tac-purple/5 to-transparent shadow-lg dark:shadow-none">
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
                            className="lg:col-span-2 glass-card p-12 rounded-[2.5rem] bg-gradient-to-br from-white/60 to-tac-brand/10 dark:from-white/5 dark:to-tac-brand/5 group shadow-lg dark:shadow-none"
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
                            className="glass-card p-12 rounded-[2.5rem] border-tac-purple/20 flex flex-col justify-center text-center bg-white/60 dark:bg-foreground/5 shadow-lg dark:shadow-none"
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
                        <Link href="/contact" className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                            Partner with TAC
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
