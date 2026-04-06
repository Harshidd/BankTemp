import React from 'react';
import { Settings, Zap, Shield, Key, FilePlus, ArrowRight } from 'lucide-react';

const services = [
  { icon: Settings, name: "Service Category A", description: "Comprehensive maintenance and repair services for all your local [Niche] needs. Fast response." },
  { icon: Zap, name: "Emergency Response", description: "Available 24/7 for urgent calls and situation management. We arrive in under 60 minutes." },
  { icon: Shield, name: "Safety Inspections", description: "Thorough analysis and certification for residential and commercial property safety protocols." },
  { icon: Key, name: "Consultation & Prep", description: "Expert advice and preparation for large-scale projects and property improvements." },
  { icon: FilePlus, name: "Custom Solutions", description: "Detailed quotes and project-based plans designed for your unique [Niche] requirements." },
  { icon: Settings, name: "Maintenance Plans", description: "Scheduled visits to ensure your essential systems never fail when you need them most." }
];

export default function ServiceCards() {
  return (
    <section className="py-24 lg:py-40 bg-slate-50 relative overflow-hidden">
       <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-16 lg:mb-24 px-4">
             <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-blue-600" />
                <span className="text-sm font-bold text-blue-600 uppercase tracking-widest leading-none">Our Core Services</span>
             </div>
             <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">
                Professional solutions for every <span className="text-slate-400 italic">local</span> need.
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed max-w-xl font-medium">
                 From minor repairs to major installations, our expert team is equipped with the tools and experience to get the job done right.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {services.map((s, i) => (
               <div key={i} className="group p-8 lg:p-12 rounded-[2.5rem] border border-slate-950/5 bg-white shadow-2xl hover:bg-slate-950 hover:text-white transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 text-slate-50 font-bold group-hover:text-white transition-all -rotate-12 translate-x-4">
                     <p className="text-[60px] lg:text-[100px] leading-none opacity-5 group-hover:opacity-10">0{i+1}</p>
                  </div>
                  
                  <div className="w-16 h-16 rounded-2xl bg-blue-600/5 border border-blue-600/10 flex items-center justify-center text-blue-600 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-xl shadow-blue-500/10 group-hover:shadow-none">
                     <s.icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl font-extrabold mb-6 tracking-tight uppercase tracking-widest text-[11px] group-hover:text-blue-500 transition-colors">{s.name}</h3>
                  <p className="text-slate-500 leading-relaxed font-medium mb-12 group-hover:text-slate-300 transition-colors">{s.description}</p>
                  
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-[10px] uppercase tracking-widest leading-none group-hover:text-white transition-colors cursor-pointer group/link">
                     Learn More
                     <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </div>
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
