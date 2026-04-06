"use client";

import React from 'react';
import { Star, MessageSquare, Briefcase, Award, TrendingUp, Users } from 'lucide-react';

const clientSuccess = [
  {
    name: 'Sarah Chen',
    role: 'CEO, Nexus Collective',
    image: '',
    quote: 'The strategy we developed together didn\'t just increase revenue by 40%—it actually gave me my time back. We moved from chaotic execution to a calm, systems-led approach that scales without my direct intervention.',
    outcome: '+40% Revenue Growth'
  },
  {
    name: 'David Markley',
    role: 'Managing Partner, Iron Strategy',
    image: '',
    quote: 'Before working with [Your Name], our messaging was fragmented. We were competing on price. Now, we compete on specificity. We closed three high-ticket clients in the first 4 weeks using the new framework.',
    outcome: 'High-Ticket Transition'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Independent Consultant',
    image: '',
    quote: 'The advisory sessions are high-signal and zero-fluff. Every hour spent is a month saved in trial and error. If you are serious about building a category-of-one brand, this is the guidance you need.',
    outcome: 'Strategic Clarity'
  }
];

const logos = [
  { name: 'Company A' },
  { name: 'Company B' },
  { name: 'Company C' },
  { name: 'Company D' },
  { name: 'Company E' },
  { name: 'Company F' }
];

const transformationMetrics = [
  { icon: TrendingUp, label: 'Growth Acceleration', value: '3.5x' },
  { icon: Users, label: 'Global Audience Reach', value: '1M+' },
  { icon: Award, label: 'Industry Awards Won', value: '12+' },
  { icon: Briefcase, label: 'Client Success Rate', value: '98%' }
];

export default function Testimonials() {
  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* Hero */}
      <section className="py-24 border-b border-stone-200 bg-white overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8 animate-in slide-in-from-bottom duration-1000">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-mono italic">Proof of Work</p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-[0.9] italic group font-black tracking-tighter uppercase italic leading-none pt-1 group uppercase tracking-widest leading-none text-6xl">
            Success is a structural outcome.
          </h1>
          <p className="text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
            I don't believe in overclaiming. These are real results from real people who applied clear thinking to complex problems.
          </p>
        </div>
      </section>

      {/* Trust Logos Strip */}
      <section className="py-12 bg-white border-b border-stone-100 flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide px-6">
         <div className="max-w-6xl mx-auto flex items-center justify-between gap-12 w-full opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {logos.map((logo) => (
              <span key={logo.name} className="text-sm font-black uppercase tracking-[0.3em] text-stone-400 group-hover:text-stone-900 whitespace-nowrap">
                {logo.name}
              </span>
            ))}
         </div>
      </section>

      {/* High Impact Outcomes */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
           {clientSuccess.map((client, idx) => (
              <div key={idx} className="group relative bg-white border border-stone-200 rounded-[3rem] p-12 space-y-12 shadow-sm hover:shadow-2xl hover:border-amber-300 transition-all duration-700">
                 <div className="space-y-6">
                    <div className="flex gap-1 text-amber-500">
                       {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-500" />)}
                    </div>
                    <blockquote className="text-xl font-bold text-stone-900 leading-relaxed italic group-hover:text-stone-950 transition-colors">
                       "{client.quote}"
                    </blockquote>
                 </div>
                 
                 <div className="pt-8 border-t border-stone-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center font-black text-stone-400">
                          {client.name[0]}
                       </div>
                       <div className="text-left">
                          <p className="text-xs font-black uppercase tracking-widest text-stone-950">{client.name}</p>
                          <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">{client.role}</p>
                       </div>
                    </div>
                    <div className="flex flex-col items-end">
                       <p className="text-[9px] font-black uppercase tracking-widest text-amber-700 leading-none mb-1">Impact</p>
                       <p className="text-xs font-black text-stone-950 tracking-tight">{client.outcome}</p>
                    </div>
                 </div>
              </div>
           ))}
        </div>
      </section>

      {/* Hard Data Section */}
      <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden relative">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:100px_100px]" />
         <div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
             <div className="space-y-8">
                <div className="space-y-4">
                   <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono">The Numbers</p>
                   <h2 className="text-4xl lg:text-7xl font-bold text-white tracking-tighter leading-none italic group font-black tracking-tighter uppercase italic leading-none pt-1 text-white italic group uppercase tracking-widest leading-none text-5xl">Transformation is measurable.</h2>
                </div>
                <p className="text-lg text-stone-400 leading-relaxed max-w-lg italic font-bold tracking-widest text-stone-400 leading-relaxed">
                   I track outcome metrics because clarity requires evidence. My work is focused on creating structural shifts that show up on the balance sheet.
                </p>
             </div>
             
             <div className="grid grid-cols-2 gap-6">
                {transformationMetrics.map((item, idx) => (
                   <div key={idx} className="p-8 rounded-[2.5rem] bg-stone-950 border border-stone-800 space-y-4 hover:border-amber-400 transition-all group">
                      <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center group-hover:bg-amber-600 transition-colors duration-500">
                         <item.icon className="w-6 h-6 text-amber-400 group-hover:text-white transition-colors" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{item.label}</p>
                         <p className="text-3xl font-black text-white italic tracking-tighter">{item.value}</p>
                      </div>
                   </div>
                ))}
             </div>
         </div>
      </section>

      {/* CTA Layer */}
      <section className="py-24 bg-white border-t border-stone-200">
         <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
            <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center mx-auto text-amber-700 shadow-xl shadow-amber-600/20">
               <Star className="w-8 h-8 fill-amber-700" />
            </div>
            <div className="space-y-4">
               <h2 className="text-4xl lg:text-5xl font-bold text-stone-900 leading-tight">Your story is the next outcome.</h2>
               <p className="text-stone-500 text-lg leading-relaxed italic font-bold tracking-widest text-stone-500 leading-relaxed">
                  If your business is ready for a structural shift in performance, let's discuss a path forward. Clear guidance starts with a simple inquiry.
               </p>
            </div>
            <button className="px-12 py-5 rounded-full bg-stone-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-600 transition-all shadow-2xl">
               Start Your Inquiry
            </button>
         </div>
      </section>
    </main>
  );
}
