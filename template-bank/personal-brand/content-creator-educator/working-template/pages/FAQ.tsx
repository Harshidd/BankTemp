"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, MessageCircle } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function FAQ({ onNavigate }: PageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Are the courses suitable for beginners?",
      answer: "Yes. Most of my programs are built with a 'bottom-up' approach. We start with the fundamental mental models and systems before moving into advanced scaling tactics. Each course specifies the required experience level."
    },
    {
      question: "How long do I have access to the products?",
      answer: "Lifetime access. Once you purchase a course or template, it's yours forever, including all future updates to that specific version of the product."
    },
    {
      question: "Is there a community component?",
      answer: "The 'Creator Circle' is our primary community hub. Some courses include a dedicated cohort-based channel, while templates are generally self-paced with email support."
    },
    {
      question: "Can I get a refund if it's not a fit?",
      answer: "I offer a 30-day 'No Questions Asked' money-back guarantee on all digital products. If you feel you didn't get the value you expected, just send me an email."
    },
    {
      question: "Do you offer 1-on-1 coaching?",
      answer: "I offer limited 1-on-1 advisory spots for established creators. You can find the application for this on the 'Contact' page under 'Advisory & Consulting'."
    },
    {
      question: "What tools do I need to get started?",
      answer: "I'm a big believer in low-friction starts. Most of my systems work with free tools like Notion, ConvertKit (free tier), and basic social media platforms. I'll show you exactly how to set them up."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase italic underline decoration-emerald-100 underline-offset-8">Common <span className="text-emerald-600">Questions</span></h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about the products, the community, and how we can work together.
          </p>
        </div>
      </section>

      <section className="px-6 mb-32">
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-2 border-slate-50 rounded-3xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-900 text-lg uppercase italic tracking-tight">{faq.question}</span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-emerald-600 text-white rotate-180' : 'bg-slate-100 text-slate-400'}`}>
                  {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              {openIndex === idx && (
                <div className="px-8 pb-8 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300 font-medium">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Didn't find answer? */}
      <section className="px-6">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-2xl rounded-full"></div>
           <HelpCircle size={40} className="mx-auto text-emerald-500 mb-6" />
           <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase italic">Still have questions?</h2>
           <p className="text-slate-400 mb-10 max-w-lg mx-auto font-medium">
             If you couldn&apos;t find what you were looking for, feel free to reach out directly. I&apos;m here to help.
           </p>
           <button 
             onClick={() => onNavigate('contact')}
             className="px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-emerald-50 transition-all flex items-center justify-center gap-3 mx-auto active:scale-95 shadow-xl"
           >
             Message Me Directly <MessageCircle size={18} />
           </button>
        </div>
      </section>
    </div>
  );
}
