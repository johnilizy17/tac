"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

interface Service {
    id: number;
    title: string;
    details: string;
    services?: Array<string | { title: string; description: string }>;
    image?: string;
}

export default function ServiceDetailPage() {
    const params = useParams();
    const [service, setService] = useState<Service | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("/services.json")
            .then((res) => res.json())
            .then((data: Service[]) => {
                const foundService = data.find((s) => s.id === Number(params.id));
                setService(foundService || null);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, [params.id]);

    if (loading) {
        return (
            <main className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-tac-brand text-xl">Loading...</div>
            </main>
        );
    }

    if (!service) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navbar />
                <div className="pt-40 pb-20 max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
                    <Link href="/services" className="text-tac-brand hover:underline">
                        Back to Services
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden bg-gradient-to-b from-foreground/5 via-background to-background dark:from-tac-dark dark:via-tac-dark dark:to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Services
                        </Link>
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">
                            Service #{service.id}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-8 leading-tight">
                            {service.title}
                        </h1>
                        
                        {/* Service Image */}
                        {service.image && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="mt-12 rounded-3xl overflow-hidden shadow-2xl"
                            >
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-[400px] object-cover"
                                />
                            </motion.div>
                        )}
                    </motion.div>
                </div>
            </section>

            {/* Service Details */}
            <section className="py-24 relative bg-background/50">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass-card p-12 rounded-[3rem] bg-white/80 dark:bg-foreground/5 shadow-lg"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
                                {service.details}
                            </p>
                        </div>
                    </motion.div>

                    {/* Sub-Services Section */}
                    {service.services && service.services.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-16"
                        >
                            <h2 className="text-3xl font-bold text-foreground mb-8">
                                Our <span className="text-gradient">Service Areas</span>
                            </h2>
                            <div className="space-y-6">
                                {service.services.map((item, i) => {
                                    const isString = typeof item === 'string';
                                    return (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.4 + i * 0.1 }}
                                            className="glass-card p-8 rounded-2xl bg-white/80 dark:bg-foreground/5 shadow-md hover:shadow-lg transition-shadow"
                                        >
                                            {isString ? (
                                                <div className="flex items-start gap-4">
                                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                                    <span className="text-muted-foreground text-lg">{item}</span>
                                                </div>
                                            ) : (
                                                <div>
                                                    <div className="flex items-start gap-4 mb-4">
                                                        <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                                        <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                                                    </div>
                                                    <p className="text-muted-foreground leading-relaxed ml-10">{item.description}</p>
                                                </div>
                                            )}
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}

                    {/* Key Benefits */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-16"
                    >
                        <h2 className="text-3xl font-bold text-foreground mb-8">
                            Why Choose <span className="text-gradient">TAC</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                "Expert team with decades of experience",
                                "Compliance with local and international standards",
                                "Cutting-edge technology and AI tools",
                                "Competitive rates and quick turnaround"
                            ].map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + i * 0.1 }}
                                    className="flex items-start gap-4 glass-card p-6 rounded-2xl bg-white/80 dark:bg-foreground/5 shadow-md"
                                >
                                    <CheckCircle className="w-6 h-6 text-tac-brand shrink-0 mt-1" />
                                    <span className="text-muted-foreground">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
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
                            Ready to get started?
                        </h2>
                        <Link
                            href="/contact"
                            className="inline-block px-12 py-5 bg-tac-dark text-white font-bold rounded-2xl hover:scale-105 active:scale-95 transition-all shadow-xl"
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
