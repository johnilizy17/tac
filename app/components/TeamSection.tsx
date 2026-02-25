"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, Briefcase, GraduationCap } from "lucide-react";

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

export default function TeamSection() {
    const [team, setTeam] = useState<TeamMember[]>([]);
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
    const [displayTeam, setDisplayTeam] = useState<TeamMember[]>([]);

    useEffect(() => {
        fetch('/team.json')
            .then(res => res.json())
            .then(data => {
                setTeam(data);
                // Filter and order: Tunde Adaramaja (1), Muheez Popoola (9), Tunde Latinwo (7), Anjola Dapo Fagbure (10)
                const orderedIds = [1, 2, 3, 4];
                const ordered = orderedIds
                    .map(id => data.find((m: TeamMember) => m.id === id))
                    .filter(Boolean);
                setDisplayTeam(ordered);
            })
            .catch(err => console.error('Error loading team:', err));
    }, []);

    return (
        <>
            <section id="team" className="py-24 relative bg-background/50">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-tac-brand font-semibold tracking-widest uppercase text-sm"
                        >
                            Our People
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground"
                        >
                            Led by <span className="text-gradient">Visionaries</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-muted-foreground max-w-2xl mx-auto text-lg"
                        >
                            Our strength lies in our people. We combine local expertise with a global perspective to deliver exceptional value.
                        </motion.p>
                    </div>

                    <motion.div
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {displayTeam.length === 0 ? (
                            <div className="col-span-full text-center py-12">
                                <p className="text-muted-foreground">Loading team members...</p>
                            </div>
                        ) : (
                            displayTeam.map((member) => (
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
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 scale-105"
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
                        )))}
                    </motion.div>

                    {/* View All Team Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="text-center mt-16"
                    >
                        <a
                            href="/team"
                            className="inline-block px-10 py-4 bg-tac-brand text-tac-dark font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            View All Team Members
                        </a>
                    </motion.div>
                </div>
            </section>

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
        </>
    );
}
