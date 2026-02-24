"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

// Counter component with animation
const Counter = ({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

            setCount(Math.floor(progress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return <span ref={ref}>{count}{suffix}</span>;
};

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
                    <div className="text-center max-w-4xl mx-auto mb-12">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-tac-brand font-bold tracking-widest uppercase text-sm block mb-6"
                        >
                            About TAC Professional Services
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-5xl md:text-7xl font-bold text-foreground leading-tight mb-8"
                        >
                            Excellence, Integrity, <span className="text-gradient">Innovation</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-muted-foreground leading-relaxed"
                        >
                            One of Nigeria's foremost indigenous professional and business consulting firms, renowned for excellence since 2001.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
                    >
                        <div className="text-center glass-card p-6 rounded-2xl bg-white/60 dark:bg-foreground/5">
                            <span className="text-3xl font-bold text-foreground block mb-2">
                                <Counter end={2001} duration={2} />
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Established</span>
                        </div>
                        <div className="text-center glass-card p-6 rounded-2xl bg-white/60 dark:bg-foreground/5">
                            <span className="text-3xl font-bold text-foreground block mb-2">
                                <Counter end={20} duration={2} suffix="+" />
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Years Experience</span>
                        </div>
                        <div className="text-center glass-card p-6 rounded-2xl bg-white/60 dark:bg-foreground/5">
                            <span className="text-3xl font-bold text-foreground block mb-2">
                                <Counter end={150} duration={2.5} suffix="+" />
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Global Partners</span>
                        </div>
                        <div className="text-center glass-card p-6 rounded-2xl bg-white/60 dark:bg-foreground/5">
                            <span className="text-3xl font-bold text-foreground block mb-2">
                                <Counter end={90} duration={2.5} suffix="+" />
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-widest">Countries</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Our Firm Section */}
            <section id="our-firm" className="py-24 relative bg-background/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-tac-brand font-semibold tracking-widest uppercase text-sm">Our Firm</span>
                            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8 text-foreground">
                                One of Nigeria's Foremost <span className="text-gradient">Professional & Business</span> Consulting Firms
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-8">
                                <p>
                                    TAC stands as one of Nigeria’s foremost indigenous professional and business consulting firms, renowned for excellence, integrity, and innovation. We are a composite, one-stop professional & Consulting firm providing Audit & Assurance, Tax Planning, Compliance & Advisory, Business Advisory & Consulting, Financial Advisory, and Strategic Support Services to clients and organizations across diverse sectors of the economy.    </p>
                                <p>
                                    Since our establishment in 2001, TAC Professional Services has evolved over the past two decades into a trusted name in professional practice and business advisory. Our success is built on a culture of deep expertise, forward-thinking solutions, and an unwavering commitment to client value.  </p>
                                <p>
                                    As a proud member firm of <span className="text-foreground font-semibold">Integra International,</span> a global network of over 150 independent accounting and consulting firms across 90 countries worldwide, we combine local insight with global standards to provide world-class solutions tailored to the specific needs of our clients.
                                </p>
                                <p>
                                    At TAC Professional Services, we are more than consultants — we are strategic partners committed to driving growth, efficiency, and sustainable success for every organization we serve.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50, rotate: 5 }}
                            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
                            className="relative"
                        >
                            <div className="relative aspect-square rounded-2xl overflow-hidden glass-card p-2">
                                <div className="absolute inset-0 bg-tac-brand/10 z-10 mix-blend-overlay" />
                                <img
                                    src="firm.jpg"
                                    alt="TAC Professional Excellence"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-brand/20 blur-3xl rounded-full -z-10" />
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-tac-purple/20 blur-3xl rounded-full -z-10" />
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

            {/* Our Experience Section */}
            <section id="our-experience" className="py-24 relative overflow-hidden bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                        >
                            Our Track Record
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground"
                        >
                            Our <span className="text-gradient">Experience</span>
                        </motion.h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    With over two decades of excellence, TAC Professional Services has established a solid footprint across both the public and private sectors, consistently delivering superior, value-driven solutions across key segments of the economy. Our clientele spans a wide spectrum, including financial services, insurance, oil & gas, power, manufacturing, real estate, FMCG, trade, media, aviation, telecommunications, NGOs, and government institutions.
                                </p>
                                <p>
                                    Over the years, our partners have played pivotal roles as stakeholders in shaping the professional practice landscape in Nigeria—actively contributing to the growth of client organizations and collaborating with regulatory bodies to strengthen compliance frameworks. Through these efforts, we continue to ensure that our clients not only meet statutory requirements but also enhance operational efficiency and avoid regulatory pitfalls.
                                </p>
                                <p>
                                    In pursuit of global standards of excellence, TAC prioritizes continuous learning and professional development. Our team regularly undergoes local and international training, seminars, and courses to stay abreast of evolving methodologies in audit, assurance, and financial reporting—ensuring that our services remain current, relevant, and best-in-class.
                                </p>
                                <p>
                                    Backed by robust technology, our automated driving solution and software enable us to deliver efficient, effective and high-value-added audit, accounting, tax and other consulting & advisory services to our esteemed clients. Our team of seasoned professionals possesses the human capital and technical capacity to execute all professional engagements with integrity, precision, and confidentiality.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[3.5rem] border-tac-brand/20 relative bg-white/60 dark:bg-foreground/5 shadow-lg"
                        >
                            <Building2 className="absolute top-10 right-10 w-16 h-16 text-tac-brand/10" />
                            <h3 className="text-2xl font-bold text-foreground mb-4">Regulatory Standing</h3>
                            <p className="text-muted-foreground mb-8 text-sm">
                                Our firm and partners are duly registered and in good standing with the following regulatory and professional bodies:
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Financial Reporting Council (FRC)",
                                    "Securities and Exchange Commission (SEC)",
                                    "Institute of Chartered Accountants of Nigeria (ICAN)",
                                    "Chartered Institute of Taxation of Nigeria (CITN)",
                                    "Association of Certified Fraud Examiners (ACFE)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 p-5 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:bg-foreground/10 transition-colors">
                                        <Award className="text-tac-brand w-5 h-5 shrink-0 mt-0.5" />
                                        <span className="text-muted-foreground font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our International Affiliation Section */}
            <section id="international-affiliation" className="py-24 relative bg-gradient-to-b from-background to-foreground/5 dark:to-tac-dark/30 overflow-hidden">
                <div className="absolute top-0 left-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our International Affiliation</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
                            Integra International <span className="text-gradient">Partnership</span>
                        </h2>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            TAC Professional Services is a proud member firm of Integra International, with headquarters located in London, United Kingdom.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6 text-muted-foreground leading-relaxed"
                        >
                            <p>
                                Integra International is a global association of over 150 independently owned and managed professional services firms across more than 90 countries worldwide. Member firms provide a broad range of audit, tax, consulting, and specialist advisory services to clients operating locally and internationally.
                            </p>
                            <p>
                                Integra International fosters active collaboration among its members, encouraging the open exchange of knowledge, expertise, and best practices. This global network empowers member firms to deliver expanded professional services and effectively meet the national and cross-border needs of their clients.
                            </p>
                            <p>
                                Each member firm within the Integra network retains its name, identity, and independence, while benefiting from the collective knowledge and technical expertise of more than 2,000 professionals worldwide. English serves as the common working language, ensuring seamless communication and collaboration across member firms.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden border border-foreground/10 shadow-2xl">
                                <img
                                    src="/international.jpg"
                                    alt="Integra International Network"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-brand/20 blur-3xl -z-10" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-muted-foreground leading-relaxed max-w-5xl mx-auto"
                    >
                        <p>
                            All member firms are locally owned and managed, led by professionals who understand the unique dynamics of owner-managed businesses and local market realities. This structure allows for a perfect balance of global reach and local insight, ensuring that clients receive personalized, high-quality, and innovative solutions backed by global standards of excellence.
                        </p>
                        <div className="glass-card p-8 rounded-3xl bg-tac-brand/5 border-tac-brand/20">
                            <p className="text-foreground font-semibold text-lg italic">
                                "At TAC, we leverage the Integra International global advantage to provide expert & specialist support in any area of concern, and provide the necessary solution across the globe."
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
                    >
                        {[
                            { number: "150+", label: "Member Firms" },
                            { number: "90+", label: "Countries" },
                            { number: "2,000+", label: "Professionals" },
                            { number: "Global", label: "Standards" }
                        ].map((stat, index) => (
                            <div key={index} className="text-center glass-card p-6 rounded-2xl bg-white/60 dark:bg-foreground/5 shadow-md">
                                <div className="text-3xl md:text-4xl font-bold text-tac-brand mb-2">{stat.number}</div>
                                <div className="text-sm text-muted-foreground uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
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
                        className="inline-block px-4 py-2 bg-foreground/5 rounded-full border border-foreground/10 font-bold text-xs uppercase tracking-widest"
                    >
                        Legacy & Future
                    </motion.div>
                    <h2 className="text-4xl md:text-6xl font-bold text-tac-dark max-w-4xl mx-auto">
                        Delivering superior solutions across every segment of the economy.
                    </h2>
                    <Link href="/services" className="inline-block px-12 py-5 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                        Explore Our Services
                    </Link>
                </div>
            </section>

            <Footer />
        </main >
    );
}
