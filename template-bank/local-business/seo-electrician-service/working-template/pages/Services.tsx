"use client";

import React from 'react';
import { Home as HomeIcon, Building2, Zap, ArrowRight, ShieldCheck, Wrench, Lightbulb, Activity } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: PageProps) {
  const residentialServices = [
    { title: "Lighting Installation", desc: "Indoor/outdoor lighting, recessed lighting, and smart home lighting integrations.", icon: <Lightbulb className="w-6 h-6" /> },
    { title: "Panel Upgrades", desc: "Replacing outdated electrical panels to safely handle modern home power loads.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Wiring & Rewiring", desc: "Complete home rewiring for renovations or replacing dangerous aluminum wiring.", icon: <Activity className="w-6 h-6" /> },
    { title: "Outlet & Switch Repair", desc: "Fixing dead outlets, installing GFCIs, and adding new circuits where you need them.", icon: <Wrench className="w-6 h-6" /> }
  ];

  const commercialServices = [
    { title: "Office Build-Outs", desc: "Comprehensive electrical rough-ins and finishing for new commercial tenant spaces.", icon: <Building2 className="w-6 h-6" /> },
    { title: "Preventative Maintenance", desc: "Scheduled thermal imaging and systems testing to prevent costly business downtime.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Heavy Equipment Wiring", desc: "Dedicated high-voltage circuits and transformers for industrial machinery.", icon: <Zap className="w-6 h-6" /> },
    { title: "Security & Data Lines", desc: "Low-voltage cabling for network infrastructure, security cameras, and access control.", icon: <Activity className="w-6 h-6" /> }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-20 border-b-8 border-amber-500">
        <div className="container mx-auto px-4 max-w-[1200px] text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Our Electrical Services</h1>
          <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
            Comprehensive residential and commercial electrical solutions. Licensed, insured, and built to code.
          </p>
        </div>
      </div>

      {/* Residential Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-amber-500 p-3 rounded-lg"><HomeIcon className="w-8 h-8 text-slate-900" /></div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Residential Services</h2>
              <p className="text-slate-600 font-medium">Keeping your home safe, efficient, and powered.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {residentialServices.map((srv, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow-sm border border-slate-200 flex gap-6 hover:shadow-md transition-shadow">
                <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center text-amber-600 shrink-0">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-4">{srv.desc}</p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-amber-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm"
                  >
                    Request Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-slate-900 p-3 rounded-lg"><Building2 className="w-8 h-8 text-amber-500" /></div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Commercial Services</h2>
              <p className="text-slate-600 font-medium">Reliable power infrastructure for businesses of all sizes.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commercialServices.map((srv, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-lg border border-slate-200 flex gap-6 hover:bg-slate-100 transition-colors">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-slate-900 shadow-sm shrink-0 border border-slate-200">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-4">{srv.desc}</p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 hover:text-amber-600 transition-all text-sm"
                  >
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency CTA Banner */}
      <section className="bg-slate-900 py-16 text-center px-4">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-2 animate-pulse">
            <Zap className="w-8 h-8 text-slate-900" />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-white">Emergency Electrical Issue?</h2>
          <p className="text-lg text-slate-400 font-medium">
            Don&apos;t risk electrical fires or prolonged downtime. We have technicians on standby 24/7.
          </p>
          <a href="tel:555-0199" className="inline-block bg-amber-500 text-slate-900 px-8 py-4 rounded-md font-black text-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
            Call Emergency Line: 555-0199
          </a>
        </div>
      </section>

    </div>
  );
}
