"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Works from './pages/Works';
import Artists from './pages/Artists';
import About from './pages/About';
import Contact from './pages/Contact';

export default function MinimalArtGalleryTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'exhibitions':
        return <Exhibitions onNavigate={setCurrentPage} />;
      case 'works':
        return <Works onNavigate={setCurrentPage} />;
      case 'artists':
        return <Artists onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 flex flex-col selection:bg-neutral-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-24 lg:pt-32">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
