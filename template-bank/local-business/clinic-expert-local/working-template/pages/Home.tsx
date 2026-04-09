"use client";

import React from 'react';
import { ArrowRight, Activity, ShieldCheck, Heart, Sparkles, UserCheck, Calendar, ChevronRight } from 'lucide-react';

interface HomeProps {
  onPageChange: (page: string) => void;
}

export default function Home({ onPageChange }: HomeProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 lg:pt-32 pb-20 overflow-hidden bg-slate-900">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
           <div className="w-full h-full bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-8 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-400/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-300">New Specialist Wing Now Open</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight">
              Clinical <span className="text-indigo-400">Excellence</span>. <br />
              Patient-First Care.
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Precision diagnostics and expert-led treatments for those who value specialized results and a premium clinical experience. Join 15,000+ patients trusting our specialist team.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => onPageChange('contact')}
                className="bg-indigo-600 text-white px-10 py-5 rounded-2xl font-bold uppercase tracking-widest shadow-2xl shadow-indigo-900/20 hover:bg-white hover:text-slate-900 hover:scale-105 transition-all flex items-center justify-center gap-3"
              >
                Schedule Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onPageChange('services')}
                className="bg-slate-800/50 backdrop-blur-md text-white border border-slate-700 px-10 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-800 transition-all flex items-center justify-center gap-3"
              >
                View Specialties
              </button>
            </div>

            <div className="flex items-center gap-8 pt-10 border-t border-slate-800">
               <div className="flex -space-x-3">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="w-10 h-10 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px] font-bold text-white uppercase tracking-tighter overflow-hidden">
                     <img src={`https://i.pravatar.cc/100?u=doc${i}`} alt="Specialist" className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
               <div className="flex flex-col">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[1, 2, 3, 4, 5].map(i => <Activity key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Leading Practice in North Region</span>
               </div>
            </div>
          </div>
        </div>

        {/* Decorative Floating Card */}
        <div className="hidden lg:block absolute right-20 top-1/2 -translate-y-1/2 w-80 animate-in fade-in slide-in-from-right duration-1000 delay-300">
           <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="relative z-10 space-y-6">
                 <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                    <ShieldCheck className="w-6 h-6" />
                 </div>
                 <h3 className="text-xl font-bold text-white">Advanced <br/>Diagnostics</h3>
                 <p className="text-sm text-slate-400 leading-relaxed">
                   Expert evaluation using state-of-the-art clinical technology for precise outcomes.
                 </p>
                 <button className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-widest hover:text-white transition-colors">
                   Learn More <ChevronRight className="w-4 h-4" />
                 </button>
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 blur-2xl rounded-full translate-x-1/2 -translate-y-1/2" />
           </div>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
              <div className="space-y-4">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">Expertise Areas</span>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Tailored Clinical <br/>Specializations</h2>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed pb-2">
                Our practice is built around specialized departments, each led by board-certified experts dedicated to your long-term health.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: 'Specialist Consultation', desc: 'In-depth evaluation and treatment planning with our lead clinical experts.', icon: UserCheck, color: 'bg-indigo-600' },
                { title: 'Therapeutic Solutions', desc: 'Modern treatment modalities designed for restorative and preventive success.', icon: Activity, color: 'bg-emerald-600' },
                { title: 'Diagnostic Precision', desc: 'Advanced imaging and testing to identify issues before they become problems.', icon: Heart, color: 'bg-pink-600' }
              ].map((service, idx) => (
                <div key={idx} className="group p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-2xl hover:shadow-indigo-900/5 transition-all duration-500 hover:-translate-y-2">
                   <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center text-white shadow-xl mb-8 group-hover:scale-110 transition-transform`}>
                      <service.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                   <p className="text-slate-500 mb-8 leading-relaxed">{service.desc}</p>
                   <button 
                     onClick={() => onPageChange('services')}
                     className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-indigo-600 group-hover:text-slate-900 transition-colors"
                    >
                     Details <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Specialist Trust Highlight */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                 <div className="aspect-[4/5] rounded-[3rem] bg-slate-200 overflow-hidden shadow-2xl relative z-10 group">
                    <img src="https://images.unsplash.com/photo-1559839734-2b71f1536780?auto=format&fit=crop&q=80&w=800" alt="Lead Specialist" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                 </div>
                 {/* Experience Badge */}
                 <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-6 rounded-[2rem] shadow-2xl z-20 animate-bounce-slow flex flex-col items-center justify-center text-center border border-slate-100">
                    <span className="text-5xl font-black text-indigo-600 italic">25+</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mt-2">Years of Clinical Excellence</span>
                 </div>
                 {/* Decorative background blob */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-500/5 blur-[100px] rounded-full -z-10" />
              </div>

              <div className="space-y-8">
                 <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">The Expert Eye</span>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                    Driven by science. <br/>
                    Defined by <span className="text-indigo-600">empathy</span>.
                 </h2>
                 <p className="text-lg text-slate-600 leading-relaxed italic border-l-4 border-indigo-600 pl-6">
                    "Our goal isn't just to treat symptoms, but to restore quality of life through individualized expertise and modern clinical precision."
                 </p>
                 <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <UserCheck className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Lead Practitioner</p>
                          <p className="text-slate-600 font-medium">Dr. Arthur Specialist, MD PhD</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                          <Calendar className="w-5 h-5" />
                       </div>
                       <div>
                          <p className="font-bold text-slate-900 uppercase tracking-widest text-[10px]">Board Certified</p>
                          <p className="text-slate-600 font-medium">Clinical Excellence Accreditation</p>
                       </div>
                    </div>
                 </div>
                 <button 
                  onClick={() => onPageChange('team')}
                  className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-xs text-indigo-600 border-b-2 border-indigo-600 pb-2 hover:text-slate-900 hover:border-slate-900 transition-all"
                 >
                    Meet the Full Specialist Team <ArrowRight className="w-4 h-4" />
                 </button>
              </div>
           </div>
        </div>
      </section>

      {/* Success Strip */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center space-y-4 mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-indigo-600">Patient Success</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">Real Outcomes, Reimagined</h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { name: 'James Wilson', type: 'Advanced Treatment', quote: 'The level of care and diagnostic detail at Clinic Expert was unlike anything I had experienced. They didn’t just guess; they knew exactly how to proceed.' },
                { name: 'Elena Rodriguez', type: 'Consultation Support', quote: 'I finally felt heard. The specialist team took the time to explain every detail, and the results have been life-changing for my daily routine.' }
              ].map((story, i) => (
                <div key={i} className="p-10 rounded-[3rem] bg-slate-50 border border-slate-100 relative group overflow-hidden">
                   <div className="relative z-10 space-y-6">
                      <div className="flex gap-1 text-amber-500">
                         {[1, 2, 3, 4, 5].map(s => <span key={s} className="text-xl">★</span>)}
                      </div>
                      <p className="text-xl text-slate-700 leading-relaxed font-medium">"{story.quote}"</p>
                      <div className="pt-6 flex items-center gap-4 border-t border-slate-200">
                         <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold">
                            {story.name[0]}
                         </div>
                         <div>
                            <p className="font-bold text-slate-900">{story.name}</p>
                            <p className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest">{story.type}</p>
                         </div>
                      </div>
                   </div>
                   {/* Decorative Quote Mark */}
                   <span className="absolute top-10 right-10 text-9xl text-slate-200 opacity-20 font-serif leading-none transition-transform group-hover:scale-110">“</span>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-indigo-600 rounded-[4rem] p-12 lg:p-24 text-center space-y-10 relative overflow-hidden shadow-2xl shadow-indigo-900/30">
              <div className="relative z-10 space-y-6">
                 <h2 className="text-4xl md:text-7xl font-black text-white leading-tight tracking-tight">Your health journey <br/>deserves expertise.</h2>
                 <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Schedule your comprehensive consultation today and experience the difference of specialist clinic care.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button 
                      onClick={() => onPageChange('contact')}
                      className="bg-white text-indigo-600 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-indigo-900/10"
                    >
                       Book My Appointment
                    </button>
                    <button 
                      onClick={() => onPageChange('faq')}
                      className="bg-indigo-500/20 backdrop-blur-md text-white border border-white/10 px-12 py-5 rounded-2xl font-bold uppercase tracking-widest hover:bg-indigo-500/30 transition-all"
                    >
                       View Pricing & FAQ
                    </button>
                 </div>
              </div>
              {/* Background Design */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-white/10 to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)] pointer-events-none" />
           </div>
        </div>
      </section>

    </div>
  );
}
