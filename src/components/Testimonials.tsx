"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        image: "https://i.pravatar.cc/150?u=sarah",
        content: "HelpOnCloud has been a game changer for us. We reduced our AWS bill by 30% and haven't had a single downtime incident since switching.",
        stars: 5,
    },
    {
        name: "Michael Ross",
        role: "Founder of StartupX",
        image: "https://i.pravatar.cc/150?u=michael",
        content: "The peace of mind is worth every penny. I used to wake up at 3 AM to fix server issues. Now I sleep soundly knowing HelpOnCloud has it covered.",
        stars: 5,
    },
    {
        name: "Elena Rodriguez",
        role: "VP Engineering at ScaleUp",
        image: "https://i.pravatar.cc/150?u=elena",
        content: "Their support team is incredible. They don't just fix issues; they proactively suggest architectural improvements.",
        stars: 5,
    },
    {
        name: "David Park",
        role: "Lead Developer at DevCorp",
        image: "https://i.pravatar.cc/150?u=david",
        content: "The auto-scaling configuration was practically instant. We handled our viral launch traffic without breaking a sweat.",
        stars: 5,
    },
    {
        name: "Jennifer Wu",
        role: "Product Manager at Appify",
        image: "https://i.pravatar.cc/150?u=jennifer",
        content: "The analytics dashboard is beautiful and gives us exactly the insights we need to optimize our resource usage.",
        stars: 5,
    },
    {
        name: "James Wilson",
        role: "Indie Hacker",
        image: "https://i.pravatar.cc/150?u=james",
        content: "Best value for money in the market. Enterprise-grade features at a price point that makes sense for bootstrapped startups.",
        stars: 5,
    },
    {
        name: "Alex Thompson",
        role: "DevOps Lead at FinTech Solutions",
        image: "https://i.pravatar.cc/150?u=alex",
        content: "Security compliance was our biggest headache. HelpOnCloud's SOC2 ready infrastructure saved us months of work.",
        stars: 5,
    },
    {
        name: "Maria Garcia",
        role: "CTO at HealthPlus",
        image: "https://i.pravatar.cc/150?u=maria",
        content: "Finally, a cloud provider that speaks human. The documentation is clear, and the support is genuinely helpful.",
        stars: 5,
    },
    {
        name: "Robert Kim",
        role: "Engineering Manager at DataCo",
        image: "https://i.pravatar.cc/150?u=robert",
        content: "We migrated our entire database cluster in less than 4 hours with zero data loss. The migration tools are top-notch.",
        stars: 5,
    },
];

// Split testimonials into columns for the grid
const column1 = testimonials.slice(0, 3);
const column2 = testimonials.slice(3, 6);
const column3 = testimonials.slice(6, 9);

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow mb-6 break-inside-avoid">
            <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <p className="text-slate-700 mb-6 leading-relaxed text-base">
                "{testimonial.content}"
            </p>
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden shrink-0">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div>
                    <h4 className="text-slate-900 font-bold text-sm">{testimonial.name}</h4>
                    <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
            </div>
        </div>
    );
}

function TestimonialColumn({ testimonials, className, duration = 20 }: { testimonials: typeof column1, className?: string, duration?: number }) {
    return (
        <div className={cn("relative h-[800px] overflow-hidden", className)}>
            <motion.div
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                    duration: duration,
                    repeat: Infinity,
                    ease: "linear",
                    repeatType: "loop"
                }}
                className="flex flex-col"
            >
                {/* Duplicate items for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                    <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                ))}
            </motion.div>
        </div>
    );
}

export default function Testimonials() {
    return (
        <section id="reviews" className="py-24 bg-slate-50/50 overflow-hidden">
            <div className="container mx-auto px-6 md:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Loved by <span className="text-gradient">Founders & CTOs</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Don't just take our word for it. Here's what our customers have to say.
                    </p>
                </div>

                <div className="relative h-[800px] overflow-hidden">
                    {/* Gradient Masks for "Disappearing" effect */}
                    <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-slate-50 to-transparent z-10 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10 pointer-events-none" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TestimonialColumn testimonials={column1} duration={45} />
                        <TestimonialColumn testimonials={column2} duration={55} className="hidden md:block" />
                        <TestimonialColumn testimonials={column3} duration={50} className="hidden lg:block" />
                    </div>
                </div>
            </div>
        </section>
    );
}
