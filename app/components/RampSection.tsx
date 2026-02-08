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
        <section id="ramp" className="py-32 relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="magazine-grid mb-24">
                    <div className="col-span-12 lg:col-span-5">
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold block mb-4">Methodology</span>
                        <h2 className="text-6xl font-black text-tac-dark tracking-tighter leading-none mb-8">
                            THE<br />R.A.M.P<br />FRAMEWORK.
                        </h2>
                        <p className="text-gray-500 text-xl font-light leading-relaxed">
                            A high-precision systematic approach designed for the complexities of modern business operations.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                    {rampSteps.map((step, i) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-tac-dark p-12 text-white border border-white/5 group hover:bg-tac-brand transition-all duration-700"
                        >
                            <div className="text-7xl font-black text-white/5 group-hover:text-white/20 transition-colors mb-8 font-mono">
                                {step.id}
                            </div>
                            <div className="w-8 h-[2px] bg-tac-brand group-hover:bg-white mb-6 group-hover:w-full transition-all duration-700" />
                            <h3 className="text-2xl font-black mb-4 tracking-tighter">{step.title.toUpperCase()}</h3>
                            <p className="text-gray-500 group-hover:text-white/80 transition-colors font-light text-sm leading-relaxed">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-20 p-12 bg-tac-dark text-white flex flex-col md:flex-row items-center justify-between gap-12 group"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-tac-brand animate-pulse" />
                            <span className="text-tac-brand font-bold text-xs uppercase tracking-widest">Specialized Application</span>
                        </div>
                        <h4 className="text-2xl font-black tracking-tighter mb-4">AEROSPACE & AVIATION INTEGRATION</h4>
                        <p className="text-gray-500 group-hover:text-white/70 transition-colors font-light">
                            Our methodology is rigor-tested in the aviation sector, ensuring compliance with global airworthiness standards through deep technical and commercial audits.
                        </p>
                    </div>
                    <button className="px-12 py-5 bg-white text-tac-dark font-black tracking-widest text-xs hover:bg-tac-brand hover:text-white transition-all duration-500 whitespace-nowrap">
                        AVIATION EXPERTISE
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
