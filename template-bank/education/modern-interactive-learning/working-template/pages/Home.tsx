"use client";

import React from 'react';
import { BookOpen, GraduationCap, Zap, CheckCircle, ArrowRight, Star, Users, Brain, Target, Sparkles, BookCheck } from 'lucide-react';

export default function Home() {
  return (
    <>
      {/* 1. Education Hero (Interactive Learning Framing) */}
      <section className="relative pt-32 lg:pt-64 pb-24 lg:pb-56 overflow-hidden bg-white">
         <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-50/50 rounded-bl-[20rem] -z-10 translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
               {/* Impact Content */}
               <div className="flex-1 space-y-12 animate-in fade-in slide-in-from-left duration-1000">
                  <div className="space-y-6">
                     <span className="px-6 py-2.5 rounded-full bg-blue-50 text-blue-600 font-black text-xs uppercase tracking-widest border border-blue-100 flex items-center gap-3 w-fit">
                        <Sparkles className="w-4 h-4 fill-blue-600" />
                        Next-Gen Interactive Mastery
                     </span>
                     <h1 className="text-5xl lg:text-9xl font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic">Master <br/> complex <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-8">concepts.</span></h1>
                     <p className="text-xl lg:text-2xl text-slate-500 max-w-xl leading-relaxed font-semibold transition-all hover:text-slate-900">
                        Stop watching, start doing. Our interactive platform translates abstract learning into active mastery through practice-first feedback loops.
                     </p>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-8">
                     <button className="px-20 py-7 rounded-3xl bg-blue-600 text-white font-black text-sm tracking-widest uppercase hover:bg-blue-500 shadow-3xl transition-all hover:scale-110 hover:-rotate-2 active:scale-95 flex items-center gap-4 group/btn">
                        Get Started Free
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                     </button>
                     <div className="flex gap-4 items-center group cursor-pointer">
                        <div className="flex -space-x-3">
                           {[1,2,3].map(i => <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 shadow-xl" />)}
                        </div>
                        <div className="flex flex-col leading-none">
                           <span className="text-[11px] font-black uppercase text-slate-900 tracking-[0.2em]">Join 10k+ Learners</span>
                           <span className="text-[10px] font-bold text-slate-400">Trusted by top academies</span>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Interactive Visual Mockup (Simulated Learning Dashboard) */}
               <div className="flex-1 w-full p-8 lg:p-16 rounded-[4rem] border-8 border-slate-50 bg-white shadow-3xl pointer-events-none group relative overflow-hidden transition-all group-hover:scale-[1.02]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Simple simulation of an interactive course module */}
                  <div className="space-y-8">
                     <div className="flex items-center justify-between pb-8 border-b border-slate-100">
                        <div className="w-48 h-10 bg-slate-950 rounded-2xl" />
                        <div className="flex gap-4">
                           <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse" />
                           <div className="w-4 h-4 rounded-full bg-slate-200" />
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-8">
                        {[1,2,3,4].map(i => (
                          <div key={i} className={`p-8 rounded-3xl border border-slate-950/5 group-hover:border-blue-500/20 transition-all ${i === 2 ? 'bg-blue-600 shadow-2xl' : 'bg-white shadow-xl opacity-40'}`}>
                             <div className={`w-12 h-3 rounded-full mb-6 ${i === 2 ? 'bg-white/40' : 'bg-slate-100'}`} />
                             <div className={`w-full h-3 rounded-full ${i === 2 ? 'bg-white' : 'bg-slate-100'}`} />
                          </div>
                        ))}
                     </div>
                     <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex items-center justify-between group-hover:bg-blue-50 transition-colors">
                        <div className="w-40 h-4 bg-slate-200 rounded-full" />
                        <div className="w-16 h-10 bg-slate-950 rounded-2xl flex items-center justify-center font-black text-[10px] text-white">SUBMIT</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 2. Subjects / Program Categories Preview (Energetic Layout) */}
      <section className="py-24 lg:py-56 bg-slate-50 border-y border-blue-50 overflow-hidden relative">
         <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#1d4ed803_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed803_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
         <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-24 lg:mb-40 space-y-10 group">
               <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Global Program Directory</span>
               <h2 className="text-4xl lg:text-9xl font-black tracking-tight text-slate-900 mb-6 uppercase leading-none italic">Discover <br/> Your <span className="underline decoration-yellow-400 decoration-8 underline-offset-12">Path.</span></h2>
               <p className="text-xl lg:text-3xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-black transition-colors group-hover:text-slate-900">Choose from dozens of structured subjects designed for functional mastery.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
               {[
                  { icon: Zap, title: "STEM Logic", level: "Beginner", theme: "bg-blue-600" },
                  { icon: Brain, title: "Data Science", level: "Advanced", theme: "bg-slate-900" },
                  { icon: Target, title: "Financial Literacy", level: "Intermediate", theme: "bg-emerald-600" },
                  { icon: BookOpen, title: "Digital Creativity", level: "Foundation", theme: "bg-indigo-600" }
               ].map((c, i) => (
                 <div key={i} className="group p-12 rounded-[4rem] border border-blue-100 bg-white hover:bg-slate-950 transition-all duration-700 shadow-3xl hover:-translate-y-6 pt-16 relative overflow-hidden animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 150}ms` }}>
                    <div className="absolute top-8 right-8 px-4 py-2 rounded-xl bg-slate-50 text-slate-400 font-black text-[9px] uppercase tracking-widest leading-none group-hover:bg-white/10 group-hover:text-white transition-colors">{c.level}</div>
                    <div className={`w-20 h-20 rounded-3xl ${c.theme} flex items-center justify-center text-white mb-16 shadow-2xl transition-all group-hover:scale-125 group-hover:rotate-6`}>
                       <c.icon className="w-10 h-10" />
                    </div>
                    <div className="space-y-6">
                       <h3 className="text-3xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter leading-none">{c.title}</h3>
                       <button className="flex items-center gap-4 text-[10px] font-black text-blue-600 group-hover:text-yellow-400 uppercase tracking-widest group-hover:pl-4 transition-all">
                          Browse Courses <ArrowRight className="w-4 h-4" />
                       </button>
                    </div>
                 </div>
               ))}
            </div>

            <div className="mt-40 text-center">
               <button className="px-12 py-6 rounded-3xl border-4 border-slate-950 hover:bg-slate-950 hover:text-white text-slate-950 font-black text-xs tracking-widest uppercase transition-all shadow-xl active:scale-95 group">
                  Explore All Programs <div className="inline-block w-8 h-px bg-slate-950 group-hover:bg-white ml-6 transition-all" />
               </button>
            </div>
         </div>
      </section>

      {/* 3. Learning Method Overview (High-Velocity Process DNA) */}
      <section className="py-24 lg:py-56 bg-white overflow-hidden relative">
         <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-24 lg:gap-48">
               {/* Left Visual: Multi-Layered Step Cards */}
               <div className="flex-1 relative w-full h-[600px] group cursor-default">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[100px] -z-10 animate-pulse" />
                  
                  {[1,2,3].map(i => (
                    <div key={i} className={`absolute w-full sm:w-[400px] p-10 rounded-[4rem] border border-blue-50 bg-white shadow-3xl group-hover:scale-105 transition-all duration-700 animate-in slide-in-from-left-20 overflow-hidden ${i === 1 ? 'top-0 left-0 z-30' : i === 2 ? 'top-[40%] right-0 z-20 opacity-60' : 'bottom-0 left-[10%] z-10 opacity-30'}`}>
                       <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 -skew-x-12 translate-x-1/2 translate-y-1/2" />
                       <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white mb-10 shadow-2xl relative z-10">
                          {i === 1 ? <Brain className="w-8 h-8" /> : i === 2 ? <Target className="w-8 h-8" /> : <CheckCircle className="w-8 h-8" />}
                       </div>
                       <h4 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter leading-none mb-6">{i === 1 ? 'Explain' : i === 2 ? 'Master' : 'Apply'}</h4>
                       <div className="space-y-3">
                          <div className="w-full h-3 bg-slate-100 rounded-full" />
                          <div className="w-2/3 h-3 bg-slate-100 rounded-full opacity-50" />
                       </div>
                    </div>
                  ))}
               </div>

               {/* Right Content */}
               <div className="flex-1 space-y-16 animate-in fade-in slide-in-from-right duration-1000">
                  <div className="space-y-8">
                     <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">The Mastery Loop</span>
                     <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900 mb-6 uppercase italic leading-none">Learning <br/> that <span className="text-blue-600 underline decoration-blue-100 decoration-8 underline-offset-8 italic">sticks.</span></h2>
                     <p className="text-xl lg:text-3xl text-slate-400 font-black leading-relaxed transition-colors hover:text-slate-900 cursor-default">
                        Our three-step mastery cycle ensures that theoretical knowledge is instantly converted into practical intuition.
                     </p>
                  </div>
                  
                  <div className="space-y-12">
                     {[
                        { title: "Dynamic Explanation", text: "Visual, guided introductions that simplify the most complex concepts into digestible insights." },
                        { title: "Interactive Iteration", text: "Practice through active participation. No multiple-choice traps—just real problem solving." },
                        { title: "Strategic Mastery", text: "Adaptive feedback loops that identify and eliminate your unique structural gaps." }
                     ].map((step, i) => (
                       <div key={i} className="flex gap-8 group hover:pl-6 transition-all pb-12 border-b border-slate-100 last:border-b-0 cursor-default">
                          <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center font-black text-slate-300 transition-all group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-6 text-sm shadow-xl">0{i+1}</div>
                          <div className="space-y-4 pt-1">
                             <h4 className="text-xl font-black text-slate-900 uppercase tracking-tighter group-hover:text-blue-600 transition-colors uppercase leading-none">{step.title}</h4>
                             <p className="text-lg text-slate-500 font-bold leading-relaxed">{step.text}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 4. Trust/Proof Block (Educational Validation) */}
      <section className="py-24 bg-slate-50 border-y border-blue-50 text-center relative overflow-hidden">
         <div className="container mx-auto px-4 relative z-10 max-w-7xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 opacity-20 filter grayscale group">
               {['ACADEMIC LOGO 1', 'STEM ALLIANCE', 'TECH ACADEMY', 'FUTURE SCHOOLS'].map(b => (
                 <span key={b} className="text-[11px] lg:text-[13px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-600 transition-colors cursor-default">{b}</span>
               ))}
            </div>
         </div>
      </section>

      {/* 5. Audience Alignment (Dual Direction) */}
      <section className="py-24 lg:py-56 bg-white overflow-hidden">
         <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-stretch max-w-7xl mx-auto">
               {[
                  { title: "For Students", text: "Master STEM and skill-building subjects through active learning. Build intuition and confidence without boring lectures.", cta: "Start Learning", icon: GraduationCap },
                  { title: "For Educators", text: "Empower your classroom with interactive tools that track progress and identify student gaps automatically.", cta: "Academic Portal", icon: Users }
               ].map((a, i) => (
                 <div key={i} className="group p-12 lg:p-24 rounded-[4.5rem] border-8 border-slate-50 bg-white hover:bg-slate-950 transition-all duration-700 shadow-3xl hover:-translate-y-8 flex flex-col justify-between animate-in slide-in-from-bottom" style={{ animationDelay: `${i * 300}ms` }}>
                    <div className="space-y-12">
                       <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:-rotate-6 transition-all shadow-2xl">
                          <a.icon className="w-10 h-10" />
                       </div>
                       <div className="space-y-6">
                          <h3 className="text-4xl lg:text-7xl font-black text-slate-900 group-hover:text-white uppercase italic tracking-tighter leading-none">{a.title}</h3>
                          <p className="text-xl text-slate-400 group-hover:text-slate-300 font-black leading-relaxed">{a.text}</p>
                       </div>
                    </div>
                    <button className="mt-20 px-12 py-6 rounded-3xl border-4 border-slate-900 text-slate-900 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-500/0 group-hover:shadow-blue-500/20 active:scale-95">
                       {a.cta}
                    </button>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* 6. Learning Conversion Path (Strong CTA) */}
      <section className="py-24 lg:py-64 px-4 bg-white relative overflow-hidden text-center border-t border-blue-50">
         <div className="absolute top-0 left-0 w-full h-full bg-blue-50/20 -z-10 -skew-y-6 translate-y-1/2 rounded-t-[20rem]" />
         <div className="max-w-6xl mx-auto space-y-16 animate-in slide-in-from-bottom duration-1000">
            <h2 className="text-5xl lg:text-[11rem] font-black text-slate-900 tracking-tighter leading-[0.85] uppercase italic transition-all hover:scale-[1.02]">Ready to <br/> be <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">brilliant?</span></h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
               <button className="px-16 py-7 rounded-3xl bg-slate-950 text-white font-black text-sm tracking-widest uppercase shadow-3xl transition-all hover:scale-110 active:scale-95 group">
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 inline-block ml-6 group-hover:translate-x-2 transition-transform" />
               </button>
               <button className="px-12 py-7 rounded-3xl border-4 border-slate-950 text-slate-950 font-black text-sm tracking-widest uppercase transition-all shadow-2xl hover:bg-slate-50 active:scale-95">
                  Browse Subjects
               </button>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] pt-12">No credit card required to start your first 05 lessons</p>
         </div>
      </section>
    </>
  );
}
