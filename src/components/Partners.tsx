"use client";

import { motion } from "framer-motion";

const partners = [
    "Acme Corp",
    "Nebula",
    "Vertex",
    "Horizon",
    "Pinnacle",
    "Apex",
    "Zenith",
    "Quantum",
    "Echo",
    "Flux",
];

export default function Partners() {
    return (
        <section id="partners" className="py-10 border-y border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-6 md:px-8 mb-8 text-center">
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    Powering next-gen startups
                </p>
            </div>

            <div className="relative flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="mx-8 md:mx-16 text-2xl font-bold text-slate-500 hover:text-pink-600 transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap">
                    {[...partners, ...partners, ...partners].map((partner, index) => (
                        <div
                            key={index}
                            className="mx-8 md:mx-16 text-2xl font-bold text-slate-500 hover:text-pink-600 transition-colors cursor-default"
                        >
                            {partner}
                        </div>
                    ))}
                </div>

                {/* Fade edges */}
                <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
