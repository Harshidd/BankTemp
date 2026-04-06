import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full opacity-50 pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full" />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-blue-500" />
          <span className="text-white/70">Announcing our latest integration</span>
          <ArrowRight className="w-3 h-3 text-white/40" />
        </div>

        {/* Title */}
        <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-8 max-w-4xl mx-auto leading-[1.1]">
          The Operating System for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Modern Teams</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed">
          Streamline your workflow, centralize your data, and empower your team to build faster than ever before. Reimagined from the ground up for clarity and speed.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all shadow-lg shadow-blue-600/20 hover:scale-105">
            Get Started for Free
          </button>
          <button className="px-8 py-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white font-medium transition-all">
            See the Demo
          </button>
        </div>

        {/* Main Mockup Placeholder */}
        <div className="relative mx-auto max-w-6xl aspect-[16/9] rounded-2xl border border-white/10 bg-white/5 shadow-2xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
          
          {/* Internal Dashboard Mockup Simulation */}
          <div className="p-4 lg:p-8 h-full">
            <div className="flex gap-4 h-full">
              {/* Sidebar Mock */}
              <div className="w-48 lg:w-64 rounded-xl border border-white/5 bg-white/5 p-4 hidden md:block">
                 <div className="w-full h-4 rounded bg-white/10 mb-4" />
                 <div className="space-y-2">
                   {[1,2,3,4,5].map(i => (
                     <div key={i} className="w-full h-2 rounded bg-white/5" />
                   ))}
                 </div>
              </div>
              
              {/* Main Content Mock */}
              <div className="flex-1 rounded-xl border border-white/5 bg-white/5 p-4 lg:p-8 overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-32 h-6 rounded bg-white/10" />
                  <div className="flex gap-2">
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                    <div className="w-8 h-8 rounded-full bg-white/10" />
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5" />
                    <div className="w-full h-32 rounded-xl bg-gradient-to-br from-emerald-500/10 to-transparent border border-white/5" />
                  </div>
                  <div className="space-y-4">
                    <div className="w-full h-full min-h-[250px] rounded-xl bg-white/5 border border-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hover Glow Effect */}
          <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </section>
  );
}
