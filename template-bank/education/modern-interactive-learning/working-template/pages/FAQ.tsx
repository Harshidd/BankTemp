"use client";

import React from 'react';
import { HelpCircle, ArrowRight, ShieldCheck, Layers, Zap, Globe, MessageCircle, Database, Search, Repeat, Settings, Users, Brain, GraduationCap } from 'lucide-react';

const categories = [
  { id: "method", name: "The Method", icon: Brain },
  { id: "access", name: "Academy Access", icon: ShieldCheck },
  { id: "support", name: "Inquiry Support", icon: MessageCircle },
  { id: "curriculum", name: "Subject Catalog", icon: GraduationCap }
];

const faqs = [
  {
    category: "method",
    q: "How does interactive problem-solving differ from traditional learning?",
    a: "Traditional learning relies on passive reading or viewing. Our method is built on active interaction—you start by solving structural problems that build your intuition. This first-principles approach ensures that knowledge is deeply embedded and ready for high-velocity application."
  },
  {
    category: "access",
    q: "Is account synchronization guaranteed across devices?",
    a: "Always. Your structural mastery logs are synced in real-time across your desktop and mobile environments. Transition between devices during any learning cycle without losing a single sub-ms of progress."
  },
  {
    category: "support",
    q: "What institutional support protocols do you offer for educators?",
    a: "Educators receive access to a dedicated Academic Portal. This includes real-time classroom analytics, student performance diagnostics, and high-velocity onboarding for your entire institution."
  },
  {
    category: "curriculum",
    q: "Can I propose new structural subjects or course modules?",
    a: "We actively encourage community subject proposals. Our roadmap is driven by learner demand. You can submit a structural subject outline to our content protocol for review and future deployment."
  }
];

export default function FAQ() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* FAQ Hero (Structural Support) */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center animate-in fade-in duration-1000 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/50 rounded-full blur-[150px] -z-10 translate-x-1/2" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Academy Knowledge Protocol</span>
            <h1 className="text-5xl lg:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02] duration-700">Structural <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">Assistance.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed font-black max-w-3xl mx-auto group-hover:text-slate-900 transition-colors">Explore the technical, architectural, and educational protocols that define the [Product] interactive experience.</p>
         </div>
      </section>

      {/* Category Nav Strip (High-Velocity Nav) */}
      <section className="py-12 border-y border-blue-50 bg-slate-50 sticky top-[80px] z-[40] backdrop-blur-3xl animate-in slide-in-from-top duration-700">
        <div className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-6 lg:gap-16">
           {categories.map(c => (
              <button key={c.id} className="flex items-center gap-5 px-8 py-5 rounded-3xl border border-blue-100 bg-white shadow-2xl hover:border-yellow-400/30 hover:bg-slate-950 hover:text-white transition-all group active:scale-95">
                 <c.icon className="w-5 h-5 text-blue-600 group-hover:text-yellow-400 group-hover:rotate-12 transition-all transition-transform" />
                 <span className="text-[11px] font-black uppercase tracking-widest leading-none pt-1">{c.name}</span>
              </button>
           ))}
        </div>
      </section>

      {/* FAQ Grid (Energetic Panels) */}
      <section className="py-24 lg:py-56 px-4 bg-white relative">
        <div className="absolute top-0 right-0 w-full h-full bg-slate-50/40 skew-y-[10deg] -z-10 translate-y-1/2" />
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 gap-12 lg:gap-24 items-stretch">
              {faqs.map((f, i) => (
                <div key={i} className="group cursor-default space-y-12 animate-in fade-in slide-in-from-bottom duration-700 bg-white p-12 lg:p-20 rounded-[5rem] border border-blue-100 hover:border-blue-600/20 transition-all shadow-3xl flex flex-col items-start hover:-translate-y-4 duration-700" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="flex flex-col lg:flex-row items-start gap-12 w-full">
                      <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 shadow-2xl transition-all flex-shrink-0">
                         <HelpCircle className="w-10 h-10" />
                      </div>
                      <div className="flex-1 space-y-10 group/content">
                         <div className="space-y-6">
                           <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.4em] font-mono leading-none">{f.category} — protocol logic</span>
                           <h3 className="text-3xl lg:text-5xl font-black tracking-tight text-slate-900 uppercase italic leading-[1.1] transition-colors group-hover:text-blue-600">{f.q}</h3>
                         </div>
                         <p className="text-xl text-slate-500 leading-relaxed font-black max-w-4xl pr-12 group-hover/content:text-slate-900 transition-colors">{f.a}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Search / Deeper Support Suggestion (Edu-DNA) */}
      <section className="py-24 lg:py-56 bg-slate-950 text-white relative overflow-hidden text-center group">
         <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 blur-[150px] rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-[2000ms]" />
         <div className="container mx-auto px-4 space-y-16 relative z-10 animate-in fade-in duration-1000">
            <h2 className="text-4xl lg:text-[10rem] font-black tracking-tighter uppercase italic leading-none transition-all hover:scale-105 duration-700">Need specific <br/> <span className="text-blue-500 underline decoration-white/5 decoration-8 underline-offset-12">clarity?</span></h2>
            <p className="text-slate-400 font-bold leading-relaxed mb-20 max-w-2xl mx-auto text-xl lg:text-3xl transition-colors group-hover:text-white">Our academic support loops are active 24/7. Connect directly with a structural learning architect today.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <button className="px-16 py-7 rounded-3xl bg-white text-slate-950 hover:bg-blue-600 hover:text-white font-black text-xs uppercase tracking-[0.3em] flex items-center gap-6 shadow-3xl transition-all">
                 <Search className="w-5 h-5 shadow-2xl" />
                 Explore Knowledge Hub
               </button>
               <button className="px-16 py-7 rounded-3xl bg-blue-600 text-white hover:bg-blue-500 transition-all font-black text-xs uppercase tracking-[0.3em] flex items-center gap-6 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.3)]">
                 <MessageCircle className="w-5 h-5" />
                 Initiate Support Loop
               </button>
            </div>
         </div>
      </section>

      {/* Bottom Conversion */}
      <section className="py-24 lg:py-64 text-center px-4 relative bg-white">
         <div className="max-w-5xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-[11rem] font-black tracking-tighter mb-8 text-slate-900 uppercase leading-[0.85] italic transition-all hover:scale-105 duration-700">Begin your <br/> <span className="text-blue-600 underline decoration-blue-50 decoration-8 underline-offset-12">mastery.</span></h2>
            <button className="px-20 py-8 rounded-[3rem] bg-slate-950 text-white font-black text-sm tracking-[0.4em] uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group hover:-rotate-2">
              Join Free Academy
              <ArrowRight className="w-6 h-6 inline-block ml-6 group-hover:translate-x-3 transition-transform" />
            </button>
         </div>
      </section>
    </div>
  );
}
