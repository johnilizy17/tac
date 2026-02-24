"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-gradient-to-br from-tac-brand via-tac-brand/90 to-tac-purple text-white border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-tac-purple/30 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-tac-dark/40 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-white drop-shadow-lg">
                            <span style={{ letterSpacing: '1.3px' }}>TAC</span>
                        </Link>
                        <p className="text-white/90 text-sm leading-relaxed max-w-xs drop-shadow">
                            A composite one-stop professional & consulting firm providing excellence in audit, tax, and advisory services.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.facebook.com/TACProfessionalService/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:text-tac-dark hover:bg-white hover:border-white transition-all duration-300 backdrop-blur-sm"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="https://twitter.com/TACProfessional"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:text-tac-dark hover:bg-white hover:border-white transition-all duration-300 backdrop-blur-sm"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/company/11301622/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:text-tac-dark hover:bg-white hover:border-white transition-all duration-300 backdrop-blur-sm"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {["Home", "About", "Services", "Industries", "Partners", "Gallery", "Careers"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "Home" ? "/" : link === "Gallery" ? "/gallery" : link === "Services" ? "/services" : link === "Industries" ? "/industries" : link === "Partners" ? "/partners" : link === "About" ? "/about" : link === "Careers" ? "/careers" : `/#${link.toLowerCase()}`}
                                        className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Services</h4>
                        <ul className="space-y-4 text-sm">
                            {[
                                { name: "Accounting Outsourcing", id: 1 },
                                { name: "Audit & Assurance", id: 2 },
                                { name: "Forensic Investigation", id: 3 },
                                { name: "Business Consulting", id: 4 },
                                { name: "Receivership & Liquidation", id: 5 }
                            ].map((service) => (
                                <li key={service.id}>
                                    <Link href={`/services/${service.id}`} className="text-white/90 hover:text-white hover:translate-x-1 inline-block transition-all">
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold mb-6 text-lg">Contact</h4>
                        <div className="space-y-5 text-sm text-white/90">
                            <div className="space-y-2">
                                <a 
                                    href="https://maps.app.goo.gl/nE8aRrqjVUhp1Rsj8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-white transition-colors group"
                                >
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="font-semibold mb-1">Lagos - Head Office</p>
                                        <p className="leading-relaxed text-xs">The TAC Place. Block 113, Plot 22, Adebisi Ogunniyi Crescent, Off Oladimeji Alo Street, Lekki Phase 1, Lagos.</p>
                                    </div>
                                </a>
                                <a 
                                    href="tel:+2349062840807"
                                    className="flex items-center gap-3 hover:text-white transition-colors group ml-8"
                                >
                                    <Phone className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                                    <p className="text-xs">+234 906 284 0807</p>
                                </a>
                            </div>

                            <div className="space-y-2">
                                <a 
                                    href="https://maps.app.goo.gl/qZP6aif2BBNZ8uom9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-start gap-3 hover:text-white transition-colors group"
                                >
                                    <MapPin className="w-5 h-5 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                    <div>
                                        <p className="font-semibold mb-1">Abuja Office</p>
                                        <p className="leading-relaxed text-xs">Suite 30, Block B, Landmark Plaza, Plot 3124, Ibrahim Babangida Way. Maitama, Abuja.</p>
                                    </div>
                                </a>
                                <a 
                                    href="tel:+2349062840810"
                                    className="flex items-center gap-3 hover:text-white transition-colors group ml-8"
                                >
                                    <Phone className="w-4 h-4 shrink-0 group-hover:scale-110 transition-transform" />
                                    <p className="text-xs">+234 906 284 0810</p>
                                </a>
                            </div>

                            <a 
                                href="mailto:info@tacgroupng.com"
                                className="flex items-center gap-3 hover:text-white transition-colors group"
                            >
                                <Mail className="w-5 h-5 shrink-0 group-hover:scale-110 transition-transform" />
                                <p className="font-semibold">info@tacgroupng.com</p>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/20 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-white/80 text-xs text-center md:text-left">
                        Copyright © {new Date().getFullYear()} TAC. All Rights Reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-tac-brand transition-all duration-500 border border-white/30 group shadow-lg hover:shadow-xl"
                    >
                        <ArrowUp className="group-hover:-translate-y-1 transition-transform" size={20} />
                    </button>
                </div>
            </div>
        </footer>
    );
}
