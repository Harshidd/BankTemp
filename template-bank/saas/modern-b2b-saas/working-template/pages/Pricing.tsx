"use client";

import React from 'react';
import { Check, ArrowRight, Zap, Layers, Shield, HelpCircle } from 'lucide-react';

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
    price: "29",
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
    icon: Shield
  }
];

const faqItems = [
  { q: "Can we transition between plans instantly?", a: "Yes. You can upgrade or downgrade your workspace hierarchy at any time. Changes are reflected in real-time." },
  { q: "Do you offer localized pricing variants?", a: "We support global billing in major currencies. Enterprise contracts can be negotiated for regional compliance." },
  { q: "Is total data portability guaranteed?", a: "Always. Your data belongs to you. Export your entire workspace into a structured format at any time without friction." },
  { q: "What security certifications do you maintain?", a: "We are SOC2 Type II and GDPR compliant. Security updates are deployed weekly to our global infrastructure." }
];

export default function Pricing() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Pricing Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-white/5">
         <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Simple per-workspace <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">transparent tiering.</span></h1>
            <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed">Scaling your high-velocity team shouldn't be complex. Choose the structural depth your workspace requires.</p>
         </div>
      </section>

      {/* Grid-based Tiers */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch max-w-7xl mx-auto">
             {plans.map((p) => (
                <div key={p.name} className={`relative p-10 lg:p-16 rounded-[3.5rem] border ${p.popular ? 'border-blue-500 bg-white/5 shadow-2xl shadow-blue-500/10' : 'border-white/10 bg-transparent'} flex flex-col group transition-all`}>
                   {p.popular && (
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 rounded-full bg-blue-600 text-[10px] font-bold uppercase tracking-widest whitespace-nowrap shadow-xl">Most Popular</div>
                   )}
                   
                   <div className="flex-1 space-y-12">
                      <div className="space-y-6">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${p.popular ? 'bg-blue-600 text-white shadow-xl' : 'bg-white/5 border border-white/10 text-white/40'}`}>
                            <p.icon className="w-7 h-7" />
                         </div>
                         <h2 className="text-3xl lg:text-4xl font-bold tracking-tight uppercase leading-none">{p.name}</h2>
                         <div className="flex items-baseline gap-2">
                           <span className="text-5xl lg:text-6xl font-bold tracking-tighter">{p.price === "Custom" ? "" : "$"}{p.price}</span>
                           {p.price !== "Custom" && <span className="text-lg text-white/40 font-medium">/mo</span>}
                         </div>
                         <p className="text-sm font-bold text-white/40 leading-relaxed uppercase tracking-widest">{p.description}</p>
                      </div>

                      <div className="space-y-6 border-t border-white/10 pt-12 pb-12">
                         <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">Includes</p>
                         <ul className="space-y-5">
                            {p.features.map(f => (
                               <li key={f} className="flex items-start gap-4 text-xs font-bold text-white/70 uppercase tracking-widest leading-relaxed">
                                  <Check className="w-4 h-4 text-blue-400 mt-1 flex-shrink-0" />
                                  {f}
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <button className={`w-full py-5 rounded-[2rem] font-bold text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-105 active:scale-95 ${p.popular ? 'bg-white text-black' : 'border border-white/20 bg-transparent hover:bg-white hover:text-black opacity-60 hover:opacity-100'}`}>
                      {p.cta}
                   </button>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Comparison Preview Strip (Horizontal Grid-lite) */}
      <section className="py-24 px-4 bg-white/5 border-y border-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-16">
            <h3 className="text-3xl lg:text-5xl font-bold text-center tracking-tight mb-24">Precision Comparisons</h3>
            <div className="space-y-6">
               {['Custom Data Logic', 'Automated Workflows', 'Audit Integrity', 'Global Synchronization'].map(feature => (
                 <div key={feature} className="flex items-center justify-between py-6 border-b border-white/5 group hover:border-white/10 transition-colors">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">{feature}</span>
                    <div className="flex gap-16 lg:gap-32">
                       <span className="text-[9px] font-bold text-white/20 uppercase">Basic</span>
                       <span className="text-[9px] font-bold text-emerald-500 uppercase">Premium</span>
                       <span className="text-[9px] font-bold text-emerald-600 uppercase">Enterprise</span>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objections / FAQ */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="text-center mb-32">
              <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.3em] font-mono mb-8 block">FAQ / Clarification</span>
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">Billing & Scaling questions.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {faqItems.map((item, i) => (
                <div key={i} className="space-y-6 group cursor-default">
                   <div className="flex items-center gap-4 text-xs font-bold text-blue-500 uppercase tracking-widest">
                      <HelpCircle className="w-5 h-5 flex-shrink-0" /> {item.q}
                   </div>
                   <p className="text-white/40 leading-relaxed font-medium pl-9 group-hover:text-white/60 transition-colors">{item.a}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Final Conversions */}
      <section className="py-24 lg:py-48 px-4 text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-8xl font-bold tracking-tight mb-8">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">orchestrate clarity?</span></h2>
            <button className="px-16 py-6 rounded-full bg-white text-black font-bold text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              Get Started for Free
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
