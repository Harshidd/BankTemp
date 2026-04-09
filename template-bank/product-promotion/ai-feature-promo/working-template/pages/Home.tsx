"use client";

import React from 'react';
import { ArrowRight, CheckCircle2, PlayCircle, Zap, Layers, Cpu, ShieldCheck, Sparkles } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-32 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-600 uppercase tracking-widest mb-8 border border-indigo-100 animate-in fade-in slide-in-from-bottom duration-500">
              <Zap className="w-3 h-3 fill-indigo-600" />
              <span>Now in Private Beta</span>
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl lg:leading-[1.1] animate-in fade-in slide-in-from-bottom duration-700 delay-100">
              Your workflow, <span className="text-indigo-600">multiplied</span> by intelligence.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg lg:text-xl text-slate-500 leading-relaxed animate-in fade-in slide-in-from-bottom duration-700 delay-200">
              A single feature that transforms how you manage complex data. No more manual entry, no more context switching. Just pure focus.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom duration-700 delay-300">
              <button 
                onClick={() => onPageChange('pricing')}
                className="w-full sm:w-auto rounded-full bg-slate-900 px-8 py-4 text-base font-bold text-white shadow-2xl shadow-slate-200 transition-all hover:bg-slate-800 hover:scale-105 active:scale-95 flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => onPageChange('workflows')}
                className="w-full sm:w-auto rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-bold text-slate-600 transition-all hover:bg-slate-50 flex items-center justify-center gap-2"
              >
                <PlayCircle className="h-5 w-5 text-indigo-600" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* Product UI / Story Showcase Area */}
          <div className="mt-20 lg:mt-32 relative animate-in fade-in zoom-in duration-1000 delay-500">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 shadow-2xl backdrop-blur-sm lg:p-6">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-white shadow-inner flex flex-col border border-slate-100">
                {/* Mock UI Header */}
                <div className="h-12 border-b border-slate-50 bg-slate-50/50 px-4 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                  </div>
                  <div className="w-32 h-2 rounded-full bg-slate-100" />
                  <div className="w-8 h-8 rounded-full bg-slate-100" />
                </div>
                {/* Mock UI Content */}
                <div className="flex-1 p-8 flex items-center justify-center">
                  <div className="max-w-md w-full space-y-4">
                    <div className="h-4 w-3/4 bg-slate-100 rounded-full animate-pulse" />
                    <div className="h-4 w-1/2 bg-indigo-50 rounded-full animate-pulse delay-75" />
                    <div className="h-4 w-5/6 bg-slate-50 rounded-full animate-pulse delay-150" />
                    <div className="pt-8 grid grid-cols-2 gap-4">
                      <div className="aspect-square rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Cpu className="w-8 h-8 text-indigo-200" />
                      </div>
                      <div className="aspect-square rounded-2xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
                        <Sparkles className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Absolute Decorative Blobs */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-400/10 blur-[100px] rounded-full pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Trust / Proof Strip */}
      <section className="py-12 border-y border-slate-100 bg-slate-50/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-8">
            Trusted by founders and operators at
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale contrast-125">
             <span className="text-xl font-black">LINEAR</span>
             <span className="text-xl font-black">VERCEL</span>
             <span className="text-xl font-black">FIGMA</span>
             <span className="text-xl font-black">NOTION</span>
             <span className="text-xl font-black">STRIFE</span>
          </div>
        </div>
      </section>

      {/* Feature Preview */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                One strong promise. <br/>
                Absolute <span className="text-indigo-600">clarity</span>.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Most tools overwhelm you with options. We focus on the high-leverage actions that actually move the needle for your business.
              </p>
              <div className="space-y-4">
                {[
                  "Intelligent data extraction in sub-seconds",
                  "Automated categorization based on your history",
                  "Enterprise-grade security by default",
                  "Cross-platform sync with no latency"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <button 
                onClick={() => onPageChange('features')}
                className="inline-flex items-center gap-2 font-bold text-indigo-600 hover:text-indigo-700 transition-colors group"
              >
                Explore all features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full border border-slate-100 bg-slate-50/50 flex items-center justify-center p-12">
                <div className="w-full h-full rounded-full border border-indigo-100 bg-white shadow-2xl shadow-indigo-50 flex items-center justify-center relative overflow-hidden group">
                   <Layers className="w-24 h-24 text-indigo-600 transition-transform duration-700 group-hover:scale-110" />
                   {/* Orbiting particles */}
                   <div className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-indigo-400 animate-pulse" />
                   <div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Repetition */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[3rem] bg-indigo-600 px-8 py-20 text-center shadow-2xl shadow-indigo-200 lg:px-16 overflow-hidden">
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl mb-8">
                Ready to transform your workflow?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-indigo-50 mb-12">
                Join 10,000+ teams using AIFeature to gain back 10 hours every week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <button 
                  onClick={() => onPageChange('pricing')}
                  className="rounded-full bg-white px-8 py-4 text-base font-bold text-indigo-600 shadow-xl transition-all hover:bg-slate-50 hover:scale-105 active:scale-95"
                >
                  Create Free Account
                </button>
                <button 
                  onClick={() => onPageChange('contact')}
                  className="rounded-full border border-indigo-400/30 bg-indigo-500/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-indigo-500/20"
                >
                  Schedule Demo
                </button>
              </div>
            </div>
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay">
              <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
