"use client";

import React from 'react';
import { HelpCircle, ArrowRight, Shield, Layers, Zap, Globe, MessageCircle } from 'lucide-react';

const categories = [
  { id: "product", name: "System Core", icon: Zap },
  { id: "billing", name: "Billing & Plans", icon: Layers },
  { id: "security", name: "Security & Governance", icon: Shield },
  { id: "general", name: "Global Ops", icon: Globe }
];

const faqs = [
  {
    category: "product",
    q: "How does the sub-millisecond sync architecture work?",
    a: "Our core is built on a local-first synchronization engine. All edits are committed to a local SQLite-lite store instantly, then merged and propagated through our global WebSocket mesh. This ensures zero-lag interactions regardless of connection stability."
  },
  {
    category: "product",
    q: "Can we customize the workspace relationship topology?",
    a: "Absolutely. Our platform is built on an atomic data model. You can define custom node types, relation logic, and global inheritance rules to match your exact team structural requirements."
  },
  {
    category: "billing",
    q: "What constitutes a 'worksession' for billing purposes?",
    a: "We bill based on unique active workspace participants per billing cycle. Administrative users and read-only observers are typically included in our core Enterprise tiers without extra seat-cost fragmentation."
  },
  {
    category: "security",
    q: "Is SOC2 Type II compliance verified annually?",
    a: "Yes. We maintain a continuous compliance posture. Our latest SOC2 Type II report is available to Premium and Enterprise tier customers upon request through our secure governance portal."
  },
  {
    category: "general",
    q: "Do you support on-premise or sovereign cloud deployments?",
    a: "For Enterprise customers with strict regional data requirements, we offer a containerized deployment package that can run in any private VPC or sovereign infrastructure, while maintaining managed orchestration logic."
  }
];

export default function FAQ() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* FAQ Hero */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-24 border-b border-white/5">
         <div className="container mx-auto px-4 text-center">
            <span className="text-sm font-bold text-blue-400 uppercase tracking-[0.4em] mb-8 block font-mono">Structural Help</span>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-8">Clarity for your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">most critical questions.</span></h1>
            <p className="text-lg lg:text-xl text-white/40 max-w-2xl mx-auto font-medium leading-relaxed font-medium">Explore the architectural, scaling, and governance details that define the [Product] ecosystem.</p>
         </div>
      </section>

      {/* Category Nav Strip */}
      <section className="py-12 border-b border-white/5 bg-white/5">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 lg:gap-12">
           {categories.map(c => (
              <button key={c.id} className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/5 hover:border-blue-500/20 hover:bg-blue-600/5 transition-all group">
                 <c.icon className="w-4 h-4 text-white/20 group-hover:text-blue-500" />
                 <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 group-hover:text-white">{c.name}</span>
              </button>
           ))}
        </div>
      </section>

      {/* FAQ Grid */}
      <section className="py-24 lg:py-48 px-4">
        <div className="container mx-auto max-w-5xl">
           <div className="grid grid-cols-1 gap-12 lg:gap-24">
              {faqs.map((f, i) => (
                <div key={i} className="group cursor-default space-y-8 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl group-hover:scale-110">
                         <HelpCircle className="w-6 h-6" />
                      </div>
                      <div className="flex-1 space-y-6">
                         <h3 className="text-xl lg:text-3xl font-bold tracking-tight uppercase leading-none group-hover:text-blue-400 transition-colors">{f.q}</h3>
                         <p className="text-lg text-white/40 leading-[1.8] font-medium max-w-3xl pr-8">{f.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Docs-lite / Help Hub Strip */}
      <section className="py-24 lg:py-48 bg-white/5 border-y border-white/5 relative overflow-hidden">
         <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-blue-500/5 blur-[100px] rounded-full" />
         <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
            <h2 className="text-3xl lg:text-6xl font-bold tracking-tight mb-8">Need structural <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">documentation?</span></h2>
            <p className="text-white/40 font-medium leading-relaxed mb-16 max-w-xl mx-auto">Explore our deep architectural guides, API documentation, and workspace management strategy patterns.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <button className="px-10 py-5 rounded-full border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                 Explore Knowledge Hub
                 <ArrowRight className="w-4 h-4" />
               </button>
               <button className="px-10 py-5 rounded-full border border-white/10 bg-white hover:bg-blue-600 hover:border-blue-500 text-black hover:text-white transition-all font-bold text-xs uppercase tracking-widest flex items-center gap-3">
                 <MessageCircle className="w-4 h-4" />
                 Chat With Support
               </button>
            </div>
         </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 lg:py-48 text-center px-4">
         <div className="max-w-4xl mx-auto space-y-12">
            <h2 className="text-4xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">Join the high-velocity <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">elite today.</span></h2>
            <button className="px-16 py-6 rounded-full bg-blue-600 text-white font-bold text-sm tracking-widest uppercase shadow-2xl transition-all hover:scale-110 active:scale-95 group">
              Initialize Workspace
              <ArrowRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-1 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
