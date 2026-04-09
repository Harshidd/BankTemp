"use client";

import React from 'react';
import { Activity, Beaker, Heart, ShieldCheck, Microscope, Zap, Clipboard, ArrowRight } from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: "Core Clinical Specialties",
      description: "Our primary expertise areas led by board-certified department heads.",
      items: [
        { name: "Advanced Diagnostics", icon: Microscope, detail: "Comprehensive imaging and laboratory analysis using state-of-the-art medical technology." },
        { name: "Restorative Treatment", icon: Heart, detail: "Specialized rehabilitation and healing protocols tailored to individual clinical requirements." },
        { name: "Preventive Care", icon: ShieldCheck, detail: "Proactive health monitoring and wellness assessments to ensure long-term stability." }
      ]
    },
    {
      title: "Specialist Treatments",
      description: "Focused medical interventions for specific pathology and complex cases.",
      items: [
        { name: "Surgical Consultations", icon: Beaker, detail: "Pre-and-post operative expert evaluation for orthopedic and complex surgical cases." },
        { name: "Regenerative Medicine", icon: Activity, detail: "Modern biological treatments designed to promote natural tissue recovery and growth." },
        { name: "Metabolic Support", icon: Zap, detail: "Evidence-based nutritional and metabolic optimization for chronic health conditions." }
      ]
    }
  ];

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-white pt-32 pb-20 border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
           <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600 mb-6 block">Our Specialties</span>
           <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight">
             Comprehensive <br/>Clinical <span className="text-indigo-600">Specialties</span>.
           </h1>
           <p className="mt-8 text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
             We combine years of clinical experience with modern research to provide a spectrum of services designed for precision, outcomes, and patient comfort.
           </p>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
      </section>

      {/* Services Grid */}
      {serviceCategories.map((category, catIdx) => (
        <section key={catIdx} className={`py-24 ${catIdx % 2 !== 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-16">
               <h2 className="text-3xl font-black text-slate-900 mb-4">{category.title}</h2>
               <p className="text-slate-500 leading-relaxed">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {category.items.map((service, idx) => (
                 <div key={idx} className="bg-white p-10 rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100 hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 group">
                    <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                       <service.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-black text-slate-900 mb-4">{service.name}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed mb-8">
                       {service.detail}
                    </p>
                    <ul className="space-y-3">
                       {["Specialist-led Care", "Detailed Reporting", "follow-up Plan"].map((feature, fIdx) => (
                         <li key={fIdx} className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                            {feature}
                         </li>
                       ))}
                    </ul>
                 </div>
               ))}
            </div>
          </div>
        </section>
      ))}

      {/* Patient Flow CTA */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div className="space-y-8">
                  <h2 className="text-4xl font-black tracking-tight leading-tight">Patient-First Care <br/><span className="text-indigo-400">Simplified Flow</span></h2>
                  <div className="space-y-6">
                     {[
                       { step: '01', title: 'Specialist Consultation', desc: 'Book a 45-minute expert evaluation session.' },
                       { step: '02', title: 'Precision Diagnostics', desc: 'Undergo targeted testing and data collection.' },
                       { step: '03', title: 'Outcome Review', desc: 'Receive a personalized medical action plan.' }
                     ].map((item, idx) => (
                       <div key={idx} className="flex gap-6 group">
                          <span className="text-2xl font-black text-indigo-500/30 group-hover:text-indigo-400 transition-colors">{item.step}</span>
                          <div>
                             <h4 className="font-bold text-white mb-1">{item.title}</h4>
                             <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               <div className="relative group">
                  <div className="bg-white/5 backdrop-blur-xl p-10 lg:p-16 rounded-[4rem] border border-white/10 shadow-3xl text-center space-y-8">
                     <div className="w-20 h-20 bg-indigo-600 rounded-3xl mx-auto flex items-center justify-center text-white shadow-2xl">
                        <Clipboard className="w-10 h-10" />
                     </div>
                     <h3 className="text-2xl font-black">Not sure which specialty you need?</h3>
                     <p className="text-slate-400 leading-relaxed">
                        Start with a general expert consultation and we will guide you to the right clinical department.
                     </p>
                     <button className="w-full bg-white text-slate-900 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-indigo-400 hover:text-white transition-all active:scale-95 shadow-2xl">
                        Contact Intake Team
                     </button>
                  </div>
                  {/* Decorative Glows */}
                  <div className="absolute top-0 left-0 w-32 h-32 bg-indigo-500/20 blur-[80px] rounded-full -translate-x-1/2 -translate-y-1/2" />
               </div>
            </div>
         </div>
      </section>

    </div>
  );
}
