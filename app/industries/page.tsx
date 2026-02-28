"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import {
    Building2,
    ShieldCheck,
    Flame,
    Plane,
    Factory,
    Phone,
    Home,
    Landmark,
    Cpu,
    Briefcase,
    Film,
    Hotel,
    Store
} from "lucide-react";

const industries = [
    {
        title: "Financial Services",
        icon: Building2,
        description: "The financial service industry is one of the most dynamic sectors of the economy driven by various factors such as high regulatory demands, sound corporate governance, and the high impact of technology. Our team of experts at TAC Professional Services offers a specialized solution to businesses within the ecosystem.",
        expertise: [
            "Core financial institutions",
            "FinTech companies",
            "Microfinance banks",
            "Investment managers",
            "Capital market operators and other major players within this sector"
        ]
    },
    {
        title: "Insurance",
        icon: ShieldCheck,
        description: "The Insurance sector continues to evolve with a promising future especially driven by several regulatory framework guaranteed to create a stable, more reliable and competitive environment for the industry players.",
        expertise: [
            "Mergers & Acquisition",
            "Reporting Accountants",
            "Audit & Assurance services",
            "IFRS Advisory",
            "Business Advisory services"
        ]
    },
    {
        title: "Oil & Gas, Power and Natural Resources",
        icon: Flame,
        description: "Our strength lies in the vast experience and expertise we have over the years in this industry. Our understanding of the regulatory compliance requirements and industry challenges sets us apart as solution providers within this industry.",
        expertise: [
            "Oil & Gas (Upstream and Downstream)",
            "Energy, Power",
            "Mining and other related sectors"
        ]
    },
    {
        title: "Aviation",
        icon: Plane,
        description: "Our team at TAC has played strategic roles in providing unique solutions to Airlines and other industry players & stakeholders within this sector. We understand the peculiar challenges associated within the industry which ranges from inadequate funding, high cost of operations & maintenance, lack of enabling regulatory framework amongst others.",
        expertise: [
            "Reporting accountants to airlines shoring up capital",
            "System review and internal control Management",
            "Business and Financial Advisory services"
        ]
    },
    {
        title: "Manufacturing",
        icon: Factory,
        description: "Our wide range of Professional & Advisory services covers every segment of the manufacturing industry and its value chain businesses providing end to end solutions while delivering exceptional value.",
        expertise: [
            "Fast Moving Consumable Goods (FMCG)",
            "Pharmaceuticals and Medical Services",
            "Agriculture & Logistics"
        ]
    },
    {
        title: "Telecommunications",
        icon: Phone,
        description: "The telecommunication industry in Nigeria is dynamic and can be described as constantly evolving with frequent trend changes, a tough competitive environment and high regulatory uncertainties. The need for disruptive thinking and continuous innovation remains the only option to remain relevant and drive sustainability.",
        expertise: [
            "Audit & Assurance services",
            "System review & Internal Control",
            "Tax Advisory & Compliance services",
            "Business Advisory Services"
        ]
    },
    {
        title: "Real Estate & Construction",
        icon: Home,
        description: "The Real Estate and Construction industry accounts for the economic development and growth of the nation. Our understanding of this industry enables us to provide sector relevant solutions to the challenges inhibiting growth.",
        expertise: [
            "Construction",
            "Engineering",
            "Real Estates"
        ]
    },
    {
        title: "Government, Agencies & Parastatals",
        icon: Landmark,
        description: "Our vast experience in delivering exceptional services within the various level of government, agencies, parastatals give us the advantage and preference. We have handled various assignments for government agencies and partner with regulatory agencies to provide necessary support in achieving compliance mandate.",
        expertise: [
            "Forensic investigations",
            "Project Audit",
            "Value of Money Audit",
            "Account reconciliation",
            "Special Audit"
        ]
    },
    {
        title: "Information & Technology",
        icon: Cpu,
        description: "With the increasing globalization of nations and the role technology plays in creating digital platform to drive economic initiatives, policies are created towards stronger regulation of the ICT industry generally. Our Team of experts at TAC are positioned to provide regulatory compliance and support.",
        expertise: [
            "Audit & Assurance",
            "Tax Advisory & Compliance",
            "Business advisory services",
            "Efficient & effective business processes and systems"
        ]
    },
    {
        title: "Professional Services",
        icon: Briefcase,
        description: "We serve a wide range of businesses within this sector who offer customized and knowledge-based services to their various clients. Our services cut across our primary focus areas of tax, audit and business advisory.",
        expertise: [
            "Lawyers",
            "Architects",
            "Financial Advisers",
            "Engineers",
            "Consultants"
        ]
    },
    {
        title: "Media & Entertainment",
        icon: Film,
        description: "The Media & Entertainment sector is one of the priority sectors identified in the economic recovery and growth plan of the Federal Government of Nigeria. We have served various clients in this industry through our unique service proposition delivering exceptional value.",
        expertise: [
            "Financing solutions",
            "Copyright & piracy advisory",
            "Tax Policies & reforms",
            "Infrastructure development support"
        ]
    },
    {
        title: "Hospitality, Leisure & Tourism",
        icon: Hotel,
        description: "Hospitality, Leisure & Tourism remains one of the undeveloped industries with huge economic potentials within the economy. TAC has partnered with several players within the industry providing comprehensive professional services.",
        expertise: [
            "Internal and External Auditors",
            "Taxation services",
            "Accountancy Services",
            "Business Consulting Services",
            "Design of Standard Operating Manual",
            "System Review & Internal Control Management"
        ]
    },
    {
        title: "Small & Medium Scale Enterprise",
        icon: Store,
        description: "The Small and Medium (SME) Business landscape can be both challenging and exciting. TAC Professional Services provides support for SMEs over the years which has helped them to achieve hitch-free entry and start-up that enabled them to hit the ground running without delay.",
        expertise: [
            "Market entry strategy",
            "Regulatory compliance",
            "Business processes optimization",
            "Back-office activities support",
            "Start-up advisory"
        ]
    }
];

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white dark:from-tac-dark dark:via-tac-dark dark:to-tac-dark/50">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">
                            Our Industries
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Sector <span className="text-gradient">Expertise</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            We deliver specialized professional services across diverse industries, combining deep sector knowledge with technical excellence to drive sustainable growth and compliance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="glass-card p-8 rounded-3xl bg-white/60 dark:bg-foreground/5 hover:border-tac-brand/30 transition-all group"
                            >
                                {/* Icon */}
                                <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-tac-brand/20 transition-colors">
                                    <industry.icon className="w-7 h-7 text-tac-brand" />
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-tac-brand transition-colors">
                                    {industry.title}
                                </h3>

                                {/* Description */}
                                <p className="text-muted-foreground leading-relaxed mb-6">
                                    {industry.description}
                                </p>

                                {/* Expertise List */}
                                <div className="space-y-2">
                                    <span className="text-sm font-semibold text-tac-brand uppercase tracking-wider">
                                        Our Expertise:
                                    </span>
                                    <ul className="space-y-2">
                                        {industry.expertise.map((item, i) => (
                                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tac-brand shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-tac-dark mb-8">
                            Ready to partner with industry experts?
                        </h2>
                        <a
                            href="/contact"
                            className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Get in Touch
                        </a>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
