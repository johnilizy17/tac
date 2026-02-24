"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Briefcase, Users, TrendingUp, Award, Globe2, Heart, CheckCircle, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

const benefits = [
    {
        icon: Briefcase,
        title: "High-Impact Projects",
        description: "Work on diverse, high-impact projects across multiple sectors and industries."
    },
    {
        icon: Globe2,
        title: "Global Exposure",
        description: "Access world-class professional training and global exposure through our Integra International membership."
    },
    {
        icon: Users,
        title: "Mentorship Culture",
        description: "A mentorship-driven culture that accelerates your professional growth and development."
    },
    {
        icon: Heart,
        title: "Collaborative Environment",
        description: "A collaborative environment that values integrity, teamwork, and creativity."
    },
    {
        icon: TrendingUp,
        title: "Career Pathway",
        description: "A clear career development pathway from entry level to leadership positions."
    }
];

const gtRequirements = [
    "Must not be more than 26 years old.",
    "Must possess a minimum of Second-Class Upper Division in Accounting, Finance, Economics, or related disciplines.",
    "Graduates from non-accounting backgrounds must have enrolled for ICAN or ACCA to demonstrate a genuine interest in the accounting and consulting profession."
];

const recruitmentSteps = [
    {
        number: "01",
        title: "Initial Screening",
        description: "A preliminary conversation with our HR Team to assess competence and role fit."
    },
    {
        number: "02",
        title: "Technical & Managerial Interview",
        description: "A discussion with the Managers and/or Unit Head of the requesting department."
    },
    {
        number: "03",
        title: "Leadership Interview",
        description: "A final chat with the Senior Partner and Managing Partner, leading to potential onboarding."
    }
];

export default function CareersPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-40 pb-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                    <div className="max-w-7xl mx-auto px-4 relative">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tac-brand/10 border border-tac-brand/30 text-tac-brand text-sm font-bold tracking-widest uppercase mb-6">
                                <Briefcase className="w-4 h-4" />
                                Join Our Team
                            </div>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
                                Careers at <span className="text-gradient">TAC Professional Services</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12">
                                At TAC, we offer exciting career opportunities for highly motivated and forward-thinking individuals who are passionate about building a rewarding and lasting career in professional and business consulting — anchored on excellence, integrity, innovation, and continuous learning.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a
                                    href="#opportunities"
                                    className="px-10 py-4 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl inline-flex items-center gap-2"
                                >
                                    Explore Opportunities
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                                <Link
                                    href="/contact"
                                    className="px-10 py-4 bg-foreground/5 border-2 border-foreground/10 text-foreground font-bold rounded-2xl hover:bg-foreground/10 transition-all inline-flex items-center gap-2"
                                >
                                    Contact HR
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Our People Section */}
                <section className="py-24 relative bg-background/50">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our People, Our Strength</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                                    Your Growth is <span className="text-gradient">Our Priority</span>
                                </h2>
                                <div className="space-y-4 text-muted-foreground leading-relaxed">
                                    <p>
                                        Our people are our most valuable asset. We recognize and reward talent, dedication, and creativity, giving equal opportunities to exceptional individuals from diverse academic and professional backgrounds.
                                    </p>
                                    <p>
                                        Through structured learning programs, professional certifications, and continuous mentorship, we empower our people to grow into industry leaders and trusted advisors.
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-foreground/10 shadow-2xl">
                                    <img
                                        src="/asset/1.png"
                                        alt="TAC Team"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-brand/20 blur-3xl -z-10" />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Culture Section */}
                <section className="py-24 relative bg-gradient-to-b from-background to-foreground/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Culture</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                A Culture of Growth and <span className="text-gradient">Excellence</span>
                            </h2>
                            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                                At TAC, we foster a work culture that inspires collaboration, personal development, and leadership. We encourage our professionals to pursue excellence while maintaining a healthy work-life balance and strong professional relationships.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[3rem] bg-white/60 dark:bg-foreground/5 border-foreground/10 shadow-xl"
                        >
                            <p className="text-muted-foreground text-lg leading-relaxed text-center">
                                Our inclusive and supportive environment enables every employee to thrive, innovate, and make a measurable impact — both within the firm and across the industries we serve.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Why Join Us Section */}
                <section className="py-24 relative bg-background">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Benefits & Perks</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Why Build Your Career <span className="text-gradient">with Us</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {benefits.map((benefit, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-8 rounded-3xl bg-white/60 dark:bg-foreground/5 hover:border-tac-brand/30 transition-all group"
                                >
                                    <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <benefit.icon className="w-7 h-7 text-tac-brand" />
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Career Opportunities Section */}
                <section id="opportunities" className="py-24 relative bg-background/50">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Open Positions</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Explore Career <span className="text-gradient">Opportunities</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Graduate Trainee Programme */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="glass-card p-10 rounded-[3rem] bg-gradient-to-br from-tac-brand/5 to-transparent border-tac-brand/20"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-tac-brand/10 rounded-xl flex items-center justify-center">
                                        <Award className="w-6 h-6 text-tac-brand" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Graduate Trainee Programme</h3>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Our Graduate Trainee (GT) Programme is designed for exceptional and ambitious graduates with 0–1 year of experience who are eager to build a successful career in professional and business consulting.
                                </p>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    As a TAC Graduate Trainee, you'll gain hands-on experience, participate in structured training, and work alongside industry experts who will guide and mentor you to develop both your technical and leadership capabilities.
                                </p>
                                <h4 className="text-lg font-bold text-foreground mb-4">Entry Requirements:</h4>
                                <ul className="space-y-3 mb-8">
                                    {gtRequirements.map((req, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-tac-brand shrink-0 mt-0.5" />
                                            <span className="text-muted-foreground text-sm">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a
                                    href="mailto:careers@tacgroupng.com?subject=Graduate Trainee Application"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-tac-brand text-tac-dark font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                                >
                                    Apply Now
                                    <Send className="w-4 h-4" />
                                </a>
                            </motion.div>

                            {/* Experienced Hire */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="glass-card p-10 rounded-[3rem] bg-gradient-to-br from-tac-purple/5 to-transparent border-tac-purple/20"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-tac-purple/10 rounded-xl flex items-center justify-center">
                                        <TrendingUp className="w-6 h-6 text-tac-purple" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">Experienced Hire</h3>
                                </div>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    For experienced professionals seeking to take their careers to the next level, TAC Professional Services provides a platform to grow, lead, and make meaningful impact across various industries.
                                </p>
                                <p className="text-muted-foreground mb-8 leading-relaxed">
                                    We value expertise, innovation, and leadership, and we invite you to explore opportunities that align with your experience and career aspirations.
                                </p>
                                <a
                                    href="mailto:careers@tacgroupng.com?subject=Experienced Hire Application"
                                    className="inline-flex items-center gap-2 px-8 py-3 bg-tac-purple text-white font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                                >
                                    Apply Now
                                    <Send className="w-4 h-4" />
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Recruitment Process */}
                <section className="py-24 relative bg-background">
                    <div className="max-w-7xl mx-auto px-4">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">How It Works</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                                Recruitment <span className="text-gradient">Process</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {recruitmentSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15 }}
                                    className="relative"
                                >
                                    <div className="glass-card p-8 rounded-3xl bg-white/60 dark:bg-foreground/5 h-full">
                                        <div className="text-6xl font-black text-tac-brand/10 mb-4">{step.number}</div>
                                        <h3 className="text-xl font-bold text-foreground mb-4">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                    </div>
                                    {index < recruitmentSteps.length - 1 && (
                                        <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-tac-brand/30" />
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-24 relative bg-gradient-to-br from-tac-brand/10 to-tac-purple/10">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                                Ready to Shape Ideas into <span className="text-gradient">Impact?</span>
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                If you are driven by excellence, passionate about making a difference, and ready to take your career to the next level, TAC is the place for you.
                            </p>
                            <p className="text-xl font-semibold text-foreground mb-8">
                                At TAC, we don't just offer jobs — we offer career paths that inspire growth, innovation, and excellence.
                            </p>
                            <a
                                href="mailto:careers@tacgroupng.com"
                                className="inline-flex items-center gap-2 px-12 py-5 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl text-lg"
                            >
                                Apply Today
                                <ArrowRight className="w-6 h-6" />
                            </a>
                            <p className="text-sm text-muted-foreground mt-6">
                                We'll be delighted to welcome you to the TAC family!
                            </p>
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
