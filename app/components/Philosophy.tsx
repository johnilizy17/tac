"use client";

import { motion } from "framer-motion";

const poise = [
    { letter: "P", title: "PROFESSIONALISM", desc: "Highest standards in every engagement.", glow: "group-hover:text-tac-brand/40" },
    { letter: "O", title: "OBJECTIVITY", desc: "Fair and unbiased strategic clarity.", glow: "group-hover:text-tac-cyan/40" },
    { letter: "I", title: "INTEGRITY", desc: "Unwavering ethical commitment.", glow: "group-hover:text-tac-electric-purple/40" },
    { letter: "S", title: "SKILL & COMPETENCE", desc: "Continuous excellence and precision.", glow: "group-hover:text-tac-brand/40" },
    { letter: "E", title: "ETHICAL BEHAVIOR", desc: "Trust as the foundation of results.", glow: "group-hover:text-tac-cyan/40" }
];

export default function Philosophy() {
    return (
        <section className="py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="magazine-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 lg:col-span-1 border-l border-white/10 pl-6"
                    >
                        <span className="text-[10px] font-black tracking-[1em] text-tac-brand uppercase [writing-mode:vertical-lr] rotate-180 h-32">
                            THE_DNA
                        </span>
                    </motion.div>

                    <div className="col-span-12 lg:col-span-11">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            className="text-white font-black text-xs tracking-[0.5em] uppercase mb-20 text-center drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        >
                            THE <span className="text-vibrant-gradient">P.O.I.S.E</span> FRAMEWORK
                        </motion.h3>

                        <div className="flex flex-col gap-4">
                            {poise.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="glass-vibrant p-10 flex items-center gap-16 group card-glow transition-all duration-700"
                                >
                                    <span className={`text-9xl font-black text-white/5 transition-colors duration-700 leading-none ${item.glow}`}>
                                        {item.letter}.
                                    </span>
                                    <div>
                                        <h4 className="text-3xl font-black tracking-tighter text-white mb-3 group-hover:text-vibrant-gradient transition-colors cursor-default">{item.title}</h4>
                                        <p className="text-gray-400 font-medium text-lg max-w-lg leading-relaxed">{item.desc}</p>
                                    </div>
                                    <div className="ml-auto w-16 h-16 rounded-full border border-white/5 flex items-center justify-center text-[11px] font-black text-gray-500 tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                                        vV3.0_VIBE
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
