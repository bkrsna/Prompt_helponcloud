"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Server, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={ref} className="relative pt-24 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-white min-h-[90vh] flex items-center">
            {/* Parallax Background Image */}
            <motion.div
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
                    style={{ backgroundImage: "url('/hero-bg.png')" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-white" />
            </motion.div>

            {/* Floating Elements - Figma-like decorations */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Drifting Clouds */}
                <FloatingCloud delay={0} duration={25} x="5%" y="10%" scale={0.6} opacity={0.8} />
                <FloatingCloud delay={5} duration={30} x="85%" y="15%" scale={0.8} opacity={0.7} />
                <FloatingCloud delay={2} duration={22} x="10%" y="60%" scale={0.5} opacity={0.6} />
                <FloatingCloud delay={8} duration={28} x="80%" y="70%" scale={0.7} opacity={0.8} />
                <FloatingCloud delay={12} duration={30} x="45%" y="85%" scale={0.4} opacity={0.5} />

                {/* Thunder Animation */}
                <ThunderIcon delay={3} x="15%" y="18%" scale={1} />
                <ThunderIcon delay={8} x="65%" y="28%" scale={0.8} />

                {/* Floating Icons */}
                <FloatingElement delay={0} x="15%" y="40%" icon={Server} color="text-pink-500" bg="bg-pink-100" />
                <FloatingElement delay={1} x="80%" y="35%" icon={Shield} color="text-purple-500" bg="bg-purple-100" />
                <FloatingElement delay={2} x="70%" y="75%" icon={Zap} color="text-orange-500" bg="bg-orange-100" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, type: "spring" }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-pink-200 mb-8 shadow-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-pink-500 animate-pulse" />
                        <span className="text-sm text-pink-900 font-medium">
                            Trusted by 500+ Startups
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                        className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6"
                    >
                        Manage Your Cloud <br />
                        <span className="text-gradient">Without the Chaos</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                        className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        We handle the infrastructure so you can focus on code.
                        Automated scaling, 24/7 security monitoring, and expert support for growing startups.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-pink-600 hover:bg-pink-500 text-white font-semibold text-base transition-all shadow-[0_4px_14px_0_rgba(219,39,119,0.39)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.23)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                        >
                            Start Free Trial
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            href="#demo"
                            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white text-slate-900 font-semibold text-base transition-all border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            Book a Demo
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-12 flex items-center justify-center gap-8 text-slate-500 text-sm"
                    >
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-pink-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-pink-500" />
                            <span>14-day free trial</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

function FloatingElement({ delay, x, y, icon: Icon, color, bg }: { delay: number, x: string, y: string, icon: any, color: string, bg: string }) {
    return (
        <motion.div
            className={`absolute p-4 rounded-2xl ${bg} shadow-lg backdrop-blur-sm border border-white/50`}
            style={{ left: x, top: y }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
            }}
            transition={{
                opacity: { duration: 0.5, delay },
                scale: { duration: 0.5, delay, type: "spring" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }
            }}
        >
            <Icon className={`w-6 h-6 ${color}`} />
        </motion.div>
    );
}

function FloatingCloud({ delay, duration, x, y, scale, opacity }: { delay: number, duration: number, x: string, y: string, scale: number, opacity: number }) {
    return (
        <motion.div
            className="absolute z-0 pointer-events-none"
            style={{ left: x, top: y, scale, opacity }}
            animate={{
                y: ["-20px", "20px", "-20px"],
                x: ["-10px", "10px", "-10px"],
            }}
            transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            }}
        >
            <Image
                src="/cloud_v2.svg"
                alt="Cloud"
                width={300}
                height={200}
                className="w-auto h-auto"
            />
        </motion.div>
    );
}

function ThunderIcon({ delay, x, y, scale }: { delay: number, x: string, y: string, scale: number }) {
    return (
        <motion.div
            className="absolute text-yellow-400 z-10"
            style={{ left: x, top: y, scale }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: [0, 1, 0, 1, 0],
            }}
            transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 5,
                delay: delay,
                ease: "easeInOut"
            }}
        >
            <Zap className="w-8 h-8 fill-current" />
        </motion.div>
    );
}
