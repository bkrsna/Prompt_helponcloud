"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "Do you support multi-cloud deployments?",
        answer: "Yes, we support AWS, Google Cloud, and Azure. We can also help you manage hybrid cloud environments or migrate from one provider to another.",
    },
    {
        question: "What happens if my site goes down?",
        answer: "Our automated monitoring systems detect issues instantly. For critical failures, our 24/7 engineering team is alerted immediately and will begin resolution within minutes, often before you even notice.",
    },
    {
        question: "Can I upgrade or downgrade my plan later?",
        answer: "Absolutely. You can scale your plan up or down at any time. Changes take effect immediately, and billing is prorated.",
    },
    {
        question: "Is there a long-term contract?",
        answer: "No, our monthly plans are pay-as-you-go. Yearly plans are billed upfront but offer a significant discount. You can cancel anytime.",
    },
    {
        question: "Do you handle security compliance?",
        answer: "Yes, our Enterprise plan includes custom compliance support for SOC2, HIPAA, and GDPR. All plans include standard security best practices and automated patching.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-pink-100/50 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 md:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-6">
                        <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse" />
                        <span className="text-xs font-medium text-slate-600">Support Center</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                        Frequently Asked <span className="text-gradient">Questions</span>
                    </h2>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        Everything you need to know about our managed cloud services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto grid gap-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className={`group rounded-2xl border transition-all duration-300 ${openIndex === index
                                ? "bg-white border-pink-200 shadow-lg shadow-pink-500/5"
                                : "bg-white border-slate-200 hover:border-pink-100 hover:bg-slate-50/50"
                                }`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                            >
                                <span className={`text-lg font-semibold transition-colors ${openIndex === index ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                                    }`}>
                                    {faq.question}
                                </span>
                                <div className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? "bg-pink-100 rotate-180" : "bg-slate-100 group-hover:bg-white"
                                    }`}>
                                    <ChevronDown className={`w-5 h-5 transition-colors ${openIndex === index ? "text-pink-600" : "text-slate-500"
                                        }`} />
                                </div>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 text-slate-600 leading-relaxed text-base">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* "Still have questions?" Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="max-w-3xl mx-auto mt-12 p-8 rounded-3xl bg-slate-900 text-white text-center relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h3 className="text-lg font-bold mb-2">Still have questions?</h3>
                            <p className="text-slate-400 text-sm">Can't find the answer you're looking for? Please chat to our friendly team.</p>
                        </div>
                        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-pink-50 transition-colors shrink-0 text-sm">
                            Get in touch
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
