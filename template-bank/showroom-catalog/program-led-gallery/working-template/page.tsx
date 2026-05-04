"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Exhibitions from './pages/Exhibitions';
import Programs from './pages/Programs';
import Spaces from './pages/Spaces';
import About from './pages/About';

export default function ProgramLedGalleryTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'artists':
        return <Artists onNavigate={setCurrentPage} />;
      case 'exhibitions':
        return <Exhibitions onNavigate={setCurrentPage} />;
      case 'programs':
        return <Programs onNavigate={setCurrentPage} />;
      case 'spaces':
        return <Spaces onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 flex flex-col selection:bg-stone-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow w-full pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
