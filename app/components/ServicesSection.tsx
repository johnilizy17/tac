"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, BookOpen, Scaling, Search, Briefcase, Recycle } from "lucide-react";

const services = [
    {
        title: "Audit & Assurance",
        description: "Delivering international best practice auditing to provide confidence to key business decision-makers.",
        icon: ClipboardCheck,
        link: "/services/audit",
    },
    {
        title: "Accounting Services",
        description: "Customized outsourced accounting solutions that deliver high-value financial management.",
        icon: BookOpen,
        link: "/services/accounting",
    },
    {
        title: "Taxation Management",
        description: "Comprehensive advisory to corporate and individual clients to minimize tax burdens through planning.",
        icon: Scaling,
        link: "/services/taxation",
    },
    {
        title: "Forensic Investigation",
        description: "Expert reactive and proactive investigations into criminal matters and corporate disputes.",
        icon: Search,
        link: "/services/forensic",
    },
    {
        title: "Business Consulting",
        description: "Quality solution-driven management consulting and advisory across various economic sectors.",
        icon: Briefcase,
        link: "/services/consulting",
    },
    {
        title: "Receivership & Liquidation",
        description: "Specialized debt recovery, business restructuring, and turnaround management services.",
        icon: Recycle,
        link: "/services/liquidation",
    },
];

export default function ServicesSection() {
    return (
        <section id="services" className="py-24 relative bg-background">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground"
                    >
                        Professional <span className="text-gradient">Solutions</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-muted-foreground max-w-2xl mx-auto text-lg"
                    >
                        We offer a full array of professional services across numerous business fields to empower your growth with integrity.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card p-10 rounded-3xl group hover:border-tac-brand/30 transition-all duration-500 flex flex-col items-start"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-tac-brand/10 flex items-center justify-center mb-8 border border-tac-brand/20 group-hover:bg-tac-brand/20 group-hover:scale-110 transition-all duration-500">
                                <service.icon className="w-8 h-8 text-tac-brand" />
                            </div>
                            <h3 className="text-2xl font-bold text-foreground group-hover:text-tac-brand transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-500 leading-relaxed mb-8 flex-grow">
                                {service.description}
                            </p>
                            <button className="flex items-center gap-2 text-tac-brand font-medium hover:gap-4 transition-all duration-300">
                                Explore More <span className="text-xl">→</span>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
