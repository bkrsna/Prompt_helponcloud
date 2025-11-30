"use client";

import Link from "next/link";
import { Cloud, Twitter, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-800 pt-20 pb-14">
            <div className="container mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 mb-6 group relative">
                            <div className="p-2 rounded-lg bg-pink-600 group-hover:bg-pink-500 transition-colors relative z-10">
                                <Cloud className="w-6 h-6 text-white" />
                            </div>
                            {/* Orbiting Animations */}
                            <div className="absolute left-2 top-2 w-10 h-10 pointer-events-none">
                                <div className="absolute inset-0 animate-[spin_3s_linear_infinite]">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full blur-[1px]" />
                                </div>
                                <div className="absolute inset-0 animate-[spin_4s_linear_infinite_reverse]">
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-purple-400 rounded-full blur-[1px]" />
                                </div>
                            </div>
                            <span className="text-xl font-bold text-white tracking-tight relative z-10">
                                HelpOnCloud
                            </span>
                        </Link>
                        <p className="text-slate-400 mb-6 leading-relaxed">
                            Managed cloud hosting for the next generation of startups.
                            Scale without limits.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Features</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Pricing</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Security</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Roadmap</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Careers</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Blog</Link></li>
                            <li><Link href="#" className="text-slate-400 hover:text-pink-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
                        <p className="text-slate-400 mb-4 text-sm">
                            Subscribe to our newsletter for the latest cloud tips and updates.
                        </p>
                        <form className="flex gap-2">
                            <div className="relative flex-1">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-10 pr-4 text-white text-sm focus:outline-none focus:border-pink-500 transition-colors"
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-4 py-2 bg-pink-600 hover:bg-pink-500 text-white rounded-lg text-sm font-semibold transition-colors"
                            >
                                Join
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} HelpOnCloud Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>

                {/* Massive Footer Logo */}
                <div className="flex justify-center items-center opacity-10 select-none pointer-events-none">
                    <h1 className="text-[12vw] font-bold text-white tracking-tighter leading-none">
                        HelpOnCloud
                    </h1>
                </div>
            </div>
        </footer>
    );
}
