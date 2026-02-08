"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BarChart4, Calculator, UserCheck, Briefcase, Globe } from "lucide-react";

const services = [
    {
        title: "Audit & Assurance",
        desc: "Precision-driven financial verification and compliance.",
        icon: ShieldCheck,
        size: "md:col-span-2",
        color: "bg-tac-brand/10"
    },
    {
        title: "Tax Advisory",
        desc: "Strategic tax planning and management.",
        icon: Calculator,
        size: "md:col-span-1",
        color: "bg-white/5"
    },
    {
        title: "Business Consulting",
        desc: "Optimizing operations for sustainable growth.",
        icon: Briefcase,
        size: "md:col-span-1",
        color: "bg-white/5"
    },
    {
        title: "Forensic Services",
        desc: "Deep-dive investigations and integrity audits.",
        icon: BarChart4,
        size: "md:col-span-2",
        color: "bg-tac-brand/20"
    },
    {
        title: "International Reach",
        desc: "Global expertise via the Integra Network.",
        icon: Globe,
        size: "md:col-span-1",
        color: "bg-white/5"
    },
    {
        title: "HR Consulting",
        desc: "Building elite professional teams.",
        icon: UserCheck,
        size: "md:col-span-1",
        color: "bg-white/5"
    }
];

export default function BentoServices() {
    return (
        <section id="services" className="py-24 bg-tac-dark">
            <div className="max-w-7xl mx-auto px-4">
                <div className="mb-20">
                    <span className="text-tac-brand uppercase tracking-widest text-xs font-bold">Solutions Area</span>
                    <h2 className="text-5xl font-black text-white mt-4 tracking-tighter">OUR EXPERTISE.</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {services.map((s, i) => (
                        <motion.div
                            key={s.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`${s.size} ${s.color} p-10 flex flex-col justify-between group cursor-pointer hover:bg-tac-brand transition-all duration-500`}
                        >
                            <div className="flex justify-between items-start">
                                <s.icon className="w-10 h-10 text-tac-brand group-hover:text-white transition-colors" />
                                <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500 group-hover:text-white/50">Core Service</div>
                            </div>

                            <div>
                                <h3 className="text-2xl font-black text-white mb-2 tracking-tight">{s.title.toUpperCase()}</h3>
                                <p className="text-gray-400 group-hover:text-white/80 transition-colors text-sm font-medium leading-relaxed">
                                    {s.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
