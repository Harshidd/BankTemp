import React from 'react';
import { Play, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-40 overflow-hidden bg-slate-950">
      {/* Background Subtle Data Accents */}
      <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-500/10 blur-[120px] rounded-full" />
        {/* Mock grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Text Column */}
          <div className="flex-1 space-y-10 lg:space-y-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm text-xs font-bold text-emerald-400 uppercase tracking-widest animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Automated Intelligence Platform
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                Turn complex data <br /> 
                into <span className="text-emerald-400">clean insight.</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-400 max-w-xl leading-relaxed">
                 Aggregate data from every source, apply automated intelligence, and see exactly what's happening beneath the surface with zero manual effort.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button className="px-10 py-5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 hover:scale-105">
                Unlock Insights — Free
              </button>
              <button className="px-10 py-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all flex items-center gap-2">
                <Play className="w-4 h-4 text-emerald-400" />
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6">
               <div className="flex -space-x-3">
                 {[1,2,3,4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-950 bg-slate-800 shadow-xl" />
                 ))}
               </div>
               <p className="text-sm text-slate-500 font-medium tracking-tight">
                 Trusted by 2,000+ data analysts globally
               </p>
            </div>
          </div>

          {/* Right Dashboard Mockup Column (Data-centric richness) */}
          <div className="flex-1 w-full relative group">
             {/* Main Panel */}
             <div className="aspect-[4/3] rounded-3xl border border-white/10 bg-slate-900 shadow-3xl overflow-hidden relative p-8">
                <div className="flex items-center justify-between mb-10">
                   <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-slate-800" />
                     <div className="w-3 h-3 rounded-full bg-slate-800" />
                     <div className="w-3 h-3 rounded-full bg-slate-800" />
                   </div>
                   <div className="px-3 py-1 rounded bg-slate-800 border border-white/5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Live Updates</div>
                </div>

                {/* Dashboard Elements Simulation */}
                <div className="grid grid-cols-2 gap-6 h-full pb-20">
                   <div className="space-y-6">
                      <div className="h-32 rounded-2xl bg-indigo-500/10 border border-white/5 p-4 flex flex-col justify-end">
                         <TrendingUp className="w-5 h-5 text-indigo-400 mb-2" />
                         <div className="w-16 h-2 rounded bg-indigo-400/20 mb-2" />
                         <div className="w-24 h-4 rounded bg-indigo-200/20" />
                      </div>
                      <div className="h-48 rounded-2xl bg-slate-800/40 border border-white/5 p-4 overflow-hidden relative">
                         <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 via-transparent to-transparent opacity-50" />
                         <div className="w-32 h-2 rounded bg-emerald-400/20 mb-4" />
                         <div className="space-y-2">
                            {[1,2,3,4,5].map(i => (
                              <div key={i} className="w-full h-1.5 rounded bg-white/5" />
                            ))}
                         </div>
                      </div>
                   </div>
                   <div className="h-full rounded-2xl bg-white/5 border border-white/5 p-4 relative overflow-hidden">
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-8 border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400 text-2xl group-hover:scale-110 transition-transform">
                         94.2%
                      </div>
                      {/* Decorative pie segments */}
                      <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-[40px]" />
                   </div>
                </div>

                {/* Bottom glass reflection gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
             </div>

             {/* Floating Badge (Secondary Proof) */}
             <div className="absolute -bottom-6 -left-6 p-6 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl shadow-2xl animate-fade-in-up">
                <div className="flex gap-4">
                   <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-500"><TrendingUp className="w-6 h-6" /></div>
                   <div>
                     <p className="text-white text-lg font-bold">4.8</p>
                     <p className="text-slate-500 text-xs font-medium">Enterprise Intelligence Score</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
