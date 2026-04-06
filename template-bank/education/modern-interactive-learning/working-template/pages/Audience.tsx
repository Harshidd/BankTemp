"use client";

import React, { useState } from 'react';
import { Target, Users, GraduationCap, Zap, Brain, Target as TargetIcon, Laptop, BarChart3, ShieldCheck, Repeat, Settings, ArrowRight, CheckCircle2, Bookmark, Layout } from 'lucide-react';

const studentFeatures = [
  { title: "Personalized Paths", text: "Interactive subjects that grow with your mastery. No static lectures—only active structural challenges.", icon: Brain },
  { title: "Sub-ms Feedback", text: "Instant diagnostic feedback on every interaction. Understand the logic behind every concept.", icon: Zap },
  { title: "Global Portfolio", text: "Store your mastery data and prove your skills with verifiable structural achievement logs.", icon: ShieldCheck }
];

const educatorFeatures = [
  { title: "Classroom Orchestration", text: "Monitor real-time student performance gaps. Track individual and group mastery metrics at a glance.", icon: Users },
  { title: "Structural Content Prep", text: "Build 10x more engaging lessons with interactive subject blocks ready for your classroom.", icon: Layout },
  { title: "Adaptive Diagnostic", text: "Identify struggling students before they fail with predictive performance algorithms.", icon: BarChart3 }
];

export default function Audience() {
  const [activeTab, setActiveTab] = useState<'students' | 'educators'>('students');

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* Audience Toggle Center (High-Velocity Interaction) */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center animate-in fade-in duration-1000 overflow-hidden relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/50 rounded-full blur-[150px] -z-10 translate-x-1/2" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Structural Allocation</span>
            <h1 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02]">A system <br/> built <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">for you.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-black group-hover:text-slate-900 transition-colors">Whether you are a lifelong learner or a classroom visionary, [Product] provides the structural logic you need to succeed.</p>
         </div>

         {/* Energy Toggle Switch */}
         <div className="mt-24 flex items-center justify-center gap-6 group">
            <button 
              onClick={() => setActiveTab('students')}
              className={`px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${activeTab === 'students' ? 'bg-slate-950 text-white shadow-3xl' : 'bg-slate-50 text-slate-400 hover:text-slate-900 border border-blue-100'}`}
            >
               For Students
            </button>
            <button 
              onClick={() => setActiveTab('educators')}
              className={`px-12 py-5 rounded-2xl font-black text-[11px] uppercase tracking-widest transition-all ${activeTab === 'educators' ? 'bg-slate-950 text-white shadow-3xl' : 'bg-slate-50 text-slate-400 hover:text-slate-900 border border-blue-100'}`}
            >
               For Educators
            </button>
         </div>
      </section>

      {/* Segment Reveal (Dual Panels) */}
      <section className="py-24 lg:py-56 border-y border-blue-50 bg-slate-50">
         <div className="container mx-auto px-4 animate-in slide-in-from-bottom duration-1000">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-center">
               
               {/* Left: Interactive Illustration/Mockup */}
               <div className="p-12 lg:p-24 rounded-[6rem] border-8 border-white bg-blue-50 shadow-3xl relative group overflow-hidden transition-all hover:-translate-y-4">
                  <div className="absolute top-0 right-0 p-8 opacity-10 filter group-hover:scale-110 transition-all active:grayscale">
                     {activeTab === 'students' ? <GraduationCap className="w-40 h-40 text-blue-600" /> : <Users className="w-40 h-40 text-blue-600" />}
                  </div>
                  <div className="space-y-12 relative z-10 transition-all">
                     <div className="w-16 h-16 rounded-2xl bg-white shadow-2xl flex items-center justify-center text-blue-600 group-hover:rotate-6">
                        {activeTab === 'students' ? <Brain className="w-8 h-8" /> : <BarChart3 className="w-8 h-8" />}
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-3xl lg:text-6xl font-black text-slate-900 uppercase italic tracking-tighter leading-none">{activeTab === 'students' ? 'Active Mastery' : 'Academic Analytics'}</h3>
                        <p className="text-xl text-slate-500 font-bold leading-relaxed">{activeTab === 'students' ? 'Master STEM and skill-building through high-fidelity visual challenges.' : 'Empower your institution with data-driven instructional tools.'}</p>
                     </div>
                     <div className="grid grid-cols-1 gap-4 pt-10">
                        {[1,2,3].map(i => (
                           <div key={i} className="flex gap-4 items-center animate-in slide-in-from-left" style={{ animationDelay: `${i*100}ms` }}>
                             <CheckCircle2 className="w-5 h-5 text-blue-600" />
                             <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors">{activeTab === 'students' ? `Outcome protocol 0${i}` : `Deployment logic 0${i}`}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>

               {/* Right: Feature Grid (Dynamic Context) */}
               <div className="space-y-16">
                  <div className="space-y-10 group">
                    <span className="text-[10px] font-black underline decoration-yellow-400 decoration-4 text-slate-900 uppercase tracking-widest">{activeTab === 'students' ? 'Skill Building Loop' : 'Educational Governance Loop'}</span>
                    <h2 className="text-4xl lg:text-8xl font-black text-slate-900 uppercase italic leading-[0.9] tracking-tighter transition-all hover:scale-105 duration-700">Unified <br/> <span className="text-blue-600 italic underline-offset-8">Execution.</span></h2>
                  </div>

                  <div className="grid grid-cols-1 gap-12">
                     {(activeTab === 'students' ? studentFeatures : educatorFeatures).map((f, i) => (
                       <div key={f.title} className="flex gap-8 group/item hover:pl-4 transition-all pb-10 border-b border-white last:border-b-0 animate-in slide-in-from-right" style={{ animationDelay: `${i*150}ms` }}>
                          <div className="w-16 h-16 rounded-3xl bg-white border border-blue-50 flex items-center justify-center text-blue-600 transition-all group-hover/item:bg-slate-950 group-hover/item:text-white group-hover/item:shadow-3xl group-hover/item:scale-110 shadow-2xl">
                             <f.icon className="w-8 h-8" />
                          </div>
                          <div className="space-y-4 pt-1">
                             <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter group-hover/item:text-blue-600 transition-colors uppercase leading-none">{f.title}</h4>
                             <p className="text-lg text-slate-500 font-bold leading-relaxed">{f.text}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>

            </div>
         </div>
      </section>

      {/* Context Path Conversion */}
      <section className="py-24 lg:py-64 px-4 bg-white text-center border-t border-blue-50 relative overflow-hidden">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-slate-50/60 -z-10 blur-[150px] animate-pulse" />
         <div className="max-w-4xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-9xl font-black tracking-tighter text-slate-900 uppercase italic leading-none transition-all group hover:scale-[1.02]">Ready to <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">begin?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
               <button className="px-16 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                  {activeTab === 'students' ? 'Initialize Student ID' : 'Initialize Educator Portal'}
                  <ArrowRight className="w-5 h-5 inline-block ml-4 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}
