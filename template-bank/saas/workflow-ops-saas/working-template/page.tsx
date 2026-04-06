"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Features from './pages/Features';
import Workflows from './pages/Workflows';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function WorkflowOpsSaaS() {
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
      case 'workflows':
        return <Workflows />;
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
    <main className="min-h-screen bg-white text-slate-950 selection:bg-amber-500 selection:text-white font-sans relative">
      {/* 1. System Navigation Loop */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* 2. Structured Execution Stream */}
      <div className="flex flex-col relative z-20 animate-in fade-in duration-700">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>

      {/* 3. Global Structural Accents (Unified Process Feel) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-[15%] -right-[10%] w-[50%] h-[50%] rounded-full bg-amber-500/20 blur-[200px]" />
        <div className="absolute bottom-[20%] -left-[15%] w-[45%] h-[45%] rounded-full bg-slate-950/20 blur-[200px]" />
      </div>

    </main>
  );
}
