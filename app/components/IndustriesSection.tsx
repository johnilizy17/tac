"use client";

import { motion } from "framer-motion";
import { Landmark, Umbrella, Plane } from "lucide-react";

const industries = [
    {
        title: "Financial Services",
        description: "Navigating regulatory demands and corporate governance with high-impact technology solutions.",
        icon: Landmark,
        color: "from-tac-brand/30 to-tac-brand/5",
    },
    {
        title: "Insurance",
        description: "Adapting to evolving regulatory frameworks to create stable and competitive environments.",
        icon: Umbrella,
        color: "from-tac-brand/20 to-tac-brand/5",
    },
    {
        title: "Aviation",
        description: "Strategic solutions for airlines and stakeholders, addressing unique industry challenges since inception.",
        icon: Plane,
        color: "from-tac-brand/10 to-tac-brand/0",
    },
];

export default function IndustriesSection() {
    return (
        <section id="industries" className="py-24 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-tac-purple font-semibold tracking-widest uppercase text-sm"
                        >
                            Industries We Serve
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mt-4"
                        >
                            Tailored Expertise Across <span className="text-gradient">Diverse Sectors</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-sm"
                    >
                        We adapt our professional and advisory services per excellence to suit the peculiar challenges of each sector.
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
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {industries.map((industry) => (
                        <motion.div
                            key={industry.title}
                            variants={{
                                hidden: { opacity: 0, scale: 0.9, x: -20 },
                                show: { opacity: 1, scale: 1, x: 0 }
                            }}
                            whileHover={{ y: -10 }}
                            className={`p-10 rounded-3xl bg-gradient-to-br ${industry.color} border border-foreground/10 group cursor-default transition-all duration-300 shadow-[0_0_30px_rgba(0,0,0,0.2)]`}
                        >
                            <industry.icon className="w-12 h-12 text-tac-brand mb-8 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-2xl font-bold text-foreground mb-4">{industry.title}</h3>
                            <p className="text-muted-foreground leading-relaxed mb-6">
                                {industry.description}
                            </p>
                            <div className="w-12 h-1 bg-foreground/20 rounded-full group-hover:w-full group-hover:bg-tac-brand transition-all duration-500" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
