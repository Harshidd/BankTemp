"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-700 max-w-[1600px] mx-auto px-6 py-12 lg:py-24">
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Story */}
        <div className="lg:col-span-6 space-y-8">
          <h1 className="text-4xl lg:text-6xl font-light text-neutral-900 tracking-tight uppercase mb-8 leading-tight">
            About the <span className="italic font-serif font-light capitalize">Gallery</span>
          </h1>
          <p className="text-lg text-neutral-500 font-light leading-relaxed">
            Founded in Istanbul, ContemporarySpace stands as a nexus for artistic creation and conceptual dialogue. We bridge the local and global art scenes, curating critical interventions in modern aesthetics.
          </p>
          <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-lg">
            Through sustained collaborations with both established masters and emerging innovators, our gallery develops critical platforms for visual inquiries in various media, including oil on linen, organic sculptures, and spatial installations.
          </p>
          <p className="text-sm font-light text-neutral-500 leading-relaxed max-w-lg">
            Our mission is to foster dialogues that redefine contemporary art practices, bringing experimental works into curated public awareness.
          </p>
        </div>

        {/* Big visual anchor */}
        <div className="lg:col-span-6 aspect-[4/5] bg-neutral-100 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200" alt="Gallery Space" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Philosophy */}
      <section className="mt-32 border-t border-neutral-200 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <span className="text-neutral-400 text-xs font-light uppercase tracking-widest block mb-3">01</span>
            <h3 className="text-lg font-normal uppercase tracking-wider text-neutral-900 mb-3">Progression</h3>
            <p className="text-sm font-light text-neutral-500 leading-relaxed">Challenging prevailing boundaries in art to introduce new perspectives to global collectors.</p>
          </div>
          <div>
            <span className="text-neutral-400 text-xs font-light uppercase tracking-widest block mb-3">02</span>
            <h3 className="text-lg font-normal uppercase tracking-wider text-neutral-900 mb-3">Curatorial Integrity</h3>
            <p className="text-sm font-light text-neutral-500 leading-relaxed">Providing absolute autonomy to our artists, encouraging profound material and intellectual depth.</p>
          </div>
          <div>
            <span className="text-neutral-400 text-xs font-light uppercase tracking-widest block mb-3">03</span>
            <h3 className="text-lg font-normal uppercase tracking-wider text-neutral-900 mb-3">Transparency</h3>
            <p className="text-sm font-light text-neutral-500 leading-relaxed">Transparent dialogues between our curatorial team, global collectors, and cultural institutions.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
