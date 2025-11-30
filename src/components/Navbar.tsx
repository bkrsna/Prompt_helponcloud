"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Cloud } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Partners", href: "#partners" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={false}
                animate={isScrolled ? "scrolled" : "top"}
                variants={{
                    top: {
                        width: "calc(100% - 28px)",
                        top: 14,
                        borderRadius: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0)",
                        backdropFilter: "blur(0px)",
                        border: "1px solid rgba(255, 255, 255, 0)",
                        padding: "24px",
                        left: "50%",
                        x: "-50%",
                    },
                    scrolled: {
                        width: "fit-content",
                        minWidth: "500px",
                        top: 20,
                        borderRadius: "6px",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        backdropFilter: "blur(16px) saturate(180%)",
                        border: "1px solid rgba(255, 255, 255, 0.4)",
                        padding: "8px 24px",
                        left: "50%",
                        x: "-50%",
                        boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.05)",
                    },
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed z-50 flex items-center justify-between"
            >
                <AnimatePresence>
                    {!isScrolled && (
                        <motion.div
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: "auto" }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                        >
                            <Link href="/" className="flex items-center gap-2 group shrink-0 mr-4">
                                <div className="p-2 rounded-lg bg-pink-600 group-hover:bg-pink-500 transition-colors">
                                    <Cloud className="w-6 h-6 text-white" />
                                </div>
                                <span className="text-xl font-bold text-slate-900 tracking-tight">
                                    HelpOnCloud
                                </span>
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn("font-medium text-slate-600 hover:text-pink-600 transition-colors", isScrolled ? "text-xs" : "text-sm")}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center gap-3 shrink-0">
                    <Link
                        href="#login"
                        className={cn("font-medium text-slate-600 hover:text-pink-600 transition-colors", isScrolled ? "text-xs" : "text-sm")}
                    >
                        Log in
                    </Link>
                    <Link
                        href="#signup"
                        className={cn(
                            "rounded-full bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)]",
                            isScrolled ? "px-4 py-1.5 text-xs" : "px-5 py-2.5 text-sm"
                        )}
                    >
                        Sign up
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-pink-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-4 top-24 z-40 bg-white/90 backdrop-blur-xl border border-pink-100 rounded-2xl shadow-xl overflow-hidden md:hidden"
                    >
                        <div className="p-6 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-slate-600 hover:text-pink-600 py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-slate-100">
                                <Link
                                    href="#login"
                                    className="w-full text-center py-2 text-slate-600 font-medium"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Log in
                                </Link>
                                <Link
                                    href="#signup"
                                    className="w-full text-center px-5 py-3 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-semibold transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
