"use client";

import React, { useState } from 'react';
import { ArrowRight, MoveUpRight } from 'lucide-react';

interface CollectionsProps {
  onPageChange?: (page: string) => void;
}

export default function Collections({ onPageChange }: CollectionsProps) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Living Room', 'Dining & Bar', 'Workspace', 'Storage'];

  const collections = [
    {
      id: 'nordic-calm',
      title: 'Nordic Calm Suite',
      category: 'Living Room',
      description: 'Defined by airy visual breathing room, light oak frames, and cozy boucle upholstery.',
      designer: 'Erik Vandersgard',
      itemsCount: 14,
    },
    {
      id: 'urban-loft',
      title: 'Urban Loft Line',
      category: 'Workspace',
      description: 'Industrial charcoal frameworks accented by matte walnut surfaces. Perfect for modern office setups.',
      designer: 'Aylin Yılmaz',
      itemsCount: 8,
    },
    {
      id: 'metropolitan',
      title: 'The Metropolitan',
      category: 'Living Room',
      description: 'A contemporary take on compact comfort. Clean straight edges and plush seating structures.',
      designer: 'Piero Massaro',
      itemsCount: 19,
    },
    {
      id: 'heritage',
      title: 'Heritage Craft',
      category: 'Dining & Bar',
      description: 'Hand-sculpted solid mahogany surfaces and matching chairs designed to anchor warm family spaces.',
      designer: 'James Mercer',
      itemsCount: 11,
    },
    {
      id: 'monolith-storage',
      title: 'Monolith Minimal',
      category: 'Storage',
      description: 'Monolithic cabinetry with seamless hardware-free doors. Maximizes organizational capacity.',
      designer: 'Sarah Thorne',
      itemsCount: 6,
    }
  ];

  const filteredCollections = activeCategory === 'All'
    ? collections
    : collections.filter((c) => c.category === activeCategory);

  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen select-none select-text">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8 select-none">
          <div>
            <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Explore Showroom</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Curated Collections
            </h1>
            <p className="text-sm font-light text-slate-600 mt-2 max-w-lg">
              Explore meticulously grouped furniture families designed to anchor specific living environments with calm and functional balance.
            </p>
          </div>

          <button
            onClick={() => handleNavigation('catalog')}
            className="flex items-center gap-2 border border-slate-300 hover:border-slate-800 bg-white/80 hover:bg-white text-slate-800 text-[11px] font-semibold tracking-widest uppercase px-6 py-3 transition-colors"
          >
            Browse Full Catalog
          </button>
        </div>

        {/* Category filtering */}
        <div className="flex flex-wrap items-center gap-2 mt-10 select-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-semibold tracking-wider uppercase px-4 py-2 border transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                  : 'bg-white border-slate-200/80 text-slate-600 hover:border-slate-400 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCollections.map((col) => (
            <div
              key={col.id}
              onClick={() => handleNavigation('catalog')}
              className="group flex flex-col justify-between p-6 bg-white border border-slate-200/50 hover:border-slate-400 hover:shadow-sm transition-all duration-300 cursor-pointer h-full"
            >
              <div>
                {/* Visual line art representation placeholder */}
                <div className="aspect-[16/10] bg-slate-50 border border-slate-100/80 mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-4 left-4 border border-slate-200/60 text-[9px] tracking-widest font-bold uppercase text-slate-400 px-2 py-1 bg-white">
                    {col.category}
                  </div>
                  <MoveUpRight className="w-5 h-5 text-slate-300 opacity-40 group-hover:opacity-100 group-hover:text-slate-900 transition-all duration-300 transform group-hover:scale-110" />
                </div>
                
                <h3 className="font-serif text-2xl font-light text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                  {col.title}
                </h3>
                <p className="text-slate-500 font-light text-sm leading-relaxed mb-6">
                  {col.description}
                </p>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-slate-100/80 mt-auto">
                <span className="text-xs text-slate-400 font-light">
                  Designed by <strong className="font-medium text-slate-600">{col.designer}</strong>
                </span>
                <span className="text-[10px] tracking-wider text-slate-500 font-semibold uppercase flex items-center gap-1.5 group-hover:text-slate-900 transition-colors">
                  {col.itemsCount} Items <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
