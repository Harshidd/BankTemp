"use client";

import React from 'react';
import { Settings, Zap, Shield, Key, FilePlus, ArrowRight, CheckCircle2 } from 'lucide-react';

const expandedServices = [
  { 
    id: "maintenance",
    icon: Settings, 
    name: "Regular Maintenance", 
    description: "Proactive care for your home or business systems. We identify potential failures before they happen, saving you time and money.",
    features: ["Bi-annual inspections", "Parts replacement", "Efficiency tuning", "Maintenance reporting"]
  },
  { 
    id: "emergency",
    icon: Zap, 
    name: "Emergency Repairs", 
    description: "Available 24/7 for urgent calls. We prioritize emergency situations to restore your essential services within 60 minutes.",
    features: ["Rapid response fleet", "Night & Weekend support", "Fully equipped mobile units", "Upfront emergency pricing"]
  },
  { 
    id: "safety",
    icon: Shield, 
    name: "Safety & Compliance", 
    description: "Ensuring your residential or commercial property meets all local safety codes and regulations without compromise.",
    features: ["Code violation repair", "Safety certifications", "Hazard identification", "System auditing"]
  },
  { 
    id: "projects",
    icon: Key, 
    name: "Major Installations", 
    description: "From design to final sign-off, we handle your large-scale installations with expert engineering and professional management.",
    features: ["Free project estimates", "Vendor coordination", "Precision installation", "Post-install support"]
  }
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Services Hero */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="container mx-auto px-4 text-center">
           <span className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-8 block">What We Offer</span>
           <h1 className="text-4xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">Complete local <br/> <span className="text-blue-500 italic underline decoration-white/10 decoration-4">solutions.</span></h1>
           <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium">Professional grade services tailored for your specific [Niche] needs in [City/Region].</p>
        </div>
      </section>

      {/* Main Services Detailed Grid */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto">
          <div className="space-y-32">
            {expandedServices.map((s, i) => (
              <div key={s.id} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                 <div className="flex-1 space-y-12">
                    <div className="space-y-6">
                       <div className="w-16 h-16 rounded-2xl bg-blue-600/10 flex items-center justify-center text-blue-600 mb-8 border border-blue-600/5 shadow-xl shadow-blue-500/5">
                          <s.icon className="w-8 h-8" />
                       </div>
                       <h2 className="text-3xl lg:text-6xl font-extrabold tracking-tight text-slate-950 uppercase tracking-widest leading-none">{s.name}</h2>
                       <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium">{s.description}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pb-12 border-b border-slate-950/5">
                       {s.features.map(f => (
                         <div key={f} className="flex items-center gap-3 text-slate-950 font-bold uppercase tracking-widest text-[10px] group cursor-default">
                           <CheckCircle2 className="w-4 h-4 text-emerald-500 group-hover:scale-125 transition-transform" />
                           {f}
                         </div>
                       ))}
                    </div>

                    <div className="flex items-center gap-4">
                       <button className="px-8 py-3 rounded-xl border border-slate-950/10 bg-slate-50 hover:bg-slate-950 hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                          Get a Quote
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                 </div>

                 <div className="flex-1 w-full bg-slate-50 rounded-[3rem] aspect-square relative overflow-hidden shadow-2xl border border-slate-950/5 group">
                    <div className="absolute inset-0 bg-blue-600/5 rotate-12 translate-x-12 translate-y-12 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                       <s.icon className="w-32 h-32 text-slate-950/20 group-hover:text-blue-600 group-hover:scale-110 transition-transform" />
                    </div>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty FAQ/Notice Strip */}
      <section className="py-24 bg-slate-50 border-y border-slate-950/5 text-center">
         <div className="container mx-auto px-4 max-w-3xl">
            <h3 className="text-2xl font-extrabold text-slate-950 mb-6 uppercase tracking-widest">Pricing Structure</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-12">We believe in transparent, upfront pricing with zero hidden fees. Each job is scoped professionally before work begins.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
               <div className="p-8 rounded-2xl bg-white border border-slate-950/5 shadow-xl">
                  <h4 className="font-bold text-slate-950 mb-2 underline decoration-blue-600/20 decoration-2">Flat Rate Services</h4>
                  <p className="text-slate-500 text-sm italic">For common repairs and maintenance tasks within our standard coverage area.</p>
               </div>
               <div className="p-8 rounded-2xl bg-white border border-slate-950/5 shadow-xl">
                  <h4 className="font-bold text-slate-950 mb-2 underline decoration-blue-600/20 decoration-2">Custom Estimates</h4>
                  <p className="text-slate-500 text-sm italic">For large projects, system installations, and complex service requirements.</p>
               </div>
            </div>
         </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-48 px-4 bg-white text-center">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[0.95]">Let's coordinate your <span className="text-blue-600">service.</span></h2>
            <button className="px-12 py-5 rounded-2xl bg-slate-950 hover:bg-blue-600 text-white font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95 group">
              Start Your Quote
              <ArrowRight className="w-5 h-5 inline-block ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
