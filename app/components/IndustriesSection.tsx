"use client";

import { motion } from "framer-motion";
import { Landmark, Umbrella, Plane } from "lucide-react";

const industries = [
    {
        title: "Financial Services",
        description: "Navigating regulatory demands and corporate governance with high-impact technology solutions.",
        icon: Landmark,
        color: "from-tac-brand/30 to-tac-brand/5",
    },
    {
        title: "Insurance",
        description: "Adapting to evolving regulatory frameworks to create stable and competitive environments.",
        icon: Umbrella,
        color: "from-tac-brand/20 to-tac-brand/5",
    },
    {
        title: "Aviation",
        description: "Strategic solutions for airlines and stakeholders, addressing unique industry challenges since inception.",
        icon: Plane,
        color: "from-tac-brand/10 to-tac-brand/0",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="py-32 relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="magazine-grid mb-24">
                    <div className="col-span-12 lg:col-span-1 border-l-2 border-tac-brand pl-6 hidden lg:block">
                        <span className="text-tac-dark font-black text-sm tracking-tighter uppercase [writing-mode:vertical-lr] rotate-180">GLOBAL SCALE</span>
                    </div>
                    <div className="col-span-12 lg:col-span-11">
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold block mb-4">Sectors</span>
                        <h2 className="text-5xl md:text-8xl font-black text-tac-dark tracking-tighter leading-none">
                            EXPERTISE<br />THAT ADAPTS.
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
                    {industries.map((industry, i) => (
                        <motion.div
                            key={industry.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group p-16 bg-tac-dark text-white border-white/5 border relative overflow-hidden h-[500px] flex flex-col justify-end"
                        >
                            {/* Icon Background Reveal */}
                            <industry.icon className="absolute top-12 right-12 w-32 h-32 text-white/5 group-hover:text-tac-brand/10 group-hover:scale-150 transition-all duration-700" />

                            <div className="relative z-10">
                                <div className="w-12 h-[2px] bg-tac-brand mb-8 group-hover:w-full transition-all duration-700" />
                                <h3 className="text-4xl font-black mb-6 tracking-tighter leading-none">{industry.title.toUpperCase()}</h3>
                                <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 group-hover:text-white transition-colors">
                                    {industry.description}
                                </p>
                                <button className="text-tac-brand font-bold text-xs tracking-widest flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                                    VIEW SERVICES <div className="w-4 h-[1px] bg-tac-brand" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
