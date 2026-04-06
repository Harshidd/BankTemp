"use client";

import React from 'react';
import { Mail, MessageSquare, Phone, Globe, ShieldCheck, ArrowRight, Zap, Target, Users } from 'lucide-react';

interface ContactProps {
  onNavigate: (page: string) => void;
}

export default function Contact({ onNavigate }: ContactProps) {
  const [formState, setFormState] = React.useState('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="flex flex-col bg-white">
      {/* 1. High-Friction/Low-Friction Contact Hero */}
      <section className="py-24 lg:py-48 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12 animate-in slide-in-from-left">
            <div className="space-y-8">
               <h4 className="text-[10px] font-black text-blue-500 uppercase tracking-[0.4em] font-mono">Communication Protocol 07</h4>
               <h1 className="text-5xl lg:text-[10rem] font-black tracking-tighter italic uppercase leading-[0.85]">
                 Strategic <br /> <span className="opacity-40 italic">Demo</span> <br /> Request
               </h1>
            </div>
            <p className="text-xl lg:text-3xl text-slate-400 font-bold max-w-2xl leading-tight uppercase tracking-widest italic pt-1 uppercase italic font-black italic">
              Empower your institution with a customized walkthrough of our classroom and administrative modules.
            </p>
            
            <div className="grid grid-cols-1 gap-12 pt-12 border-t border-white/10">
               <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/10">
                     <Target className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic pt-1 italic leading-none pt-1">Institutional Focal Point</p>
                     <p className="text-lg font-black text-white uppercase italic tracking-tighter pt-1 group uppercase italic font-black italic leading-none pt-1">Partnerships & Districts</p>
                  </div>
               </div>
               <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-xl shadow-emerald-500/10">
                     <Users className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                     <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest italic pt-1 italic leading-none pt-1">Academic Reach Hub</p>
                     <p className="text-lg font-black text-white uppercase italic tracking-tighter pt-1 group uppercase italic font-black italic leading-none pt-1">Teacher Network Support</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Contact Logic Form */}
          <div className="relative animate-in slide-in-from-bottom duration-1000">
             <div className="p-12 lg:p-20 rounded-[5rem] bg-white text-slate-900 border border-slate-100 shadow-3xl">
                {formState === 'success' ? (
                  <div className="py-20 text-center space-y-12 animate-in zoom-in">
                     <div className="w-24 h-24 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/10 rotate-12">
                        <ShieldCheck className="w-12 h-12" />
                     </div>
                     <div className="space-y-6">
                        <h3 className="text-4xl font-black italic tracking-tighter leading-none pt-1 group uppercase italic font-black italic uppercase italic font-black">Protocol Initialized</h3>
                        <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.3em] font-mono">Our strategic partners will reach out within 1 academic day.</p>
                     </div>
                     <button onClick={() => setFormState('idle')} className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline underline-offset-8">New Demonstration Request</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div className="space-y-4">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic font-mono">Academic Label</label>
                           <input type="text" required placeholder="Dr. Sarah Thompson" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest italic pt-1 uppercase italic font-black focus:border-blue-500 focus:outline-none transition-colors" />
                        </div>
                        <div className="space-y-4">
                           <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic font-mono">Institutional Contact</label>
                           <input type="email" required placeholder="sarah@district-north.edu" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest italic pt-1 uppercase italic font-black focus:border-blue-500 focus:outline-none transition-colors" />
                        </div>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic font-mono">Institutional Scale</label>
                        <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest italic pt-1 uppercase italic font-black focus:border-blue-500 focus:outline-none transition-colors appearance-none">
                           <option>Individual Classroom Protocol</option>
                           <option>Primary School Scale</option>
                           <option>Secondary School District</option>
                           <option>Tertiary/Higher Ed Network</option>
                        </select>
                     </div>
                     <div className="space-y-4">
                        <label className="text-[9px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic font-mono">Strategic Context</label>
                        <textarea rows={4} placeholder="How can our infrastructure empower your students?" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-xs font-bold uppercase tracking-widest italic pt-1 uppercase italic font-black focus:border-blue-500 focus:outline-none transition-colors" />
                     </div>
                     <button type="submit" disabled={formState === 'submitting'} className={cn(
                        "w-full py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-widest uppercase hover:bg-blue-600 transition-all shadow-3xl flex items-center justify-center gap-6 active:scale-95",
                        formState === 'submitting' && "opacity-50 cursor-not-allowed"
                     )}>
                        {formState === 'submitting' ? 'Initializing Strategic Setup...' : 'Request Institutional Demo'}
                        <ArrowRight className="w-6 h-6" />
                     </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </section>

      {/* 2. Alternative Channels Strip */}
      <section className="py-24 bg-white border-t border-slate-100">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-32">
            {[
              { i: Mail, t: 'Email Protocol', v: 'partners@eduplatform.sys' },
              { i: MessageSquare, t: 'Strategic Chat', v: 'Live Network Active' },
              { i: Phone, t: 'District Support', v: '+1 (800) EDU-CORE' }
            ].map(ch => (
              <div key={ch.t} className="flex flex-col items-center text-center space-y-6 group cursor-help">
                 <div className="w-16 h-16 rounded-3xl bg-slate-50 text-slate-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <ch.i className="w-6 h-6" />
                 </div>
                 <div className="space-y-2">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic pt-1 italic leading-none pt-1">{ch.t}</p>
                    <p className="text-sm font-black text-slate-900 uppercase italic tracking-tighter pt-1 group uppercase italic font-black italic">{ch.v}</p>
                 </div>
              </div>
            ))}
         </div>
      </section>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
