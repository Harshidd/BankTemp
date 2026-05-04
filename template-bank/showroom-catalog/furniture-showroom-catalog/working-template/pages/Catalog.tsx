"use client";

import React, { useState } from 'react';
import { Search, Eye, MessageCircle } from 'lucide-react';

interface CatalogProps {
  onPageChange?: (page: string) => void;
}

export default function Catalog({ onPageChange }: CatalogProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Sofas & Seating', 'Tables & Desks', 'Lighting', 'Storage & Shelving'];

  const products = [
    {
      id: 'venice-lounge-sofa',
      name: 'Venice Lounge Sofa',
      category: 'Sofas & Seating',
      family: 'Nordic Calm',
      description: 'Ultra-plush deep cushions, minimalist leg frame, and stain-resistant boucle texture.',
      price: '₺74.500',
      tag: 'New Entry'
    },
    {
      id: 'oak-heritage-table',
      name: 'Oak Heritage Dining Table',
      category: 'Tables & Desks',
      family: 'Heritage Craft',
      description: 'Solid European white oak dining table with naturally brushed grain lines.',
      price: '₺58.200',
      tag: 'Featured'
    },
    {
      id: 'monolith-sideboard',
      name: 'Monolith Minimal Sideboard',
      category: 'Storage & Shelving',
      family: 'Urban Loft',
      description: 'Hardware-free storage with soft-close flush doors and integrated drawers.',
      price: '₺42.800',
      tag: 'Customizable'
    },
    {
      id: 'brass-canopy-light',
      name: 'Brass Canopy Chandelier',
      category: 'Lighting',
      family: 'Metropolitan',
      description: 'Graceful brushed brass chandelier with dual-directional glowing bulbs.',
      price: '₺16.400',
      tag: 'Bestseller'
    },
    {
      id: 'alto-modular-desk',
      name: 'Alto Modular Desk',
      category: 'Tables & Desks',
      family: 'Nordic Calm',
      description: 'Multi-tiered desktop structure with built-in cord pathways and dark oak finish.',
      price: '₺31.900',
      tag: 'New Entry'
    },
    {
      id: 'marcel-armchair',
      name: 'Marcel Accent Armchair',
      category: 'Sofas & Seating',
      family: 'Metropolitan',
      description: 'Architecturally curved chair wrapped in high-fidelity full-grain tan leather.',
      price: '₺28.600',
      tag: 'Customizable'
    }
  ];

  const handleNavigation = (page: string) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const filteredProducts = products.filter((p) => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-24 bg-[#FAF9F6] text-slate-900 font-sans min-h-screen select-none select-text">
      {/* Catalog Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-slate-200 pb-8 select-none">
          <div>
            <span className="text-[10px] tracking-widest font-bold uppercase text-slate-400 block mb-2">Complete Catalog</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Browse Our Products
            </h1>
            <p className="text-sm font-light text-slate-600 mt-2 max-w-lg">
              Explore single furniture products grouped by design family and practical categories. Request a custom quote or info anytime.
            </p>
          </div>

          {/* Quick contact / visit control */}
          <button
            onClick={() => handleNavigation('contact')}
            className="flex items-center gap-2 border border-slate-300 hover:border-slate-800 bg-white/80 hover:bg-white text-slate-800 text-[11px] font-semibold tracking-widest uppercase px-6 py-3 transition-colors"
          >
            Inquire For Showroom Visit
          </button>
        </div>

        {/* Searching & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mt-10">
          <div className="flex flex-wrap items-center gap-2 select-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-[11px] font-semibold tracking-wider uppercase px-4 py-2 border transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-slate-900 border-slate-900 text-white shadow-sm'
                    : 'bg-white border-slate-200/80 text-slate-600 hover:border-slate-400 hover:text-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 hover:border-slate-300 focus:border-slate-800 outline-none text-slate-800 font-light text-sm pl-10 pr-4 py-2.5 transition-all rounded-none"
            />
          </div>
        </div>
      </div>

      {/* Grid listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((p) => (
            <div
              key={p.id}
              className="group flex flex-col justify-between p-5 bg-white border border-slate-200/50 hover:border-slate-400 transition-all duration-300 h-full hover:shadow-[0_12px_32px_-15px_rgba(0,0,0,0.04)] select-none"
            >
              <div>
                {/* Visual line art representation placeholder */}
                <div className="aspect-[4/3] bg-slate-50 border border-slate-100/80 mb-5 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="border border-slate-200/60 text-[8px] tracking-widest font-bold uppercase text-slate-500 px-2 py-1 bg-white select-none">
                      {p.family}
                    </span>
                    <span className="border border-slate-200/60 text-[8px] tracking-widest font-bold uppercase text-slate-500 px-2 py-1 bg-white select-none">
                      {p.tag}
                    </span>
                  </div>
                  <Eye className="w-5 h-5 text-slate-300 opacity-40 group-hover:opacity-100 group-hover:text-slate-900 transition-all duration-300 transform group-hover:scale-110" />
                </div>
                
                <h3 className="font-serif text-xl font-light text-slate-900 mb-1 leading-snug group-hover:text-slate-700 transition-colors">
                  {p.name}
                </h3>
                <span className="text-xs text-slate-400 font-light block mb-3 uppercase tracking-wide">
                  {p.category}
                </span>
                <p className="text-slate-600 font-light text-sm leading-relaxed mb-6">
                  {p.description}
                </p>
              </div>

              {/* Interaction line */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100/80 mt-auto select-none">
                <div>
                  <span className="text-[10px] text-slate-400 font-medium block uppercase tracking-wide">Guide Price</span>
                  <span className="text-base font-serif font-light text-slate-900">{p.price}</span>
                </div>
                <button
                  onClick={() => handleNavigation('contact')}
                  className="flex items-center gap-1.5 bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 hover:border-slate-900 text-[10px] font-semibold tracking-widest uppercase px-4 py-3 transition-all duration-300 shadow-sm"
                >
                  Inquire Now <MessageCircle className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
          {filteredProducts.length === 0 && (
            <div className="col-span-full py-24 text-center select-none">
              <span className="text-sm font-light text-slate-500 block">No matching products found.</span>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
                className="mt-4 text-[11px] font-semibold tracking-widest uppercase border border-slate-300 hover:border-slate-800 text-slate-800 bg-white/80 hover:bg-white px-5 py-2.5 transition-all"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
