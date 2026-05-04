"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Artists from './pages/Artists';
import Spaces from './pages/Spaces';
import About from './pages/About';

export default function VanguardStyleGalleryTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'exhibitions':
        return <Exhibitions onNavigate={setCurrentPage} />;
      case 'artists':
        return <Artists onNavigate={setCurrentPage} />;
      case 'spaces':
        return <Spaces onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50/50 font-sans text-neutral-900 flex flex-col selection:bg-neutral-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow w-full">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
