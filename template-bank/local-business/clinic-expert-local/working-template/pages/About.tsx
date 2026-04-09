"use client";

import React from 'react';
import { Target, Heart, ShieldCheck, Users, ArrowRight } from 'lucide-react';

export default function About() {
  const values = [
    { title: 'Specialist Precision', desc: 'We believe in deep expertise over generic solutions. Every treatment is led by a department specialist.', icon: Target },
    { title: 'Human Empathy', desc: 'Clinical excellence means nothing without understanding the human behind the patient data.', icon: Heart },
    { title: 'Rigorous Safety', desc: 'We maintain the highest global standards for clinical safety and data integrity.', icon: ShieldCheck },
    { title: 'Collaborative Care', desc: 'Our experts work as a unified team to ensure a holistic approach to your health.', icon: Users },
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block">Our Practice Story</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
             Founded on <br/><span className="text-indigo-600">Trust</span> & Expertise.
           </h1>
           <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
             From a small specialist consultation room to a leading multi-department clinical group, our journey has always been guided by one principle: Specialized excellence for every patient.
           </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
              <div className="lg:col-span-5 space-y-8">
                 <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">A legacy of clinical <br/>advancements.</h2>
                 <p className="text-lg text-slate-500 leading-relaxed">
                   Established in 2005, Clinic Expert was born from a need for more specialized, expert-led local care. We saw patients struggling with generic medical environments and wanted to create a place where specialized knowledge meets personalized care.
                 </p>
                 <p className="text-slate-500 leading-relaxed">
                   Today, we operate across four major clinical departments, integrating the latest diagnostic technologies with a hand-picked team of specialists who are not just practitioners, but educators in their fields.
                 </p>
                 <div className="pt-6 grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                       <p className="text-3xl font-black text-indigo-600 tracking-tighter italic">2005</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Foundation Year</p>
                    </div>
                    <div className="space-y-1">
                       <p className="text-3xl font-black text-indigo-600 tracking-tighter italic">15k+</p>
                       <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Restored Patients</p>
                    </div>
                 </div>
              </div>
              <div className="lg:col-span-7 relative">
                 <div className="grid grid-cols-2 gap-6 relative z-10">
                    <div className="aspect-[3/4] rounded-[2rem] bg-slate-100 overflow-hidden shadow-2xl mt-12 group">
                       <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600" alt="Clinical Environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                    <div className="aspect-[3/4] rounded-[2rem] bg-slate-100 overflow-hidden shadow-2xl group">
                       <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600" alt="Specialist Consultation" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    </div>
                 </div>
                 {/* Decorative background circle */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[100px] rounded-full -z-10" />
              </div>
           </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-3xl mx-auto space-y-6 mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-400 block">Our Philosophy</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">Built on a foundation <br/>of four core values.</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-all group">
                   <div className="w-12 h-12 bg-indigo-500 rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform shadow-xl shadow-indigo-500/20">
                      <value.icon className="w-6 h-6" />
                   </div>
                   <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                   <p className="text-slate-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
           </div>
        </div>
        {/* Background Accent */}
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full translate-x-1/4 translate-y-1/4" />
      </section>

      {/* Facilities Highlight */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="aspect-video rounded-[3rem] bg-slate-100 overflow-hidden shadow-inner relative group order-last lg:order-first">
                 <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=800" alt="The Clinic Facility" className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center bg-slate-900/10 backdrop-blur-none group-hover:backdrop-blur-sm transition-all duration-700">
                    <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                       View Gallery
                    </button>
                 </div>
              </div>
              <div className="space-y-8">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block">The Patient Experience</span>
                 <h2 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">Clinical environments <br/>designed for <span className="text-indigo-600">focus</span>.</h2>
                 <p className="text-lg text-slate-500 leading-relaxed">
                   We believe the environment plays a critical role in clinical outcomes. Our facilities are designed to be calm, clean, and private, ensuring every consultation happens in a low-friction atmosphere tailored for expert deliberation.
                 </p>
                 <ul className="space-y-4 pt-4">
                    {["Private Consultation Suites", "Advanced Sterile Laboratory", "Premium Recovery Zones", "State-of-the-Art Imaging Center"].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-700">
                         <div className="w-2 h-2 rounded-full bg-indigo-500" />
                         {item}
                      </li>
                    ))}
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 group">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Experience our expertise <br/>first-hand.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto leading-relaxed text-lg">
               Our specialists are ready to discuss your unique clinical requirements and building a personalized health roadmap.
            </p>
            <button className="bg-indigo-600 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-slate-900 transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto">
               Request Specialist Placement <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
         </div>
      </section>

    </div>
  );
}
