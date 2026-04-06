"use client";

import React from 'react';
import { Check, ArrowRight, Zap, Target, Layers, Database, ShieldCheck, Globe, HelpCircle, Repeat, Settings, Sparkles, Brain, Code } from 'lucide-react';

const plans = [
  {
    name: "Standard Learning",
    price: "0",
    description: "Start your mastery journey with core interactive subjects and basic progress tracking. Zero cost, no commitment.",
    features: ["Access to 3 foundational subjects", "Interactive lessons (first 05/ea)", "Standard community support", "Basic structural feedback", "Mobile & Web dashboard access"],
    cta: "Start Learning Free",
    popular: false,
    icon: Zap
  },
  {
    name: "Premium Mastery",
    price: "19",
    description: "Unlock the full potential of interactive learning with unlimited access and advanced structural diagnostic tools.",
    features: ["Unlimited access to all subjects", "Advanced mastery-tracking logs", "Priority technical support", "Sub-millisecond feedback loop", "Exclusive deep-dive subjects", "Verifiable structural certificates", "Offline subject access"],
    cta: "Begin Premium Mastery",
    popular: true,
    icon: Sparkles
  },
  {
    name: "Institutional Sync",
    price: "Custom",
    description: "For schools, academies, and large organizations requiring centralized classroom orchestrations.",
    features: ["Educator portal & dashboard", "Student performance analytics", "Institutional SSO & SCIM", "Dedicated academic manager", "Custom curriculum structural blocks", "Private community servers", "High-velocity team support"],
    cta: "Academic Review",
    popular: false,
    icon: Globe
  }
];

const pricingFaqs = [
  { q: "Is individual plan portability guaranteed?", a: "Yes. Your mastery data and structural logs are permanent. You can transition between plans without losing any progress ever." },
  { q: "Do you offer localized pricing for Turkey?", a: "We support global payment processing. Strategic regional pricing is available for qualifying educational institutions and future school variants." },
  { q: "What security and governance standards apply?", a: "We are SOC2 Type II and GDPR compliant. Student data integrity is our primary structural protocol. All learning logs are encrypted e2e." },
  { q: "Can we cancel a premium plan at any cycle?", a: "Always. There are no locking protocols. You can return to a standard learning path at any time without administrative friction." }
];

export default function Pricing() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* Pricing Hero (Structural Commitment) */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center relative overflow-hidden animate-in fade-in duration-1000">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/50 rounded-full blur-[150px] -z-10 translate-x-1/2" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Structural Commitment Hub</span>
            <h1 className="text-5xl lg:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.05] duration-700">Plans for every <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">learning cycle.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-black transition-colors group-hover:text-slate-900">Choose the structural depth your mastery requires. Transparent, education-first pricing with zero friction.</p>
         </div>
      </section>

      {/* Pricing Grid (DNA-driven Cards) */}
      <section className="py-24 lg:py-56 border-y border-blue-50 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white skew-x-[45deg] -z-10 translate-x-1/2 shadow-xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch max-w-7xl mx-auto">
             {plans.map((p, i) => (
                <div key={p.name} className={`p-12 lg:p-20 rounded-[5rem] border ${p.popular ? 'border-blue-600 bg-white shadow-3xl shadow-blue-500/10 scale-105' : 'border-blue-100 bg-white shadow-3xl'} flex flex-col group transition-all duration-700 hover:-translate-y-6 animate-in slide-in-from-bottom relative`} style={{ animationDelay: `${i * 150}ms` }}>
                   {p.popular && (
                     <div className="absolute top-12 right-12 px-6 py-2.5 rounded-full bg-blue-600 text-white font-black text-[9px] uppercase tracking-widest shadow-2xl animate-pulse">Mastery Choice</div>
                   )}
                   
                   <div className="flex-1 space-y-16">
                      <div className="space-y-12">
                         <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl ${p.popular ? 'bg-blue-600 text-white rotate-6' : 'bg-slate-50 border border-blue-50 text-blue-600'}`}>
                            <p.icon className="w-10 h-10" />
                         </div>
                         <div className="space-y-4">
                           <h3 className="text-2xl lg:text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{p.name}</h3>
                           <div className="flex items-baseline gap-2">
                             <span className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">{p.price === "Custom" ? "" : "$"}{p.price}</span>
                             {p.price !== "Custom" && <span className="text-xl text-slate-400 font-bold uppercase tracking-widest">/mo</span>}
                           </div>
                         </div>
                         <p className="text-lg text-slate-500 font-bold leading-relaxed group-hover:text-slate-900 transition-colors">{p.description}</p>
                      </div>

                      <div className="space-y-8 pt-12 border-t border-slate-100 group-hover:border-blue-500/20 pb-16">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600">Learning Protocols</p>
                         <ul className="space-y-6">
                            {p.features.map(f => (
                               <li key={f} className="flex items-start gap-5 text-[11px] font-black text-slate-400 uppercase tracking-widest leading-none group-hover:text-slate-900 transition-colors">
                                  <Check className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                  {f}
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <button className={`w-full py-8 rounded-[2.5rem] font-black text-[11px] uppercase tracking-[0.2em] shadow-3xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center gap-4 group/btn ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-slate-900 text-white hover:bg-blue-600'}`}>
                      {p.cta}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Objections (Structural Support) */}
      <section className="py-24 lg:py-56 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col lg:flex-row items-center justify-between mb-32 lg:mb-48 gap-12">
              <div className="space-y-8 text-center lg:text-left">
                <span className="text-[10px] font-black text-blue-600 tracking-[0.3em] uppercase font-mono">Engagement Protocol FAQ</span>
                <h2 className="text-4xl lg:text-8xl font-black text-slate-900 uppercase italic leading-[0.9] tracking-tighter transition-all hover:scale-105 duration-700">Mastery <br/> <span className="text-blue-600 italic">Clarification.</span></h2>
              </div>
              <button className="px-12 py-6 rounded-3xl bg-blue-50 border-4 border-blue-100 text-blue-600 font-black text-xs uppercase tracking-widest transition-all hover:bg-slate-950 hover:text-white hover:border-slate-950 shadow-xl group">
                Full Academy FAQ <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-2 transition-transform" />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {pricingFaqs.map((item, i) => (
                <div key={i} className="space-y-10 group cursor-default transition-all p-12 lg:p-16 hover:bg-slate-50 rounded-[4rem] border border-blue-50 hover:border-blue-100 shadow-xl hover:-translate-y-4 duration-700" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="flex items-start gap-8">
                      <div className="w-16 h-16 rounded-3xl bg-white border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl">
                        <HelpCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-8 flex-1">
                        <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-slate-900 group-hover:text-blue-600 uppercase italic leading-[1.1] transition-colors">{item.q}</h3>
                        <p className="text-lg text-slate-500 font-bold leading-relaxed group-hover:text-slate-900 transition-colors pr-8">{item.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Path Conversions */}
      <section className="py-24 lg:py-64 text-center border-t border-blue-50 bg-white relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[400px] bg-blue-50/20 -z-10 blur-[200px] animate-pulse" />
         <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 uppercase italic leading-none transition-all group hover:scale-[1.02]">Start your <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">learning cycle.</span></h2>
            <button className="px-20 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
               Unlock Full Academy access
               <Sparkles className="w-5 h-5 inline-block ml-6 group-hover:rotate-12 group-hover:scale-125 transition-transform fill-white" />
            </button>
         </div>
      </section>
    </div>
  );
}
