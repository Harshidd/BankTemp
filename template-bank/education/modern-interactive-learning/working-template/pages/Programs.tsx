"use client";

import React from 'react';
import { Target, Brain, Target as TargetIcon, Cpu, Atom, BookOpen, Clock, ChevronRight, BarChart3, Database, Code, Globe, MessageCircle, PenTool, LayoutTemplate, Briefcase } from 'lucide-react';

const categories = [
  { id: "stem", label: "STEM Excellence", icon: Atom },
  { id: "tech", label: "Digital & AI", icon: Cpu },
  { id: "creative", label: "Arts & Design", icon: PenTool },
  { id: "professional", label: "Skill Building", icon: Briefcase }
];

const programData = [
  {
    category: "stem",
    title: "Quantum Mechanics Foundation",
    description: "Explore the subatomic world through interactive simulations. Built for curious learners ready to grasp the fundamentals of modern physics.",
    level: "Intermediate",
    time: "14 hours",
    lessons: 28,
    icon: Atom,
    theme: "bg-emerald-500"
  },
  {
    category: "tech",
    title: "Neural Network Architectures",
    description: "Go beyond the black box. Build and train your own deep learning models with step-by-step visual guidance and active problem-solving.",
    level: "Advanced",
    time: "22 hours",
    lessons: 42,
    icon: Cpu,
    theme: "bg-blue-600"
  },
  {
    category: "tech",
    title: "Data Visualization & Analysis",
    description: "Translate complex datasets into intuitive visual stories. Master the protocols for high-density data representation and insight discovery.",
    level: "Advanced",
    time: "18 hours",
    lessons: 34,
    icon: BarChart3,
    theme: "bg-slate-950"
  },
  {
    category: "stem",
    title: "Genetic Engineering Lab",
    description: "Visualize the logic of CRISPR and molecular sequences. Understand the structural DNA of the future through interactive bio-modules.",
    level: "Intermediate",
    time: "12 hours",
    lessons: 20,
    icon: Brain,
    theme: "bg-indigo-600"
  },
  {
    category: "creative",
    title: "Architectural Systems Design",
    description: "Build structural intuition for modern environments. Explore space, physics, and form using high-fidelity digital sandbox interactions.",
    level: "Beginner",
    time: "10 hours",
    lessons: 15,
    icon: LayoutTemplate,
    theme: "bg-amber-500"
  },
  {
    category: "professional",
    title: "Strategic Decision Logic",
    description: "Master the protocol for complex problem solving in business cycles. Eliminate friction in high-velocity professional environments.",
    level: "Intermediate",
    time: "16 hours",
    lessons: 25,
    icon: TargetIcon,
    theme: "bg-rose-600"
  }
];

export default function Programs() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* Subject Center (Categorized Directory) */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 animate-in fade-in duration-1000 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[800px] h-[300px] bg-blue-50/50 rounded-bl-[15rem] -z-10 translate-x-1/2 blur-2xl" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Learning Catalog V2</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic">Structured <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">subject reality.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-black transition-colors group-hover:text-slate-900">Explore our curated collection of interactive subjects. Each program is a structural path from absolute zero to mastery.</p>
         </div>
      </section>

      {/* Category Navigation Loop (Energetic Nav) */}
      <section className="py-12 lg:py-16 border-y border-blue-50 bg-slate-50 sticky top-[80px] z-[40] backdrop-blur-3xl overflow-x-auto scrollbar-hide">
        <div className="container mx-auto px-4 flex items-center justify-center min-w-max gap-8 lg:gap-16">
           {categories.map(c => (
              <button key={c.id} className="flex items-center gap-4 px-8 py-5 rounded-2xl border border-blue-100 bg-white shadow-2xl hover:bg-slate-950 hover:text-white transition-all group active:scale-95">
                 <c.icon className="w-5 h-5 text-blue-600 group-hover:text-yellow-400 group-hover:rotate-12 transition-all" />
                 <span className="text-[10px] font-black uppercase tracking-widest leading-none pt-1">{c.label}</span>
              </button>
           ))}
        </div>
      </section>

      {/* Course Grid (DNA-driven Cards) */}
      <section className="py-24 lg:py-56 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1d4ed803_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed803_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none opacity-50" />
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-stretch">
             {programData.map((p, i) => (
                <div key={p.title} className="p-12 lg:p-16 rounded-[4rem] border border-blue-100 bg-white hover:bg-slate-950 hover:text-white transition-all duration-700 shadow-3xl flex flex-col justify-between group group-hover:scale-105 active:scale-100 animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 100}ms` }}>
                   <div className="space-y-12">
                      <div className="flex items-center justify-between">
                         <div className={`w-16 h-16 rounded-3xl ${p.theme} flex items-center justify-center text-white shadow-2xl transition-all group-hover:scale-110 group-hover:-rotate-6`}>
                            <p.icon className="w-8 h-8" />
                         </div>
                         <div className="text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-white/40 border border-slate-100 p-2 rounded-xl group-hover:border-white/10">{p.category} Protocol</div>
                      </div>
                      <div className="space-y-6 pt-6 border-t border-slate-50 group-hover:border-white/5">
                         <div className="flex gap-4">
                            <span className="text-[9px] font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-tighter group-hover:bg-white/10 group-hover:text-yellow-400">{p.level}</span>
                            <span className="text-[9px] font-black text-slate-400 flex items-center gap-2 group-hover:text-white/60"><Clock className="w-3 h-3" /> {p.time}</span>
                         </div>
                         <h2 className="text-3xl lg:text-4xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter leading-none">{p.title}</h2>
                         <p className="text-lg text-slate-500 font-bold leading-relaxed group-hover:text-slate-400 transition-colors">{p.description}</p>
                      </div>
                   </div>

                   <div className="space-y-6 pt-12 mt-12 border-t border-slate-50 group-hover:border-white/10">
                      <div className="flex items-center justify-between">
                         <div className="flex items-center gap-3">
                            <BookOpen className="w-4 h-4 text-blue-600 group-hover:text-yellow-400" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 group-hover:text-white">{p.lessons} Interactive Lessons</span>
                         </div>
                         <button className="p-4 rounded-2xl bg-slate-950 text-white group-hover:bg-blue-600 transition-all shadow-xl hover:-translate-y-2 active:translate-y-0">
                            <ChevronRight className="w-5 h-5" />
                         </button>
                      </div>
                   </div>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Path Conversions */}
      <section className="py-24 lg:py-56 px-4 bg-white text-center border-t border-blue-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-blue-50/30 -z-10 blur-[150px] animate-pulse" />
         <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 uppercase italic leading-none transition-all group-hover:scale-[1.05]">Can't find a <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-12">subject?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-16 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                  Submit Proposal
                  <ChevronRight className="w-4 h-4 inline-block ml-4 group-hover:translate-x-2" />
               </button>
               <button className="px-12 py-7 rounded-3xl border-4 border-slate-950 text-slate-950 font-black text-sm tracking-widest uppercase transition-all shadow-2xl hover:bg-slate-50 active:scale-95">
                  View Roadmap
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
