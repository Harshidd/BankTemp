"use client";

import React, { useState } from 'react';
import { Plus, Minus, ArrowRight } from 'lucide-react';

const faqs = [
  {
    question: "Who is the ideal client for your advisory services?",
    answer: "I work best with founders and solo-operators who have already reached initial traction ($500k+ ARR) and are now facing structural bottlenecks in their operations or strategy. I don't work with early-stage idea-only founders."
  },
  {
    question: "How long are the typical engagement periods?",
    answer: "Advisory engagements are typically quarterly (3 months) with a monthly renewal option. This ensures enough time to implement structural changes and see measurable outcomes."
  },
  {
    question: "Do you offer one-off consulting calls?",
    answer: "Only in the form of my 'Expert Deep-Dive' intensive. I find that 30-minute 'pick your brain' calls lack the context required for high-signal advice. The intensive ensures we both respect the complexity of the problem."
  },
  {
    question: "What is your specific area of expertise?",
    answer: "My focus is on [Niche/Category] systems and operational logic. I help high-performers transition from 'working harder' to 'working with more structural advantage'."
  },
  {
    question: "How do we get started?",
    answer: "The first step is a short inquiry form on the contact page. This helps me understand your context before we ever get on a call. If it's a fit, I'll propose a specific path forward."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      <section className="py-24 border-b border-stone-200 bg-stone-900 text-stone-50 overflow-hidden relative">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
         <div className="max-w-4xl mx-auto px-6 text-center space-y-8 relative z-10 animate-in slide-in-from-top duration-1000">
            <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono italic leading-none pt-1 group uppercase tracking-widest leading-none text-xs">Structural Clarity</p>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none italic group font-black tracking-tighter uppercase italic leading-none pt-1 group uppercase tracking-widest leading-none text-white italic group uppercase tracking-widest leading-none text-5xl">
               Frequently Asked Questions.
            </h1>
            <p className="text-xl text-stone-400 leading-relaxed max-w-2xl mx-auto italic font-bold tracking-widest text-stone-400 leading-relaxed">
               Clear questions deserve direct answers. If you don't see what you're looking for, feel free to reach out via the contact page.
            </p>
         </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
           {faqs.map((faq, idx) => (
              <div 
                key={idx} 
                className="group border border-stone-100 rounded-[2rem] bg-stone-50 overflow-hidden hover:border-amber-300 transition-all duration-500"
              >
                 <button 
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between gap-6 text-left"
                 >
                    <span className="text-xl font-bold text-stone-900 tracking-tight leading-tight group-hover:text-amber-700 transition-colors">{faq.question}</span>
                    <div className="w-10 h-10 rounded-full border border-stone-200 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-100 group-hover:border-amber-300 transition-all">
                       {openIndex === idx ? <Minus className="w-4 h-4 text-amber-700 font-black" /> : <Plus className="w-4 h-4 text-stone-400 font-black" />}
                    </div>
                 </button>
                 
                {openIndex === idx && (
                   <div className="px-8 pb-10 animate-in fade-in slide-in-from-top-4 duration-500">
                      <p className="text-stone-500 leading-relaxed italic font-bold tracking-widest text-stone-500 leading-relaxed">
                         {faq.answer}
                      </p>
                   </div>
                )}
              </div>
           ))}
        </div>
      </section>

      <section className="py-24 bg-stone-50">
         <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
            <div className="space-y-4">
               <h2 className="text-4xl font-bold text-stone-900 leading-tight">Still have questions?</h2>
               <p className="text-stone-500 text-lg leading-relaxed italic font-bold tracking-widest text-stone-500 leading-relaxed italic group">
                  My goal is to provide the highest signal-to-noise ratio in [Niche]. If your question is specific, I'll give you a specific answer.
               </p>
            </div>
            <button className="px-12 py-5 rounded-full border border-stone-200 bg-white text-stone-900 font-bold text-sm tracking-widest uppercase hover:bg-stone-900 hover:text-white transition-all shadow-xl group flex items-center justify-center gap-4 mx-auto">
               Go to Contact <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </main>
  );
}
