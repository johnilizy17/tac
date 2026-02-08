"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="bg-white pt-32 pb-12 relative overflow-hidden border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="magazine-grid mb-24">
                    {/* Brand Column */}
                    <div className="col-span-12 lg:col-span-6">
                        <Link href="/" className="text-6xl font-black tracking-tighter text-tac-dark block mb-8">
                            TAC<span className="text-tac-brand">GROUP.</span>
                        </Link>
                        <p className="text-gray-500 text-xl font-light leading-relaxed max-w-md">
                            A leading composite professional firm, redefining excellence across audit, tax, and strategic advisory.
                        </p>
                        <div className="flex gap-6 mt-12">
                            {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="text-tac-dark hover:text-tac-brand transition-all duration-300 transform hover:scale-110"
                                >
                                    <Icon size={20} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <span className="text-tac-brand font-black text-xs tracking-[0.3em] uppercase block mb-8">DIRECTORY</span>
                        <ul className="space-y-4">
                            {["ABOUT", "METHOD", "SERVICES", "INDUSTRIES", "TEAM", "GALLERY"].map((link) => (
                                <li key={link}>
                                    <Link
                                        href={link === "GALLERY" ? "/gallery" : `/#${link.toLowerCase()}`}
                                        className="text-tac-dark font-black text-xs tracking-widest hover:text-tac-brand hover:pl-2 transition-all duration-300"
                                    >
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-span-12 md:col-span-6 lg:col-span-3">
                        <span className="text-tac-brand font-black text-xs tracking-[0.3em] uppercase block mb-8">CONTACT UNIT</span>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Electronic Mail</p>
                                <a href="mailto:info@tacgroupng.com" className="text-tac-dark font-black tracking-tighter text-lg hover:text-tac-brand transition-colors">info@tacgroupng.com</a>
                            </div>
                            <div>
                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Direct Communication</p>
                                <a href="tel:+2349062840810" className="text-tac-dark font-black tracking-tighter text-lg hover:text-tac-brand transition-colors">+234 906 284 0810</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Industrial Bottom Bar */}
                <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Legal Identity</span>
                            <span className="text-[11px] font-black text-tac-dark">TAC PROFESSIONAL SERVICES © {new Date().getFullYear()}</span>
                        </div>
                        <div className="w-[1px] h-6 bg-gray-200" />
                        <div className="flex flex-col">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Digital Standards</span>
                            <span className="text-[11px] font-black text-tac-dark uppercase">High Precision_V3</span>
                        </div>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="group flex items-center gap-4 text-tac-dark hover:text-tac-brand transition-all"
                    >
                        <span className="text-[10px] font-black uppercase tracking-[0.4em]">Back to Summit</span>
                        <div className="w-12 h-12 rounded-none bg-tac-dark flex items-center justify-center text-white group-hover:bg-tac-brand transition-all duration-500">
                            <ArrowUp size={20} strokeWidth={3} className="group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
