"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-tac-dark border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tac-brand/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                            TAC<span className="text-tac-brand">GROUP</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            A composite one-stop professional & consulting firm providing excellence in audit, tax, and advisory services.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-tac-brand hover:border-tac-brand/50 transition-all duration-300"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {["Home", "About", "Services", "Gallery", "Careers"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : link === "Gallery" ? "/gallery" : link === "Services" ? "/services" : `/#${link.toLowerCase()}`}
                                        className="text-gray-400 hover:text-tac-brand transition-colors"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                "Audit & Assurance",
                                "Taxation Management",
                                "Accounting Services",
                                "Forensic Investigation",
                                "Business Consulting",
                                "Receivership & Liquidation"
                            ].map((service) => (
                                <li key={service}>
                                    <a href="#" className="text-gray-400 hover:text-tac-brand transition-colors">
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <div className="space-y-4 text-sm text-gray-400">
                            <p>Block 113, Plot 22, Adebisi Ogunniyi Crescent, Lekki Phase 1, Lagos.</p>
                            <p>+234 906 284 0810</p>
                            <p>info@tacgroupng.com</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-6">
                    <p className="text-gray-500 text-xs">
                        Copyright © {new Date().getFullYear()} TAC Group. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white hover:bg-tac-brand hover:text-white transition-all duration-500 border border-white/10 group"
                    >
                        <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
