"use client";

import { motion } from "framer-motion";
import { UserCheck, Users, ShieldCheck, Zap, Star } from "lucide-react";

const philosophyItems = [
    {
        letter: "P",
        title: "Professionalism",
        icon: UserCheck,
        description: "Adhering to the highest standards of conduct and expertise in all our engagements.",
    },
    {
        letter: "O",
        title: "Organization",
        icon: Users,
        description: "Building strong teams and systematic processes to deliver consistent value.",
    },
    {
        letter: "I",
        title: "Integrity & Innovation",
        icon: ShieldCheck,
        description: "Upholding honesty while embracing cutting-edge technology and creative solutions.",
    },
    {
        letter: "S",
        title: "Solution Driven",
        icon: Zap,
        description: "Focusing on resolving key issues and assisting in sound decision making.",
    },
    {
        letter: "E",
        title: "Excellence",
        icon: Star,
        description: "Striving for superior quality and total client satisfaction in every project.",
    },
];

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-24 relative bg-tac-dark overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                    >
                        Our Core Values
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        The <span className="text-gradient">P.O.I.S.E</span> Philosophy
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto text-lg"
                    >
                        To be the first choice, solution-driven professional service & business consulting firm globally.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
                >
                    {philosophyItems.map((item) => (
                        <motion.div
                            key={item.letter}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.9 },
                                visible: { opacity: 1, y: 0, scale: 1 }
                            }}
                            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group hover:border-tac-brand/30 hover:bg-white/5 transition-all duration-500"
                        >
                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6 group-hover:bg-tac-brand/10 transition-colors">
                                <item.icon className="w-8 h-8 text-tac-brand" />
                            </div>
                            <div className="text-5xl font-black text-white/5 mb-2 group-hover:text-tac-brand/20 transition-colors">
                                {item.letter}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-4">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
