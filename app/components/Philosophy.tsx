"use client";

import { motion } from "framer-motion";
// Removed unused imports: UserCheck, Users, ShieldCheck, Zap, Star

const philosophyItems = [
    { letter: "P", title: "Professionalism", desc: "Expert conduct and specialized knowledge." },
    { letter: "O", title: "Organization", desc: "Cohesive team building and structure." },
    { letter: "I", title: "Integrity", desc: "Innovation driven by honest principles." },
    { letter: "S", title: "Solution", desc: "Result-oriented approach to challenges." },
    { letter: "E", title: "Excellence", desc: "Superior quality in every delivery." },
];

export default function Philosophy() {
    return (
        <section className="py-32 bg-tac-dark relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-4 lg:sticky lg:top-32">
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold">Our DNA</span>
                        <h2 className="text-7xl font-black text-white mt-4 tracking-tighter leading-none mb-8">P.O.I.S.E</h2>
                        <p className="text-gray-400 text-lg leading-relaxed font-light">
                            Our core values define the identity of TAC Professional Services and guide our commitment to client success.
                        </p>
                    </div>

                    <div className="lg:col-span-8 flex flex-col gap-1">
                        {philosophyItems.map((item, i) => (
                            <motion.div
                                key={item.letter}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex items-center justify-between py-12 border-b border-white/5 hover:border-tac-brand transition-colors cursor-pointer"
                            >
                                <div className="flex items-center gap-12">
                                    <span className="text-7xl font-black text-white/5 group-hover:text-tac-brand transition-colors duration-500 font-mono">
                                        {item.letter}
                                    </span>
                                    <div>
                                        <h3 className="text-2xl font-black text-white mb-1 group-hover:translate-x-4 transition-transform duration-500">{item.title.toUpperCase()}</h3>
                                        <p className="text-gray-500 group-hover:translate-x-4 transition-transform duration-500 delay-75">{item.desc}</p>
                                    </div>
                                </div>
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-2 h-2 bg-tac-brand rounded-full" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
