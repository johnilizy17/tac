"use client";

import { motion } from "framer-motion";
import { Building2, Award } from "lucide-react";

export default function ExperienceSection() {
    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background/50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                    >
                        Our Track Record
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground"
                    >
                        Our <span className="text-gradient">Experience</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="space-y-6 text-muted-foreground leading-relaxed">
                            <p>
                                With over two decades of excellence, TAC Professional Services has established a solid footprint across both the public and private sectors, consistently delivering superior, value-driven solutions across key segments of the economy. Our clientele spans a wide spectrum, including financial services, insurance, oil & gas, power, manufacturing, real estate, FMCG, trade, media, aviation, telecommunications, NGOs, and government institutions.
                            </p>
                            <p>
                                Over the years, our partners have played pivotal roles as stakeholders in shaping the professional practice landscape in Nigeria—actively contributing to the growth of client organizations and collaborating with regulatory bodies to strengthen compliance frameworks. Through these efforts, we continue to ensure that our clients not only meet statutory requirements but also enhance operational efficiency and avoid regulatory pitfalls.
                            </p>
                            <p>
                                In pursuit of global standards of excellence, TAC prioritizes continuous learning and professional development. Our team regularly undergoes local and international training, seminars, and courses to stay abreast of evolving methodologies in audit, assurance, and financial reporting—ensuring that our services remain current, relevant, and best-in-class.
                            </p>
                            <p>
                                Backed by robust technology, our automated driving solution and software enable us to deliver efficient, effective and high-value-added audit, accounting, tax and other consulting & advisory services to our esteemed clients. Our team of seasoned professionals possesses the human capital and technical capacity to execute all professional engagements with integrity, precision, and confidentiality.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-10 rounded-[3rem] border-tac-brand/20 relative bg-white/60 dark:bg-foreground/5 shadow-lg"
                    >
                        <Building2 className="absolute top-8 right-8 w-12 h-12 text-tac-brand/10" />
                        <h3 className="text-2xl font-bold text-foreground mb-3">Regulatory Standing</h3>
                        <p className="text-muted-foreground mb-8 text-sm">
                            Our firm and partners are duly registered and in good standing with the following regulatory and professional bodies:
                        </p>
                        <div className="space-y-3">
                            {[
                                "Financial Reporting Council (FRC)",
                                "Securities and Exchange Commission (SEC)",
                                "Institute of Chartered Accountants of Nigeria (ICAN)",
                                "Chartered Institute of Taxation of Nigeria (CITN)",
                                "Association of Certified Fraud Examiners (ACFE)"
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-3 p-4 rounded-2xl bg-foreground/5 border border-foreground/5 group hover:bg-foreground/10 hover:border-tac-brand/20 transition-all"
                                >
                                    <Award className="text-tac-brand w-5 h-5 shrink-0 mt-0.5" />
                                    <span className="text-muted-foreground font-medium text-sm">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
