"use client";

import React from 'react';
import { ArrowRight, Heart, Sparkles, Target, Zap, Globe } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="pt-32 pb-24">
      {/* Narrative Section */}
      <section className="px-6 mb-32">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-bold uppercase tracking-widest rounded-full mb-8">
            The Backstory
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-12 leading-tight uppercase italic underline decoration-emerald-500/20 underline-offset-8">
            I believe everyone has a <span className="text-emerald-600">unique insight</span> worth teaching.
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-slate-600 leading-relaxed">
            <div className="space-y-6">
              <p>
                My journey didn't start in a boardroom or a high-tech studio. It started with a simple frustration: seeing brilliant people struggle to explain what they do.
              </p>
              <p>
                [Your Story: Describe your pivot or the specific moment that led you to education/creation. Keep it relatable and human.]
              </p>
              <p>
                Since then, I've dedicated my career to decoding the complexity of [Your Niche] and turning it into actionable systems for thousands of students worldwide.
              </p>
            </div>
            <div className="space-y-6">
              <p>
                I don't believe in "hacks" or overnight success. I believe in the power of **sustainable creation**—building assets that work for you while you focus on what actually matters.
              </p>
              <p>
                My philosophy is simple: **Teach, build, and share in public.** When we democratize expertise, we all win.
              </p>
              <div className="pt-6">
                <div className="flex items-center gap-4 border-l-4 border-emerald-500 pl-6 italic font-medium text-slate-800">
                  "Education is the best leverage for the 21st-century creative."
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Grid */}
      <section className="bg-slate-900 py-32 px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 uppercase italic">My Core <span className="text-emerald-400">Principles</span></h2>
            <p className="text-slate-400 max-w-xl mx-auto">The non-negotiables that guide everything I create and teach.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="text-emerald-400" />, title: "Action Over Theory", desc: "I prioritize practical application over abstract concepts. If you can't use it today, I won't teach it." },
              { icon: <Target className="text-emerald-400" />, title: "Ruthless Simplicity", desc: "Complexity is the enemy of progress. We strip away the fluff to find the most efficient path to results." },
              { icon: <Heart className="text-emerald-400" />, title: "Human-First", desc: "Systems are for machines, but brands are for people. Everything we build must serve the human experience." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:border-emerald-500/50 transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 uppercase italic tracking-wide">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Framing */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative border-8 border-slate-50 rotate-3 transition-transform hover:rotate-0 duration-500">
                <div className="absolute inset-0 flex items-center justify-center text-slate-300 font-medium italic">
                  [Casual Action Photo]
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 uppercase italic leading-tight">Helping you bridge the gap between <span className="text-emerald-600 underline underline-offset-8 decoration-emerald-100">idea</span> and <span className="text-emerald-600 underline underline-offset-8 decoration-emerald-100">impact</span>.</h2>
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">01</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase">Systems Design</h4>
                    <p className="text-slate-600">Building the invisible architecture that powers your creative workflow.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">02</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase">Monetization Strategy</h4>
                    <p className="text-slate-600">Turning your unique insights into sustainable digital products and services.</p>
                  </div>
                </div>
                <div className="flex gap-5">
                  <div className="shrink-0 w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center font-bold">03</div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2 uppercase">Community Scaling</h4>
                    <p className="text-slate-600">Creating high-engagement environments where your audience can thrive and grow.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-emerald-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-bold mb-8 uppercase italic leading-tight">Ready to build your <span className="text-emerald-200 underline">empire</span>?</h2>
            <p className="text-emerald-50 text-xl max-w-2xl mx-auto mb-12 font-medium">
              Join 15,000+ creators receiving my weekly deep-dives on education and business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('community')}
                className="px-10 py-5 bg-white text-emerald-700 font-bold rounded-2xl hover:bg-emerald-50 transition-all shadow-xl shadow-emerald-900/10 active:scale-95"
              >
                Join the Community
              </button>
              <button 
                onClick={() => onNavigate('contact')}
                className="px-10 py-5 bg-emerald-700 text-white font-bold rounded-2xl hover:bg-emerald-800 transition-all border border-emerald-500/50"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
