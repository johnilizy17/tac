"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "Tunde Adaramaja",
        role: "Managing Partner / CEO",
        image: "3s.jpeg",
        bio: "Leading TAC with over two decades of professional expertise in audit and business consulting.",
    },
    {
        name: "Tunde Faniyi",
        role: "Senior Partner/COO",
        image: "2s.jpeg",
        bio: "Dedicated and competent professionals using technology to drive client success with integrity.",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-24 relative bg-tac-dark/50">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                    >
                        Our People
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        Led by <span className="text-gradient">Visionaries</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        Our strength lies in our people. We combine local expertise with a global perspective to deliver exceptional value.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    className="flex flex-wrap justify-center gap-12"
                >
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="group relative max-w-sm"
                        >
                            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/10 group-hover:border-tac-brand/50 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-tac-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                <div className="absolute bottom-6 left-6 right-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                                    <p className="text-tac-brand font-semibold text-sm tracking-wider">{member.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-400 text-center text-sm leading-relaxed px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                {member.bio}
                            </p>
                        </motion.div>
                    ))}

                    {/* Join Us Card */}
                    <motion.div
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            show: { opacity: 1, y: 0 }
                        }}
                        className="max-w-sm w-full flex flex-col items-center justify-center p-12 glass-card rounded-3xl border-dashed border-2 border-white/10 hover:border-tac-brand/30 transition-all group"
                    >
                        <div className="text-tac-brand text-5xl mb-6 group-hover:rotate-90 transition-transform duration-500">+</div>
                        <h3 className="text-xl font-bold text-white mb-4">Join Our Journey</h3>
                        <p className="text-gray-500 text-center text-sm mb-8">
                            We are always looking for passionate professionals to join our one-stop consulting firm.
                        </p>
                        <button className="px-6 py-2 border border-white/10 rounded-full text-sm font-medium hover:bg-tac-brand hover:text-white hover:border-tac-brand transition-all duration-300">
                            View Careers
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
