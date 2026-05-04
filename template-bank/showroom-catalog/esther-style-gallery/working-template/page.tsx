"use client";

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Artists from './pages/Artists';
import Press from './pages/Press';
import About from './pages/About';
import Locations from './pages/Locations';

export default function SatelliteStyleGalleryTemplate() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'exhibitions':
        return <Exhibitions onNavigate={setCurrentPage} />;
      case 'artists':
        return <Artists onNavigate={setCurrentPage} />;
      case 'press':
        return <Press onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'locations':
        return <Locations onNavigate={setCurrentPage} />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 flex flex-col selection:bg-zinc-200">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow pt-24 lg:pt-32">
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
