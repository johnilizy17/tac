"use client";

import { motion } from "framer-motion";
import { Shield, BarChart2, BookOpen, Search, Briefcase, RefreshCw } from "lucide-react";

const services = [
    { title: "Audit & Assurance", icon: Shield, size: "lg", desc: "Rigorous financial scrutiny ensuring transparency and compliance.", color: "hover:shadow-[0_0_50px_rgba(102,185,41,0.3)]", iconColor: "text-tac-brand" },
    { title: "Taxation Management", icon: BarChart2, size: "md", desc: "Expert tax planning and compliance core.", color: "hover:shadow-[0_0_50px_rgba(157,0,255,0.2)]", iconColor: "text-tac-electric-purple" },
    { title: "Accounting Services", icon: BookOpen, size: "md", desc: "Precision bookkeeping and strategic financial reporting.", color: "hover:shadow-[0_0_50px_rgba(0,243,255,0.2)]", iconColor: "text-tac-cyan" },
    { title: "Forensic Investigation", icon: Search, size: "md", desc: "In-depth financial investigations and risk mitigation.", color: "hover:shadow-[0_0_50px_rgba(255,0,0,0.15)]", iconColor: "text-red-500" },
    { title: "Strategic Advisory", icon: Briefcase, size: "lg", desc: "Navigating complex market terrains with actionable insights.", color: "hover:shadow-[0_0_50px_rgba(102,185,41,0.3)]", iconColor: "text-tac-brand" },
    { title: "Liquidation", icon: RefreshCw, size: "md", desc: "Efficient business closure and asset management protocols.", color: "hover:shadow-[0_0_50px_rgba(255,255,255,0.1)]", iconColor: "text-white" },
];

export default function BentoServices() {
    return (
        <section id="services" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-24">
                    <span className="text-tac-electric-purple font-black text-[12px] tracking-[0.6em] uppercase mb-6 drop-shadow-[0_0_10px_rgba(157,0,255,0.3)]">Power Portfolio</span>
                    <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                        VIBRANT <span className="text-vibrant-gradient italic">EXPERTISE.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className={`group relative glass-vibrant p-12 overflow-hidden cursor-pointer card-glow transition-all duration-700 ${service.color} ${service.size === "lg" ? "md:col-span-2" : "col-span-1"
                                }`}
                        >
                            {/* Inner Color Pulse */}
                            <div className={`absolute -top-10 -right-10 w-40 h-40 opacity-10 blur-[60px] group-hover:opacity-30 transition-all duration-1000 ${service.iconColor.replace('text', 'bg')}`} />

                            <div className="relative z-10">
                                <service.icon className={`w-14 h-14 mb-10 group-hover:scale-125 group-hover:rotate-6 transition-all duration-700 ${service.iconColor}`} />
                                <h3 className="text-4xl font-black tracking-tighter text-white mb-6 leading-none">{service.title}</h3>
                                <p className="text-gray-400 font-medium text-lg leading-relaxed max-w-sm">{service.desc}</p>
                            </div>

                            <div className="absolute bottom-10 right-10 flex items-center gap-4 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-700">
                                <span className="text-[10px] font-black tracking-widest text-white/40 uppercase">View Service</span>
                                <div className={`w-12 h-12 rounded-full border border-current flex items-center justify-center ${service.iconColor}`}>
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
