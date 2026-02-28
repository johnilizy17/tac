"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Clock, User, TrendingUp, ArrowRight } from "lucide-react";
import Link from "next/link";

const insights = [
    {
        id: 1,
        title: "Understanding the Nigeria Tax Reform Acts 2025: What SMEs Need to Know",
        excerpt: "Small and Medium-Sized Enterprises (SMEs) remain a vital part of Nigeria's economy. They employ millions of people, support local communities, and contribute meaningfully to national economic growth.",
        content: "Small and Medium-Sized Enterprises (SMEs) remain a vital part of Nigeria's economy. They employ millions of people, support local communities, and contribute meaningfully to national economic growth. SMEs are often the most affected when tax laws are complex, unclear, or costly to comply with. Recently, Nigeria introduced a major reform of its tax system through a new and consolidated tax law framework that took effect in January 01, 2026. This reform marks a significant shift in how taxes are administered in the country. Government authorities, business owners, professional advisers, and investors are all closely watching how these changes will influence the business environment, particularly for SMEs, which make up the largest number of businesses in Nigeria.",
        date: "January 2026",
        category: "Tax Reform",
        author: "TAC Advisory",
        readTime: "5 min read",
        featured: true,
        image: "/insight/1.jpg"
    },
    {
        id: 2,
        title: "FIRS E-Invoicing Initiative: What Businesses Need to Know",
        excerpt: "The Federal Inland Revenue Service (FIRS) commences the launching of the National E-Invoicing initiative, known as the FIRS Merchant Buyer Solution on the 1st of August, 2025.",
        content: "The Federal Inland Revenue Service (FIRS) commences the launching of the National E-Invoicing initiative, known as the FIRS Merchant Buyer Solution on the 1st of August, 2025; as part of the ongoing efforts of the FIRS to enhance tax compliance and streamline administration. This is in accordance with section 158 of the Nigeria Tax Act, 2025.",
        date: "August 2025",
        category: "Tax Compliance",
        author: "TAC Advisory",
        readTime: "4 min read",
        image: "/insight/2.jpg"
    },
    {
        id: 3,
        title: "Nigeria Tax Reform Bills: A New Era in Fiscal Policy",
        excerpt: "The long-anticipated and widely debated Nigeria Tax Reform Bills were signed into law by President Bola Ahmed Tinubu on 26th June 2025; marking a defining moment in the nation's fiscal policy history.",
        content: "The long-anticipated and widely debated Nigeria Tax Reform Bills were signed into law by President Bola Ahmed Tinubu on 26th June 2025; marking a defining moment in the nation's fiscal policy history. This landmark legislation not only consolidates existing tax statutes into a unified legal framework but also redefines the country's approach to revenue.",
        date: "June 2025",
        category: "Tax Reform",
        author: "TAC Advisory",
        readTime: "6 min read",
        image: "/insight/3.jpg"
    },
    {
        id: 4,
        title: "National E-Invoicing Solution: Inter-Agency Collaboration",
        excerpt: "On Tuesday, April 29, 2025, the Federal Inland Revenue Service (FIRS) formally inaugurated the National E-Invoicing Solution Inter-Agency Steering Committee at its headquarters in Abuja.",
        content: "On Tuesday, April 29, 2025, the Federal Inland Revenue Service (FIRS) formally inaugurated the National E-Invoicing Solution Inter-Agency Steering Committee at its headquarters in Abuja. This committee was set up to drive the seamless implementation of the e-Invoicing Initiative and enhance collaboration amongst key stakeholders- FIRS, Nigerian Customs Service, Nigeria Inter-Bank Settlement System (NIBSS), Nigeria.",
        date: "April 2025",
        category: "Technology",
        author: "TAC Advisory",
        readTime: "4 min read",
        image: "/insight/4.jpg"
    }
];

export default function InsightsPage() {
    const featuredArticle = insights[0];
    const topStories = insights.slice(1, 4);
    const regularArticles = insights.slice(4);

    return (
        <main className="min-h-screen bg-background text-foreground">
            <Navbar />

            {/* Newspaper Header */}
            <section className="pt-32 pb-8 border-b-4 border-tac-brand">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center"
                    >
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-px bg-foreground/20 flex-1 max-w-xs" />
                            <TrendingUp className="w-6 h-6 text-tac-brand" />
                            <div className="h-px bg-foreground/20 flex-1 max-w-xs" />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-2" style={{ fontFamily: 'Georgia, serif' }}>
                            TAC Insights
                        </h1>
                        <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Professional Advisory & Business Intelligence</p>
                        <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
                            <span>{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                            <span>•</span>
                            <span>Lagos, Nigeria</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Article - Full Width */}
            <section className="py-12 border-b border-foreground/10">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
                    >
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src={featuredArticle.image}
                                alt={featuredArticle.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-4 left-4">
                                <span className="px-4 py-2 bg-tac-brand text-white text-xs font-bold uppercase tracking-wider">
                                    Featured Story
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-3 py-1 bg-tac-brand/10 text-tac-brand text-xs font-bold uppercase tracking-wider">
                                    {featuredArticle.category}
                                </span>
                                <span className="text-muted-foreground text-sm">{featuredArticle.date}</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                {featuredArticle.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {featuredArticle.excerpt}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                                <div className="flex items-center gap-2">
                                    <User className="w-4 h-4" />
                                    <span>{featuredArticle.author}</span>
                                </div>
                                <span>•</span>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    <span>{featuredArticle.readTime}</span>
                                </div>
                            </div>
                            <Link
                                href={`/insights/${featuredArticle.id}`}
                                className="inline-flex items-center gap-2 px-6 py-3 bg-tac-brand text-white font-bold rounded-xl hover:bg-tac-brand/90 transition-colors group"
                            >
                                Read Full Article
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </motion.article>
                </div>
            </section>

            {/* Top Stories - 3 Column Layout */}
            <section className="py-12 border-b border-foreground/10 bg-foreground/5">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b-2 border-tac-brand" style={{ fontFamily: 'Georgia, serif' }}>
                        Top Stories
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {topStories.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="border-r border-foreground/10 last:border-r-0 pr-8 last:pr-0"
                            >
                                <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4 shadow-lg">
                                    <img
                                        src={article.image}
                                        alt={article.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="px-2 py-1 bg-tac-brand/10 text-tac-brand text-xs font-bold uppercase">
                                        {article.category}
                                    </span>
                                    <span className="text-muted-foreground text-xs">{article.date}</span>
                                </div>
                                <h4 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight hover:text-tac-brand transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                                    {article.title}
                                </h4>
                                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                                    {article.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                        <Clock className="w-3 h-3" />
                                        <span>{article.readTime}</span>
                                    </div>
                                    <Link
                                        href={`/insights/${article.id}`}
                                        className="inline-flex items-center gap-1 text-tac-brand text-sm font-semibold hover:gap-2 transition-all group"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

          
            <Footer />
        </main>
    );
}
