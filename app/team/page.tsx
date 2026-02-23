"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, Linkedin } from "lucide-react";

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
        name: "James Oni",
        role: "Director, TAC Tax Advisory Service",
        image: "6s.jpg",
        email: "James@tacgroupng.com",
        bio: "He currently serves as Director, TAC Tax Advisory Services at TAC Professional Services, where he leads a team of experts delivering innovative, compliant, and value-driven tax solutions."
    },
    {
        name: "Muheez Popoola",
        role: "Senior Manager, TAC Tax Advisory Services",
        image: "4s.jpg",
        email: "muheez@tacgroupng.com",
        bio: "He has successfully led and managed tax advisory engagements covering tax planning, compliance, management, investigation, and regulatory advisory for clients across diverse sectors including Manufacturing, Construction, Real Estate, Oil & Gas, Trade, and Public Sector Agencies."
    },
    {
        name: "Tunde Latinwo",
        role: "Director, Business Development & Corporate Services",
        image: "8s.jpg",
        email: "latinwo@tacgroupng.com",
        bio: "Tunde is highly skilled in business strategy design, market development, relationship management, and negotiation. His expertise lies in crafting and executing innovative business development models that enhance client value and organizational performance."
    },
    {
        name: "Anjola Dapo Fagbure",
        role: "Manager, Audit & Assurance Services",
        image: "5s.jpg",
        email: "anjola@tacgroupng.com",
        bio:"She joined the firm in 2022 and currently serves as Manager, Audit & Assurance, where she leads and supervises audit teams in delivering quality-driven, standards-compliant engagements across multiple industries."
    },
];

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark/50 dark:to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Our Leadership</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Meet the <span className="text-gradient">Visionaries</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Our team combines decades of professional expertise with a passion for excellence, driving innovation and delivering exceptional value to our clients across diverse sectors.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Grid */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                variants={{
                                    hidden: { opacity: 0, y: 50 },
                                    show: { opacity: 1, y: 0 }
                                }}
                                className="group relative flex flex-col"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-foreground/10 group-hover:border-tac-brand/50 transition-colors duration-500 shadow-xl bg-foreground/5">
                                    <img
                                        src={`/${member.image}`}
                                        alt={member.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />

                                    {/* Overlay Info */}
                                    <div className="absolute bottom-0 left-0 right-0 p-6">
                                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{member.name}</h3>
                                        <p className="text-tac-brand font-bold text-sm tracking-wider uppercase mb-4">{member.role}</p>
                                        
                                        {/* Contact Icons */}
                                        <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <a
                                                href={`mailto:${member.email}`}
                                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-tac-brand hover:text-tac-dark transition-all"
                                            >
                                                <Mail className="w-5 h-5" />
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-tac-brand hover:text-tac-dark transition-all"
                                            >
                                                <Linkedin className="w-5 h-5" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Bio Section */}
                                {member.bio && (
                                    <div className="px-2">
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                                            {member.bio}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 relative bg-gradient-to-b from-background to-foreground/5 dark:to-tac-dark/30">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold text-foreground mb-6">
                            Why Choose <span className="text-gradient">Our Team</span>
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Our leadership brings together diverse expertise and a shared commitment to excellence
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Decades of Experience",
                                description: "Combined expertise spanning audit, tax, consulting, and advisory services across multiple industries."
                            },
                            {
                                title: "Global Standards",
                                description: "Trained and certified professionals adhering to international best practices and regulatory frameworks."
                            },
                            {
                                title: "Client-Focused",
                                description: "Dedicated to understanding your unique needs and delivering tailored solutions that drive real results."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-8 rounded-3xl text-center group hover:border-tac-brand/30 transition-all duration-500 bg-white/60 dark:bg-foreground/5 shadow-lg"
                            >
                                <div className="w-16 h-16 bg-tac-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                    <div className="w-8 h-8 bg-tac-brand rounded-full" />
                                </div>
                                <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
                            Ready to work with us?
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
