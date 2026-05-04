"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000">
      <section className="px-6 py-16 md:py-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="aspect-[3/4] bg-stone-100 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" 
                  alt="Studio Workspace" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2 space-y-8 lg:pl-12">
              <h1 className="text-4xl lg:text-6xl font-light tracking-tight text-stone-900 mb-6">
                The <span className="font-serif italic">Studio</span>
              </h1>
              <p className="text-lg text-stone-500 leading-relaxed">
                StudioLine was founded on the principle that exceptional spaces are created through a meticulous balance of architectural rigor and tactile warmth.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Our multidisciplinary team of architects, interior designers, and material specialists work collaboratively from our Istanbul showroom. We believe in honest materials, functional elegance, and creating environments that stand the test of time rather than chasing transient trends.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Whether designing a private residence or a commercial flagship, our approach remains rooted in understanding the daily rituals of the people who will inhabit the space.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-stone-900 text-stone-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div>
              <span className="text-stone-500 text-sm tracking-widest uppercase mb-4 block">Philosophy</span>
              <h3 className="text-xl font-medium mb-4">Functional Elegance</h3>
              <p className="text-stone-400 text-sm leading-relaxed">Design must first serve a purpose. We create spaces that are as practical as they are visually compelling.</p>
            </div>
            <div>
              <span className="text-stone-500 text-sm tracking-widest uppercase mb-4 block">Materials</span>
              <h3 className="text-xl font-medium mb-4">Honest Craft</h3>
              <p className="text-stone-400 text-sm leading-relaxed">We prioritize natural, enduring materials that age gracefully and add genuine character to an environment.</p>
            </div>
            <div>
              <span className="text-stone-500 text-sm tracking-widest uppercase mb-4 block">Execution</span>
              <h3 className="text-xl font-medium mb-4">Precision</h3>
              <p className="text-stone-400 text-sm leading-relaxed">A concept is only as good as its execution. We maintain rigorous standards throughout the implementation phase.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
