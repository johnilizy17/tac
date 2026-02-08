"use client";

import { motion } from "framer-motion";

const team = [
    { name: "Tunde Faniyi", role: "MD/CEO", img: "1s.jpg", color: "shadow-[0_0_50px_rgba(102,185,41,0.3)]" },
    { name: "Sarah Ogunniyi", role: "COO", img: "2s.jpeg", color: "shadow-[0_0_50px_rgba(157,0,255,0.2)]" },
    { name: "Marcus Williams", role: "Principal Partner", img: "3s.jpeg", color: "shadow-[0_0_50px_rgba(0,243,255,0.2)]" }
];

export default function TeamSection() {
    return (
        <section id="team" className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center mb-28">
                    <span className="text-tac-cyan font-black text-[12px] tracking-[0.7em] uppercase mb-6 drop-shadow-[0_0_10px_rgba(0,243,255,0.4)]">Executive Talent</span>
                    <h2 className="text-7xl md:text-9xl font-black text-white tracking-tighter leading-none">
                        VIBRANT <span className="text-vibrant-gradient">LEADERS.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 1 }}
                            className="group relative"
                        >
                            <div className={`glass-vibrant p-6 overflow-hidden border-2 border-white/5 transition-all duration-1000 group-hover:border-white/20 card-glow ${member.color}`}>
                                <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000 relative">
                                    <div className="absolute inset-0 bg-tac-brand/10 opacity-0 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-overlay" />
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
                                    />
                                    {/* Name Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-tac-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                        <div className="flex items-center gap-3">
                                            <div className="w-6 h-[1px] bg-tac-brand" />
                                            <span className="text-[10px] font-black text-white tracking-widest uppercase">Elite Level</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 px-4 pb-4">
                                    <h3 className="text-3xl font-black tracking-tighter text-white mb-2 group-hover:text-vibrant-gradient transition-colors">{member.name.toUpperCase()}</h3>
                                    <span className="text-[11px] font-bold text-tac-brand tracking-[0.3em] uppercase drop-shadow-[0_0_5px_rgba(102,185,41,0.5)]">{member.role}</span>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-tac-brand/30 group-hover:border-tac-brand transition-colors duration-700" />
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-tac-cyan/30 group-hover:border-tac-cyan transition-colors duration-700" />
                        </motion.div>
                    ))}
                </div>

                <div className="mt-32 pt-16 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-12 bg-white/[0.02] p-12 backdrop-blur-sm">
                    <div className="flex flex-col">
                        <span className="text-tac-brand font-black tracking-widest text-[12px] mb-4 uppercase drop-shadow-[0_0_10px_rgba(102,185,41,0.3)]">Global Integrity Network</span>
                        <p className="text-gray-400 text-lg max-w-xl leading-relaxed font-medium">
                            Our leadership team anchors the <span className="text-white">vibrant fusion</span> of local domain expertise with international professional standards.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-12 justify-center lg:justify-end">
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-black text-white mb-1">ICAN</span>
                            <span className="text-[9px] font-black text-gray-500 tracking-widest uppercase">Verified Member</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-4xl font-black text-white mb-1">CITN</span>
                            <span className="text-[9px] font-black text-gray-500 tracking-widest uppercase">Tax Expert</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
