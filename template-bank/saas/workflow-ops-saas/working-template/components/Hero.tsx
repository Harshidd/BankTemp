import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-64 lg:pb-48 bg-slate-50 text-slate-950 overflow-hidden">
      {/* Decorative Flow Lines (Light Mode Variant) */}
      <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-950/20 rotate-[15deg] translate-y-24" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-slate-950/20 rotate-[15deg] -translate-y-24" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-32">
          {/* Left Text Column (Action-oriented) */}
          <div className="flex-1 space-y-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-950/20 bg-slate-950/5 text-xs font-bold text-slate-950 uppercase tracking-widest animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              Workflow Execution Engine 2.0
            </div>

            <div className="space-y-8">
              <h1 className="text-6xl lg:text-8xl font-bold tracking-tight text-slate-950 leading-[0.95] max-w-2xl">
                Replace chaos <br/> with <span className="text-amber-500">absolute control.</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 max-w-xl leading-relaxed">
                 The operating system for teams that need to ship faster, sync better, and automate everything in their path.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-12 py-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-lg transition-all shadow-2xl hover:scale-105 flex items-center gap-2">
                Start Building Free
                <ChevronRight className="w-5 h-5 opacity-50" />
              </button>
              <button className="px-10 py-5 rounded-2xl border border-slate-950/10 bg-white hover:bg-slate-50 text-slate-950 font-bold text-lg transition-all">
                Talk to Operations
              </button>
            </div>

            {/* Quick Metrics (Operational) */}
            <div className="flex items-center gap-10 pt-8 border-t border-slate-950/5">
               <div>
                  <p className="text-3xl font-bold text-slate-950 tracking-tighter">10,000+</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Active Workflows</p>
               </div>
               <div>
                  <p className="text-3xl font-bold text-slate-950 tracking-tighter">4.2M</p>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Tasks Completed</p>
               </div>
            </div>
          </div>

          {/* Right Workflow Mockup (Clean movement) */}
          <div className="flex-1 w-full p-8 lg:p-16 rounded-[4rem] border border-slate-950/10 bg-white shadow-3xl relative animate-float">
             {/* Mock Task Flow Visual */}
             <div className="space-y-6">
                {[1,2,3].map(i => (
                  <div key={i} className={`p-6 rounded-3xl border border-slate-950/5 bg-white shadow-lg flex items-center gap-4 transition-all hover:scale-105 hover:bg-slate-50 ${i === 2 ? 'translate-x-12 opacity-80' : ''}`}>
                     <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-lg ${i === 1 ? 'bg-slate-950' : i === 2 ? 'bg-amber-500' : 'bg-slate-400'}`}>0{i}</div>
                     <div className="space-y-1">
                        <div className="w-32 h-2.5 rounded bg-slate-200" />
                        <div className="w-20 h-1.5 rounded bg-slate-100" />
                     </div>
                  </div>
                ))}
             </div>
             {/* Dynamic Connector */}
             <div className="absolute top-1/2 left-4 h-full w-px bg-gradient-to-b from-transparent via-slate-950/10 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
