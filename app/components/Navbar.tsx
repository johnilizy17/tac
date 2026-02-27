"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
    const [hidden, setHidden] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
    const { scrollY } = useScroll();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        setScrolled(latest > 50);
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Track active section on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll("section[id]");
            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute("id");

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId || "");
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial check

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (href: string) => {
        // Check if it's a hash link
        if (href.startsWith("/#")) {
            const section = href.replace("/#", "");
            return activeSection === section;
        }
        // Check if it's a page link
        return pathname === href;
    };

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Services", href: "/services", hasDropdown: true },
        { name: "Industries", href: "/industries" },
        { name: "Partners", href: "/partners" },
        { name: "Team", href: "/team" },
        { name: "Gallery", href: "/gallery" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
    ];

    const services = [
        { id: 1, name: "Accounting Outsourcing & Transaction Advisory" },
        { id: 2, name: "Audit & Assurance" },
        { id: 3, name: "Tax Compliance & Advisory" },
        { id: 4, name: "Forensic Investigation & Accounting" },
        { id: 5, name: "Business Consulting & Advisory" },
        { id: 6, name: "Internal Control & Risk Management" }
    ];

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 transition-all duration-300 ${scrolled ? "scale-95" : "scale-100"}`}
        >
            <div className="glass-card rounded-[2rem] md:rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between gap-4 md:gap-12 max-w-6xl w-full mx-auto border-foreground/10 shadow-2xl">
                <Link href="/" className="text-xl md:text-2xl font-black tracking-tighter flex items-center gap-3">
                    <img src="/favicon.ico" className="w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center text-tac-dark text-sm" />
                    <span className="text-foreground" style={{letterSpacing:1.3}}>TAC</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold uppercase tracking-widest text-foreground/70">
                    {navLinks.slice(0, 8).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-tac-brand transition-colors cursor-pointer relative group ${
                                isActive(link.href) ? "text-tac-brand" : ""
                            }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-tac-brand transition-all ${
                                isActive(link.href) ? "w-full" : "w-0 group-hover:w-full"
                            }`} />
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 md:p-3 rounded-full hover:bg-foreground/10 transition-colors text-foreground group relative"
                        title="Toggle Theme"
                    >
                        <AnimatePresence mode="wait">
                            {theme === "dark" ? (
                                <motion.div
                                    key="sun"
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                >
                                    <Sun size={18} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="moon"
                                    initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
                                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                                    exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
                                >
                                    <Moon size={18} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="lg:hidden p-2 md:p-3 rounded-full hover:bg-foreground/10 transition-colors text-foreground"
                        title="Toggle Menu"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>

                    <Link
                        href="/contact"
                        className="hidden md:inline-block px-6 py-2.5 bg-tac-brand hover:scale-105 active:scale-95 text-tac-dark text-[11px] font-black uppercase tracking-widest rounded-full transition-all shadow-lg shadow-tac-brand/20"
                    >
                        Get in Touch
                    </Link>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-3xl p-6 shadow-2xl border-foreground/10"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-sm font-bold uppercase tracking-widest py-2 px-4 rounded-xl transition-colors ${
                                        isActive(link.href)
                                            ? "bg-tac-brand/10 text-tac-brand"
                                            : "text-foreground/70 hover:bg-foreground/5 hover:text-tac-brand"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-2 px-6 py-3 bg-tac-brand text-tac-dark text-xs font-black uppercase tracking-widest rounded-full transition-all text-center shadow-lg shadow-tac-brand/20"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
