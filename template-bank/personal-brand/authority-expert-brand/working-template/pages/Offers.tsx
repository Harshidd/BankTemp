"use client";

import React from 'react';
import { ArrowRight, Check, Zap, Users, ShieldCheck, Target } from 'lucide-react';

interface OffersProps {
  onNavigate: (page: string) => void;
}

const offers = [
  {
    id: 'advisory',
    type: 'Highest Impact',
    title: 'Advisory & Strategy',
    description: 'Direct access to my strategic thinking for founders, solo-operators, and leadership teams navigating growth or operational shifts.',
    features: [
      'Ongoing 1:1 strategy sessions',
      'Asynchronous support via Slack',
      'Process & systems audit',
      'Long-term outcome mapping'
    ],
    cta: 'Apply for Advisory',
    status: 'Limited Availability'
  },
  {
    id: 'cohort',
    type: 'Learning & Community',
    title: 'Advanced Cohort Program',
    description: 'A structured, high-intensity program designed to move a specific group of professionals from [A] to [B] in 8 weeks.',
    features: [
      'Live weekly workshop sessions',
      'Proven frameworks & playbooks',
      'Private alumni community',
      'Direct feedback loops'
    ],
    cta: 'Join the Waitlist',
    status: 'Registration Closed'
  },
  {
    id: 'intensive',
    type: 'Focused Transformation',
    title: 'Expert Deep-Dive',
    description: 'A high-impact 4-hour intensive designed to solve a single, specific structural or strategic bottleneck.',
    features: [
      'Pre-intensive audit',
      '4-hour concentrated focus',
      'Implementation roadmap',
      'Follow-up review session'
    ],
    cta: 'Book an Intensive',
    status: 'Open'
  }
];

export default function Offers({ onNavigate }: OffersProps) {
  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* Hero */}
      <section className="py-24 border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-mono">Work With Me</p>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-none">
            Move faster with clear, biased guidance.
          </h1>
          <p className="text-xl text-stone-500 leading-relaxed max-w-2xl mx-auto">
            I help people solve complex [Niche/Category] problems by offering the shortest path to better results. Choose the level of support that fits your current needs.
          </p>
        </div>
      </section>

      {/* Offers List */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offers.map((offer) => (
            <div 
              key={offer.id} 
              className="flex flex-col bg-white rounded-3xl border border-stone-200 p-10 hover:border-amber-400 transition-all group shadow-sm hover:shadow-xl relative overflow-hidden"
            >
              {offer.status !== 'Open' && (
                <div className="absolute top-0 right-0 p-4">
                  <span className="px-3 py-1 bg-stone-100 text-stone-400 text-[9px] font-black uppercase tracking-widest rounded-lg">
                    {offer.status}
                  </span>
                </div>
              )}
              
              <div className="space-y-6 flex-grow">
                 <div className="space-y-2">
                   <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">{offer.type}</p>
                   <h3 className="text-2xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors">{offer.title}</h3>
                 </div>
                 <p className="text-sm text-stone-500 leading-relaxed">{offer.description}</p>
                 
                 <ul className="space-y-4 pt-4 border-t border-stone-100">
                    {offer.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-amber-600 mt-1 flex-shrink-0" />
                        <span className="text-sm text-stone-700 font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              <div className="pt-10">
                <button 
                  onClick={() => onNavigate('contact')}
                  className={`w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-3 ${offer.status === 'Open' ? 'bg-stone-900 text-white hover:bg-amber-600' : 'bg-stone-100 text-stone-400 cursor-not-allowed border border-stone-200'}`}
                >
                  {offer.cta}
                  {offer.status === 'Open' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white border-y border-stone-200 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
               <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-mono">The Approach</p>
                  <h2 className="text-4xl font-bold text-stone-900">Experience distilled into a process.</h2>
                  <p className="text-lg text-stone-500 leading-relaxed max-w-lg">
                    I don't offer generic templates or one-size-fits-all prescriptions. Every engagement follows a structural logic focused on clarity and specificity.
                  </p>
               </div>
               
               <div className="space-y-8">
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <Target className="w-6 h-6 text-amber-700" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="font-bold text-lg text-stone-900">Diagnosis First</h4>
                        <p className="text-sm text-stone-500 leading-relaxed">We don't solve symptoms. We find the root bottleneck preventing your progress.</p>
                     </div>
                  </div>
                  <div className="flex gap-6">
                     <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-6 h-6 text-amber-700" />
                     </div>
                     <div className="space-y-2">
                        <h4 className="font-bold text-lg text-stone-900">Outcome-Led</h4>
                        <p className="text-sm text-stone-500 leading-relaxed">Success isn't "doing things." Success is achieving the specific outcome we set at the start.</p>
                     </div>
                  </div>
               </div>
            </div>
            
            <div className="relative">
               <div className="aspect-square rounded-[3rem] bg-stone-50 border border-stone-200 shadow-2xl flex items-center justify-center p-12">
                   <div className="text-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-amber-100 mx-auto flex items-center justify-center">
                         <Zap className="w-12 h-12 text-amber-700" />
                      </div>
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-stone-400">Structural Logic</p>
                      <p className="text-2xl font-bold italic tracking-tighter uppercase text-stone-900">"Clear thinking is rare. We find it together."</p>
                   </div>
               </div>
            </div>
        </div>
      </section>

      {/* Trust Quote */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-3xl mx-auto px-6 text-center space-y-12">
            <blockquote className="text-3xl lg:text-5xl font-bold text-stone-900 leading-[1.1] italic">
               "The best investment I've made this year. High signal, zero noise."
            </blockquote>
            <div className="flex items-center justify-center gap-4">
               <div className="w-12 h-12 rounded-full bg-stone-200" />
               <div className="text-left">
                  <p className="text-sm font-bold text-stone-950 uppercase tracking-widest">Client Name</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-amber-700">Founder, Company</p>
               </div>
            </div>
        </div>
      </section>
    </main>
  );
}
