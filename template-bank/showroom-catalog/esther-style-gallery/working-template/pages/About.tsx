"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: PageProps) {
  return (
    <div className="animate-in fade-in duration-1000 max-w-[1400px] mx-auto px-6 py-12 lg:py-24">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start mb-32">
        <div className="lg:col-span-6 space-y-8">
          <h1 className="text-4xl lg:text-6xl font-light text-zinc-950 tracking-tight uppercase leading-tight mb-8">
            The Gallery
          </h1>
          <p className="text-lg text-zinc-600 font-light leading-relaxed">
            Founded in 1989, Satellite Contemporary has spent over three decades establishing a global profile for presenting groundbreaking and experimental contemporary art.
          </p>
          <p className="text-sm font-light text-zinc-500 leading-relaxed max-w-md">
            The gallery&apos;s focus centers on conceptual art, spatial installations, and the development of sustainable, deep networks for established and emerging artistic practitioners.
          </p>
          <p className="text-sm font-light text-zinc-500 leading-relaxed max-w-md">
            Through sustained curatorial dialogue, Satellite Contemporary collaborates with institutional and private collections globally, providing an international showcase for ambitious, non-traditional media.
          </p>
        </div>

        {/* Visual Anchor to match Esther's immersive feel */}
        <div className="lg:col-span-6 aspect-[4/5] bg-zinc-200 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="The Gallery Space" 
            className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
          />
        </div>
      </div>

    </div>
  );
}
