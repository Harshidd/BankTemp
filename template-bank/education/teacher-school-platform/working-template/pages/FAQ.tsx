"use client";

import React from 'react';
import { Plus, Minus, Search, GraduationCap, Zap, Settings, ShieldCheck, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQProps {
  onNavigate: (page: string) => void;
}

export default function FAQ({ onNavigate }: FAQProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const faqs = [
    {
      q: 'How does EduPlatform integrate with our existing School Information System (SIS)?',
      a: 'Our platform implements the Universal Education Data Protocol (UEDP), allowing for seamless two-way sync with leading systems like PowerSchool, Infinite Campus, and Google Classroom. Strategic integration support is available in our Institutional tier.'
    },
    {
      q: 'Is the platform compliant with international student data privacy laws?',
      a: 'Absolute security is our foundation. We are fully compliant with GDPR, FERPA, and COPPA standards, utilizing enterprise-grade encryption and role-based access controls to safeguard institutional data.'
    },
    {
      q: 'Can individual teachers use the platform independently from their district?',
      a: 'Yes. Our "Educator First" protocol allows individual teachers to start for free. Once your classroom sees success, institutional adoption can be initialized via our school-partnership team.'
    },
    {
      q: 'What reporting formats are available for academic progress tracking?',
      a: 'We provide real-time dynamic dashboards, automated PDF reports for parent meetings, and longitudinal CSV exports for district-wide academic research and planning.'
    },
    {
      q: 'How long does the institutional implementation protocol take?',
      a: 'For single classrooms, setup is instant. For districts and school networks, our Tiered Onboarding takes between 1 to 4 academic weeks, depending on the complexity of legacy data integration.'
    },
    {
      q: 'Is there a professional development hub for staff training?',
      a: 'Yes. Every Institutional plan includes access to our EDU-Dev Hub, providing certified training modules for teachers to master our management and reporting protocols.'
    }
  ];

  return (
    <div className="flex flex-col bg-white">
      {/* 1. FAQ System Hero */}
      <section className="py-24 lg:py-48 bg-slate-50 border-b border-slate-100 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 space-y-12">
           <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
              <div className="space-y-8 max-w-2xl">
                 <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.5em] font-mono">Resource Protocol 08</h4>
                 <h1 className="text-5xl lg:text-[10rem] font-black text-slate-900 tracking-tighter uppercase italic leading-[0.85]">Strategic <br /> <span className="text-amber-500 italic">Information</span></h1>
                 <p className="text-xl lg:text-3xl text-slate-400 font-bold leading-tight uppercase tracking-widest italic pt-1 uppercase italic font-black">
                   Everything you need to know about implementing the EduPlatform infrastructure in your classroom.
                 </p>
              </div>
              <div className="relative w-full lg:w-96">
                 <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" />
                 <input type="text" placeholder="Search Academic Knowledge..." className="w-full bg-white border border-slate-200 rounded-3xl px-16 py-6 text-xs font-black uppercase tracking-[0.2em] focus:outline-none focus:border-amber-500 transition-colors shadow-sm" />
              </div>
           </div>
        </div>
      </section>

      {/* 2. Accordion Hub */}
      <section className="py-32 lg:py-64">
        <div className="container mx-auto px-6 max-w-4xl">
           <div className="space-y-8">
              {faqs.map((faq, idx) => (
                <div key={idx} className="group border-b border-slate-100 last:border-0 pb-8 animate-in fade-in" style={{ animationDelay: `${idx * 100}ms` }}>
                   <button 
                     onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                     className="w-full flex items-center justify-between py-8 text-left group"
                   >
                      <h3 className={cn(
                        "text-xl lg:text-3xl font-black italic tracking-tighter uppercase transition-colors uppercase italic font-black",
                        openIndex === idx ? "text-amber-500" : "text-slate-900 group-hover:text-amber-500"
                      )}>{faq.q}</h3>
                      <div className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all",
                        openIndex === idx ? "bg-slate-950 text-white rotate-0" : "bg-slate-50 text-slate-400 group-hover:bg-amber-50 group-hover:text-amber-600 rotate-90"
                      )}>
                         {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                      </div>
                   </button>
                   {openIndex === idx && (
                     <div className="animate-in slide-in-from-top duration-300 pb-8 pr-12">
                        <p className="text-lg text-slate-400 font-bold uppercase tracking-widest italic leading-relaxed pt-1 uppercase italic font-black italic">
                          {faq.a}
                        </p>
                     </div>
                   )}
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* 3. Logical Breakdown (Categories) */}
      <section className="py-32 bg-slate-50 border-y border-slate-100">
         <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { i: ShieldCheck, t: 'Security & Compliance', d: 'Data protection standards and protocols.' },
              { i: Settings, t: 'Account Management', d: 'Roles, school setups, and access hierarchy.' },
              { i: Zap, t: 'Technical Integration', d: 'SIS sync and data infrastructure sync.' },
              { i: GraduationCap, t: 'Instructional Help', d: 'How to maximize classroom engagement.' }
            ].map(cat => (
              <div key={cat.t} className="p-12 rounded-[3.5rem] bg-white border border-slate-100 space-y-8 group hover:shadow-2xl hover:scale-[1.05] transition-all cursor-pointer">
                 <div className="w-16 h-16 rounded-3xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-sm">
                    <cat.i className="w-7 h-7" />
                 </div>
                 <div className="space-y-3">
                    <h4 className="text-sm font-black text-slate-900 uppercase italic tracking-tighter leading-tight italic pt-1 group uppercase italic font-black italic uppercase italic font-black">{cat.t}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed pt-1 uppercase italic font-black italic">{cat.d}</p>
                 </div>
                 <ArrowRight className="w-5 h-5 text-slate-200 group-hover:text-amber-500 transition-colors" />
              </div>
            ))}
         </div>
      </section>

      {/* 4. Strategic FAQ Footer */}
      <section className="py-24 lg:py-48 bg-white text-center">
         <div className="container mx-auto px-6 max-w-4xl space-y-16">
            <div className="w-24 h-24 rounded-full bg-amber-50 text-amber-500 flex items-center justify-center mx-auto shadow-xl shadow-amber-500/10">
               <HelpCircle className="w-12 h-12" />
            </div>
            <h2 className="text-4xl lg:text-7xl font-black text-slate-900 tracking-tighter uppercase italic pt-1 group uppercase italic font-black italic leading-[0.9]">Still Have Strategic <br /> <span className="text-amber-500">Uncertainty?</span></h2>
            <p className="text-xl text-slate-400 font-bold uppercase tracking-widest italic pt-1 italic font-black">Our educational engineers are always available for high-level technical consultation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8">
               <button 
                  onClick={() => onNavigate('contact')}
                  className="px-16 py-8 rounded-[2.5rem] bg-slate-950 text-white font-black text-xs tracking-widest uppercase hover:bg-amber-500 hover:scale-110 active:scale-95 transition-all shadow-3xl"
               >
                  Connect With Support Protocol
               </button>
               <button 
                  onClick={() => onNavigate('pricing')}
                  className="px-16 py-8 rounded-[2.5rem] bg-slate-100 text-slate-400 font-black text-xs tracking-widest uppercase hover:bg-slate-200 transition-all font-black pt-1 uppercase italic font-black"
               >
                  Review Training Levels
               </button>
            </div>
         </div>
      </section>
    </div>
  );
}

const cn = (...classes: any[]) => classes.filter(Boolean).join(' ');
