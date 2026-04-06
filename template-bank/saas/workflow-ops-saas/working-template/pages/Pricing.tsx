"use client";

import React from 'react';
import { Check, ArrowRight, Zap, Target, Layers, Database, ShieldCheck, Globe, HelpCircle, Repeat, Settings } from 'lucide-react';

const plans = [
  {
    name: "Base Control",
    price: "0",
    description: "Ideal for solo builders and early-stage projects requiring core structural clarity. Zero cost to start.",
    features: ["Standard process relations", "10 shared workflows max", "API basic access", "Global execution search", "Standard auditing"],
    cta: "Start Free",
    popular: false,
    icon: Zap
  },
  {
    name: "Team Orchestration",
    price: "79",
    description: "Optimized for high-velocity teams scaling their operations and cross-functional coordination.",
    features: ["Infinite relationships", "Unlimited workflows", "Advanced API / Webhooks", "Custom orchestration logic", "Priority email support", "Version history archiving", "Contextual collaboration hub"],
    cta: "Begin Execution",
    popular: true,
    icon: Layers
  },
  {
    name: "Enterprise Admin",
    price: "Custom",
    description: "Enterprise governance, advanced security, and dedicated infrastructure for global operational workflows.",
    features: ["SAML SSO & SCIM", "Full audit observability", "Granular governance controls", "Dedicated support manager", "Custom contract & SLA", "On-premise deployment logic", "Advanced team topology"],
    cta: "Contact Ops",
    popular: false,
    icon: ShieldCheck
  }
];

const faqs = [
  { q: "Is total process portability guaranteed?", a: "Always. Your data belongs to you. Export your entire workspace into a structured format (JSON/CSV) at any time without friction or vendor lock-in." },
  { q: "What security certifications do you maintain?", a: "We are SOC2 Type II and GDPR compliant. Security updates are deployed weekly to our global infrastructure with zero-latency handoffs." },
  { q: "Can we transition between plans instantly?", a: "Yes. You can upgrade or downgrade your operational hierarchy at any time. Changes are reflected in real-time across all team members." },
  { q: "Do you offer localized pricing variants?", a: "We support global billing in major currencies. Enterprise contracts can be negotiated for regional compliance protocols." }
];

export default function Pricing() {
  return (
    <div className="bg-white text-slate-950 min-h-screen pt-32 lg:pt-56">
      {/* Pricing Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center relative overflow-hidden animate-in fade-in duration-1000">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-amber-500/5 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-10 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Tiered Execution Plans</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02] duration-700">Scale with your <br/> <span className="text-amber-500 italic underline decoration-slate-950/10 decoration-8">operational flux.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed font-black max-w-3xl mx-auto group-hover:text-slate-950 transition-colors">Choose the structural depth your coordination requires. Transparent, usage-centric pricing with no hidden friction.</p>
         </div>
      </section>

      {/* Pricing Grid (DNA-driven Panels) */}
      <section className="py-24 lg:py-56 border-y border-slate-950/5 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#00000003_1px,transparent_1px),linear-gradient(to_bottom,#00000003_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-stretch max-w-7xl mx-auto">
             {plans.map((p, i) => (
                <div key={p.name} className={`relative p-12 lg:p-20 rounded-[5rem] border ${p.popular ? 'border-amber-500 bg-white shadow-3xl shadow-amber-500/10 scale-105' : 'border-slate-950/5 bg-white shadow-3xl'} flex flex-col group transition-all duration-700 hover:-translate-y-4`} style={{ animationDelay: `${i * 150}ms` }}>
                   {p.popular && (
                     <div className="absolute top-12 right-12 px-5 py-2 rounded-full bg-slate-950 text-[10px] font-black text-white uppercase tracking-[0.3em] shadow-2xl animate-pulse">Most Popular</div>
                   )}
                   
                   <div className="flex-1 space-y-16">
                      <div className="space-y-10">
                         <div className={`w-20 h-20 rounded-3xl flex items-center justify-center shadow-xl ${p.popular ? 'bg-amber-500 text-white rotate-6' : 'bg-slate-50 border border-slate-100 text-slate-950'}`}>
                            <p.icon className="w-10 h-10" />
                         </div>
                         <div className="space-y-4">
                           <h2 className="text-3xl lg:text-5xl font-black tracking-tighter text-slate-950 uppercase italic leading-none">{p.name}</h2>
                           <div className="flex items-baseline gap-2">
                             <span className="text-5xl lg:text-7xl font-black tracking-tighter text-slate-950 leading-none">{p.price === "Custom" ? "" : "$"}{p.price}</span>
                             {p.price !== "Custom" && <span className="text-xl text-slate-400 font-black uppercase tracking-widest">/mo</span>}
                           </div>
                         </div>
                         <p className="text-sm font-black text-slate-500 leading-relaxed uppercase tracking-widest group-hover:text-slate-950 transition-colors">{p.description}</p>
                      </div>

                      <div className="space-y-8 pt-12 border-t border-slate-100 group-hover:border-amber-500/20 pb-16">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-500">Includes</p>
                         <ul className="space-y-6">
                            {p.features.map(f => (
                               <li key={f} className="flex items-start gap-5 text-[11px] font-black text-slate-500 uppercase tracking-widest leading-none group-hover:text-slate-950 transition-colors">
                                  <Check className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                  {f}
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <button className={`w-full py-8 rounded-[2.5rem] font-black text-[12px] tracking-[0.3em] uppercase transition-all hover:scale-105 active:scale-95 shadow-3xl ${p.popular ? 'bg-slate-950 text-white hover:bg-slate-800' : 'bg-slate-50 border border-slate-100 hover:bg-slate-950 text-slate-950 hover:text-white'}`}>
                      {p.cta}
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Objections (Execution Specific) */}
      <section className="py-24 lg:py-56 px-4 bg-white relative">
        <div className="container mx-auto max-w-6xl">
           <div className="flex flex-col lg:flex-row items-center justify-between mb-32 lg:mb-48 gap-12">
              <div className="space-y-8 text-center lg:text-left">
                <span className="text-[10px] font-black text-amber-500 tracking-[0.3em] uppercase font-mono">Objections & Protocols</span>
                <h2 className="text-4xl lg:text-8xl font-black tracking-tighter text-slate-950 uppercase italic leading-[0.9]">Critical Execution <br/> Questions.</h2>
              </div>
              <button className="px-12 py-6 rounded-3xl bg-slate-50 border border-slate-100 font-black text-xs uppercase tracking-widest hover:bg-slate-950 hover:text-white transition-all group">
                Download Terms <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1" />
              </button>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
              {faqs.map((item, i) => (
                <div key={i} className="space-y-10 group cursor-default transition-all p-8 lg:p-12 hover:bg-slate-50 rounded-[3rem] animate-in fade-in" style={{ animationDelay: `${i * 150}ms` }}>
                   <div className="flex items-start gap-8">
                      <div className="w-16 h-16 rounded-3xl bg-white border border-slate-100 flex items-center justify-center text-amber-500 flex-shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-2xl">
                        <HelpCircle className="w-8 h-8" />
                      </div>
                      <div className="space-y-8 flex-1">
                        <h3 className="text-xl lg:text-3xl font-black tracking-tight text-slate-950 uppercase italic group-hover:text-amber-500 transition-colors leading-[1.1]">{item.q}</h3>
                        <p className="text-slate-500 leading-relaxed font-black group-hover:text-slate-950 transition-colors pr-8 text-lg">{item.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Conversions */}
      <section className="py-24 lg:py-56 text-center border-t border-slate-950/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[800px] h-[300px] bg-slate-50/50 -z-10 skew-x-[15deg] translate-x-1/2" />
         <div className="container mx-auto max-w-5xl space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter mb-8 text-slate-950 uppercase leading-none italic group hover:scale-[1.02] transition-transform">Ready for <br/> <span className="text-amber-500 underline decoration-slate-950/5 duration-700">structural logic?</span></h2>
            <button className="px-16 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
               Book Operating Review
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-2 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
