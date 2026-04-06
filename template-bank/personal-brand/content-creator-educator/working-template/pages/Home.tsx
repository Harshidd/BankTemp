"use client";

import React from 'react';
import { ArrowRight, Play, BookOpen, Star, Video, MessageCircle, Camera, ChevronRight, Newspaper } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: PageProps) {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative px-6 pt-16 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 rounded-full blur-3xl -z-10 opacity-60 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Educator & Digital Creator
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
              Build your <span className="text-emerald-600 underline decoration-emerald-200 underline-offset-8">creative</span> engine and teach what you love.
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-10 max-w-lg">
              Practical systems for modern educators and creators to scale their impact, monetize their knowledge, and build a sustainable brand without burnout.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => onNavigate('products')}
                className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2 group"
              >
                Explore Courses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('community')}
                className="px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
              >
                Join Newsletter <Newspaper size={18} />
              </button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                ))}
              </div>
              <div className="text-sm text-slate-500 font-medium">
                <span className="text-slate-900 font-bold">15,000+</span> creators learning inside
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              {/* Placeholder for Hero Image */}
              <div className="absolute inset-0 flex items-center justify-center text-slate-400 font-medium italic">
                [High Quality Personal Photo]
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center ring-4 ring-emerald-500/20">
                    <Play size={20} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest font-bold opacity-80">Latest Workshop</div>
                    <div className="font-semibold text-lg leading-tight uppercase italic">The 2024 Creator Strategy</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-10 -left-10 p-6 bg-white rounded-2xl shadow-xl border border-slate-50 hidden lg:block animate-bounce-subtle">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center font-bold">#1</div>
                <div className="text-sm font-bold text-slate-900 italic underline uppercase">Best Educator 2023</div>
              </div>
              <div className="flex gap-1 text-amber-400">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="bg-slate-50 py-12 border-y border-slate-100 italic">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-8">As seen in</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale contrast-125">
            {['Forbes', 'Entrepreneur', 'FastCompany', 'Wired', 'The Verge'].map(brand => (
              <span key={brand} className="text-2xl font-black text-slate-900 tracking-tighter italic uppercase">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Preview */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-4 uppercase">Structured <span className="text-emerald-600 italic">Learning</span></h2>
              <p className="text-lg text-slate-600 max-w-xl">
                Ready to take the next step? My courses are designed to provide clear, actionable paths to mastering the business of creation.
              </p>
            </div>
            <button 
              onClick={() => onNavigate('products')}
              className="text-emerald-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform group"
            >
              View All Products <ChevronRight size={20} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group bg-white rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 overflow-hidden flex flex-col h-full">
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 text-sm font-medium italic">
                    [Course Thumbnail {item}]
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase rounded">Self-Paced</span>
                    <span className="text-emerald-600 text-sm font-bold">$149</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors uppercase italic">PLATFORM MASTERY {item}.0</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    A comprehensive guide to building an audience from scratch using sustainable systems.
                  </p>
                  <button 
                    onClick={() => onNavigate('products')}
                    className="w-full py-3 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-emerald-600 transition-colors active:scale-95"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Hub Preview */}
      <section className="py-24 px-6 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute left-0 bottom-0 w-full h-1/2 bg-emerald-500/5 blur-3xl -z-0"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 italic underline decoration-emerald-500/30 underline-offset-8 uppercase">Knowledge Bank</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Explore the latest insights on education, creator business, and technology. Fresh perspectives delivered weekly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex flex-col gap-4 group cursor-pointer" onClick={() => onNavigate('resources')}>
                <div className="aspect-[4/3] bg-white/5 rounded-2xl border border-white/10 overflow-hidden relative">
                   <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs font-medium italic">
                    [Article Preview]
                  </div>
                </div>
                <div>
                  <div className="text-emerald-500 text-[10px] font-bold uppercase mb-1 tracking-widest">Tutorial</div>
                  <h4 className="font-bold group-hover:text-emerald-400 transition-colors uppercase leading-snug">The Architecture of a 6-Figure Course {item}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => onNavigate('resources')}
              className="px-10 py-4 border border-white/20 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-all inline-flex items-center gap-3"
            >
              Browse Library <BookOpen size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto rounded-[3rem] bg-emerald-50 border-2 border-emerald-100 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-24 h-24 bg-emerald-200/40 rounded-br-full -z-0"></div>
          <div className="relative z-10">
            <Newspaper size={48} className="mx-auto text-emerald-600 mb-8" />
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 italic uppercase">The Sunday Strategy</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Every Sunday, I send out one deep-dive strategy on building a modern creator business. No spam, just pure signal.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-grow px-6 py-4 rounded-2xl border-2 border-white focus:border-emerald-400 outline-none transition-all placeholder:font-medium"
              />
              <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-emerald-600 transition-all whitespace-nowrap active:scale-95 shadow-lg shadow-slate-200">
                Sign Me Up
              </button>
            </form>
            <p className="mt-6 text-slate-400 text-sm font-medium">Join <span className="font-bold text-slate-600 underline">25,000+</span> subscribers. Unsubscribe any time.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
