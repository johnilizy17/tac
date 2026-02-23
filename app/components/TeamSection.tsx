"use client";

import { motion } from "framer-motion";
import { Mail, Shield, Award, Users, Lightbulb, CheckCircle, Heart } from "lucide-react";

const coreValues = [
    {
        icon: Shield,
        title: "INTEGRITY",
        description: "We uphold the highest ethical standards, ensuring transparency, honesty, and accountability in every engagement."
    },
    {
        icon: Award,
        title: "PROFESSIONAL EXCELLENCE",
        description: "We are committed to delivering superior quality services through technical expertise, continuous learning, and adherence to global best practices."
    },
    {
        icon: Users,
        title: "CLIENT-CENTRICITY",
        description: "Our clients are at the heart of everything we do. We listen, understand their needs, and provide tailored solutions that create lasting value."
    },
    {
        icon: Lightbulb,
        title: "INNOVATION",
        description: "We leverage cutting-edge technology and forward-thinking strategies to solve complex business challenges and drive sustainable growth."
    },
    {
        icon: CheckCircle,
        title: "RELIABILITY",
        description: "We honor our commitments and consistently deliver dependable, timely, and high-quality results our clients can trust."
    },
    {
        icon: Heart,
        title: "PEOPLE EMPOWERMENT",
        description: "We are committed to fostering a supportive and inspiring work environment where our people are valued, motivated, and empowered to thrive. We invest in their growth, prioritize their well-being, and recognize excellence—because our strength lies in the success and fulfillment of our team."
    }
];

const team = [
    {
        name: "Tunde Adaramaja",
        role: "Managing Partner / CEO",
        image: "3s.jpeg",
        email: "tunde@tacgroupng.com",
        bio: "Leading TAC with over two decades of professional expertise in audit and business consulting.",
    },
    {
        name: "Tunde Faniyi",
        role: "Senior Partner/COO",
        image: "2s.jpeg",
        email: "faniyi@tacgroupng.com",
        bio: "Dedicated and competent professionals using technology to drive client success with integrity.",
    },
    {
        name: "Dr. Abraham O. Bamigboje",
        role: "Associate Partner, Assurance & Transaction Advisory Service",
        image: "1s.jpg",
        email: "abraham@tacgroupng.com",
        bio:"He began his career with Ernst & Young (EY) in 1992 and later joined ExxonMobil in 1994, where he held several strategic roles across finance, control, and project management functions. Over nearly three decades at ExxonMobil, he rose through the ranks to the position of Senior Manager, consistently demonstrating excellence in leadership, governance, and performance management."
    },
    {
        name: "James Oni",
        role: "Director, TAC Tax Advisory Service",
        image: "6s.jpg",
        email: "James@tacgroupng.com",
        bio:"He currently serves as Director, TAC Tax Advisory Services at TAC Professional Services, where he leads a team of experts delivering innovative, compliant, and value-driven tax solutions."
    },
];

export default function TeamSection() {
    return (
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
                    {team.map((member) => (
                        <motion.div
                            key={member.name}
                            variants={{
                                hidden: { opacity: 0, y: 50 },
                                show: { opacity: 1, y: 0 }
                            }}
                            className="group relative flex flex-col"
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
                                    <p className="text-tac-brand font-bold text-xs tracking-wider uppercase">{member.role}</p>
                                </div>
                            </div>

                            <div className="px-2 flex flex-col gap-2">
                                <a
                                    href={`mailto:${member.email}`}
                                    className="flex items-center gap-2 text-muted-foreground hover:text-tac-brand transition-colors text-sm"
                                >
                                    <Mail className="w-4 h-4" />
                                    {member.email}
                                </a>
                                {member.bio && (
                                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 italic">
                                        "{member.bio}"
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}

                </motion.div>
            </div>
        </section>
    );
}
