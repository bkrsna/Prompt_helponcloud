"use client";

import { Server, Shield, Zap, Globe, Lock, Database, Activity } from "lucide-react";
import { motion } from "framer-motion";

const services = [
    {
        title: "Managed Hosting",
        description: "Fully managed infrastructure on AWS, Google Cloud, or Azure. We handle the updates, patching, and maintenance.",
        icon: Server,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="relative w-full max-w-[240px]">
                    <div className="absolute inset-0 bg-gradient-to-tr from-pink-100/50 to-purple-100/50 blur-2xl rounded-full" />
                    <div className="relative bg-white rounded-xl border border-slate-100 shadow-lg p-4 flex flex-col gap-3">
                        <div className="flex items-center gap-2 border-b border-slate-50 pb-3">
                            <div className="w-2 h-2 rounded-full bg-red-400" />
                            <div className="w-2 h-2 rounded-full bg-yellow-400" />
                            <div className="w-2 h-2 rounded-full bg-green-400" />
                        </div>
                        <div className="space-y-2">
                            <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                            <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                            <div className="flex items-center gap-2 mt-2 bg-green-50 text-green-600 px-2 py-1 rounded text-xs w-fit font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                System Active
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Auto-Scaling",
        description: "Infrastructure that grows with you. We configure auto-scaling groups to handle traffic spikes effortlessly.",
        icon: Zap,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="relative w-full max-w-[240px] flex flex-col items-center gap-4">
                    <div className="w-full bg-white rounded-xl border border-slate-100 shadow-sm p-4">
                        <div className="flex justify-between items-end h-24 gap-2">
                            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: "20%" }}
                                    whileInView={{ height: `${h}%` }}
                                    transition={{ duration: 0.5, delay: i * 0.1 }}
                                    className="w-full bg-pink-100 rounded-t-sm relative group"
                                >
                                    <div className="absolute bottom-0 inset-x-0 bg-pink-500 rounded-t-sm transition-all duration-500" style={{ height: "40%" }} />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-white border border-pink-100 rounded-full shadow-sm text-xs font-medium text-pink-600">
                        <Zap className="w-3 h-3 fill-current" />
                        Scaling Up...
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Security & Compliance",
        description: "Enterprise-grade security with DDoS protection, WAF, and compliance monitoring (SOC2, HIPAA, GDPR).",
        icon: Shield,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="relative w-full max-w-[240px]">
                    <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-5 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                            <Shield className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-slate-900">Protection Active</div>
                            <div className="text-xs text-slate-500 mt-0.5">0 Threats Detected</div>
                        </div>
                        <div className="ml-auto">
                            <div className="w-2 h-2 rounded-full bg-green-500" />
                        </div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 bg-white rounded-lg border border-slate-100 shadow-lg p-2.5 flex items-center gap-2">
                        <Lock className="w-3 h-3 text-slate-400" />
                        <span className="text-xs font-medium text-slate-600">SOC2 Ready</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Global CDN",
        description: "Lightning-fast content delivery via our optimized CDN configurations, ensuring low latency worldwide.",
        icon: Globe,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="relative w-full max-w-[240px] h-32 flex items-center justify-center">
                    <div className="absolute inset-0 border border-dashed border-slate-200 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute inset-4 border border-dashed border-slate-200 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="w-12 h-12 bg-white rounded-full shadow-lg border border-pink-100 flex items-center justify-center z-10">
                        <Globe className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow-sm border border-slate-100 text-[10px] font-medium text-slate-500">
                        NYC
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white px-2 py-1 rounded shadow-sm border border-slate-100 text-[10px] font-medium text-slate-500">
                        LDN
                    </div>
                    <div className="absolute bottom-4 left-4 bg-white px-2 py-1 rounded shadow-sm border border-slate-100 text-[10px] font-medium text-slate-500">
                        TYO
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Database Clusters",
        description: "High-performance managed databases with automated backups, point-in-time recovery, and zero-downtime patching.",
        icon: Database,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="relative w-full max-w-[240px] flex flex-col gap-2">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                            <div className="flex items-center gap-3">
                                <Database className="w-4 h-4 text-pink-500" />
                                <div className="flex flex-col">
                                    <span className="text-xs font-bold text-slate-700">db-shard-0{i}</span>
                                    <span className="text-[10px] text-slate-400">10.0.0.{10 + i}</span>
                                </div>
                            </div>
                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        </div>
                    ))}
                </div>
            </div>
        )
    },
    {
        title: "Real-time Analytics",
        description: "Gain deep insights into your infrastructure performance with our built-in analytics dashboard and custom alerts.",
        icon: Activity,
        visual: (
            <div className="relative w-full h-full bg-slate-50 flex items-center justify-center p-6">
                <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-lg w-full max-w-[240px]">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-xs font-bold text-slate-600">Traffic</span>
                        <span className="text-xs font-medium text-green-600">+24.5%</span>
                    </div>
                    <div className="flex items-end gap-1 h-20">
                        {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90].map((h, i) => (
                            <div
                                key={i}
                                className="flex-1 bg-pink-100 rounded-t-sm hover:bg-pink-500 transition-colors"
                                style={{ height: `${h}%` }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        )
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-slate-50/50">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Everything You Need to <span className="text-gradient">Scale</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
                        Comprehensive cloud management services tailored for high-growth startups.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white hover:shadow-2xl hover:shadow-pink-500/5 transition-all duration-500 flex flex-col"
                        >
                            {/* Visual Container - Full Width, No Margin */}
                            <div className="h-64 w-full border-b border-slate-100 relative overflow-hidden group-hover:bg-pink-50/30 transition-colors duration-500">
                                <div className="absolute inset-0 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-500">
                                    {service.visual}
                                </div>
                            </div>

                            {/* Content Container - With Padding */}
                            <div className="p-8 md:p-10 flex flex-col gap-4 flex-1">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-slate-50 group-hover:bg-pink-50 transition-colors">
                                        <service.icon className="w-6 h-6 text-slate-400 group-hover:text-pink-600 transition-colors" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-slate-500 text-base leading-relaxed">
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
