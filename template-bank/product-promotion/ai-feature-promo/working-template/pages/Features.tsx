"use client";

import React from 'react';
import { Zap, Shield, Smartphone, Globe, BarChart3, Cloud, Lock, Command, MessageSquare, Repeat } from 'lucide-react';

export default function Features() {
  const featureGroups = [
    {
      title: "Core Intelligence",
      description: "Foundational AI capabilities that power your entire workspace.",
      features: [
        { icon: Zap, name: "Sub-second Analysis", detail: "Analyze documents up to 500 pages in less than a second." },
        { icon: Command, name: "Natural Commands", detail: "Talk to your data like you would a colleague." },
        { icon: Repeat, name: "Auto-Workflows", detail: "Create complex automation loops without a single line of code." }
      ]
    },
    {
      title: "Security & Scale",
      description: "Built for teams that take data privacy seriously.",
      features: [
        { icon: Shield, name: "Enterprise Privacy", detail: "Zero-knowledge encryption for all sensitive identifiers." },
        { icon: Lock, name: "Audit Logging", detail: "Complete trail of every interaction and automated action." },
        { icon: Cloud, name: "Hybrid Deployment", detail: "Run on-prem or in our secure cloud environments." }
      ]
    }
  ];

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      {/* Page Header */}
      <section className="bg-slate-50 py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-4 block">Capabilities</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-6xl mb-8">
              Built for depth, <br/>
              designed for speed.
            </h1>
            <p className="text-lg lg:text-xl text-slate-500 leading-relaxed">
              We've stripped away the noise to build a feature set that developers and product teams actually need. No fluff, just high-performance utility.
            </p>
          </div>
        </div>
      </section>

      {/* Feature Groups */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-32">
          {featureGroups.map((group, index) => (
            <div key={index} className="space-y-12">
              <div className="border-l-4 border-indigo-600 pl-8">
                <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-tight">{group.title}</h2>
                <p className="mt-2 text-slate-500">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {group.features.map((feature, fIndex) => {
                  const Icon = feature.icon;
                  return (
                    <div key={fIndex} className="p-8 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-indigo-900/5 hover:border-indigo-600/20 hover:shadow-indigo-900/10 transition-all group">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{feature.detail}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Before / After Comparison */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight">The Workflow Shift</h2>
            <p className="mt-4 text-slate-400">Stop fighting your tools and start mastering your time.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* The Old Way */}
            <div className="p-8 lg:p-12 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="inline-block px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-6 border border-red-500/20">Traditional Way</span>
              <ul className="space-y-6 opacity-60">
                {[
                  "Manual data entry across 3 different systems",
                  "Context switching every 15 minutes",
                  "Fragmented search across email, Slack, and docs",
                  "Inconsistent tagging and lack of automation"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start line-through decoration-red-500/50">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The New Way */}
            <div className="p-8 lg:p-12 rounded-[2rem] bg-indigo-600 shadow-2xl shadow-indigo-900/50 outline outline-4 outline-indigo-500/10 scale-105">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-[10px] font-bold uppercase tracking-widest mb-6 border border-white/30">With AIFeature</span>
              <ul className="space-y-6">
                {[
                  "One unified intelligent stream of data",
                  "AI-driven prioritization based on impact",
                  "Universal command center for all apps",
                  "Self-healing workflows that adapt to change"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-white shrink-0" />
                    <span className="text-white font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
      </section>

      {/* Integrated CTA */}
      <section className="py-24 bg-white text-center">
        <div className="mx-auto max-w-xl">
           <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Ready for the better way?</h2>
           <button className="rounded-full bg-indigo-600 px-10 py-5 text-lg font-bold text-white shadow-xl shadow-indigo-100 transition-all hover:bg-indigo-700 hover:scale-105 active:scale-95">
             See Pricing & Access
           </button>
        </div>
      </section>
    </div>
  );
}

function XCircle({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
  );
}

function CheckCircle2({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>
  );
}
