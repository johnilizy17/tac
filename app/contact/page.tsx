"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Clock, Globe } from "lucide-react";

const locations = [
    {
        name: "Lagos - Head Office",
        address: "The TAC Place. Block 113, Plot 22, Adebisi Ogunniyi Crescent, Off Oladimeji Alo Street, Lekki Phase 1, Lagos.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6537!2d3.4553!3d6.4474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMjYnNTAuNiJOIDPCsDI3JzE5LjEiRQ!5e0!3m2!1sen!2sng!4v1234567890"
    },
    {
        name: "Abuja Office",
        address: "Suite 30, Block B, Landmark Plaza, Plot 3124, Ibrahim Babangida Way. Maitama, Abuja.",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9876!2d7.4926!3d9.0820!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnNTUuMiJOIDfCsDI5JzMzLjQiRQ!5e0!3m2!1sen!2sng!4v1234567890"
    }
];

const contactInfo = [
    {
        title: "Lagos - Head Office",
        details: "The TAC Place. Block 113, Plot 22, Adebisi Ogunniyi Crescent, Off Oladimeji Alo Street, Lekki Phase 1, Lagos.",
        phone: "+234 906 284 0807",
        icon: MapPin,
        delay: 0.1,
        link: "https://maps.app.goo.gl/nE8aRrqjVUhp1Rsj8",
        type: "map"
    },
    {
        title: "Abuja Office",
        details: "Suite 30, Block B, Landmark Plaza, Plot 3124, Ibrahim Babangida Way. Maitama, Abuja.",
        phone: "+234 906 284 0810",
        icon: MapPin,
        delay: 0.2,
        link: "https://maps.app.goo.gl/qZP6aif2BBNZ8uom9",
        type: "map"
    },
    {
        title: "Send A Mail",
        details: "info@tacgroupng.com",
        icon: Mail,
        delay: 0.3,
        link: "mailto:info@tacgroupng.com",
        type: "email"
    }
];

export default function ContactPage() {
    const [selectedLocation, setSelectedLocation] = useState(0);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'Audit & Assurance Inquiry',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        // Create mailto link with form data
        const mailtoLink = `mailto:info@tacgroupng.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        )}`;
        
        // Open email client
        window.location.href = mailtoLink;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/5 blur-[120px] -z-10" />
                <div className="max-w-7xl mx-auto px-4 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-tac-brand font-bold tracking-widest uppercase text-sm mb-6 block">Contact Us</span>
                        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-8 leading-tight">
                            Let's Build Your <span className="text-gradient">Vision Together</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                            Have a project in mind or need professional advisory? Our team of experts is ready to provide solution-driven consulting for your organization.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="hidden lg:block relative"
                    >
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden border border-foreground/10 shadow-2xl relative group">
                            <img
                                src="/asset/2.png"
                                alt="Modern Architecture"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-tac-dark via-transparent to-transparent opacity-60" />
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border-tac-brand/20 animate-bounce-slow">
                            <Globe className="text-tac-brand w-8 h-8" />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-24 relative bg-background">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-12">
                            <div className="space-y-8">
                                {contactInfo.map((item, i) => (
                                    <motion.a
                                        key={i}
                                        href={item.link}
                                        target={item.type === 'map' ? "_blank" : undefined}
                                        rel={item.type === 'map' ? "noopener noreferrer" : undefined}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: item.delay }}
                                        className="flex gap-6 p-8 glass-card rounded-3xl group border-foreground/5 hover:border-tac-brand/30 transition-all duration-500 cursor-pointer"
                                    >
                                        <div className="w-14 h-14 bg-tac-brand/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500">
                                            <item.icon className="w-6 h-6 text-tac-brand" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-foreground font-bold text-lg mb-2 group-hover:text-tac-brand transition-colors">{item.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed text-sm mb-3">{item.details}</p>
                                            {item.phone && (
                                                <a 
                                                    href={`tel:${item.phone.replace(/\s/g, '')}`}
                                                    className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors text-sm font-semibold"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    <Phone className="w-4 h-4" />
                                                    Call Us: {item.phone}
                                                </a>
                                            )}
                                        </div>
                                    </motion.a>
                                ))}
                            </div>

                            {/* Additional Info */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="p-8 rounded-[2rem] bg-gradient-to-br from-tac-brand/5 to-transparent border border-foreground/5"
                            >
                                <div className="flex items-center gap-4 mb-4 text-tac-brand">
                                    <Clock size={20} />
                                    <span className="font-bold uppercase tracking-widest text-xs">Global Standards</span>
                                </div>
                                <p className="text-muted-foreground text-sm leading-relaxed">
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

                            <h2 className="text-3xl font-bold text-foreground mb-8">Send us a <span className="text-gradient">Message</span></h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-muted-foreground text-sm font-medium ml-2">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            required
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-tac-brand/50 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-muted-foreground text-sm font-medium ml-2">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@example.com"
                                            required
                                            className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-tac-brand/50 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-muted-foreground text-sm font-medium ml-2">Subject</label>
                                    <select 
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground appearance-none focus:outline-none focus:border-tac-brand/50 transition-colors"
                                    >
                                        <option className="bg-background">Audit & Assurance Inquiry</option>
                                        <option className="bg-background">Tax Management Advisory</option>
                                        <option className="bg-background">Business Consulting</option>
                                        <option className="bg-background">General Inquiry</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-muted-foreground text-sm font-medium ml-2">Your Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us how we can help your organization..."
                                        required
                                        className="w-full bg-foreground/5 border border-foreground/10 rounded-2xl px-6 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-tac-brand/50 transition-colors resize-none"
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit"
                                    className="w-full bg-tac-brand hover:bg-tac-brand/90 text-tac-dark font-bold py-5 rounded-2xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3 shadow-xl"
                                >
                                    <span>Submit Engagement</span>
                                    <Send size={18} />
                                </button>

                                <p className="text-center text-muted-foreground text-xs">
                                    By submitting, you agree to our privacy policy and data protection terms.
                                </p>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Interactive Map Section */}
            <section className="py-24 bg-background overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl font-bold text-foreground mb-6"
                        >
                            Get In Touch
                        </motion.h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                            Thank you for your interest. You can reach us for your business inquiries, we will love to hear from you.
                        </p>
                        
                        {/* Location Selector */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {locations.map((location, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedLocation(index)}
                                    className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 ${
                                        selectedLocation === index
                                            ? 'bg-tac-brand text-tac-dark shadow-lg scale-105'
                                            : 'bg-foreground/5 text-foreground hover:bg-foreground/10 border border-foreground/10'
                                    }`}
                                >
                                    <div className="flex items-center gap-2">
                                        <MapPin className="w-5 h-5" />
                                        {location.name}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        key={selectedLocation}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        className="w-full aspect-[21/9] rounded-[3.5rem] overflow-hidden border border-foreground/10 shadow-2xl"
                    >
                        <iframe
                            src={locations[selectedLocation].mapUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        ></iframe>
                    </motion.div>

                    {/* Selected Location Info */}
                    <motion.div
                        key={`info-${selectedLocation}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="mt-8 text-center glass-card p-8 rounded-3xl max-w-2xl mx-auto"
                    >
                        <h3 className="text-2xl font-bold text-foreground mb-4">
                            {locations[selectedLocation].name}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {locations[selectedLocation].address}
                        </p>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
