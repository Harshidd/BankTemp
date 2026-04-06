"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

export default function SaaSStarter() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'features':
        return <Features />;
      case 'pricing':
        return <Pricing />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'faq':
        return <FAQ />;
      default:
        return <Home />;
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-600 selection:text-white relative font-sans">
      {/* Navigation Overlay (State Driven) */}
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />

      {/* Main Page Rendering Area */}
      <div className="flex flex-col relative z-10 animate-in fade-in duration-700">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>

      {/* Background Decorative Accents (Unified across pages) */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-50 opacity-20">
         <div className="absolute top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-600 blur-[200px]" />
         <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-emerald-600 blur-[200px]" />
      </div>

    </main>
  );
}
