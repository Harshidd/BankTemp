"use client";

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Collections({ onNavigate }: PageProps) {
  const materials = [
    { title: "Natural Stone & Marble", desc: "Sourced globally, selected locally. From classic Carrara to exotic Travertine.", image: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200" },
    { title: "Premium Woods", desc: "Sustainable oak, walnut, and teak finishes for custom cabinetry and flooring.", image: "https://images.unsplash.com/photo-1518306001004-9842a2253dfc?auto=format&fit=crop&q=80&w=1200" },
    { title: "Bespoke Textiles", desc: "Curated fabrics for upholstery, drapery, and acoustic solutions.", image: "https://images.unsplash.com/photo-1584031448202-6017a26f63f5?auto=format&fit=crop&q=80&w=1200" },
    { title: "Architectural Hardware", desc: "Refined details and handles that complete the interior experience.", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=80&w=1200" }
  ];

  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
              Materials & <span className="font-serif italic">Collections</span>
            </h1>
            <p className="text-lg text-stone-500 leading-relaxed">
              Our material library is the foundation of our design process. We invite you to our showroom to experience the textures and finishes in person.
            </p>
          </div>

          <div className="space-y-24 lg:space-y-32">
            {materials.map((item, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="w-full lg:w-3/5 aspect-[4/3] bg-stone-100 overflow-hidden relative group">
                   <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                  />
                </div>
                <div className="w-full lg:w-2/5 space-y-6">
                  <span className="text-xs uppercase tracking-widest text-stone-400">Collection {String(i + 1).padStart(2, '0')}</span>
                  <h2 className="text-3xl font-light text-stone-900">{item.title}</h2>
                  <p className="text-stone-500 leading-relaxed">
                    {item.desc}
                  </p>
                  <button 
                    onClick={() => onNavigate('contact')}
                    className="text-sm font-medium text-stone-900 flex items-center gap-2 hover:text-stone-500 transition-colors pt-4"
                  >
                    View in Showroom <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showroom Visit Info */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-8">
            Experience our material library.
          </h2>
          <p className="text-stone-400 mb-12">
            Schedule a dedicated time with our interior designers to explore materials for your specific project requirements.
          </p>
          <button 
            onClick={() => onNavigate('contact')}
            className="px-8 py-4 bg-white text-stone-900 font-medium text-sm transition-colors hover:bg-stone-200"
          >
            Book an Appointment
          </button>
        </div>
      </section>
    </div>
  );
}
