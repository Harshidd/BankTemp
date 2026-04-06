"use client";

import React from 'react';
import { HelpCircle, ArrowRight, ShieldCheck, Layers, Zap, Globe, MessageCircle, Database, Search } from 'lucide-react';

const categories = [
  { id: "product", name: "System Core", icon: Zap },
  { id: "integration", name: "Data Connectors", icon: Database },
  { id: "security", name: "Security & Ops", icon: ShieldCheck },
  { id: "general", name: "Global Billing", icon: Globe }
];

const faqs = [
  {
    category: "product",
    q: "How does the autonomous ML correlator handle fragmented data?",
    a: "Our core engine is built on a vector-native normalization layer. All ingested data is converted into a high-dimensional structural representation, allowing the ML correlator to identify patterns across disparate sources (e.g., correlating SQL logs with GraphQL API shifts) in sub-millisecond cycles."
  },
  {
    category: "integration",
    q: "What is the typical setup cycle for a custom data source?",
    a: "Standard natively supported sources (Snowflake, BigQuery, AWS) can be connected in < 5 minutes. Custom REST/GraphQL APIs can be onboarded through our automated endpoint mapping tool in less than 30 minutes with zero-code requirements."
  },
  {
    category: "security",
    q: "Do you support on-premise or sovereign cloud deployments?",
    a: "For Enterprise customers with strict regional data requirements, we offer a containerized deployment package that can run in any private VPC or sovereign infrastructure, while maintaining managed orchestration logic from our core control plane."
  },
  {
    category: "general",
    q: "Is total data portability guaranteed for Enterprise tiers?",
    a: "Yes. Your data belongs to you. Export your entire workspace, including normalized intelligence logs, into a structured JSON or CSV format at any time without friction or vendor lock-in."
  }
];

export default function FAQ() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen pt-32 lg:pt-48">
      {/* FAQ Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-48 text-center relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none opacity-40" />
         <div className="space-y-8 relative z-10">
            <span className="text-xs font-bold text-indigo-400 tracking-[0.4em] uppercase font-mono">Structural Help</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none italic uppercase leading-[1.05]">Clarity for your <br/> <span className="text-emerald-400">most critical questions.</span></h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl mx-auto">Explore the technical, architectural, and operational details that define the [Product] ecosystem.</p>
         </div>
      </section>

      {/* Category Nav Strip (Data Variant) */}
      <section className="py-12 border-b border-white/5 bg-slate-900/60 sticky top-[80px] z-[40] backdrop-blur-xl">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
           {categories.map(c => (
              <button key={c.id} className="flex items-center gap-4 px-6 py-4 rounded-2xl border border-white/5 hover:border-emerald-500/20 hover:bg-emerald-500/5 transition-all group">
                 <c.icon className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 shadow-xl" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white transition-colors">{c.name}</span>
              </button>
           ))}
        </div>
      </section>

      {/* FAQ Grid (Panel Boxes) */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="grid grid-cols-1 gap-12 lg:gap-24">
              {faqs.map((f, i) => (
                <div key={i} className="group cursor-default space-y-12 animate-in fade-in slide-in-from-bottom duration-700 bg-slate-900 p-12 lg:p-20 rounded-[4rem] border border-white/5 hover:border-emerald-500/20 transition-all shadow-3xl" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="flex items-start gap-10">
                      <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-2xl group-hover:-rotate-3">
                         <HelpCircle className="w-8 h-8" />
                      </div>
                      <div className="flex-1 space-y-8">
                         <div className="space-y-4">
                           <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-[0.3em] font-mono leading-none">{f.category} — intelligence logic</span>
                           <h3 className="text-2xl lg:text-4xl font-bold tracking-tight text-white uppercase italic leading-none group-hover:text-emerald-400 transition-colors">{f.q}</h3>
                         </div>
                         <p className="text-lg text-slate-500 leading-[1.8] font-medium max-w-3xl pr-8 group-hover:text-slate-300 transition-colors">{f.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Docs-lite Hub (Industrial) */}
      <section className="py-24 lg:py-48 bg-slate-900 border-y border-white/5 relative overflow-hidden text-center">
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="container mx-auto px-4 space-y-12 relative z-10">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight text-white uppercase italic leading-none">Need Deep <span className="text-emerald-400 italic">documentation?</span></h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-16 max-w-xl mx-auto text-lg lg:text-xl">Explore our technical infrastructure guides, API documentation, and specialized research patterns.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-12 py-6 rounded-3xl border border-white/10 bg-slate-950 hover:bg-white hover:text-slate-950 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-4 group">
                 Explore Knowledge Portal
                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
               </button>
               <button className="px-12 py-6 rounded-3xl bg-white text-slate-950 hover:bg-emerald-500 transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-4">
                 <MessageCircle className="w-4 h-4" />
                 Open Support Tunnel
               </button>
            </div>
         </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24 lg:py-48 text-center px-4 relative">
         <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-1000">
            <h2 className="text-4xl lg:text-8xl font-bold tracking-tight mb-8 text-white uppercase leading-none">Initialize <br/> <span className="text-emerald-400 italic">Clarity Hub.</span></h2>
            <button className="px-16 py-6 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
              Start Free Workspace
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
