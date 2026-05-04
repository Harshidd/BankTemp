"use client";

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Collections from './pages/Collections';
import Catalog from './pages/Catalog';
import Inspiration from './pages/Inspiration';
import About from './pages/About';
import Contact from './pages/Contact';

export default function FurnitureShowroom() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onPageChange={setCurrentPage} />;
      case 'collections':
        return <Collections onPageChange={setCurrentPage} />;
      case 'catalog':
        return <Catalog onPageChange={setCurrentPage} />;
      case 'inspiration':
        return <Inspiration onPageChange={setCurrentPage} />;
      case 'about':
        return <About onPageChange={setCurrentPage} />;
      case 'contact':
        return <Contact onPageChange={setCurrentPage} />;
      default:
        return <Home onPageChange={setCurrentPage} />;
    }
  };

  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900 selection:bg-slate-900 selection:text-white relative font-sans">
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      <div className="flex flex-col relative z-10 animate-in fade-in duration-700">
        {renderPage()}
        <Footer onPageChange={setCurrentPage} />
      </div>
    </main>
  );
}
