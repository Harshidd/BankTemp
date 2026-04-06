"use client";

import React from 'react';
import { Mail, MessageCircle, Phone, ArrowRight, CheckCircle2, Globe, Send, ShieldAlert, Cpu, Layers, GraduationCap, Users } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white text-slate-900 min-h-screen pt-32 lg:pt-56">
      {/* Contact Hero (Engagement Protocol) */}
      <section className="container mx-auto px-4 mb-24 lg:mb-56 text-center relative overflow-hidden animate-in fade-in duration-1000">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-50/50 rounded-full blur-[150px] -z-10 translate-x-1/2" />
         <div className="space-y-12 relative z-10 max-w-5xl mx-auto group">
            <span className="text-[10px] font-black text-blue-600 tracking-[0.4em] uppercase font-mono">Academy Inquiry Protocol</span>
            <h1 className="text-5xl lg:text-[10rem] font-black tracking-tighter text-slate-900 leading-[0.85] uppercase italic transition-all group-hover:scale-[1.02] duration-700">Connect <br/> <span className="text-blue-600 italic underline decoration-blue-100 decoration-8 underline-offset-12">With Us.</span></h1>
            <p className="text-xl lg:text-3xl text-slate-500 leading-relaxed font-black max-w-3xl mx-auto group-hover:text-slate-900 transition-colors">Whether you are a student starting a mastery journey or an educator scaling their classroom, our team is ready to accelerate your transition.</p>
         </div>
      </section>

      {/* Contact Grid (Panel Divide) */}
      <section className="py-24 border-y border-blue-50 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-white skew-x-[45deg] -z-10 translate-x-1/2 shadow-xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-40 items-start max-w-7xl mx-auto">
             
             {/* Left Column: Engagement Channels */}
             <div className="space-y-24">
                <div className="space-y-12 animate-in slide-in-from-left duration-1000">
                   <h2 className="text-4xl lg:text-7xl font-black tracking-tighter text-slate-900 uppercase italic leading-[0.9]">Direct <br/> Academic <br/> Response.</h2>
                   <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-lg transition-all group">Choose your preferred channel of communication. Our specialized support teams respond to inquiry requests in <span className="text-blue-600 underline decoration-blue-50 font-black">sub-2 hour</span> average learning cycles.</p>
                </div>

                <div className="grid grid-cols-1 gap-10 group cursor-default">
                   <div className="flex items-center gap-8 p-12 rounded-[5rem] border border-blue-100 bg-white transition-all cursor-pointer group hover:bg-slate-950 hover:text-white hover:-translate-y-4 hover:shadow-3xl shadow-xl duration-700">
                      <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 flex items-center justify-center text-blue-600 shadow-2xl transition-all">
                         <Mail className="w-10 h-10" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/40">Student Support Protocol</p>
                         <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">learn@example.com</p>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-8 p-12 rounded-[5rem] border border-blue-100 bg-white transition-all cursor-pointer group hover:bg-slate-950 hover:text-white hover:-translate-y-4 hover:shadow-3xl shadow-xl duration-700">
                      <div className="w-20 h-20 rounded-3xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 flex items-center justify-center text-blue-600 shadow-2xl transition-all">
                         <Phone className="w-10 h-10" />
                      </div>
                      <div className="space-y-1">
                         <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 group-hover:text-white/40">Academic Direct</p>
                         <p className="text-2xl sm:text-4xl font-black uppercase tracking-tighter">+1 (800) LEARN-NOW</p>
                      </div>
                   </div>
                </div>

                <div className="space-y-10 pt-16 border-t border-slate-100 group">
                   <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-blue-600 font-mono">Structural Hub Verification</p>
                   <div className="space-y-4">
                      <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none underline decoration-blue-100">Global Academy — learning plaza</p>
                      <p className="text-xl font-bold text-slate-400 tracking-tight leading-relaxed">456 Education Way, Suite 300 <br/> San Francisco, CA 94107</p>
                   </div>
                   <div className="flex items-center gap-4 text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] pt-6 animate-pulse">
                      <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" /> Global Learning Hub Active
                   </div>
                </div>
             </div>

             {/* Right Column: Enrollment Form Panel */}
             <div className="p-12 lg:p-24 rounded-[6rem] border-8 border-slate-50 bg-white shadow-3xl relative overflow-hidden group/form animate-in slide-in-from-right duration-1000">
                <div className="absolute inset-0 bg-blue-600/5 blur-3xl group-hover/form:opacity-10 transition-opacity" />
                <div className="relative z-10 space-y-16">
                   <div className="space-y-6">
                      <h3 className="text-3xl lg:text-6xl font-black tracking-tighter text-slate-900 uppercase italic leading-none transition-all group-hover/form:scale-105">Initialize <br/> Your <span className="text-blue-600 italic underline-offset-8">Account.</span></h3>
                      <p className="text-lg lg:text-xl text-slate-500 font-bold leading-relaxed">Launch your mastery journey today. Complete the protocol to start your first interactive subject.</p>
                   </div>

                   <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Full Name</label>
                            <input type="text" placeholder="John Example" className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner font-bold" />
                         </div>
                         <div className="space-y-4">
                            <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Academic Email</label>
                            <input type="email" placeholder="john@example.edu" className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner font-bold" />
                         </div>
                      </div>

                      <div className="space-y-6">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Segment Type</label>
                         <div className="flex gap-4">
                            <button className="flex-1 py-5 rounded-3xl border border-blue-100 bg-white text-[10px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl">
                               <GraduationCap className="w-4 h-4" /> Learner
                            </button>
                            <button className="flex-1 py-5 rounded-3xl border border-blue-100 bg-white text-[10px] font-black uppercase tracking-widest text-slate-900 hover:bg-slate-950 hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95 shadow-xl">
                               <Users className="w-4 h-4" /> Educator
                            </button>
                         </div>
                      </div>

                      <div className="space-y-4">
                         <label className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 pl-2">Primary Subject Goal</label>
                         <select className="w-full px-10 py-6 rounded-3xl bg-slate-50 border border-slate-100 text-slate-900 placeholder:text-slate-300 focus:outline-none focus:border-blue-500 focus:bg-white transition-all shadow-inner font-black uppercase tracking-widest text-xs appearance-none cursor-pointer">
                            <option>STEM Foundations</option>
                            <option>Digital & AI Mastery</option>
                            <option>Creative Arts & Systems</option>
                            <option>Professional Skill Building</option>
                         </select>
                      </div>

                      <button className="w-full py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-[0.3em] uppercase shadow-3xl transition-all hover:scale-[1.05] active:scale-95 flex items-center justify-center gap-6 group/btn hover:bg-blue-600 hover:text-white">
                         Begin My Journey
                         <Send className="w-5 h-5 group-hover/btn:translate-x-3 group-hover/btn:-translate-y-3 transition-transform" />
                      </button>
                      <p className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400 text-center">By initiating this Protocol, you agree to our structural academic policy.</p>
                   </form>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Social Verification Strip (Edu-DNA) */}
      <section className="py-24 bg-white text-center border-t border-blue-50 relative">
         <div className="absolute inset-0 bg-blue-50/10 -z-10" />
         <div className="container mx-auto px-4 max-w-5xl space-y-12 animate-in fade-in duration-1000">
            <h3 className="text-xl lg:text-3xl font-black uppercase tracking-[0.4em] text-slate-400 italic transition-all hover:text-slate-900 duration-700 underline decoration-yellow-400/40 decoration-4">Academic Status Log Verified</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-32 opacity-20 filter grayscale group">
               {['STEM ALLIANCE', 'TECH ACADEMY', 'FUTURE SCHOOLS', 'ACADEMIC LOGO 1'].map(b => (
                 <span key={b} className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-500 hover:text-blue-600 transition-colors cursor-default transition-all duration-700">{b}</span>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
