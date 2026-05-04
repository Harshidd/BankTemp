"use client";

import React from 'react';
import { Search, AlertCircle, Phone, CheckCircle2 } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Plans({ onNavigate }: PageProps) {
  
  const commonFaults = [
    {
      brand: "Model Series Alpha",
      codes: [
        { code: "E01", desc: "Ignition failure. Check gas valves and ensure lines are clear. Reset system once. Contact technician if problem persists." },
        { code: "F37", desc: "Low water pressure. Top up the system's loop water to around 1.5 bar on the gauge." }
      ]
    },
    {
      brand: "Model Series Beta",
      codes: [
        { code: "F04", desc: "Burner flame sensor lock. Turn the power switch off and on. Contact dispatch if light blinks continuously." },
        { code: "E10", desc: "Poor system circulation. Check radiator valves are fully open. May require sludge flushing." }
      ]
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-slate-50 min-h-screen font-sans text-slate-900">
      
      {/* Page Header */}
      <div className="bg-slate-100 py-16 border-b border-slate-200 text-center px-4">
        <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Diagnostic Fault Codes</h1>
        <p className="text-base text-slate-600 font-medium max-w-xl mx-auto">
          Learn what blinking code messages on your heater/boiler display mean before calling out a mobile technician.
        </p>
      </div>

      {/* Warning Banner */}
      <div className="bg-orange-100 border-b border-orange-200 py-3.5">
        <div className="container mx-auto px-4 max-w-[1000px] flex items-center justify-center gap-3 text-orange-800 text-xs md:text-sm font-bold text-center">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <p>SAFETY NOTE: Never open internal gas-carrying casing elements yourself. Safe reset steps only.</p>
        </div>
      </div>

      {/* Fault Codes Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <div className="space-y-8">
            {commonFaults.map((faultGroup, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="bg-slate-900 px-6 py-3 border-b border-slate-800 flex items-center gap-3">
                  <Search className="w-4 h-4 text-orange-500" />
                  <h2 className="text-base font-black text-white">{faultGroup.brand} - System Codes</h2>
                </div>
                <div className="p-6 space-y-4">
                  {faultGroup.codes.map((code, j) => (
                    <div key={j} className="flex flex-col md:flex-row md:items-start gap-4 border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                      <div className="bg-orange-100 text-orange-700 font-black px-3 py-1.5 rounded text-base shrink-0 text-center md:w-24 border border-orange-200">
                        {code.code}
                      </div>
                      <div className="flex-grow">
                        <p className="text-slate-700 font-medium leading-relaxed text-sm">{code.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pre-Service Checklist */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4 max-w-[1000px]">
          <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-8 text-center">Standard Support Checklist</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Gas Valve Active?</h4>
                <p className="text-xs text-slate-600">Ensure any fuel or gas isolation line handles are pointing parallel to the feed pipe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Correct Bar Level?</h4>
                <p className="text-xs text-slate-600">Review pressure gauges. Low readings below 1 bar indicate a top-up is needed.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">Power Switched On?</h4>
                <p className="text-xs text-slate-600">Check isolated fused spur switches. Power must be continuously supplied.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded border border-slate-100">
              <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
              <div>
                <h4 className="font-bold text-slate-900 mb-1 text-sm">System Reset Completed?</h4>
                <p className="text-xs text-slate-600">Press reset once on the main faceplate to restart standard start sequencing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom */}
      <section className="bg-slate-900 py-16 text-center px-4">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Code Error Persistent?</h2>
          <p className="text-slate-400 font-medium mb-6 text-sm">Our 24/7 mobile technicians can reach you quickly.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="tel:555-0100" className="bg-orange-600 text-white px-6 py-3.5 rounded font-bold text-base hover:bg-orange-700 transition-colors shadow-md flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 555-0100
            </a>
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-slate-800 text-white px-6 py-3.5 rounded font-bold text-base hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Raise Service Ticket
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
