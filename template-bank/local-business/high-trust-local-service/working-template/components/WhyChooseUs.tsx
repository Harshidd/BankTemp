import React from 'react';
import { ShieldCheck, UserCheck, Clock, Award } from 'lucide-react';

const reasons = [
  { icon: ShieldCheck, title: "Fully Licensed & Insured", text: "Total peace of mind with complete legal and insurance protection for every job we perform locally." },
  { icon: UserCheck, title: "Our Trusted Experts", text: "Every team member is background-checked, drug-tested, and highly trained in their specific field." },
  { icon: Clock, title: "24/7 Rapid Response", text: "Emergencies don't wait for business hours. We're available day or night to handle your urgent service needs." },
  { icon: Award, title: "Quality Guarantee", text: "We stand by our work. If you're not 100% satisfied with the result, we'll make it right—guaranteed." }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-48 bg-slate-950 relative overflow-hidden">
       {/* Background Light Pattern */}
       <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none -z-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />
       </div>

       <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
             {/* Left Column Content */}
             <div className="flex-1 space-y-12">
                <div className="space-y-6">
                   <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
                      Built on a foundation <br className="hidden lg:block"/> of <span className="text-blue-500">local trust.</span>
                    </h2>
                    <p className="text-xl text-white/40 leading-relaxed max-w-xl font-medium">
                       We're not just a service company—we're your neighbors. We've built our reputation on quality, integrity, and fair pricing for every local client.
                    </p>
                </div>
                
                <div className="flex items-center gap-8 pt-8 border-t border-white/5 opacity-50">
                   <div>
                      <p className="text-4xl font-extrabold text-white tracking-tighter">15+</p>
                      <p className="text-[10px] font-bold text-white uppercase tracking-widest mt-1">Years Locally</p>
                   </div>
                   <div className="w-px h-10 bg-white/10" />
                   <div>
                      <p className="text-4xl font-extrabold text-white tracking-tighter">10k</p>
                      <p className="text-[10px] font-bold text-white uppercase tracking-widest mt-1">Happy Clients</p>
                   </div>
                </div>
             </div>

             {/* Right Column Grid (Trust Factor Blocks) */}
             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {reasons.map((r, i) => (
                  <div key={i} className="p-8 lg:p-12 rounded-[2.5rem] border border-white/5 bg-white/5 hover:bg-blue-600 transition-all group shadow-2xl hover:scale-105 active:scale-95 cursor-default">
                     <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-600/10 mb-8 flex items-center justify-center text-blue-500 group-hover:bg-white group-hover:text-blue-600 transition-all shadow-xl shadow-blue-500/10">
                        <r.icon className="w-6 h-6" />
                     </div>
                     <h4 className="text-lg font-bold text-white uppercase tracking-widest text-[11px] mb-4 group-hover:text-blue-100 transition-colors">{r.title}</h4>
                     <p className="text-sm text-white/40 leading-relaxed font-medium group-hover:text-white/80 transition-colors">{r.text}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
