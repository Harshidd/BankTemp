"use client";

import React from 'react';
import { ArrowRight, BookOpen, Clock, Tag, Search, ArrowUpRight } from 'lucide-react';

interface ResourcesProps {
  onNavigate: (page: string) => void;
}

const resources = [
  {
    id: 1,
    title: 'The Blueprint for [Niche] Operational Efficiency',
    excerpt: 'Detailed frameworks for mapping your daily workflows into something repeatable, scalable, and stress-free.',
    tag: 'Guide',
    time: '12 min read',
    type: 'Practical'
  },
  {
    id: 2,
    title: 'How to Build an Infinite Referral Machine',
    excerpt: 'Case study: Moving from outbound prospecting into high-trust inbound organic growth.',
    tag: 'Case Study',
    time: '8 min read',
    type: 'Strategy'
  },
  {
    id: 3,
    title: 'Top 10 Systems for Knowledge Management',
    excerpt: 'A review of the structural tools that help clear-thinkers stay ahead of the information wave.',
    tag: 'Tools',
    time: '15 min read',
    type: 'Systems'
  },
  {
    id: 4,
    title: 'Why Most Strategy Meetings Fail (and how to fix mine)',
    excerpt: 'The hidden bias in leadership communication that results in stalled execution.',
    tag: 'Thought Leadership',
    time: '10 min read',
    type: 'Analysis'
  }
];

export default function Resources({ onNavigate }: ResourcesProps) {
  return (
    <main className="bg-stone-50 text-stone-900 pt-16">
      {/* Hero */}
      <section className="py-24 border-b border-stone-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700 font-mono">Resource Center</p>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-stone-900 leading-none">
                Distilled ideas for clear execution.
              </h1>
            </div>
            <p className="text-xl text-stone-500 leading-relaxed max-w-lg">
              Practical thinking for [Target Audience] on building, growing, and operating with specificity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
               <div className="relative flex-grow max-w-md">
                 <input 
                   type="text" 
                   placeholder="Search the hub..." 
                   className="w-full px-5 py-4 pl-12 rounded-full border border-stone-200 focus:outline-none focus:border-amber-600 transition-colors text-sm"
                 />
                 <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
               </div>
            </div>
          </div>
          
          <div className="bg-stone-50 rounded-[3rem] border border-stone-200 p-12 lg:p-16 space-y-8">
             <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">Join 15,000+ Clear Thinkers</p>
                <h3 className="text-3xl font-bold text-stone-900 tracking-tight">One useful idea, once a week.</h3>
                <p className="text-stone-500 text-sm italic">Direct from the front lines of [Niche]. Zero noise.</p>
             </div>
             <div className="space-y-3">
               <input 
                 type="email" 
                 placeholder="yourname@email.com" 
                 className="w-full px-5 py-4 rounded-xl bg-white border border-stone-200 text-sm outline-none focus:border-amber-600 transition-colors shadow-sm"
               />
               <button className="w-full py-4 rounded-xl bg-stone-900 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-600 transition-all shadow-xl">
                 Access the Ideas
               </button>
             </div>
          </div>
        </div>
      </section>

      {/* Categories / Tags Strip */}
      <section className="py-8 bg-white border-b border-stone-100 flex items-center overflow-x-auto whitespace-nowrap scrollbar-hide px-6">
         <div className="max-w-6xl mx-auto flex gap-4 w-full">
            <span className="px-5 py-2 rounded-full bg-amber-600 text-white text-xs font-bold uppercase tracking-widest cursor-pointer shadow-lg shadow-amber-600/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
               <Tag className="w-3 h-3" /> All Insights
            </span>
            {['Strategy', 'Systems', 'Growth', 'Operations', 'Leadership'].map(tag => (
              <span key={tag} className="px-5 py-2 rounded-full bg-stone-100 text-stone-500 text-xs font-bold uppercase tracking-widest cursor-pointer hover:bg-stone-200 hover:text-stone-900 transition-all">
                {tag}
              </span>
            ))}
         </div>
      </section>

      {/* Grid of Resources */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 lg:gap-16">
           {resources.map((item) => (
             <div key={item.id} className="group flex flex-col gap-6 cursor-pointer transform transition-all duration-300">
                <div className="aspect-[16/9] rounded-[2.5rem] bg-stone-200 border border-stone-200 overflow-hidden relative shadow-sm group-hover:shadow-2xl group-hover:border-amber-300 transform group-hover:-translate-y-2 group-hover:rotate-0 rotate-0 transition-all duration-500">
                   <div className="absolute inset-0 bg-gradient-to-tr from-stone-900/10 to-transparent" />
                   <div className="absolute top-6 left-6 flex gap-2">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-black uppercase tracking-widest rounded-lg border border-white/50">{item.tag}</span>
                   </div>
                </div>
                
                <div className="space-y-4 px-2">
                   <div className="flex items-center gap-4 text-xs font-bold text-stone-400 font-mono uppercase tracking-[0.2em]">
                      <span className="flex items-center gap-2 italic"><Clock className="w-3 h-3" /> {item.time}</span>
                      <span className="text-amber-700">{item.type}</span>
                   </div>
                   <h3 className="text-2xl lg:text-3xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-tight">
                      {item.title}
                   </h3>
                   <p className="text-stone-500 leading-relaxed text-sm lg:text-base">
                      {item.excerpt}
                   </p>
                   <div className="pt-4 flex items-center gap-3 text-stone-950 font-black text-xs uppercase tracking-widest group-hover:gap-6 transition-all duration-500">
                      Access Full Content <ArrowUpRight className="w-4 h-4 text-amber-700" />
                   </div>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Final Newsletter Lead Gen */}
      <section className="py-24 bg-stone-900 text-stone-50 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8 animate-in slide-in-from-left duration-1000">
               <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-amber-400 font-mono">Build for Longevity</p>
                  <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">Stop renting space. Build your own.</h2>
               </div>
               <p className="text-lg text-stone-400 leading-relaxed max-w-lg">
                  Social platforms are rented territory. My newsletter is my private channel to share what I'm learning with those who are serious about building something that lasts.
               </p>
            </div>
            
            <div className="relative group">
               <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-400 rounded-[3rem] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
               <div className="relative bg-stone-950 border border-stone-800 rounded-[3rem] p-12 space-y-12 shadow-2xl">
                  <div className="grid grid-cols-1 gap-12">
                     <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-stone-900 border border-stone-800 flex items-center justify-center">
                           <BookOpen className="w-6 h-6 text-amber-400" />
                        </div>
                        <p className="text-2xl font-bold text-white uppercase italic tracking-tighter italic font-black uppercase tracking-widest leading-none pt-1 group uppercase tracking-widest leading-none text-2xl group uppercase tracking-widest leading-none text-white italic group uppercase tracking-widest italic group uppercase font-black tracking-tighter font-black tracking-tighter">"Clear thinking is rare."</p>
                        <p className="text-sm text-stone-500 leading-relaxed italic group uppercase tracking-widest italic font-bold tracking-widest text-stone-500 leading-relaxed">Join the newsletter. Access the ideas that move the needle.</p>
                     </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input 
                      type="email" 
                      placeholder="Enter your email" 
                      className="flex-1 px-5 py-4 rounded-xl bg-stone-900 border border-stone-800 text-sm outline-none focus:border-amber-500 transition-colors text-white"
                    />
                    <button className="px-8 py-4 rounded-xl bg-amber-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-amber-500 transition-all shadow-xl shadow-amber-600/20">
                      Join Free
                    </button>
                  </div>
               </div>
            </div>
        </div>
      </section>
    </main>
  );
}
