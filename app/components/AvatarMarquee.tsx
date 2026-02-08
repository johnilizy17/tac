"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "Dr. Adebayo", role: "Strategic Advisor", img: "1s.jpg", color: "from-tac-brand" },
    { name: "Global Finance", role: "Project Partner", icon: "🏛️", color: "from-tac-cyan" },
    { name: "Sarah Jenkins", role: "Audit Lead", img: "2s.jpeg", color: "from-tac-electric-purple" },
    { name: "Aviation Corp", role: "Sector Hub", icon: "✈️", color: "from-tac-brand" },
    { name: "Tunde Faniyi", role: "COO", img: "3s.jpeg", color: "from-tac-cyan" },
    { name: "Equity Partners", role: "Investment", icon: "💎", color: "from-tac-electric-purple" },
    { name: "Marcus Thorne", role: "Tax Consultant", img: "1s.jpg", color: "from-tac-brand" },
    { name: "Tech Ventures", role: "Digital Partner", icon: "🚀", color: "from-tac-cyan" },
];

export default function AvatarMarquee() {
    const displayItems = [...partners, ...partners, ...partners];

    return (
        <section className="relative py-32 overflow-hidden border-y border-white/10 bg-transparent">
            {/* Vibrant Background Text */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-center pointer-events-none opacity-[0.05]">
                <h2 className="text-[30vw] font-black tracking-tighter text-vibrant-gradient whitespace-nowrap blur-sm">NETWORK</h2>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-16 relative z-10">
                <div className="flex items-center gap-6">
                    <div className="w-20 h-[2px] bg-gradient-to-r from-tac-brand to-tac-cyan" />
                    <span className="text-[12px] font-black tracking-[0.6em] text-white uppercase drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Vibrant Synergy Network</span>
                </div>
            </div>

            {/* Top Row - Fast & Glowing */}
            <div className="flex mb-12">
                <motion.div
                    animate={{ x: [0, -1500] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="flex gap-10 items-center"
                >
                    {displayItems.map((partner, i) => (
                        <div
                            key={i}
                            className={`flex items-center gap-6 glass-vibrant px-10 py-6 border-b-2 border-transparent hover:border-white transition-all duration-700 hover:scale-110 card-glow`}
                        >
                            <div className="relative">
                                <div className={`absolute -inset-1 bg-gradient-to-tr ${partner.color} to-transparent rounded-full blur-md opacity-60`} />
                                <div className="w-16 h-16 rounded-full bg-white/10 overflow-hidden flex items-center justify-center text-3xl relative z-10 border border-white/20">
                                    {partner.img ? (
                                        <img src={partner.img} alt={partner.name} className="w-full h-full object-cover" />
                                    ) : (
                                        partner.icon
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black text-white tracking-widest">{partner.name.toUpperCase()}</span>
                                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{partner.role}</span>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Bottom Row - Slower Reverse & Vibrant */}
            <div className="flex">
                <motion.div
                    animate={{ x: [-1500, 0] }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="flex gap-10 items-center opacity-60 hover:opacity-100 transition-opacity"
                >
                    {displayItems.map((partner, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-6 bg-white/5 backdrop-blur-md px-10 py-6 border border-white/5 transition-all duration-700 hover:bg-white/10"
                        >
                            <div className="w-12 h-12 rounded-full bg-tac-brand/20 flex items-center justify-center text-2xl shadow-[0_0_15px_rgba(102,185,41,0.2)]">
                                {partner.icon || "🏛️"}
                            </div>
                            <span className="text-[11px] font-black text-white/50 tracking-[0.4em] uppercase whitespace-nowrap">{partner.name} Alliance</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
