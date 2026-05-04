"use client";

import React from 'react';

interface PageProps {
  onNavigate: (page: string) => void;
}

export default function Programs({ onNavigate }: PageProps) {
  const programsList = [
    { 
      title: "Adrian Kessler: Selected Works 2010–2025", 
      type: "Monograph", 
      desc: "A comprehensive overview of Kessler's industrial period, featuring essays by leading architectural theorists.",
      img: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Spatial Investigations Vol. 4", 
      type: "Journal", 
      desc: "The fourth edition of Meridian's internal journal, exploring the intersection of neon structures and Brutalist forms.",
      img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "The Weight of Light", 
      type: "Exhibition Catalogue", 
      desc: "Published concurrently with the Seoul exhibition, documenting Sora Niven's luminous fragments.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800" 
    },
    { 
      title: "Curatorial Talk: Form & Void", 
      type: "Recorded Program", 
      desc: "A documented discussion between Lena Verhoeven and the Meridian Curatorial Board, recorded live in New York.",
      img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=800" 
    }
  ];

  return (
    <div className="animate-in fade-in duration-1000 bg-stone-50 min-h-screen">
      
      {/* Page Header */}
      <div className="pt-32 lg:pt-48 pb-16 container mx-auto px-6 md:px-12 max-w-[1600px] border-b border-stone-200">
        <h1 className="text-4xl lg:text-6xl font-normal tracking-tight text-stone-900 leading-[1.1]">Programs & Publishing</h1>
        <div className="flex gap-6 pt-8 text-[13px] font-medium">
          <button className="text-stone-900 border-b border-stone-900 pb-1">All Programs</button>
          <button className="text-stone-500 hover:text-stone-900 transition-colors">Publications</button>
          <button className="text-stone-500 hover:text-stone-900 transition-colors">Recorded Talks</button>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {programsList.map((item, idx) => (
            <div key={idx} className="group cursor-pointer flex flex-col" onClick={() => onNavigate('home')}>
              <div className="aspect-[3/4] bg-stone-200 overflow-hidden mb-6 flex items-center justify-center p-8 lg:p-12 relative">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover shadow-xl transition-transform duration-[1.5s] group-hover:scale-105 group-hover:-translate-y-2" />
              </div>
              <div className="space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-widest text-stone-500">{item.type}</p>
                <h3 className="text-lg font-normal tracking-tight text-stone-900 group-hover:text-stone-500 transition-colors">{item.title}</h3>
                <p className="text-[13px] font-light text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
