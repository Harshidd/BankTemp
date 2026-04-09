"use client";

import React from 'react';
import { Award, BookOpen, GraduationCap, Star, ArrowUpRight, ShieldCheck } from 'lucide-react';

export default function Team() {
  const specialists = [
    {
      name: "Dr. Arthur Specialist",
      role: "Lead Clinical Director",
      specialty: "Diagnostic Medicine",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=600",
      education: "MA, MD PhD - Harvard Medical",
      focus: "Clinical Diagnostics & Systemic Wellness"
    },
    {
       name: "Dr. Sarah Expert",
       role: "Senior Consultant",
       specialty: "Regenerative Treatment",
       image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=600",
       education: "MD, Board Certified - Johns Hopkins",
       focus: "Non-invasive Tissue Recovery"
    },
    {
       name: "Dr. Marcus Clinical",
       role: "Department Head",
       specialty: "Therapeutic Science",
       image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=600",
       education: "MD, MSc - Stanford Medicine",
       focus: "Pathology Reduction & Chronic Care"
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Page Header */}
      <section className="bg-white pt-32 pb-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 block">World-Class Expertise</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]">
             Our Expert <br/><span className="text-indigo-600">Specialist Team</span>.
           </h1>
           <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
             Beyond titles, our specialists are leaders in their respective fields, committed to a culture of research-driven care and patient empathy.
           </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              {specialists.map((doc, idx) => (
                <div key={idx} className="group relative">
                   <div className="aspect-[4/5] rounded-[3rem] overflow-hidden bg-slate-200 shadow-xl mb-8 relative">
                      <img 
                        src={doc.image} 
                        alt={doc.name} 
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-6 left-6 right-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                         <button className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white py-3 rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-white hover:text-slate-900 transition-all">
                            View Professional Bio
                         </button>
                      </div>
                   </div>
                   
                   <div className="space-y-4 px-2 text-center md:text-left">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                         <h3 className="text-2xl font-black text-slate-900">{doc.name}</h3>
                         <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md">{doc.specialty}</span>
                      </div>
                      <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-none">{doc.role}</p>
                      <div className="h-px bg-slate-100 my-4" />
                      <div className="space-y-2">
                         <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-xs">
                            <GraduationCap className="w-4 h-4 text-indigo-500" />
                            <span>{doc.education}</span>
                         </div>
                         <div className="flex items-center justify-center md:justify-start gap-2 text-slate-500 text-xs">
                            <Star className="w-4 h-4 text-indigo-500" />
                            <span>Focus: {doc.focus}</span>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Credentials Banner */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale grayscale-0 contrast-125 transition-all hover:opacity-100 hover:grayscale-0">
              <div className="flex items-center gap-3">
                 <Award className="w-8 h-8 text-indigo-600" />
                 <span className="font-black text-xl italic">BoardCertified</span>
              </div>
              <div className="flex items-center gap-3">
                 <ShieldCheck className="w-8 h-8 text-indigo-600" />
                 <span className="font-black text-xl italic">QualitestPlus</span>
              </div>
              <div className="flex items-center gap-3">
                 <BookOpen className="w-8 h-8 text-indigo-600" />
                 <span className="font-black text-xl italic">MedReserch</span>
              </div>
              <div className="flex items-center gap-3">
                 <Star className="w-8 h-8 text-indigo-600" />
                 <span className="font-black text-xl italic">FiveStarPractice</span>
              </div>
           </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl space-y-8">
           <h2 className="text-3xl font-black text-slate-900 tracking-tight">Committed to Clinical Excellence?</h2>
           <p className="text-slate-500 leading-relaxed">
             We are always looking for specialist talent to join our experts and help redefine local clinical standards. If you are a specialist in diagnostics or restorative care, we want to hear from you.
           </p>
           <button className="bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-indigo-600 transition-all flex items-center justify-center gap-3 mx-auto shadow-2xl">
              Career Opportunities <ArrowUpRight className="w-4 h-4" />
           </button>
        </div>
      </section>
    </div>
  );
}
