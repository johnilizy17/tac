"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const team = [
    {
        name: "Tunde Adaramaja",
        role: "Managing Partner / CEO",
        image: "3s.jpeg",
        email: "tunde@tacgroupng.com",
        bio: "Leading TAC with over two decades of professional expertise in audit and business consulting.",
    },
    {
        name: "Tunde Faniyi",
        role: "Senior Partner/COO",
        image: "2s.jpeg",
        email: "faniyi@tacgroupng.com",
        bio: "Dedicated and competent professionals using technology to drive client success with integrity.",
    },
    {
        name: "Dr. Abraham O. Bamigboje",
        role: "Associate Partner, Assurance & Transaction Advisory Service",
        image: "5s.jpg",
        email: "abraham@tacgroupng.com",
    },
    {
        name: "James Oni",
        role: "Director, TAC Tax Advisory Service",
        image: "6s.jpg",
        email: "James@tacgroupng.com",
    },
    {
        name: "Tunde Latinwo",
        role: "Director, Business Development & Corporate Services",
        image: "7s.jpg",
        email: "latinwo@tacgroupng.com",
    },
    {
        name: "Amaebi Fiderikumo",
        role: "Associate Director, Business Advisory",
        image: "1s.jpg",
        email: "amaebi@tacgroupng.com",
    },
    {
        name: "Oluwole Adaramaja",
        role: "Associate Director, Corporate Transactions, Compliance, Recovery & Liquidation",
        image: "2s.jpeg",
        email: "wole@tacgroupng.com",
    },
    {
        name: "Muheez Popoola",
        role: "Senior Manager, TAC Tax Advisory Service",
        image: "3s.jpeg",
        email: "muheez@tacgroupng.com",
    },
    {
        name: "Anjola Dapo Fagbure",
        role: "Manager, Audit & Assurance Services",
        image: "5s.jpg",
        email: "anjola@tacgroupng.com",
    },
];

export default function TeamSection() {
    return (
        <section id="team" className="py-24 relative bg-background/50">
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
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground"
                    >
                        Led by <span className="text-gradient">Visionaries</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
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
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                >
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="group relative flex flex-col"
                        >
                            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-foreground/10 group-hover:border-tac-brand/50 transition-colors duration-500 shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-foreground/5">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-xl font-bold text-foreground mb-1 leading-tight">{member.name}</h3>
                                    <p className="text-tac-brand font-semibold text-xs tracking-wider uppercase">{member.role}</p>
                                </div>
                            </div>

                            <div className="px-2 flex flex-col gap-2">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-2 text-muted-foreground hover:text-tac-brand transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    {member.email}
                                </a>
                                {member.bio && (
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 italic">
                                        "{member.bio}"
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
