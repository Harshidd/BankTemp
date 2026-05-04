"use client";

import React from 'react';


interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Services({ onNavigate }: PageProps) {
  const services = [
    {
      title: "Interior Architecture",
      desc: "Full-scale spatial planning, structural revisions, and comprehensive architectural drawing packages for residential and commercial spaces."
    },
    {
      title: "Design Consultation",
      desc: "Strategic guidance on material selection, color palettes, and spatial flow for clients looking to refine their existing vision."
    },
    {
      title: "Turnkey Implementation",
      desc: "End-to-end project management, construction oversight, and final styling. You hand over the keys; we hand over a finished space."
    },
    {
      title: "Custom Furniture Design",
      desc: "Bespoke cabinetry and freestanding furniture pieces designed specifically for the unique dimensions and requirements of your project."
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
              Studio <span className="font-serif italic">Services</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              We offer tailored solutions ranging from high-level design consultation to complete turnkey project execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {services.map((service, i) => (
              <div key={i} className="border-t border-stone-200 pt-8">
                <span className="text-xs uppercase tracking-widest text-stone-400 mb-4 block">0{i + 1}</span>
                <h3 className="text-2xl font-light text-stone-900 mb-4">{service.title}</h3>
                <p className="text-stone-500 leading-relaxed max-w-md">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-stone-50 border-y border-stone-200">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-6">Our Process</h2>
            <p className="text-stone-500">A clear, phased approach to ensure design integrity and precise execution.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Initial showroom meeting to understand your vision, requirements, and budget framework." },
              { step: "02", title: "Concept & Design", desc: "Development of spatial layouts, material boards, and 3D visualizations for your approval." },
              { step: "03", title: "Execution", desc: "Detailed technical drawings, procurement, and supervised implementation on site." }
            ].map((phase, i) => (
              <div key={i} className="bg-white p-8 lg:p-12 border border-stone-100 text-center">
                <span className="text-sm font-medium text-stone-300 block mb-4">{phase.step}</span>
                <h4 className="text-xl font-medium text-stone-900 mb-4">{phase.title}</h4>
                <p className="text-stone-500 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light tracking-tight text-stone-900 mb-8">Ready to discuss your project?</h2>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-stone-900 text-white font-medium text-sm transition-colors hover:bg-stone-800"
          >
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}
