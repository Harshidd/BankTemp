"use client";

import React from 'react';
import { HelpCircle, ArrowRight, ShieldCheck, Layers, Zap, Globe, MessageCircle, Database, Search, Repeat, Settings, Users } from 'lucide-react';

const categories = [
  { id: "core", name: "Execution Core", icon: Zap },
  { id: "permission", name: "Admin Protocol", icon: ShieldCheck },
  { id: "integration", name: "Integration Hub", icon: Repeat },
  { id: "onboarding", name: "Team Onboarding", icon: Users }
];

const faqs = [
  {
    category: "core",
    q: "How does the orchestration engine handle complex branching?",
    a: "Our core logic is built on a non-linear state-machine architecture. All operational cycles can support infinite nested sub-flows, ensuring that even the most fragmented team processes can be mapped 1:1 without structural friction."
  },
  {
    category: "permission",
    q: "What granularities are supported for role-based governance?",
    a: "We support resource-level permissions. Admin protocols can restrict or grant access to specific workflow states, communication logs, and data exports on a per-teammate or functional segment basis (e.g., SDR, AE, Success)."
  },
  {
    category: "integration",
    q: "Is bidirectional synchronization guaranteed across the stack?",
    a: "Total process parity is our standard. Our universal integration layer supports real-time, bidirectional sync with Salesforce, HubSpot, Jira, and 50+ other primary operational tools to eliminate data silos."
  },
  {
    category: "onboarding",
    q: "What is the typical timeframe for full organization deployment?",
    a: "Standard team environments can be operational in < 24 hours. Full enterprise-wide deployments with complex custom logic and SAML/SSO integration typically undergo a 14-day 'Execution Review' cycle for absolute clarity."
  }
];

export default function FAQ() {
  return (
    <div className="bg-white text-slate-950 min-h-screen pt-32 lg:pt-56">
      {/* FAQ Hero */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center animate-in fade-in duration-1000 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-950/5 blur-[150px] rounded-full pointer-events-none opacity-40 shadow-inner" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Operating Support Protocol</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-950 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02] duration-700">Clarity for your <br/> <span className="text-amber-500 italic underline decoration-slate-950/10 decoration-8">execution reality.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed font-black max-w-3xl mx-auto group-hover:text-slate-950 transition-colors">Explore the technical, architectural, and operational details that define the [Product] engine.</p>
         </div>
      </section>

      {/* Category Nav Strip (Coordination Variant) */}
      <section className="py-12 border-y border-slate-950/5 bg-slate-50 sticky top-[80px] z-[40] backdrop-blur-3xl animate-in slide-in-from-top duration-700">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 lg:gap-16">
           {categories.map(c => (
              <button key={c.id} className="flex items-center gap-5 px-8 py-5 rounded-3xl border border-slate-950/5 bg-white shadow-2xl hover:border-amber-500/30 hover:bg-slate-950 hover:text-white transition-all group">
                 <c.icon className="w-5 h-5 text-amber-500 group-hover:text-amber-400 group-hover:rotate-12 transition-all" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none">{c.name}</span>
              </button>
           ))}
        </div>
      </section>

      {/* FAQ Grid (Industrial Panels) */}
      <section className="py-24 lg:py-56 px-4 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/30 skew-y-[10deg] -z-10 translate-y-1/2" />
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 gap-12 lg:gap-24 items-stretch">
              {faqs.map((f, i) => (
                <div key={i} className="group cursor-default space-y-12 animate-in fade-in slide-in-from-bottom duration-700 bg-white p-12 lg:p-20 rounded-[5rem] border border-slate-950/5 hover:border-amber-500/20 transition-all shadow-3xl flex flex-col items-start" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="flex flex-col lg:flex-row items-start gap-12 w-full">
                      <div className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white group-hover:rotate-12 shadow-2xl transition-all flex-shrink-0">
                         <HelpCircle className="w-10 h-10" />
                      </div>
                      <div className="flex-1 space-y-10 group/content">
                         <div className="space-y-6">
                           <span className="text-[10px] font-black text-amber-500 uppercase tracking-[0.4em] font-mono leading-none">{f.category} — protocol logic</span>
                           <h3 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-950 uppercase italic leading-[1.1] transition-colors">{f.q}</h3>
                         </div>
                         <p className="text-xl text-slate-500 leading-relaxed font-black max-w-4xl pr-12 group-hover/content:text-slate-950 transition-colors">{f.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Docs-lite Transition (Industrial Execution) */}
      <section className="py-24 lg:py-56 bg-slate-950 text-white relative overflow-hidden text-center group">
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/10 blur-[150px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-[2000ms]" />
         <div className="container mx-auto px-4 space-y-16 relative z-10 animate-in fade-in duration-1000">
            <h2 className="text-4xl lg:text-9xl font-black tracking-tighter uppercase italic leading-none">Need Structural <br/> <span className="text-amber-500 italic underline decoration-white/5 decoration-8">guidance?</span></h2>
            <p className="text-slate-400 font-black leading-relaxed mb-20 max-w-2xl mx-auto text-xl lg:text-3xl transition-colors group-hover:text-white">Explore our comprehensive Knowledge Portal, integration technicalities, and operational best practices.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <button className="px-16 py-7 rounded-3xl border border-white/10 bg-white/5 hover:bg-white hover:text-slate-950 transition-all font-black text-xs uppercase tracking-[0.3em] flex items-center gap-6 group/btn shadow-[0_32px_64px_-16px_rgba(245,158,11,0.1)]">
                 Explore Knowledge Portal
                 <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
               </button>
               <button className="px-16 py-7 rounded-3xl bg-amber-500 text-slate-950 hover:bg-amber-400 transition-all font-black text-xs uppercase tracking-[0.3em] flex items-center gap-6 shadow-3xl">
                 <MessageCircle className="w-5 h-5" />
                 Initiate Support Loop
               </button>
            </div>
         </div>
      </section>

      {/* Bottom Protocol Conversion */}
      <section className="py-24 lg:py-56 text-center px-4 relative bg-white">
         <div className="max-w-5xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-[10rem] font-black tracking-tighter mb-8 text-slate-950 uppercase leading-[0.85] italic">Start <br/> <span className="text-amber-500 underline decoration-slate-950/5 duration-700">Execution.</span></h2>
            <button className="px-20 py-8 rounded-[3rem] bg-slate-950 text-white font-black text-sm tracking-[0.4em] uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group hover:-rotate-1">
              Initialize Control Hub
              <ArrowRight className="w-6 h-6 inline-block ml-6 group-hover:translate-x-3 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
