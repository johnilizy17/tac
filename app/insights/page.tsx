"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Calendar, Clock, User, TrendingUp } from "lucide-react";

const insights = [
    {
        id: 1,
        title: "Understanding the Nigeria Tax Reform Acts 2025: What SMEs Need to Know",
        content: "Small and Medium-Sized Enterprises (SMEs) remain a vital part of Nigeria's economy. They employ millions of people, support local communities, and contribute meaningfully to national economic growth. SMEs are often the most affected when tax laws are complex, unclear, or costly to comply with. Recently, Nigeria introduced a major reform of its tax system through a new and consolidated tax law framework that took effect in January 01, 2026. This reform marks a significant shift in how taxes are administered in the country. Government authorities, business owners, professional advisers, and investors are all closely watching how these changes will influence the business environment, particularly for SMEs, which make up the largest number of businesses in Nigeria.",
        date: "January 2026",
        category: "Tax Reform",
        author: "TAC Advisory",
        readTime: "5 min read",
        featured: true,
        image: "/asset/3.png"
    },
    {
        id: 2,
        title: "FIRS E-Invoicing Initiative: What Businesses Need to Know",
        content: "The Federal Inland Revenue Service (FIRS) commences the launching of the National E-Invoicing initiative, known as the FIRS Merchant Buyer Solution on the 1st of August, 2025; as part of the ongoing efforts of the FIRS to enhance tax compliance and streamline administration. This is in accordance with section 158 of the Nigeria Tax Act, 2025.",
        date: "August 2025",
        category: "Tax Compliance",
        author: "TAC Advisory",
        readTime: "4 min read",
        image: "/asset/1.png"
    },
    {
        id: 3,
        title: "Nigeria Tax Reform Bills: A New Era in Fiscal Policy",
        content: "The long-anticipated and widely debated Nigeria Tax Reform Bills were signed into law by President Bola Ahmed Tinubu on 26th June 2025; marking a defining moment in the nation's fiscal policy history. This landmark legislation not only consolidates existing tax statutes into a unified legal framework but also redefines the country's approach to revenue.",
        date: "June 2025",
        category: "Tax Reform",
        author: "TAC Advisory",
        readTime: "6 min read",
        image: "/asset/2.png"
    },
    {
        id: 4,
        title: "National E-Invoicing Solution: Inter-Agency Collaboration",
        content: "On Tuesday, April 29, 2025, the Federal Inland Revenue Service (FIRS) formally inaugurated the National E-Invoicing Solution Inter-Agency Steering Committee at its headquarters in Abuja. This committee was set up to drive the seamless implementation of the e-Invoicing Initiative and enhance collaboration amongst key stakeholders- FIRS, Nigerian Customs Service, Nigeria Inter-Bank Settlement System (NIBSS), Nigeria.",
        date: "April 2025",
        category: "Technology",
        author: "TAC Advisory",
        readTime: "4 min read",
        image: "/asset/4.png"
    },
    {
        id: 5,
        title: "2025 Compliance: A Strategy-Centric Imperative",
        content: "In 2025, compliance has evolved beyond box-checking to a strategy-centric imperative. Global advisory and assurance firms are recalibrating their operations in response to increasing stakeholder scrutiny and a surge in ESG-integrated reporting requirements.",
        date: "2025",
        category: "Compliance",
        author: "TAC Advisory",
        readTime: "5 min read",
        image: "/asset/5.png"
    },
    {
        id: 6,
        title: "Mastering Payroll Management for Small Business Owners",
        content: "Payroll management is one of the most crucial yet often overlooked aspects of running a successful small business. For many entrepreneurs, the complexities of payroll can lead to stress, costly mistakes, and inefficiencies that hinder growth. But it doesn't have to be this way.",
        date: "2025",
        category: "Business Management",
        author: "TAC Advisory",
        readTime: "7 min read",
        image: "/asset/6.png"
    },
    {
        id: 7,
        title: "Forensic Accounting: Protecting Your Business Profits",
        content: "Protecting profits is critical for every business, especially for small businesses and startups aiming for sustainable Business Growth. Often, small business owners focus on boosting sales and cutting operational costs, but there's one essential element that's often overlooked: forensic accounting. This field goes beyond traditional Accounting, acting as a proactive defense mechanism to protect businesses.",
        date: "2025",
        category: "Forensic Accounting",
        author: "TAC Advisory",
        readTime: "6 min read",
        image: "/asset/1.png"
    },
    {
        id: 8,
        title: "Essential Tax Management Strategies for Small Businesses",
        content: "For many small business owners and entrepreneurs, navigating taxation and accounting can feel overwhelming. Yet, the truth is that effective tax management is one of the most powerful tools in achieving business growth. The right strategies not only ensure compliance but also optimize.",
        date: "2025",
        category: "Tax Management",
        author: "TAC Advisory",
        readTime: "5 min read",
        image: "/asset/2.png"
    },
    {
        id: 9,
        title: "Mastering Transfer Pricing for Business Growth",
        content: "Mastering transfer pricing is crucial for small business owners who want to ensure their operations remain profitable and compliant, especially when expanding across borders. While transfer pricing might sound like a concept reserved for large corporations, it's actually a vital consideration for businesses of all sizes. Understanding this complex process can significantly contribute to Business Growth.",
        date: "2025",
        category: "Transfer Pricing",
        author: "TAC Advisory",
        readTime: "6 min read",
        image: "/asset/3.png"
    },
    {
        id: 10,
        title: "Audit and Assurance Services: Driving Business Growth",
        content: "Audit and Assurance Services play a crucial role in driving Business Growth, offering small businesses a pathway to enhanced financial health and strategic decision-making. Many small business owners view audits as a regulatory burden, but the truth is that these services can unlock significant value when leveraged properly. Think of them as a comprehensive check-up.",
        date: "2025",
        category: "Audit & Assurance",
        author: "TAC Advisory",
        readTime: "5 min read",
        image: "/asset/4.png"
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
                                {featuredArticle.content}
                            </p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
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
                                <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                                    {article.content}
                                </p>
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <Clock className="w-3 h-3" />
                                    <span>{article.readTime}</span>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* More Articles - 2 Column Layout */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4">
                    <h3 className="text-3xl font-serif font-bold text-foreground mb-8 pb-4 border-b-2 border-tac-brand" style={{ fontFamily: 'Georgia, serif' }}>
                        Latest Updates
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                        {regularArticles.map((article, index) => (
                            <motion.article
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="pb-8 border-b border-foreground/10"
                            >
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="relative aspect-square rounded-lg overflow-hidden shadow-md">
                                        <img
                                            src={article.image}
                                            alt={article.title}
                                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="col-span-2">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-2 py-1 bg-tac-brand/10 text-tac-brand text-xs font-bold uppercase">
                                                {article.category}
                                            </span>
                                        </div>
                                        <h4 className="text-lg font-serif font-bold text-foreground mb-2 leading-tight hover:text-tac-brand transition-colors" style={{ fontFamily: 'Georgia, serif' }}>
                                            {article.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed mb-2 line-clamp-2">
                                            {article.content}
                                        </p>
                                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{article.date}</span>
                                            </div>
                                            <span>•</span>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Subscription */}
            <section className="py-16 bg-gradient-to-br from-tac-brand via-tac-brand/90 to-tac-purple text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
                            Stay Informed
                        </h3>
                        <p className="text-white/90 text-lg mb-8">
                            Subscribe to receive the latest insights, updates, and expert analysis directly to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-3 rounded-full text-foreground focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="px-8 py-3 bg-white text-tac-brand font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-xl">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
