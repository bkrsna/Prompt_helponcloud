"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Startup",
        price: { monthly: 499, yearly: 399 },
        description: "Perfect for early-stage startups with growing traffic.",
        features: [
            "Managed AWS or Google Cloud",
            "24/7 Monitoring",
            "Daily Backups",
            "Basic Security Suite",
            "Email Support",
        ],
        notIncluded: ["Dedicated DevOps Engineer", "Custom Compliance", "SLA Guarantee"],
    },
    {
        name: "Growth",
        price: { monthly: 999, yearly: 799 },
        description: "For scaling companies that need robust infrastructure.",
        popular: true,
        features: [
            "Everything in Startup",
            "Multi-Region Support",
            "Advanced Security & WAF",
            "Performance Optimization",
            "Slack Support Channel",
            "99.9% Uptime SLA",
        ],
        notIncluded: ["Dedicated DevOps Engineer", "Custom Compliance"],
    },
    {
        name: "Enterprise",
        price: { monthly: 2499, yearly: 1999 },
        description: "Custom solutions for large-scale operations.",
        features: [
            "Everything in Growth",
            "Dedicated DevOps Engineer",
            "Custom Compliance (SOC2/HIPAA)",
            "Architecture Reviews",
            "24/7 Phone Support",
            "99.99% Uptime SLA",
        ],
        notIncluded: [],
    },
];

export default function Pricing() {
    const [isYearly, setIsYearly] = useState(true);

    return (
        <section id="pricing" className="py-24 bg-white">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Simple, Transparent <span className="text-gradient">Pricing</span>
                    </h2>
                    <p className="text-slate-600 text-lg mb-10">
                        Choose the plan that fits your stage of growth. No hidden fees.
                    </p>

                    <div className="flex items-center justify-center gap-4">
                        <span className={cn("text-base font-medium", !isYearly ? "text-slate-900" : "text-slate-500")}>
                            Monthly
                        </span>
                        <button
                            onClick={() => setIsYearly(!isYearly)}
                            className="relative w-16 h-8 rounded-full bg-slate-200 transition-colors focus:outline-none"
                            aria-label="Toggle yearly billing"
                        >
                            <div
                                className={cn(
                                    "absolute top-1 left-1 w-6 h-6 rounded-full bg-pink-600 transition-transform",
                                    isYearly ? "translate-x-8" : "translate-x-0"
                                )}
                            />
                        </button>
                        <span className={cn("text-base font-medium", isYearly ? "text-slate-900" : "text-slate-500")}>
                            Yearly <span className="text-pink-600 text-sm font-bold">(Save 20%)</span>
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={cn(
                                "relative p-10 rounded-[2rem] border flex flex-col transition-all",
                                plan.popular
                                    ? "bg-white border-pink-500 shadow-2xl shadow-pink-500/10 scale-105 z-10"
                                    : "bg-white border-slate-200 hover:border-pink-200 hover:shadow-xl"
                            )}
                        >
                            {plan.popular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-pink-600 text-white text-sm font-bold uppercase tracking-wide shadow-lg shadow-pink-600/20">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{plan.name}</h3>
                                <p className="text-slate-500 text-sm mb-8 h-12 leading-relaxed">{plan.description}</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-slate-900 tracking-tight">
                                        ${isYearly ? plan.price.yearly : plan.price.monthly}
                                    </span>
                                    <span className="text-slate-500 text-base">/mo</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-5 mb-10">
                                {plan.features.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3">
                                        <Check className="w-6 h-6 text-pink-500 shrink-0" />
                                        <span className="text-slate-700 text-sm">{feature}</span>
                                    </div>
                                ))}
                                {plan.notIncluded.map((feature) => (
                                    <div key={feature} className="flex items-start gap-3 opacity-50">
                                        <X className="w-6 h-6 text-slate-400 shrink-0" />
                                        <span className="text-slate-400 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                className={cn(
                                    "w-full py-4 rounded-xl font-bold text-base transition-all",
                                    plan.popular
                                        ? "bg-pink-600 hover:bg-pink-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40"
                                        : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                                )}
                            >
                                Choose {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
