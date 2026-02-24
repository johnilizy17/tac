"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function TaxCompliancePage() {
    const subServices = [
        {
            title: "THE NIGERIA TAX REFORM ACT – Our Advisory Service",
            description: "The Nigeria Tax Reform Acts represent a fundamental shift in how taxation is administered, enforced, and interpreted in Nigeria. Beyond compliance, the reforms introduce new expectations around transparency, documentation, economic substance, and proactive engagement with tax authorities. Our advisory service is designed to help businesses, investors, NGOs, and individuals understand the real impact of the reforms on their operations and decisions, identify areas of exposure early, and implement practical solutions that are compliant, defensible, and commercially sound. We work closely with clients to translate the reforms into clear actions, ensuring they are well-positioned to manage risk, preserve value, and operate with confidence under the new tax regime."
        },
        {
            title: "Corporate Tax Management (CIT, PPT, ETD)",
            description: "At TAC, we provide comprehensive corporate tax planning, management & advisory services to clients in all areas of the economy, ensuring compliance obligations and tax efficiency. Our customised Tax automated system and AI Tax support tools assist in ensuring accurate tax computations that align with the company's Audited Financial Statements and facilitate speedy response and collection of the company's tax clearance certificate.",
            details: [
                "Detailed review of the company's business model, revenue streams, and operational structure to identify tax risks, inefficiencies, and planning opportunities.",
                "Preparation and filing of annual Company Income Tax (CIT) returns in line with applicable tax laws and the Nigeria Tax Reform Acts 2025.",
                "Reconciliation of tax computations with Audited Financial Statements to ensure consistency and reduce audit exposure.",
                "Processing and follow-up on Company Income Tax Clearance Certificates, including resolution of issues that may delay issuance.",
                "Review and response to tax queries, desk reviews, and correspondence arising from filed returns.",
                "Representation and liaison with the Nigeria Revenue Service (NRS) during tax audits, investigations, reconciliations, and post-filing reviews.",
                "Continuous monitoring of tax law changes and regulatory updates, with practical guidance on how these affect the company's operations."
            ]
        },
        {
            title: "Business Transactions Tax (E-invoicing, VAT, WHT)",
            description: "We support clients in managing transaction-based taxes arising from daily business activities, with a strong focus on accuracy, documentation, and audit readiness under the new tax regime.",
            details: [
                "Comprehensive assessment of invoicing processes, ERP systems, and accounting platforms to determine readiness for e-invoicing.",
                "Mapping of invoicing workflows to NRS e-invoicing and TaxPro Max requirements.",
                "Advisory on ERP and accounting system configuration or integration via approved APIs or upload mechanisms.",
                "Review and restructuring of invoice formats to comply with prescribed XML/JSON schemas.",
                "Validation of mandatory invoice information, including TINs, VAT details, invoice reference numbers, QR codes, currency codes, and tax classifications.",
                "Guidance on internal controls, invoice approval workflows, and document retention policies.",
                "Periodic post-submission reviews to identify errors, omissions, or inconsistencies.",
                "Support during reviews or audits arising from e-invoicing submissions."
            ]
        },
        {
            title: "Transfer Pricing",
            description: "Practical transfer pricing advisory and compliance services aligned with the strengthened enforcement framework. Includes review of related-party transactions, development of transfer pricing policies, preparation of documentation, and support during audits."
        },
        {
            title: "Personal Income Tax Administration",
            description: "Efficient management of employee tax obligations ensuring employees pay minimum tax possible. Includes PAYE administration, structuring employees' pay in tax-efficient manner, processing annual tax forms, and obtaining tax clearance certificates."
        },
        {
            title: "Other Tax Management Services",
            description: "Processing of Economic Development Incentive Certificate, Common Reporting Standard (CRS) Management, Country-by-Country Reporting (CbCR), Strategic Tax Planning & Tax Health Checks, Tax Audit Management, Payroll Restructuring, Stamp Duties Support, and Immigration Support Service."
        }
    ];

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark dark:to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">
                            Service #3
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Tax Compliance & Advisory
                        </h1>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/3.jpg"
                                alt="Tax Compliance & Advisory"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 relative bg-background/50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                TAC Tax Advisory Services provide comprehensive taxation planning, management & advisory services to corporate and individual clients with the aim of minimizing their tax burden through careful tax planning. Using our expertise and skill, we study and take advantage of loopholes in the tax laws to reduce clients' tax liabilities.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                In meeting with the global demand of delivering the best professional services to our numerous clients, the company ensures that all its staff are adequately empowered and updated with the current laws & statues and practical approach on tax planning & management services through sound training, seminars & courses obtained both locally & internationally.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our customised Tax automated system and AI Tax support tools, gives us a good standing in delivering efficient and effective Tax compliance & Advisory services to our numerous clients.
                            </p>
                        </div>
                    </motion.div>

                    {/* Sub-Services Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8">
                            Our <span className="text-gradient">Service Areas</span>
                        </h2>
                        <div className="space-y-6">
                            {subServices.map((service, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="glass-card p-8 rounded-2xl bg-white/80 dark:bg-foreground/5 shadow-md hover:shadow-lg transition-shadow"
                                >
                                    <div className="flex items-start gap-4 mb-4">
                                        <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                        <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed ml-10 mb-4">{service.description}</p>
                                    
                                    {service.details && (
                                        <div className="ml-10 mt-4 space-y-3">
                                            <p className="font-semibold text-foreground">Our major corporate tax management includes:</p>
                                            <ul className="space-y-2">
                                                {service.details.map((detail, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-tac-brand shrink-0 mt-2" />
                                                        <span>{detail}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8">
                            Why Choose <span className="text-gradient">TAC</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Expert team with decades of tax experience",
                                "Compliance with Nigeria Tax Reform Acts 2025",
                                "AI-powered tax automation tools",
                                "Competitive rates and strategic tax planning"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white/80 dark:bg-foreground/5 shadow-md"
                                >
                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                            Ready to get started?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
