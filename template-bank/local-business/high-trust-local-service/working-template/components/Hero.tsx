import React from 'react';
import { Phone, Shield, CheckCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-32 bg-slate-50 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none -z-10">
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left Text Column: Trust & Authority */}
          <div className="flex-1 space-y-10 lg:space-y-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-600/10 bg-blue-600/5 text-xs font-bold text-blue-600 uppercase tracking-widest animate-fade-in shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Trusted Local Professionals
            </div>

            <div className="space-y-6">
              <h1 className="text-4xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.05] max-w-2xl">
                Expert <span className="text-blue-600">[Primary Service]</span> in <span className="text-slate-500">[City, State]</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 max-w-xl leading-relaxed">
                 Fast, reliable, and professional solutions for your home or business. We've been serving the local community for over [N] years with 100% satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
               {[
                 { icon: Shield, text: "Licensed & Fully Insured" },
                 { icon: CheckCircle, text: "Same-Day Response Available" },
                 { icon: Phone, text: "Available 24/7 for Emergencies" },
                 { icon: CheckCircle, text: "100% Satisfaction Guaranteed" }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <item.icon className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">{item.text}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <a 
                href="tel:0000000000" 
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg transition-all shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
              >
                <Phone className="w-5 h-5 group-hover:scale-125 transition-transform" />
                Call Now: (000) 000-0000
              </a>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest hidden sm:block">Or</p>
              <button className="w-full sm:w-auto px-10 py-5 rounded-2xl border border-slate-900/10 bg-white hover:bg-slate-50 text-slate-950 font-bold text-lg transition-all shadow-lg">
                View All Services
              </button>
            </div>
          </div>

          {/* Right Lead Form: Instant Conversion */}
          <div className="w-full lg:max-w-md p-8 lg:p-12 rounded-[2.5rem] border border-slate-900/5 bg-white shadow-3xl relative animate-fade-in-up">
             <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-950 mb-2">Get Your Free Quote</h3>
                <p className="text-slate-500 text-sm font-medium">Average response time: less than 1 hour</p>
             </div>
             
             <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                   <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">First Name</label>
                      <input type="text" className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="John" />
                   </div>
                   <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input type="tel" className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="(555) 000-0000" />
                   </div>
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                   <select className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 focus:border-blue-500 outline-none transition-all appearance-none text-slate-600">
                      <option>Select a service...</option>
                      <option>Service Type A</option>
                      <option>Service Type B</option>
                      <option>Service Type C</option>
                   </select>
                </div>
                <div className="space-y-1.5">
                   <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                   <textarea className="w-full h-24 rounded-xl border border-slate-200 bg-slate-50 p-4 focus:border-blue-500 outline-none transition-all placeholder:text-slate-300" placeholder="Let us know how we can help..." />
                </div>
                
                <button type="submit" className="w-full py-5 rounded-2xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-lg shadow-2xl transition-all hover:scale-105 active:scale-95">
                   Submit Request
                </button>
             </form>
             
             {/* Form Trust Note */}
             <div className="mt-6 text-center text-[10px] font-medium text-slate-400">
                <p>By clicking submit, you agree to our terms of service and privacy policy. Your information is 100% confidential.</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
