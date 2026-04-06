import React from 'react';
import { Calendar, UserPlus, CheckCircle } from 'lucide-react';

const steps = [
  { icon: Calendar, label: "Book Appointment", text: "Schedule your service easily online or via phone. We work around your timing and requirements." },
  { icon: UserPlus, label: "Expert Arrival", text: "Our friendly, certified technician arrives promptly at your location, ready to evaluate and solve the issue." },
  { icon: CheckCircle, label: "Job Complete", text: "We execute the service with professional precision and ensure your 100% satisfaction before leaving." }
];

export default function Process() {
  return (
    <section className="py-24 lg:py-48 bg-white relative overflow-hidden text-center">
       <div className="container mx-auto px-4">
          <div className="max-w-3xl border-b border-slate-950/10 mx-auto pb-24 mb-24 lg:mb-32">
             <span className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-8">Simple Protocol</span>
             <h2 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-950 mb-8 leading-[1.05]">
                How we get it <span className="text-blue-600">done.</span>
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed font-medium">
                 We've refined our local service process into three simple, friction-free steps to ensure you're back to normal as fast as possible.
              </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24 relative">
             {/* Connecting Line (Desktop Only) */}
             <div className="absolute top-[4.5rem] left-0 w-full h-px bg-slate-900/5 hidden md:block" />

             {steps.map((s, i) => (
               <div key={i} className="flex flex-col items-center gap-6 group relative">
                  <div className="w-36 h-36 rounded-2xl bg-slate-50 border border-slate-900/5 flex items-center justify-center text-slate-950 mb-8 mx-auto group-hover:bg-blue-600 group-hover:text-white transition-all shadow-2xl relative">
                     <s.icon className="w-12 h-12" />
                     {/* Step Badge */}
                     <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-10 h-10 rounded-full border border-slate-950 bg-slate-950 flex items-center justify-center text-white font-bold text-xs">
                        0{i+1}
                     </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-950 uppercase tracking-widest text-[11px] group-hover:text-blue-600 transition-colors">{s.label}</h4>
                  <p className="text-lg text-slate-500 font-medium leading-[1.3] group-hover:text-slate-950 transition-colors max-w-xs">{s.text}</p>
                  
                  {/* Decorative Ripple */}
                  <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
               </div>
             ))}
          </div>
       </div>
    </section>
  );
}
