"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Features from './pages/Features';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function DataAISaaS() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'features':
        return <Features />;
      case 'solutions':
        return <Solutions />;
      case 'pricing':
        return <Pricing />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-emerald-500 selection:text-slate-950 font-sans relative">
      {/* Platform Navigation Protocol */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Structural Core Rendering */}
      <div className="flex flex-col relative z-20 animate-in fade-in duration-500">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>

      {/* Persistent Background Intelligence Layer (Accents) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        {/* Global gradients that unified all pages */}
        <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-emerald-500/5 blur-[200px]" />
        <div className="absolute bottom-[20%] -right-[15%] w-[45%] h-[45%] rounded-full bg-indigo-500/5 blur-[200px]" />
        {/* Unified data-variant grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

    </main>
  );
}
