"use client";

import React from 'react';
import Hero from '../components/Hero';
import ChaosToControl from '../components/ChaosToControl';
import ProcessSteps from '../components/ProcessSteps';
import { Power, Shield, Zap, Users, CheckCircle, ArrowRight, Settings } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. Impact Hero (Left-aligned Execution variant) */}
      <Hero />

      {/* 2. Chaos to Control (Strategic comparison) */}
      <ChaosToControl />

      {/* 3. Team Coordination Focus (Vertical emphasis) */}
      <section className="py-24 lg:py-48 bg-white overflow-hidden relative border-b border-slate-950/5">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-32">
               {/* Content */}
               <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-right duration-700">
                  <div className="space-y-6">
                     <span className="text-sm font-bold text-amber-500 tracking-[0.4em] uppercase">Team Alignment</span>
                     <h2 className="text-4xl lg:text-7xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">Everyone on the <br className="hidden lg:block"/> same unified <span className="text-amber-500 underline decoration-slate-950/10 decoration-4 italic">page.</span></h2>
                     <p className="text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                        Stop hunting for the latest status. Our unified environment centralizes every operational update as it happens, ensuring zero friction between teams.
                     </p>
                  </div>
                  
                  <div className="space-y-8">
                     {[1,2].map(i => (
                       <div key={i} className="flex gap-6 group hover:pl-4 transition-all pb-8 border-b border-slate-100 last:border-b-0">
                          <CheckCircle className="w-8 h-8 text-amber-500 mt-1 shadow-2xl shadow-amber-500/20 group-hover:scale-125 transition-transform" />
                          <div className="space-y-3">
                             <h4 className="text-xl font-black text-slate-950 uppercase tracking-[0.2em] text-xs group-hover:text-amber-600 transition-colors uppercase leading-none">{i === 1 ? 'Automated Status Updates' : 'Contextual Collaboration'}</h4>
                             <p className="text-lg text-slate-500 font-medium leading-[1.4] group-hover:text-slate-950 transition-colors">No more manual check-ins. Every task update is broadcast immediately to relevant team members.</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

               {/* Large Team-sync visual mockup */}
               <div className="flex-1 w-full p-8 lg:p-16 rounded-[4rem] border border-slate-950/5 bg-slate-50 shadow-3xl pointer-events-none group relative overflow-hidden transition-all group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Internal simulation of a team task list */}
                  <div className="space-y-4">
                     {[1,2,3,4,5,6].map(i => (
                       <div key={i} className={`p-5 rounded-2xl border border-slate-950/5 bg-white shadow-xl flex items-center justify-between gap-4 transition-all group-hover:scale-105 ${i === 2 || i === 4 ? 'opacity-100' : 'opacity-40'}`}>
                          <div className="flex gap-4 items-center">
                             <div className={`w-10 h-10 rounded-full border-2 border-white shadow-xl ${i === 2 ? 'bg-amber-500' : 'bg-slate-100'}`} />
                             <div className={`w-36 h-3 rounded-full ${i === 2 ? 'bg-slate-950' : 'bg-slate-100'}`} />
                          </div>
                          <div className="flex gap-2">
                             <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100" />
                             <div className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100" />
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Vertical Process Flow Overview */}
      <ProcessSteps />

      {/* 5. Execution Features Grid (Ops-centric) */}
      <section className="py-24 lg:py-48 bg-white border-y border-slate-950/5 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full bg-slate-50/50 skew-x-12 -z-10" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-32 space-y-8">
               <span className="text-xs font-black text-amber-500 tracking-[0.4em] uppercase font-mono">Operations Infrastructure</span>
               <h2 className="text-4xl lg:text-8xl font-black tracking-tight text-slate-950 mb-6 uppercase leading-none italic">Execution <br/> at <span className="underline decoration-amber-500/20">scale.</span></h2>
               <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-medium">Designed for high-velocity teams that manage thousands of complex operational cycles simultaneously.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
               {[
                  { icon: Settings, title: "Custom Logic", text: "Create complex process flows that adapt to your team's specific requirements. No rigid rules." },
                  { icon: Zap, title: "Automated Triggers", text: "Fire actions across your entire stack based on any event or data point. Zero latency execution." },
                  { icon: Shield, title: "Audit Protocols", text: "Total visibility with persistent audit trails for every operation and strategic decision." }
               ].map((f, i) => (
                 <div key={i} className="group p-12 lg:p-16 rounded-[4rem] border border-slate-950/5 bg-white hover:bg-slate-950 hover:text-white transition-all duration-500 shadow-3xl hover:-translate-y-4 animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="w-20 h-20 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-950 mb-12 border border-slate-950/5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white group-hover:border-amber-500/20 transition-all shadow-xl shadow-slate-900/5 group-hover:shadow-amber-500/30">
                       <f.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-3xl font-black mb-8 tracking-tighter uppercase text-xs tracking-widest leading-none">{f.title}</h3>
                    <p className="text-lg text-slate-500 leading-relaxed font-medium group-hover:text-slate-400 transition-colors">{f.text}</p>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Focused Execution CTA */}
      <section className="py-24 lg:py-48 px-4 bg-white relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-amber-500/5 blur-[180px] rounded-full pointer-events-none opacity-50" />
         
         <div className="max-w-6xl mx-auto rounded-[5rem] p-12 lg:p-40 border-8 border-slate-50 bg-white text-center relative overflow-hidden group shadow-3xl">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-950/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative mb-8 space-y-10 group-hover:-translate-y-2 transition-transform duration-700">
               <h2 className="text-5xl lg:text-9xl font-black text-slate-950 tracking-tighter mb-8 leading-[0.85] uppercase italic">Ready to <br className="hidden lg:block"/> take <span className="text-amber-500 underline decoration-slate-950/5 decoration-8">control?</span></h2>
               <p className="text-xl lg:text-3xl text-slate-500 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">Build your first operational workflow in minutes. Join 10k teams standardizing their cycles this quarter.</p>
            </div>

            <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 animate-in fade-in duration-1000">
               <button className="px-16 py-6 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase hover:bg-slate-900 shadow-3xl transition-all hover:scale-110 hover:-rotate-1 active:scale-95 flex items-center gap-4 group/btn">
                 Take Control — Free
                 <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
               </button>
               <button className="px-12 py-6 rounded-3xl border-2 border-slate-950/10 bg-white hover:border-slate-950 text-slate-950 font-black text-sm tracking-widest uppercase transition-all shadow-2xl hover:bg-slate-50">
                 Schedule Ops Review
               </button>
            </div>
         </div>
      </section>
    </>
  );
}
