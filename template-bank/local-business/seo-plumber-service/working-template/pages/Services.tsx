"use client";

import React from 'react';
import { Wrench, Droplets, ArrowRight, ShieldAlert, Home as HomeIcon, Building2, Flame } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: PageProps) {
  
  const residentialServices = [
    { title: "Drain Cleaning", desc: "Fast removal of stubborn clogs in sinks, showers, and main sewer lines.", icon: <Droplets className="w-6 h-6" /> },
    { title: "Water Heaters", desc: "Repair and installation of traditional tank and modern tankless water heaters.", icon: <Flame className="w-6 h-6" /> },
    { title: "Fixture Installation", desc: "Professional installation of toilets, sinks, faucets, and garbage disposals.", icon: <Wrench className="w-6 h-6" /> },
    { title: "Pipe Repair & Rerouting", desc: "Fixing burst pipes, pinhole leaks, and completely rerouting old plumbing.", icon: <HomeIcon className="w-6 h-6" /> }
  ];

  const commercialServices = [
    { title: "Commercial Build-Outs", desc: "Complete plumbing rough-ins for new restaurants, offices, and retail spaces.", icon: <Building2 className="w-6 h-6" /> },
    { title: "Grease Traps", desc: "Installation, maintenance, and emergency repair of commercial grease traps.", icon: <ShieldAlert className="w-6 h-6" /> },
    { title: "Backflow Testing", desc: "Annual backflow prevention testing to keep your business code-compliant.", icon: <Droplets className="w-6 h-6" /> },
    { title: "Hydro Jetting", desc: "High-pressure water jetting to clear severe blockages in commercial lines.", icon: <Wrench className="w-6 h-6" /> }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-900 py-24 border-b-8 border-sky-600 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">Plumbing Services</h1>
        <p className="text-lg text-slate-300 font-medium max-w-2xl mx-auto">
          From leaky faucets to complete commercial repiping. Licensed, bonded, and insured.
        </p>
      </div>

      {/* Residential Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-sky-600 p-3 rounded-lg"><HomeIcon className="w-8 h-8 text-white" /></div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Residential Plumbing</h2>
              <p className="text-slate-600 font-medium">Protecting your home and family.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {residentialServices.map((srv, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex gap-6 hover:shadow-md transition-shadow group">
                <div className="bg-sky-50 w-16 h-16 rounded-full flex items-center justify-center text-sky-600 shrink-0 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{srv.desc}</p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-sky-600 font-bold flex items-center gap-2 hover:gap-3 transition-all text-sm uppercase tracking-wider"
                  >
                    Request Service <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-slate-900 p-3 rounded-lg"><Building2 className="w-8 h-8 text-sky-400" /></div>
            <div>
              <h2 className="text-3xl font-black text-slate-900">Commercial Plumbing</h2>
              <p className="text-slate-600 font-medium">Keeping your business operations flowing.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commercialServices.map((srv, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-200 flex gap-6 hover:bg-slate-100 transition-colors group">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center text-slate-900 shadow-sm shrink-0 border border-slate-200 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                  {srv.icon}
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-2">{srv.title}</h3>
                  <p className="text-slate-600 font-medium leading-relaxed mb-6">{srv.desc}</p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-slate-900 font-bold flex items-center gap-2 hover:gap-3 hover:text-sky-600 transition-all text-sm uppercase tracking-wider"
                  >
                    Get an Estimate <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Strip */}
      <section className="bg-red-600 py-12 text-center px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h2 className="text-2xl font-black text-white mb-1">Water Heater Leaking? Pipe Burst?</h2>
            <p className="text-red-100 font-medium">We offer rapid dispatch 24 hours a day, 7 days a week.</p>
          </div>
          <a href="tel:+15559876543" className="bg-white text-red-600 px-8 py-4 rounded-md font-black text-lg hover:bg-red-50 transition-colors shadow-lg shrink-0 whitespace-nowrap">
            Call Emergency (555) 987-6543
          </a>
        </div>
      </section>

    </div>
  );
}
