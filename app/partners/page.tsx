"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Globe, Users, ShieldCheck, Zap, Award, BookOpen, Building2 } from "lucide-react";

const partnerImages = [
    "Picture8.png", "Picture9.png", "Picture10.png", "Picture11.jpg", "Picture12.jpg", "Picture13.png",
    "Picture14.jpg", "Picture15.jpg", "Picture16.png", "Picture17.png", "Picture18.png", "Picture19.jpg",
    "Picture20.png", "Picture21.png", "Picture22.jpg", "Picture23.png", "Picture24.jpg", "Picture25.png",
    "Picture26.png", "Picture27.png", "Picture28.png", "Picture29.jpg", "Picture30.jpg", "Picture31.jpg",
    "Picture32.png", "Picture33.jpg", "Picture34.jpg", "Picture35.jpg", "Picture36.jpg", "Picture37.png",
    "Picture38.png", "Picture39.jpg", "Picture40.jpg", "Picture41.jpg", "Picture42.jpg", "Picture43.png",
    "Picture44.png", "Picture45.jpg", "Picture46.png", "Picture47.png", "Picture48.jpg", "Picture49.jpg",
    "Picture50.png", "Picture51.png", "Picture52.png", "Picture53.jpg", "Picture54.jpg", "Picture55.jpg",
    "Picture56.png", "Picture57.jpg", "Picture58.png", "Picture59.png", "Picture60.png", "Picture61.png",
    "Picture62.jpg", "Picture63.png", "Picture64.png", "Picture65.jpg", "Picture66.png", "Picture67.png",
    "Picture68.png"
];

const FeatureCard = ({ icon: Icon, title, description, delay }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="glass-card p-8 rounded-[2.5rem] border-foreground/5 hover:border-tac-brand/20 transition-all group"
    >
        <div className="w-12 h-12 bg-tac-brand/10 rounded-2xl flex items-center justify-center mb-6 text-tac-brand group-hover:scale-110 transition-transform">
            <Icon size={24} />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-4">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
);

export default function PartnersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-tac-brand/10 rounded-full border border-tac-brand/20 text-tac-brand text-xs font-bold uppercase tracking-widest">
                                <Globe size={14} />
                                <span>Global Membership</span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
                                Our Global <span className="text-gradient">Advantage</span>
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                TAC is a proud member firm of <span className="text-foreground font-bold">Integra International</span>, a global association of independently owned professional services firms.
                            </p>
                            <div className="grid grid-cols-2 gap-8 pt-4">
                                <div>
                                    <span className="text-4xl font-bold text-foreground block">150+</span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Member Firms</span>
                                </div>
                                <div>
                                    <span className="text-4xl font-bold text-foreground block">90+</span>
                                    <span className="text-sm text-muted-foreground uppercase tracking-widest font-medium">Countries</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="relative"
                        >
                            <div className="aspect-square glass-card rounded-[4rem] p-12 flex items-center justify-center border-tac-brand/20 relative group">
                                <div className="absolute inset-0 bg-tac-brand/5 blur-3xl rounded-full" />
                                <img
                                    src="/asset/integra_logo.png"
                                    alt="Integra International"
                                    className="w-3/4 h-auto relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                                    onError={(e) => {
                                        // Fallback if logo doesn't exist
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                                <div className="text-center relative z-10">
                                    <Globe className="w-32 h-32 text-tac-brand/20 mx-auto animate-spin-slow mb-4" />
                                    <h2 className="text-3xl font-black text-foreground/10 italic">INTEGRA INTERNATIONAL</h2>
                                </div>
                            </div>
                            {/* Decorative orbs */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-tac-brand/10 blur-[60px] rounded-full" />
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-tac-purple/10 blur-[60px] rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Network Section */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold text-foreground leading-tight">
                                The Power of <span className="text-gradient">Collaboration</span>
                            </h2>
                            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                                <p>
                                    Integra International fosters active collaboration among its members, encouraging the open exchange of knowledge, expertise, and best practices. This global network empowers member firms to deliver expanded professional services and effectively meet the national and cross-border needs of their clients.
                                </p>
                                <p>
                                    Each member firm retains its name, identity, and independence, while benefiting from the collective knowledge and technical expertise of more than 2,000 professionals worldwide. English serves as the common working language, ensuring seamless communication.
                                </p>
                            </div>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FeatureCard
                                icon={Building2}
                                title="Local Ownership"
                                description="Member firms are locally owned and managed by professionals who understand local market realities."
                                delay={0.1}
                            />
                            <FeatureCard
                                icon={Users}
                                title="2,000+ Pros"
                                description="Access to a vast pool of specialized technical expertise across every major global economy."
                                delay={0.2}
                            />
                            <FeatureCard
                                icon={ShieldCheck}
                                title="Global Standards"
                                description="Clients receive personalized, high-quality, and innovative solutions backed by global excellence."
                                delay={0.3}
                            />
                            <FeatureCard
                                icon={Zap}
                                title="Agile Insight"
                                description="Seamless collaboration ensures quick and effective solutions for complex cross-border challenges."
                                delay={0.4}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Partner Grid */}
            <section className="py-24 relative bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-16 text-center">
                    <h2 className="text-4xl font-bold text-foreground mb-4">Our Professional <span className="text-gradient">Network</span></h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Showcasing the diverse expertise and global footprint of our partner firms across the Integra International association.</p>
                </div>

                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
                    >
                        {partnerImages.slice(0, 36).map((img, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: (i % 6) * 0.05 }}
                                className="aspect-square glass-card rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden group"
                            >
                                <img
                                    src={`/partner/${img}`}
                                    alt="Partner Firm"
                                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Infinite Marquee-style row for the rest if many */}
                    <div className="mt-8 flex gap-4 overflow-hidden mask-fade-edges">
                        <div className="flex gap-4 animate-marquee whitespace-nowrap">
                            {partnerImages.slice(36).map((img, i) => (
                                <div key={i} className="w-32 h-32 flex-shrink-0 glass-card rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                                    <img src={`/partner/${img}`} alt="Partner Firm" className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                            {/* Duplicate for seamless loop */}
                            {partnerImages.slice(36).map((img, i) => (
                                <div key={`dup-${i}`} className="w-32 h-32 flex-shrink-0 glass-card rounded-2xl p-4 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">
                                    <img src={`/partner/${img}`} alt="Partner Firm" className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Experience Advantage */}
            <section className="py-24 relative bg-background">
                <div className="max-w-5xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass-card p-12 md:p-20 rounded-[4rem] border-tac-brand/10 bg-gradient-to-br from-tac-brand/5 to-transparent shadow-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-8">The TAC <span className="text-gradient">Advantage</span></h2>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                            "At TAC, we leverage the Integra International global advantage to provide expert & specialist support in any area of concern, and provide the necessary solution across the globe."
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="px-10 py-5 bg-tac-brand text-tac-dark font-black rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Partner With Us
                            </button>
                            <button className="px-10 py-5 bg-foreground/5 text-foreground font-bold rounded-2xl hover:bg-foreground/10 transition-all border border-foreground/10">
                                Learn More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
