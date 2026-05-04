"use client";

import React from 'react';
import { ThermometerSnowflake, Flame, ArrowRight, Wind, Settings2, ShieldCheck, Wrench } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: PageProps) {
  
  const boilerServices = [
    { title: "Boiler Diagnosis & Repair", desc: "For models not firing up, leaking, or making noise. Rapid technician dispatch to fix it.", icon: <Wrench className="w-6 h-6" /> },
    { title: "Boiler Servicing & Safety", desc: "Thorough checkup to clean internal components, clear blockages, and prevent failure.", icon: <Settings2 className="w-6 h-6" /> },
    { title: "Boiler Installation", desc: "Upgrade to energy-efficient, condensing heating systems following standard safety protocols.", icon: <Flame className="w-6 h-6" /> }
  ];

  const acServices = [
    { title: "AC Cleaning & Gas Check", desc: "Chemical clean for vents, filter washing, and top up refrigerant for optimal cooling.", icon: <Wind className="w-6 h-6" /> },
    { title: "AC System Repair", desc: "Diagnosis and replacement for malfunctioning condenser motors, relays, or compressor lines.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "AC System Installation", desc: "Professional sizing and secure mount installation for wall or ducted air conditioners.", icon: <ThermometerSnowflake className="w-6 h-6" /> }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Heating & Cooling Services</h1>
        <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
          Dependable mobile services for boilers, furnaces, and AC systems. Restoring home comfort safely.
        </p>
      </div>

      {/* Boiler / Heating Services */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-orange-600 p-2.5 rounded shadow-sm"><Flame className="w-7 h-7 text-white" /></div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">Heating & Boiler Services</h2>
              <p className="text-slate-600 font-medium mt-0.5 text-sm">Stay warm all winter with expert on-site repairs.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {boilerServices.map((srv, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col hover:border-orange-400 hover:shadow transition-all group">
                <div className="bg-orange-50 w-12 h-12 rounded flex items-center justify-center text-orange-600 mb-5 group-hover:bg-orange-500 group-hover:text-white transition-colors border border-orange-100">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow text-xs md:text-sm">{srv.desc}</p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-orange-600 font-bold flex items-center gap-1.5 hover:gap-2 transition-all text-xs uppercase tracking-wider w-fit"
                >
                  Request Service &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AC / Cooling Services */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-3 mb-10">
            <div className="bg-blue-600 p-2.5 rounded shadow-sm"><ThermometerSnowflake className="w-7 h-7 text-white" /></div>
            <div>
              <h2 className="text-2xl font-black text-slate-900">AC & Cooling Services</h2>
              <p className="text-slate-600 font-medium mt-0.5 text-sm">Healthy and cool indoor air for your space.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {acServices.map((srv, i) => (
              <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-200 flex flex-col hover:border-blue-400 hover:shadow transition-all group">
                <div className="bg-white w-12 h-12 rounded flex items-center justify-center text-blue-600 mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors border border-slate-200 shadow-sm">
                  {srv.icon}
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{srv.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6 flex-grow text-xs md:text-sm">{srv.desc}</p>
                <button 
                  onClick={() => onNavigate('contact')}
                  className="text-blue-700 font-bold flex items-center gap-1.5 hover:gap-2 transition-all text-xs uppercase tracking-wider w-fit"
                >
                  Request Service &rarr;
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Radiator Flushing / Duct Banner */}
      <section className="bg-slate-900 py-16 text-center px-4 border-t-4 border-orange-500">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <Wind className="w-10 h-10 text-orange-500 mb-1" />
          <h2 className="text-2xl md:text-3xl font-black text-white">Advanced Radiator Flushing</h2>
          <p className="text-slate-300 font-medium text-sm md:text-base mb-2 max-w-xl">
            Uneven heat? Radiator sludge buildup can decrease overall heating performance and boost fuel consumption. We power flush your system to return it to peak efficiency.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-orange-600 text-white px-8 py-3.5 rounded font-bold text-base hover:bg-orange-700 transition-colors shadow-md"
          >
            Get a Quote
          </button>
        </div>
      </section>

    </div>
  );
}
