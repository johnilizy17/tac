"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";

const contactInfo = [
    {
        title: "Visit Our Office",
        details: "Block 113, Plot 22, Adebisi Ogunniyi Crescent, Lekki Phase 1, Lagos, Nigeria.",
        icon: MapPin,
        delay: 0.1
    },
    {
        title: "Call Us Directly",
        details: "+234 906 284 0810",
        subDetails: "Mon-Fri, 8:00am - 5:00pm",
        icon: Phone,
        delay: 0.2
    },
    {
        title: "Email Inquiries",
        details: "info@tacgroupng.com",
        subDetails: "support@tacgroupng.com",
        icon: Mail,
        delay: 0.3
    }
];

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-tac-dark">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Contact Us</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                            Let's Build Your <span className="text-gradient">Vision Together</span>
                        </h1>
                        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                            Have a project in mind or need professional advisory? Our team of experts is ready to provide solution-driven consulting for your organization.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 relative bg-tac-dark">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-8">
                                {contactInfo.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: item.delay }}
                                        className="flex gap-6 p-8 glass-card rounded-3xl group border-white/5 hover:border-tac-brand/30 transition-all duration-500"
                                    >
                                        <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                            <item.icon className="w-6 h-6 text-tac-brand" />
                                        </div>
                                        <div>
                                            <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-sm mb-1">{item.details}</p>
                                            {item.subDetails && <p className="text-tac-brand/60 text-xs font-medium uppercase tracking-wider">{item.subDetails}</p>}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-8 rounded-[2rem] bg-gradient-to-br from-tac-brand/5 to-transparent border border-white/5"
                            >
                                <div className="flex items-center gap-4 mb-4 text-tac-brand">
                                    <Clock size={20} />
                                    <span className="font-bold uppercase tracking-widest text-xs">Global Standards</span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    TAC operates with international best practices from our headquarters in Lagos, serving clients across key economic sectors globally.
                                </p>
                            </motion.div>
                        </div>

                        {/* Form Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-7 glass-card p-10 md:p-12 rounded-[3.5rem] relative"
                        >
                            <div className="absolute -top-12 -right-12 w-48 h-48 bg-tac-purple/10 blur-[80px] -z-10" />

                            <h2 className="text-3xl font-bold text-white mb-8">Send us a <span className="text-gradient">Message</span></h2>

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-tac-brand/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-gray-400 text-sm font-medium ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-tac-brand/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium ml-2">Subject</label>
                                    <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white appearance-none focus:outline-none focus:border-tac-brand/50 transition-colors">
                                        <option className="bg-tac-dark">Audit & Assurance Inquiry</option>
                                        <option className="bg-tac-dark">Tax Management Advisory</option>
                                        <option className="bg-tac-dark">Business Consulting</option>
                                        <option className="bg-tac-dark">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium ml-2">Your Message</label>
                                    <textarea
                                        rows={5}
                                        placeholder="Tell us how we can help your organization..."
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-tac-brand/50 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button className="w-full bg-tac-brand hover:bg-tac-brand/90 text-tac-dark font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl">
                                    <span>Submit Engagement</span>
                                    <Send size={18} />
                                </button>

                                <p className="text-center text-gray-500 text-xs">
                                    By submitting, you agree to our privacy policy and data protection terms.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder or Visual Representation */}
            <section className="py-24 bg-tac-dark/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="w-full aspect-[21/9] rounded-[3.5rem] bg-white/5 border border-white/5 relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(102,185,41,0.1),transparent_70%)]" />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-4">
                                <MapPin className="w-16 h-16 text-tac-brand mx-auto animate-bounce" />
                                <h4 className="text-2xl font-bold text-white">Find Us in Lagos</h4>
                                <p className="text-gray-400">Adebisi Ogunniyi Crescent, Lekki Phase 1</p>
                            </div>
                        </div>
                        {/* Abstract Map Lines Overlay */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 20 Q 50 10 100 20 M0 50 Q 50 40 100 50 M0 80 Q 50 70 100 80 M20 0 Q 10 50 20 100 M50 0 Q 40 50 50 100 M80 0 Q 70 50 80 100" stroke="white" fill="none" strokeWidth="0.1" />
                            </svg>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
