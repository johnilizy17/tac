"use client";

import { motion } from "framer-motion";
import { Star, ShieldCheck, Zap, UserCheck, Target, Quote } from "lucide-react";

const coreValues = [
    {
        title: "Excellence",
        icon: Star,
        description: "Striving for superior quality and total client satisfaction in every engagement.",
        color: "text-tac-gold",
        bg: "bg-tac-gold/10"
    },
    {
        title: "Integrity",
        icon: ShieldCheck,
        description: "Upholding the highest ethical standards with transparency and honesty.",
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Innovation",
        icon: Zap,
        description: "Embracing creative solutions and cutting-edge technology to drive value.",
        color: "text-tac-brand",
        bg: "bg-tac-brand/10"
    },
    {
        title: "Professionalism",
        icon: UserCheck,
        description: "Executing tasks with world-class expertise and disciplined conduct.",
        color: "text-tac-purple",
        bg: "bg-tac-purple/10"
    },
    {
        title: "Objectivity",
        icon: Target,
        description: "Maintaining unbiased, evidence-based perspectives in all our advisory.",
        color: "text-emerald-500",
        bg: "bg-emerald-500/10"
    },
];

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-24 relative bg-tac-dark overflow-hidden">
            {/* Background Depth */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(102,185,41,0.03),transparent)] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Vision & Mission Split */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-12 rounded-[2.5rem] relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                            <Quote className="w-24 h-24 text-tac-brand rotate-180" />
                        </div>
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-xs mb-6 block">Our Vision</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                            To be the <span className="text-gradient">first choice</span>, solution-driven firm globally.
                        </h3>
                        <p className="text-gray-400 text-lg leading-relaxed max-w-lg italic">
                            Connecting local insights with international standards to define the future of business consulting.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="glass-card p-12 rounded-[2.5rem] border-tac-purple/20 bg-gradient-to-br from-white/5 to-tac-purple/5"
                    >
                        <span className="text-tac-purple font-bold tracking-widest uppercase text-xs mb-6 block">Our Mission</span>
                        <h3 className="text-2xl font-bold text-white leading-snug mb-8">
                            Enshrining accountability, professionalism, and objectivity in the industry.
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm">
                            We provide client-centered, value-for-money, and time-bound services that empower growth and transparency in the Nigerian professional services space.
                        </p>
                        <div className="mt-8 h-1 w-24 bg-gradient-to-r from-tac-purple to-tac-brand rounded-full" />
                    </motion.div>
                </div>

                {/* Core Values Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Our <span className="text-gradient">Core Values</span>
                    </motion.h2>
                    <div className="h-1 w-20 bg-tac-brand/30 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {coreValues.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -12 }}
                            className="glass-card p-8 rounded-3xl flex flex-col items-center text-center group hover:border-tac-brand/40 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 ${value.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                <value.icon className={`w-7 h-7 ${value.color}`} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-4">{value.title}</h4>
                            <p className="text-gray-400 text-xs leading-relaxed">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative background orbs */}
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-tac-brand/5 blur-[120px] rounded-full -z-0" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-tac-purple/5 blur-[120px] rounded-full -z-0" />
        </section>
    );
}
