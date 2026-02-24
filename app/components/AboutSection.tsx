"use client";

import { motion } from "framer-motion";
import { Target, Compass, Award, Users, Lightbulb, TrendingUp } from "lucide-react";
import Link from "next/link";

const coreValues = [
    {
        letter: "P",
        title: "Professionalism",
        description: "We uphold the highest standards of ethics, competence, and respect in all our engagements.",
        icon: Award,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        letter: "O",
        title: "Organization & Team Building",
        description: "We cultivate teamwork, collaboration, and a culture of shared success to achieve collective goals.",
        icon: Users,
        color: "text-tac-purple",
        bg: "bg-tac-purple/10"
    },
    {
        letter: "I",
        title: "Integrity & Innovation",
        description: "We act with honesty and transparency while embracing innovation to deliver forward-thinking solutions.",
        icon: Lightbulb,
        color: "text-tac-brand",
        bg: "bg-tac-brand/10"
    },
    {
        letter: "S",
        title: "Solution Driven",
        description: "We focus on understanding our clients' needs and delivering practical, results-oriented outcomes that create value.",
        icon: Target,
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
    {
        letter: "E",
        title: "Excellence",
        description: "We are relentless in our pursuit of excellence—consistently exceeding expectations through quality, precision, and continuous improvement.",
        icon: TrendingUp,
        color: "text-tac-gold",
        bg: "bg-tac-gold/10"
    }
];

export default function AboutSection() {
    return (
        <>
            {/* Our Firm Section */}
            <section id="about" className="py-24 relative bg-background/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-tac-brand font-semibold tracking-widest uppercase text-sm">Who We Are</span>
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
                        <div className="flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-foreground">2001</span>
                                <span className="text-muted-foreground text-sm">Established Since</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-foreground">150+</span>
                                <span className="text-muted-foreground text-sm">Global Partners</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-3xl font-bold text-foreground">90+</span>
                                <span className="text-muted-foreground text-sm">Countries Reached</span>
                            </div>
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
                                src="/service.png"
                                alt="TAC Professional Excellence"
                                className="w-full h-full object-cover rounded-xl"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent z-20">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="text-4xl font-bold text-tac-brand"
                                >
                                    TAC
                                </motion.div>
                                <div className="text-white/80 font-medium tracking-widest uppercase text-sm">Professional Services</div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-tac-brand/20 blur-3xl rounded-full -z-10" />
                        <div className="absolute -top-6 -left-6 w-32 h-32 bg-tac-purple/20 blur-3xl rounded-full -z-10" />
                    </motion.div>
                </div>
            </section>


            {/* Philosophy Section */}
            <section className="py-24 relative bg-gradient-to-b from-background to-foreground/5 dark:to-tac-dark/30">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                            Driven by Solutions. <span className="text-gradient">Defined by Quality.</span>
                        </h2>
                    </motion.div>

                    {/* Vision & Mission Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group bg-white/60 dark:bg-foreground/5 shadow-lg"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Target className="w-24 h-24 text-tac-brand" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-tac-brand/10 rounded-xl flex items-center justify-center">
                                        <Target className="w-6 h-6 text-tac-brand" />
                                    </div>
                                    <span className="text-tac-brand font-bold tracking-widest uppercase text-sm">Our Vision</span>
                                </div>
                                <h3 className="text-2xl font-bold text-foreground leading-tight mb-4">
                                    To be the preferred, solution-driven professional services and business consulting firm of choice.
                                </h3>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group bg-white/60 dark:bg-foreground/5 shadow-lg"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Compass className="w-24 h-24 text-tac-purple" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-tac-purple/10 rounded-xl flex items-center justify-center">
                                        <Compass className="w-6 h-6 text-tac-purple" />
                                    </div>
                                    <span className="text-tac-purple font-bold tracking-widest uppercase text-sm">Our Mission</span>
                                </div>
                                <p className="text-2xl font-bold text-foreground  leading-relaxed">
                                    To deliver superior-quality professional service solutions through a team of competent and dedicated professionals, leveraging cutting-edge technology to achieve total client satisfaction and sustainable value while upholding the highest standards of professionalism, credibility, honesty, and integrity in all our engagements.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Core Values - P.O.I.S.E */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h3 className="text-3xl font-bold text-foreground mb-4">
                            Our Core Values – <span className="text-gradient">P.O.I.S.E.</span>
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Five principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {coreValues.map((value, index) => (
                            <motion.div
                                key={value.letter}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="glass-card p-8 rounded-3xl flex flex-col group hover:border-tac-brand/30 transition-all duration-500 bg-white/60 dark:bg-foreground/5 shadow-md relative overflow-hidden"
                            >
                                {/* Large Letter Background */}
                                <div className="absolute top-4 right-4 text-8xl font-black text-foreground/5 group-hover:text-foreground/10 transition-colors">
                                    {value.letter}
                                </div>

                                <div className={`w-14 h-14 ${value.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 relative z-10`}>
                                    <value.icon className={`w-7 h-7 ${value.color}`} />
                                </div>
                                <h4 className="text-lg font-bold text-foreground mb-3 relative z-10">
                                    <span className={`${value.color} text-2xl font-black mr-2`}>{value.letter}</span>
                                    {value.title}
                                </h4>
                                <p className="text-muted-foreground text-sm leading-relaxed relative z-10">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            {/* <section className="py-20 relative bg-background">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-tac-brand/10 to-tac-purple/10 border-tac-brand/20"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                            Ready to Experience the <span className="text-gradient">TAC Advantage?</span>
                        </h2>
                        <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                            Partner with us to leverage global expertise and local insight for your business success.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/contact"
                                className="px-10 py-4 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                            >
                                Get in Touch
                            </Link>
                            <Link
                                href="/about"
                                className="px-10 py-4 bg-foreground/5 text-foreground font-bold rounded-2xl hover:bg-foreground/10 transition-all border border-foreground/10"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section> */}
        </>
    );
}
