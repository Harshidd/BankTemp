"use client";

import React, { useState } from 'react';
import { Search, Filter, BookOpen, Video, Newspaper, ArrowUpRight, ChevronRight, Play } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Resources({ onNavigate }: PageProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Articles', 'Videos', 'Guides', 'Podcasts'];

  const resources = [
    {
      type: 'Article',
      category: 'Articles',
      title: 'The Infinite Content Loop: How to Never Run Out of Ideas',
      date: 'Mar 12, 2024',
      readTime: '8 min read',
      icon: <Newspaper size={16} />
    },
    {
      type: 'Video',
      category: 'Videos',
      title: 'My $0 to $10k/month Roadmap for Educators',
      date: 'Feb 28, 2024',
      readTime: '15 min video',
      icon: <Video size={16} />
    },
    {
      type: 'Guide',
      category: 'Guides',
      title: 'Creator Stack 2024: The Tools I Use Every Day',
      date: 'Jan 15, 2024',
      readTime: '25 page PDF',
      icon: <BookOpen size={16} />
    },
    {
      type: 'Video',
      category: 'Videos',
      title: 'Why Most Online Courses Fail (And How to Fix Yours)',
      date: 'Jan 05, 2024',
      readTime: '12 min video',
      icon: <Video size={16} />
    },
    {
      type: 'Article',
      category: 'Articles',
      title: 'Psychology of Pricing for Digital Products',
      date: 'Dec 20, 2023',
      readTime: '10 min read',
      icon: <Newspaper size={16} />
    },
    {
      type: 'Article',
      category: 'Articles',
      title: 'Scaling from Solopreneur to Small Team',
      date: 'Nov 15, 2023',
      readTime: '12 min read',
      icon: <Newspaper size={16} />
    }
  ];

  const filteredResources = activeCategory === 'All' 
    ? resources 
    : resources.filter(r => r.category === activeCategory);

  return (
    <div className="pt-32 pb-24">
      {/* Header & Search */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 uppercase italic">Knowledge <span className="text-emerald-600">Hub</span></h1>
            <p className="text-lg text-slate-600">
              Free resources, deep-dive articles, and masterclasses to help you level up your creator game.
            </p>
          </div>
          <div className="w-full max-w-md relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search resources..."
              className="w-full pl-12 pr-6 py-4 bg-white border-2 border-slate-100 rounded-2xl focus:border-emerald-400 outline-none transition-all shadow-sm shadow-slate-100"
            />
          </div>
        </div>
      </section>

      {/* Featured Resource */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-[3rem] overflow-hidden flex flex-col lg:flex-row relative group cursor-pointer border border-white/5 shadow-2xl">
            <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-slate-800 relative">
              <div className="absolute inset-0 flex items-center justify-center text-white/10 text-xl font-bold italic uppercase tracking-widest">
                Featured Content
              </div>
              <div className="absolute top-6 left-6 px-4 py-1.5 bg-emerald-500 text-white text-xs font-bold uppercase tracking-widest rounded-full z-10">
                Most Popular
              </div>
            </div>
            <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <div className="text-emerald-500 text-sm font-bold uppercase tracking-widest mb-4">Masterclass</div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight uppercase italic underline decoration-emerald-500/20 underline-offset-8">
                Building a <span className="text-emerald-400">Sustainable</span> Audience in 2024
              </h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                The landscape of content creation is shifting. In this 45-minute deep dive, we explore why "viral" is a trap and how to build a moat around your brand.
              </p>
              <div className="flex items-center gap-6">
                 <button className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-2xl hover:bg-emerald-700 transition-all flex items-center gap-3">
                  Watch Now <Play size={18} fill="currentColor" />
                </button>
                <span className="text-slate-500 font-medium italic">45 Minutes • Free Masterclass</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter & List */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          {/* Category Pills */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all border-2 ${
                  activeCategory === cat 
                    ? 'bg-slate-900 border-slate-900 text-white' 
                    : 'bg-white border-slate-100 text-slate-600 hover:border-emerald-200 hover:text-emerald-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Resource Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((res, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-emerald-100 transition-all hover:shadow-xl hover:shadow-emerald-500/5 cursor-pointer">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-slate-50 text-slate-400 rounded-xl group-hover:bg-emerald-50 group-hover:text-emerald-600 transition-colors">
                    {res.icon}
                  </div>
                  <div className="text-xs font-bold text-slate-300 uppercase tracking-widest">{res.date}</div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors line-clamp-2 uppercase italic leading-tight">
                  {res.title}
                </h3>
                <div className="flex justify-between items-center text-sm font-medium italic pt-6 border-t border-slate-50">
                  <span className="text-slate-400">{res.readTime}</span>
                  <span className="text-emerald-600 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                    Explore <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
             <button className="px-10 py-4 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-emerald-600 hover:text-white transition-all flex items-center gap-3 mx-auto">
                Load More Content <ChevronRight size={18} />
             </button>
          </div>
        </div>
      </section>

      {/* Resource CTA */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto bg-amber-50 rounded-[3rem] p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
             <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 uppercase italic">The Ultimate <span className="text-emerald-600 underline">Creator</span> Stack</h2>
             <p className="text-lg text-slate-600 mb-8 leading-relaxed">
               I've documented every tool, template, and mental model I use to run my business. Download the 50-page PDF guide for free.
             </p>
             <button className="px-8 py-4 bg-slate-900 text-white font-bold rounded-xl hover:bg-emerald-600 transition-all flex items-center gap-3 active:scale-95">
                Download Free Guide <BookOpen size={18} />
             </button>
          </div>
          <div className="md:w-1/2 aspect-square bg-white rounded-3xl shadow-2xl border border-amber-100 relative rotate-2 transition-transform hover:rotate-0 duration-500">
             <div className="absolute inset-0 flex items-center justify-center text-amber-200 text-xl font-black italic uppercase tracking-tighter opacity-20">
               Creator Ecosystem PDF
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}
