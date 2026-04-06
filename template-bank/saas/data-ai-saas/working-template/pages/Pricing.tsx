"use client";

import React from 'react';
import { Check, ArrowRight, Zap, Target, Layers, Database, ShieldCheck, Globe, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "0",
    description: "Ideal for solo builders and early-stage projects requiring core structural clarity.",
    features: ["Standard data relations", "5 projects max", "API basic access", "Global search", "Community support"],
    cta: "Start Free",
    popular: false,
    icon: Zap
  },
  {
    name: "Premium",
    price: "49",
    description: "Optimized for high-velocity teams scaling their operations and data-driven decisions.",
    features: ["Infinite relationships", "Unlimited projects", "Advanced API / Webhooks", "Custom automation logic", "Priority email support", "Version archiving", "Team collaboration core"],
    cta: "Begin Trial",
    popular: true,
    icon: Layers
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Enterprise governance, advanced security, and dedicated infrastructure for global workflows.",
    features: ["SAML SSO & SCIM", "Full audit logging", "Granular governance controls", "Dedicated support manager", "Custom contract & SLA", "On-premise deployment logic", "Advanced team topology"],
    cta: "Contact Sales",
    popular: false,
    icon: ShieldCheck
  }
];

const faqs = [
  { q: "Is total data portability guaranteed?", a: "Always. Your data belongs to you. Export your entire workspace into a structured format (JSON/CSV) at any time without friction." },
  { q: "What security certifications do you maintain?", a: "We are SOC2 Type II and GDPR compliant. Security updates are deployed weekly to our global infrastructure." },
  { q: "Can we transition between plans instantly?", a: "Yes. You can upgrade or downgrade your workspace hierarchy at any time. Changes are reflected in real-time." },
  { q: "Do you offer localized pricing variants?", a: "We support global billing in major currencies. Enterprise contracts can be negotiated for regional compliance." }
];

export default function Pricing() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 lg:pt-48">
      {/* Pricing Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-48 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-8 relative z-10">
            <span className="text-xs font-bold text-emerald-500 tracking-[0.4em] uppercase font-mono">Tiered Intelligence Plans</span>
            <h1 className="text-5xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]">Scale with your <br/> <span className="text-emerald-400 italic">operational complexity.</span></h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">Choose the structural depth your workspace requires. Transparent, per-user pricing with no hidden friction.</p>
         </div>
      </section>

      {/* Pricing Grid (DNA-driven Panels) */}
      <section className="py-24 border-y border-white/5 bg-slate-900/40 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
             {plans.map((p) => (
                <div key={p.name} className={`relative p-10 lg:p-16 rounded-[4rem] border ${p.popular ? 'border-emerald-500/30 bg-slate-900 shadow-3xl shadow-emerald-500/5' : 'border-white/5 bg-slate-900/40'} flex flex-col group transition-all`}>
                   {p.popular && (
                     <div className="absolute top-10 right-10 px-3 py-1.5 rounded bg-emerald-500 text-[10px] font-extrabold text-slate-950 uppercase tracking-widest shadow-xl">Most Popular</div>
                   )}
                   
                   <div className="flex-1 space-y-12">
                      <div className="space-y-8">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.popular ? 'bg-emerald-500 text-slate-950 shadow-2xl shadow-emerald-500/20' : 'bg-slate-950 border border-white/10 text-slate-500'}`}>
                            <p.icon className="w-8 h-8" />
                         </div>
                         <div className="space-y-4">
                           <h2 className="text-3xl lg:text-4xl font-bold tracking-tighter text-white uppercase italic leading-none">{p.name}</h2>
                           <div className="flex items-baseline gap-2">
                             <span className="text-5xl lg:text-6xl font-bold tracking-tighter text-white">{p.price === "Custom" ? "" : "$"}{p.price}</span>
                             {p.price !== "Custom" && <span className="text-lg text-slate-500 font-medium">/mo</span>}
                           </div>
                         </div>
                         <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-widest">{p.description}</p>
                      </div>

                      <div className="space-y-6 pt-12 border-t border-white/5 pb-16">
                         <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-500">Includes</p>
                         <ul className="space-y-5">
                            {p.features.map(f => (
                               <li key={f} className="flex items-start gap-4 text-[10px] font-bold text-white/50 uppercase tracking-widest leading-relaxed group-hover:text-white transition-colors">
                                  <Check className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                                  {f}
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <button className={`w-full py-6 rounded-3xl font-extrabold text-[11px] tracking-widest uppercase transition-all hover:scale-105 active:scale-95 shadow-3xl ${p.popular ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400' : 'bg-white/5 border border-white/10 hover:border-white hover:bg-white text-white hover:text-slate-950'}`}>
                      {p.cta}
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Limits / Objections (FAQ) */}
      <section className="py-24 lg:py-48 px-4 bg-slate-950">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-32 space-y-6">
              <span className="text-sm font-bold text-indigo-400 tracking-[0.3em] uppercase font-mono">Objections & Scaling</span>
              <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white uppercase italic">Critical Questions <br/> For Data Teams.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
              {faqs.map((item, i) => (
                <div key={i} className="space-y-12 animate-in fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="flex items-start gap-6 group cursor-default">
                      <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-white/10 flex items-center justify-center text-indigo-500 flex-shrink-0 group-hover:scale-110 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-xl">
                        <HelpCircle className="w-6 h-6" />
                      </div>
                      <div className="space-y-6 flex-1">
                        <h3 className="text-xl lg:text-3xl font-bold tracking-tight text-white uppercase italic group-hover:text-emerald-400 transition-colors">{item.q}</h3>
                        <p className="text-slate-500 leading-[1.8] font-medium group-hover:text-slate-300 transition-colors pr-8">{item.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Conversions */}
      <section className="py-24 lg:py-48 text-center border-t border-white/5">
         <div className="container mx-auto max-w-4xl space-y-12 animate-in slide-in-from-bottom">
            <h2 className="text-4xl lg:text-8xl font-bold tracking-tight mb-8 text-white uppercase leading-none">Ready for <span className="text-emerald-400 italic">absolute visibility?</span></h2>
            <button className="px-12 py-6 rounded-3xl bg-white text-slate-950 font-bold text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
              Start Free Trial With Zero Data Hub
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
