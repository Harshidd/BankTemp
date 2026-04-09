"use client";

import React, { useState } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What exactly is AIFeature?",
      answer: "AIFeature is a focused intelligence engine designed to be embedded into your existing software workflows. It automates high-leverage tasks like data extraction, sentiment analysis, and workflow orchestration with zero latency."
    },
    {
      question: "Is my data used for training public models?",
      answer: "No. Enterprise privacy is our core pillar. We use a zero-retention policy for your data unless you explicitly opt-in to custom training for your private, isolated instance."
    },
    {
      question: "How does the pricing credit system work?",
      answer: "Each 'credit' represents one standard AI generation or complex analysis. Professional plans include unlimited credits for standard usage, while individual plans have a fixed monthly cap."
    },
    {
      question: "Can I integrate this with existing tools like Slack or Linear?",
      answer: "Yes. Our API-first architecture includes pre-built connectors for over 50+ popular productivity tools. You can also build custom webhooks for proprietary internal systems."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Individual users get community and email support. Professional and Team plans include priority support with guaranteed response times under 4 hours."
    },
    {
      question: "Is there a free trial for the Professional plan?",
      answer: "Yes, we offer a 14-day full-access trial for the Professional plan. No credit card is required to start exploring."
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-white py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8 uppercase tracking-tighter">
            Questions & <span className="text-indigo-600">Answers</span>
          </h1>
          <div className="mx-auto max-w-xl relative">
            <input 
              type="text" 
              placeholder="Search for a topic..." 
              className="w-full rounded-2xl border border-slate-100 bg-slate-50 px-6 py-4 pl-14 text-sm focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/5 transition-all shadow-xl shadow-indigo-900/5"
            />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
           <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`rounded-3xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? "bg-white border-indigo-600/20 shadow-xl" 
                      : "bg-white/50 border-slate-100 hover:bg-white"
                  }`}
                >
                  <button 
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                  >
                    <span className={`font-bold transition-colors ${openIndex === index ? "text-indigo-600" : "text-slate-900"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                       openIndex === index ? "bg-indigo-600 text-white rotate-180" : "bg-slate-100 text-slate-400"
                    }`}>
                       {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 pb-8 lg:px-8 lg:pb-10 animate-in fade-in slide-in-from-top-2 duration-300">
                       <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-50 pt-6">
                         {faq.answer}
                       </p>
                    </div>
                  )}
                </div>
              ))}
           </div>

           {/* Still have questions? */}
           <div className="mt-20 p-10 rounded-[2.5rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-bold mb-4 relative z-10">Still have questions?</h3>
              <p className="text-slate-400 text-sm mb-8 relative z-10">We're here to help you get the most out of AIFeature.</p>
              <button className="relative z-10 px-8 py-3 rounded-xl bg-indigo-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-indigo-700 transition-all">
                Contact Support
              </button>
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-[60px] rounded-full" />
           </div>
        </div>
      </section>
    </div>
  );
}
