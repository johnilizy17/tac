"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Share2, Twitter, Linkedin, Facebook, Mail, Link as LinkIcon, Check } from "lucide-react";
import Link from "next/link";

const insights = [
    {
        id: 1,
        title: "Understanding the Nigeria Tax Reform Acts 2025: What SMEs Need to Know",
        content: "Small and Medium-Sized Enterprises (SMEs) remain a vital part of Nigeria's economy. They employ millions of people, support local communities, and contribute meaningfully to national economic growth. SMEs are often the most affected when tax laws are complex, unclear, or costly to comply with. Recently, Nigeria introduced a major reform of its tax system through a new and consolidated tax law framework that took effect in January 01, 2026. This reform marks a significant shift in how taxes are administered in the country. Government authorities, business owners, professional advisers, and investors are all closely watching how these changes will influence the business environment, particularly for SMEs, which make up the largest number of businesses in Nigeria.",
        date: "January 2026",
        category: "Tax Reform",
        author: "TAC Advisory",
        readTime: "5 min read",
        image: "/insight/1.jpg"
    },
    {
        id: 2,
        title: "FIRS E-Invoicing Initiative: What Businesses Need to Know",
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
        content: "On Tuesday, April 29, 2025, the Federal Inland Revenue Service (FIRS) formally inaugurated the National E-Invoicing Solution Inter-Agency Steering Committee at its headquarters in Abuja. This committee was set up to drive the seamless implementation of the e-Invoicing Initiative and enhance collaboration amongst key stakeholders- FIRS, Nigerian Customs Service, Nigeria Inter-Bank Settlement System (NIBSS), Nigeria.",
        date: "April 2025",
        category: "Technology",
        author: "TAC Advisory",
        readTime: "4 min read",
        image: "/insight/4.jpg"
    }
];

export default function InsightDetailPage() {
    const params = useParams();
    const insightId = parseInt(params.id as string);
    const insight = insights.find(i => i.id === insightId);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [copied, setCopied] = useState(false);

    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const shareTitle = insight?.title || '';
    const shareText = insight?.content.substring(0, 100) + '...' || '';

    const handleShare = (platform: string) => {
        const encodedUrl = encodeURIComponent(shareUrl);
        const encodedTitle = encodeURIComponent(shareTitle);
        const encodedText = encodeURIComponent(shareText);

        const shareUrls: { [key: string]: string } = {
            twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            email: `mailto:?subject=${encodedTitle}&body=${encodedText}%0A%0A${encodedUrl}`
        };

        if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
        setShowShareMenu(false);
    };

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);
            setCopied(true);
            setTimeout(() => {
                setCopied(false);
                setShowShareMenu(false);
            }, 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    if (!insight) {
        return (
            <main className="min-h-screen bg-background text-foreground">
                <Navbar />
                <div className="pt-40 pb-20 text-center">
                    <h1 className="text-4xl font-bold mb-4">Insight Not Found</h1>
                    <Link href="/insights" className="text-tac-brand hover:underline">
                        Back to Insights
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    const relatedInsights = insights.filter(i => i.id !== insightId).slice(0, 3);

    return (
        <main className="min-h-screen bg-background text-foreground selection:bg-tac-purple selection:text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-40 pb-12 relative overflow-hidden bg-gradient-to-b from-tac-brand/5 via-background to-background">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-tac-brand/10 blur-[120px] -z-10" />
                <div className="max-w-4xl mx-auto px-4 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Link
                            href="/insights"
                            className="inline-flex items-center gap-2 text-tac-brand hover:text-tac-brand/80 transition-colors mb-8 group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            Back to Insights
                        </Link>
                        
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-4 py-2 bg-tac-brand/10 text-tac-brand text-sm font-bold uppercase tracking-wider">
                                {insight.category}
                            </span>
                            <span className="text-muted-foreground">{insight.date}</span>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                            {insight.title}
                        </h1>

                        <div className="flex items-center gap-6 text-muted-foreground mb-8">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5" />
                                <span>{insight.author}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5" />
                                <span>{insight.readTime}</span>
                            </div>
                            <span>•</span>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>{insight.date}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Featured Image */}
            <section className="pb-12">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="rounded-3xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={insight.image}
                            alt={insight.title}
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* Article Content */}
            <section className="py-12 relative bg-background/50">
                <div className="max-w-4xl mx-auto px-4">
                    <motion.article
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-12 rounded-[3rem] bg-white dark:bg-foreground/5 shadow-md"
                    >
                        <div className="prose prose-lg max-w-none">
                            <p className="text-muted-foreground text-xl leading-relaxed mb-8 first-letter:text-6xl first-letter:font-bold first-letter:text-tac-brand first-letter:mr-2 first-letter:float-left">
                                {insight.content}
                            </p>
                        </div>
                    </motion.article>

                    {/* Share Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-12 relative"
                    >
                        <div className="flex items-center justify-between p-6 glass-card rounded-2xl bg-white dark:bg-foreground/5">
                            <span className="text-muted-foreground font-semibold">Share this article</span>
                            <button 
                                onClick={() => setShowShareMenu(!showShareMenu)}
                                className="flex items-center gap-2 px-6 py-3 bg-tac-brand text-white rounded-xl hover:bg-tac-brand/90 transition-colors"
                            >
                                <Share2 className="w-5 h-5" />
                                Share
                            </button>
                        </div>

                        {/* Share Menu Dropdown */}
                        <AnimatePresence>
                            {showShareMenu && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute right-0 mt-2 w-64 glass-card rounded-2xl bg-white dark:bg-foreground/5 shadow-2xl border border-gray-200 dark:border-foreground/10 overflow-hidden z-50"
                                >
                                    <div className="p-2">
                                        <button
                                            onClick={() => handleShare('twitter')}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-tac-brand/10 transition-colors group"
                                        >
                                            <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                                            <span className="text-foreground font-medium">Share on Twitter</span>
                                        </button>
                                        <button
                                            onClick={() => handleShare('linkedin')}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-tac-brand/10 transition-colors group"
                                        >
                                            <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                                            <span className="text-foreground font-medium">Share on LinkedIn</span>
                                        </button>
                                        <button
                                            onClick={() => handleShare('facebook')}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-tac-brand/10 transition-colors group"
                                        >
                                            <Facebook className="w-5 h-5 text-[#1877F2] group-hover:scale-110 transition-transform" />
                                            <span className="text-foreground font-medium">Share on Facebook</span>
                                        </button>
                                        <button
                                            onClick={() => handleShare('email')}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-tac-brand/10 transition-colors group"
                                        >
                                            <Mail className="w-5 h-5 text-tac-brand group-hover:scale-110 transition-transform" />
                                            <span className="text-foreground font-medium">Share via Email</span>
                                        </button>
                                        <div className="h-px bg-foreground/10 my-2" />
                                        <button
                                            onClick={handleCopyLink}
                                            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-tac-brand/10 transition-colors group"
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="w-5 h-5 text-green-500" />
                                                    <span className="text-green-500 font-medium">Link Copied!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <LinkIcon className="w-5 h-5 text-tac-brand group-hover:scale-110 transition-transform" />
                                                    <span className="text-foreground font-medium">Copy Link</span>
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Related Insights */}
            {relatedInsights.length > 0 && (
                <section className="py-20 bg-foreground/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-serif font-bold text-foreground mb-12" style={{ fontFamily: 'Georgia, serif' }}>
                            Related Insights
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedInsights.map((article, index) => (
                                <motion.article
                                    key={article.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="glass-card p-6 rounded-2xl bg-white dark:bg-foreground/5 shadow-md hover:shadow-xl transition-shadow"
                                >
                                    <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-4">
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
                                    <h4 className="text-lg font-serif font-bold text-foreground mb-3 leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
                                        {article.title}
                                    </h4>
                                    <Link
                                        href={`/insights/${article.id}`}
                                        className="inline-flex items-center gap-1 text-tac-brand text-sm font-semibold hover:gap-2 transition-all"
                                    >
                                        Read More
                                        <ArrowLeft className="w-4 h-4 rotate-180" />
                                    </Link>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-20 bg-tac-brand">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-tac-dark mb-8">
                            Need Expert Advice?
                        </h2>
                        <p className="text-xl text-tac-dark/80 mb-8 max-w-2xl mx-auto">
                            Our team of professionals is ready to help you navigate complex business challenges
                        </p>
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
