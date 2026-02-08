"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
    return (
        <section id="contact" className="py-40 relative bg-tac-dark border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-8">
                        <span className="text-tac-brand uppercase tracking-widest text-xs font-bold block mb-4">Immediate Engagement</span>
                        <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-12">
                            LET&apos;S SCALE<br />
                            TOGETHER.
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4">Lekki HQ</h4>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    Block 113, Plot 22, Adebisi Ogunniyi Crescent,<br />
                                    Lekki Phase 1, Lagos, Nigeria.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4">Abuja Office</h4>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    Suite 30, Block B, Landmark Plaza,<br />
                                    Maitama, Abuja, Nigeria.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-4 flex flex-col justify-end">
                        <div className="space-y-8 pb-4">
                            <a href="mailto:info@tacgroupng.com" className="group block">
                                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold block mb-2 group-hover:text-tac-brand transition-colors">Project Inquiry</span>
                                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter group-hover:pb-2 border-b-2 border-transparent group-hover:border-tac-brand transition-all">info@tacgroupng.com</span>
                            </a>
                            <a href="tel:+2349062840810" className="group block">
                                <span className="text-gray-500 text-xs uppercase tracking-widest font-bold block mb-2 group-hover:text-tac-brand transition-colors">Direct Line</span>
                                <span className="text-2xl md:text-3xl font-black text-white tracking-tighter group-hover:pb-2 border-b-2 border-transparent group-hover:border-tac-brand transition-all">+234 906 284 0810</span>
                            </a>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="mt-12 w-full py-8 bg-tac-brand text-tac-dark font-black text-xl tracking-tighter hover:bg-white transition-all duration-500"
                        >
                            SECURE A CONSULTATION
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
