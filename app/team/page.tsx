"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Mail, X, Briefcase, GraduationCap, Users } from "lucide-react";

interface TeamMember {
    id: number;
    name: string;
    credentials: string;
    position: string;
    image: string;
    email: string;
    shortBio: string;
    fullBio: string[];
}

export default function TeamPage() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => setTeam(data))
            .catch(err => console.error('Error loading team:', err));
    }, []);

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background">
                {/* Hero Section */}
                <section className="pt-32 pb-16 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-tac-brand/5 to-transparent" />
                    <div className="max-w-7xl mx-auto px-4 relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center max-w-3xl mx-auto"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-tac-brand/10 border border-tac-brand/30 text-tac-brand text-sm font-bold tracking-widest uppercase mb-6">
                                <Users className="w-4 h-4" />
                                Our Team
                            </div>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
                                Meet the <span className="text-gradient">Experts</span>
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                                Our team of seasoned professionals brings decades of combined experience in accounting, taxation, audit, and business consulting. Each member is committed to delivering excellence and driving your success.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Team Grid */}
                <section className="py-16 relative">
                    <div className="max-w-7xl mx-auto px-4">
                        {team.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="text-muted-foreground text-lg">Loading team members...</p>
                            </div>
                        ) : (
                            <motion.div
                                initial="hidden"
                                animate="show"
                                variants={{
                                    hidden: {},
                                    show: {
                                        transition: {
                                            staggerChildren: 0.08
                                        }
                                    }
                                }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                            >
                                {team.map((member) => (
                                <motion.div
                                    key={member.id}
                                    variants={{
                                        hidden: { opacity: 0, y: 50 },
                                        show: { opacity: 1, y: 0 }
                                    }}
                                    onClick={() => setSelectedMember(member)}
                                    className="group relative flex flex-col cursor-pointer"
                                >
                                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-foreground/10 group-hover:border-tac-brand/50 transition-colors duration-500 shadow-xl dark:shadow-[0_0_40px_rgba(0,0,0,0.3)] bg-foreground/5">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                        <div className="absolute bottom-4 left-4 right-4">
                                            <h3 className="text-xl font-bold text-white mb-1 leading-tight">{member.name}</h3>
                                            <p className="text-tac-brand font-bold text-xs tracking-wider uppercase">{member.credentials}</p>
                                        </div>

                                        {/* Click to view overlay */}
                                        <div className="absolute inset-0 bg-tac-brand/0 group-hover:bg-tac-brand/10 transition-colors flex items-center justify-center">
                                            <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-tac-brand px-6 py-2 rounded-full">
                                                View Profile
                                            </span>
                                        </div>
                                    </div>

                                    <div className="px-2 flex flex-col gap-2">
                                        <p className="text-foreground font-semibold text-sm">{member.position}</p>
                                        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                                            {member.shortBio}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                        )}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 relative">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="glass-card p-12 rounded-[3rem] bg-gradient-to-br from-tac-brand/10 to-tac-purple/10 border-tac-brand/20"
                        >
                            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Ready to Work with Us?
                            </h2>
                            <p className="text-muted-foreground text-lg mb-8">
                                Connect with our team of experts and discover how we can help drive your business forward.
                            </p>
                            <a
                                href="/contact"
                                className="inline-block px-10 py-4 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                            >
                                Get in Touch
                            </a>
                        </motion.div>
                    </div>
                </section>
            </main>

            {/* Profile Drawer */}
            <AnimatePresence>
                {selectedMember && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedMember(null)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                        />

                        {/* Drawer */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] lg:w-[700px] bg-background border-l border-foreground/10 shadow-2xl z-50 overflow-y-auto"
                        >
                            <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-foreground/10 p-6 flex items-center justify-between z-10">
                                <h3 className="text-2xl font-bold text-foreground">Team Profile</h3>
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-foreground/10 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <div className="p-6 space-y-8">
                                {/* Profile Header */}
                                <div className="flex flex-col sm:flex-row gap-6 items-start">
                                    <div className="w-32 h-32 rounded-2xl overflow-hidden border-2 border-tac-brand/30 shadow-lg flex-shrink-0">
                                        <img
                                            src={selectedMember.image}
                                            alt={selectedMember.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h2 className="text-3xl font-bold text-foreground mb-2">{selectedMember.name}</h2>
                                        <p className="text-tac-brand font-bold text-sm tracking-wider uppercase mb-3">{selectedMember.credentials}</p>
                                        <div className="flex items-start gap-2 text-muted-foreground mb-4">
                                            <Briefcase className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                            <p className="font-semibold">{selectedMember.position}</p>
                                        </div>
                                        <a
                                            href={`mailto:${selectedMember.email}`}
                                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors"
                                        >
                                            <Mail className="w-4 h-4" />
                                            {selectedMember.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent" />

                                {/* Full Bio */}
                                <div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <GraduationCap className="w-5 h-5 text-tac-brand" />
                                        <h4 className="text-xl font-bold text-foreground">Professional Profile</h4>
                                    </div>
                                    <div className="space-y-4">
                                        {selectedMember.fullBio.map((paragraph, index) => (
                                            <p key={index} className="text-muted-foreground leading-relaxed text-justify">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="glass-card p-6 rounded-2xl bg-tac-brand/5 border-tac-brand/20">
                                    <p className="text-foreground font-semibold mb-4">Interested in working with {selectedMember.name.split(' ')[0]}?</p>
                                    <a
                                        href={`mailto:${selectedMember.email}`}
                                        className="inline-block px-8 py-3 bg-tac-brand text-tac-dark font-bold rounded-xl hover:scale-105 active:scale-95 transition-all shadow-lg"
                                    >
                                        Get in Touch
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <Footer />
        </>
    );
}
