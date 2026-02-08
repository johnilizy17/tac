"use client";

import { motion } from "framer-motion";

const team = [
    {
        name: "Tunde Adaramaja",
        role: "Managing Partner / CEO",
        image: "3s.jpeg",
        bio: "Strategic leader with over 20 years of expertise in audit and complex financial systems.",
    },
    {
        name: "Tunde Faniyi",
        role: "Senior Partner / COO",
        image: "2s.jpeg",
        bio: "Operational strategist focused on integrating technology with professional integrity.",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="magazine-grid mb-24">
                    <div className="col-span-12 lg:col-span-4 self-end">
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold block mb-4">Leadership</span>
                        <h2 className="text-6xl font-black text-tac-dark tracking-tighter leading-none">
                            THE BOARD.
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <p className="text-gray-500 text-xl font-light leading-relaxed max-w-2xl">
                            Our leadership team brings together decades of cross-industry experience, dedicated to upholding the highest standards of professional ethics and client success.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative flex flex-col lg:flex-row gap-10 items-center lg:items-start"
                        >
                            <div className="w-full lg:w-1/2 aspect-[4/5] bg-tac-dark overflow-hidden relative">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-tac-brand/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            </div>

                            <div className="w-full lg:w-1/2 pt-6">
                                <div className="border-t-2 border-tac-dark w-12 mb-6" />
                                <h3 className="text-3xl font-black text-tac-dark mb-1 tracking-tighter">{member.name.toUpperCase()}</h3>
                                <p className="text-tac-brand font-bold text-xs uppercase tracking-[0.2em] mb-6">{member.role}</p>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    {member.bio}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-24 pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="text-sm font-bold tracking-widest text-gray-400 uppercase">We are looking for elite talent</div>
                    <button className="px-10 py-4 bg-tac-dark text-white font-bold text-sm tracking-widest hover:bg-tac-brand transition-all duration-500">
                        JOIN THE TEAM
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
