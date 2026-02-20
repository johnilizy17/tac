"use client";

import { motion } from "framer-motion";
import { ShieldAlert, FileSearch, Activity, Target } from "lucide-react";

const rampSteps = [
    {
        id: "R",
        title: "Risk Assessment",
        description: "Identifying and evaluating potential threats to your business operations and financial stability.",
        icon: ShieldAlert,
        color: "from-tac-brand to-tac-brand/40",
    },
    {
        id: "A",
        title: "Analysis & Audit",
        description: "Comprehensive examination of financial records and operational processes to ensure compliance and efficiency.",
        icon: FileSearch,
        color: "from-tac-brand/80 to-tac-brand/20",
    },
    {
        id: "M",
        title: "Monitoring & Management",
        description: "Proactive oversight and strategic management to mitigate risks and capitalize on opportunities.",
        icon: Activity,
        color: "from-tac-brand/60 to-tac-brand/10",
    },
    {
        id: "P",
        title: "Planning & Professionalism",
        description: "Developing robust strategic roadmaps with the highest level of professional ethics and expertise.",
        icon: Target,
        color: "from-tac-brand/40 to-tac-brand/5",
    },
];

export default function RampSection() {
    return (
        <section id="ramp" className="py-24 relative overflow-hidden bg-background">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-tac-brand/5 to-transparent pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-tac-brand/5 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                    >
                        Our Methodology
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        The <span className="text-gradient">R.A.M.P</span> Framework
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        A systematic approach designed to provide clarity, security, and growth for your business through every stage of the professional cycle.
                    </motion.p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {rampSteps.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={{
                                hidden: { opacity: 0, y: 30, scale: 0.95 },
                                show: { opacity: 1, y: 0, scale: 1 }
                            }}
                            className="glass-card p-8 rounded-3xl group hover:border-tac-brand/30 transition-all duration-500"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} p-3 mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                                <step.icon className="w-full h-full text-tac-dark" />
                            </div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-4xl font-bold text-foreground/10 group-hover:text-tac-brand/30 transition-colors duration-500">
                                    {step.id}
                                </span>
                                <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                            </div>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Integration with Aviation (Subtle Hint) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="mt-20 p-8 rounded-3xl bg-foreground/5 border border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-md"
                >
                    <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-foreground">Aerospace & Aviation Applications</h4>
                        <p className="text-muted-foreground text-sm">
                            Our R.A.M.P methodology is extensively applied in high-stakes industries like Aviation, ensuring airworthiness compliance and operational excellence through technical and commercial audits.
                        </p>
                    </div>
                    <button className="px-6 py-3 bg-tac-brand/20 hover:bg-tac-brand/30 text-tac-brand font-medium rounded-full transition-all border border-tac-brand/30 whitespace-nowrap">
                        Aviation Services
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
