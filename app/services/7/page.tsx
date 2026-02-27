"use client";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function OtherServicesPage() {
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
                            Service #7
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            Other Services
                        </h1>
                        
                        {/* Service Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="/service/1.jpg"
                                alt="Other Services"
                                className="w-full h-[400px] object-cover"
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 relative bg-background/50">
                <div className="max-w-5xl mx-auto px-4">
                    {/* Business Formation & Secretarial Services */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg mb-12"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Business Formation & Secretarial Services
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Nigerian companies are required under the Companies and Allied Matters Act LFN 2004 ("CAMA" or "the Act") to appoint a secretary. Section 293 (1) of the Act states that "every company shall have a secretary". It is essential that the directors of a company appoint a secretary who is knowledgeable on regulatory issues.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                The Act provides that any of the following categories of persons may be appointed as company secretary:
                            </p>
                            <ul className="list-disc list-inside space-y-3 mb-6 ml-4">
                                <li className="text-muted-foreground leading-relaxed">A member of the Institute of Chartered Secretaries and Administrators;</li>
                                <li className="text-muted-foreground leading-relaxed">A legal practitioner;</li>
                                <li className="text-muted-foreground leading-relaxed">A member of the Institute of Chartered Accountants of Nigeria;</li>
                                <li className="text-muted-foreground leading-relaxed">A body corporate or firm consisting of members each of whom is qualified under any of the above-stated professional bodies.</li>
                            </ul>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Generally, company secretarial services encompass the administration of a company in order to ensure compliance with statutory and regulatory requirements. We would typically carry out holistic services, including; attending the meeting of the company, the board of directors and its committees, rendering all necessary secretarial services in respect of the meeting and advising on regulatory or statutory compliance by the meetings with the applicable rules and regulations; maintaining the company's registers and other records required to be maintained by law, and; rendering proper returns and giving notification to the Corporate Affairs Commission (CAC) as required by the Act.
                            </p>
                        </div>
                    </motion.div>

                    {/* Receivership & Liquidation */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Receivership & Liquidation
                        </h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Receivership involves the taking over charged assets of insolvent companies, turning them around and recovering debt owed before handling over to the business owners. The process involves identifying the problems and causes of insolvent companies and take over the management for effective turn around.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Where the business and assets could not be run due to lack liquidity or other fundamental reasons, the charged assets will be realized to pay off secured creditors.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                Liquidation can be voluntary where the owners of business are faced with the difficult choice of winding down the company due to inability to meet creditors' obligations, change in strategy or other fundamental reasons. Liquidation can be compulsory/legal where this is initiated by unpaid creditors in other to recover their debt.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                Our receivership and liquidation services include debt recovery, business recovery, company restructuring and turn around management services.
                            </p>
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
                                "Qualified company secretaries",
                                "Regulatory compliance expertise",
                                "Debt recovery and business turnaround",
                                "Professional receivership services"
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
