"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    BookOpen,
    Cpu,
    Users,
    Building2,
    Target,
    Award,
    TrendingUp,
    ChevronRight,
    Briefcase,
    Glasses,
    BarChart3,
    Scale,
    Users2
} from "lucide-react";

const ExpertiseCard = ({ title, services, icon: Icon, colorClass, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass-card p-8 rounded-[2.5rem] border-foreground/5 hover:border-foreground/10 transition-all group"
    >
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${colorClass}`}>
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-tac-brand transition-colors">{title}</h3>
        <ul className="space-y-3">
            {services.map((service: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="mt-1.5 w-1 h-1 rounded-full bg-tac-brand/50 shrink-0" />
                    <span>{service}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-tac-purple/5 blur-[100px] -z-10" />

                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <span className="text-tac-brand font-bold tracking-widest uppercase text-sm block">Our Legacy</span>
                            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                                Two Decades of <span className="text-gradient">Professional Integrity</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                                TAC stands as one of Nigeria's foremost indigenous professional and business consulting firms, renowned for excellence, integrity, and innovation.
                            </p>
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-foreground block">20+</span>
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</span>
                                </div>
                                <div className="w-px h-10 bg-foreground/10" />
                                <div className="text-center">
                                    <span className="text-3xl font-bold text-foreground block">150+</span>
                                    <span className="text-xs text-muted-foreground uppercase tracking-widest">Global Partners</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-foreground/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-1000">
                                <img
                                    src="/asset/6.png"
                                    alt="Professional Excellence"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-tac-dark/80 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-tac-brand/20 blur-3xl animate-pulse" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Capabilities */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
                        <h2 className="text-4xl font-bold text-foreground">Our Core <span className="text-gradient">Capabilities</span></h2>
                        <p className="text-muted-foreground text-lg">Delivering a comprehensive suite of professional services through specialized business units.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ExpertiseCard
                            title="TAC Professional Services"
                            icon={ShieldCheck}
                            colorClass="bg-tac-brand/10 text-tac-brand"
                            delay={0.1}
                            services={[
                                "Audit & Assurance",
                                "Accounting & Transaction",
                                "Forensic Investigation",
                                "Due Diligence",
                                "IFRS Advisory",
                                "Debt Recovery & Liquidation"
                            ]}
                        />
                        <ExpertiseCard
                            title="TAC Tax Advisory"
                            icon={Scale}
                            colorClass="bg-tac-purple/10 text-tac-purple"
                            delay={0.2}
                            services={[
                                "Tax Planning",
                                "Corporate & Transaction Tax",
                                "Transfer Pricing",
                                "Personal Income Tax",
                                "Compliance Services",
                                "Regulatory Advisory"
                            ]}
                        />
                        <ExpertiseCard
                            title="Business Consulting"
                            icon={TrendingUp}
                            colorClass="bg-foreground/10 text-foreground"
                            delay={0.3}
                            services={[
                                "Internal Control & Risk",
                                "Corporate Valuation",
                                "Human Resource Consulting",
                                "Systems Outsourcing",
                                "Software Development",
                                "Investment Advisory"
                            ]}
                        />
                    </div>
                </div>
            </section>

            {/* Impact Narrative */}
            <section className="py-24 relative overflow-hidden bg-background">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold text-foreground leading-tight">
                            Shaping the <span className="text-gradient">Professional Landscape</span>
                        </h2>
                        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                With over two decades of excellence, TAC has established a solid footprint across both the public and private sectors, consistently delivering superior, value-driven solutions across key segments of the economy.
                            </p>
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
                        className="glass-card p-12 rounded-[3.5rem] border-tac-brand/20 relative"
                    >
                        <Building2 className="absolute top-10 right-10 w-16 h-16 text-tac-brand/10" />
                        <h3 className="text-2xl font-bold text-foreground mb-10">Regulatory Standing</h3>
                        <div className="space-y-4">
                            {[
                                "Financial Reporting Council (FRC)",
                                "Securities and Exchange Commission (SEC)",
                                "Institute of Chartered Accountants (ICAN)",
                                "Chartered Institute of Taxation (CITN)",
                                "Certified Fraud Examiners (ACFE)"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:bg-foreground/10 transition-colors">
                                    <Award className="text-tac-brand w-5 h-5" />
                                    <span className="text-muted-foreground font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Innovation & Development */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 glass-card p-12 rounded-[3rem] bg-gradient-to-br from-tac-brand/10 to-transparent flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-tac-brand/20 rounded-xl flex items-center justify-center text-tac-brand">
                                    <BookOpen />
                                </div>
                                <h3 className="text-2xl font-bold text-foreground">Continuous Development</h3>
                            </div>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our team regularly undergoes local and international training to stay abreast of evolving methodologies in audit, assurance, and financial reporting—ensuring our services remain current, relevant, and best-in-class.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-12 rounded-[3rem] text-center flex flex-col items-center justify-center"
                        >
                            <Cpu className="w-16 h-16 text-tac-purple mb-8 animate-pulse" />
                            <h3 className="text-xl font-bold text-foreground mb-4">Tech-Driven Efficiency</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                Backed by robust technology, our automated solutions enable us to deliver efficient, high-value audit and advisory services.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 text-tac-brand font-bold text-xs uppercase tracking-widest"
                    >
                        Legacy & Future
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-tac-dark max-w-4xl mx-auto">
                        Delivering superior solutions across every segment of the economy.
                    </h2>
                    <button className="px-12 py-5 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Explore Our Services
                    </button>
                </div>
            </section>

            <Footer />
        </main >
    );
}
