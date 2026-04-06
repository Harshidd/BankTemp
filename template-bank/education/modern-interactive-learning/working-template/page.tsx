"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page Components
import Home from './pages/Home';
import Programs from './pages/Programs';
import HowItWorks from './pages/HowItWorks';
import Audience from './pages/Audience';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function ModernInteractiveLearning() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'programs':
        return <Programs />;
      case 'how-it-works':
        return <HowItWorks />;
      case 'audience':
        return <Audience />;
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
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white font-sans relative">
      {/* 1. Academic Navigation Loop */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* 2. Structured Learning Stream */}
      <div className="flex flex-col relative z-20 animate-in fade-in duration-700">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>

      {/* 3. Global Academic Accents (Education DNA) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-[0.03]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1d4ed8_1px,transparent_1px),linear-gradient(to_bottom,#1d4ed8_1px,transparent_1px)] bg-[size:100px_100px]" />
        <div className="absolute top-[10%] -right-[5%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[200px]" />
        <div className="absolute bottom-[10%] -left-[5%] w-[35%] h-[35%] rounded-full bg-yellow-400/20 blur-[200px]" />
      </div>

    </main>
  );
}
