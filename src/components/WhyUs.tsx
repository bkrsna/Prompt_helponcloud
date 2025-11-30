"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
    {
        title: "Dedicated DevOps Team",
        description: "Get a full team of cloud experts for less than the cost of one hire.",
    },
    {
        title: "Cost Optimization",
        description: "We analyze and optimize your infrastructure to reduce cloud bills by up to 40%.",
    },
    {
        title: "99.99% Uptime SLA",
        description: "We guarantee high availability with our redundant architecture designs.",
    },
    {
        title: "15-Minute Response Time",
        description: "Critical issues are addressed immediately by our 24/7 on-call engineers.",
    },
];

export default function WhyUs() {
    return (
        <section id="why-us" className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-pink-100/40 blur-[120px] -z-10" />

            <div className="container mx-auto px-6 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 tracking-tight"
                        >
                            Why High-Growth Startups <br />
                            <span className="text-gradient">Choose HelpOnCloud</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-600 text-lg mb-10 leading-relaxed"
                        >
                            Building a startup is hard enough. Managing complex cloud infrastructure shouldn't be.
                            We bridge the gap between basic hosting and enterprise-grade DevOps.
                        </motion.p>

                        <div className="space-y-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="flex items-start gap-5"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center shrink-0">
                                        <Check className="w-5 h-5 text-pink-600" />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                                        <p className="text-slate-600 text-base leading-relaxed">{feature.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative z-10 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-white"
                        >
                            {/* Abstract Dashboard Representation */}
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="text-xs text-slate-400 font-mono">system-monitor.exe</div>
                            </div>
                            <div className="p-10 space-y-8 font-mono text-sm md:text-base">
                                <div className="flex justify-between text-slate-600">
                                    <span>&gt; CPU Usage</span>
                                    <span className="text-green-600">24% [OK]</span>
                                </div>
                                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                    <div className="bg-green-500 w-[24%] h-full" />
                                </div>

                                <div className="flex justify-between text-slate-600">
                                    <span>&gt; Memory</span>
                                    <span className="text-green-600">42% [OK]</span>
                                </div>
                                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden">
                                    <div className="bg-pink-500 w-[42%] h-full" />
                                </div>

                                <div className="flex justify-between text-slate-600">
                                    <span>&gt; Latency</span>
                                    <span className="text-green-600">12ms [OK]</span>
                                </div>

                                <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-slate-600 leading-relaxed">
                                    <span className="text-blue-600">info</span> Auto-scaling event triggered.
                                    <br />
                                    <span className="text-blue-600">info</span> New instance provisioned in us-east-1.
                                    <br />
                                    <span className="text-green-600">success</span> Load balanced successfully.
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative elements behind */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-pink-200/40 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-200/40 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
