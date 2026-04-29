'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 font-medium tracking-wide text-sm uppercase text-gray-900"
            >
              <Menu size={20} />
              <span className="hidden md:block">Menu</span>
            </button>
          </div>

          <Link
            href="/"
            className="font-serif text-3xl md:text-4xl font-bold tracking-tighter flex items-center gap-3 text-gray-900"
          >
            <svg width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 md:h-10 w-auto opacity-90 transition-opacity hover:opacity-100">
              <path d="M12 28C12 28 24 22 24 12V0H0V12C0 22 12 28 12 28Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              <path d="M11 5H13V9H17V11H13V15H15V17H13V22H11V17H9V15H11V11H7V9H11V5Z" fill="currentColor"/>
              <path d="M2.5 22C5 18 7 18 8.5 22C10 17 14 17 15.5 22C17 18 19 18 21.5 22C21.5 22 18 25 12 28C6 25 2.5 22 2.5 22Z" fill="currentColor"/>
            </svg>
            Slovensko.
          </Link>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-black/5 text-gray-900">
              <Search size={20} />
            </button>
            <div className="hidden md:flex items-center gap-1 font-medium text-sm border border-gray-200 rounded-full px-4 py-1.5 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              <Globe size={16} />
              <span>Slovenčina</span>
              <ChevronDown size={14} className="ml-1" />
            </div>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white h-screen flex flex-col"
          >
            <div className="p-6 md:px-12 py-6 flex justify-between items-center border-b border-gray-100">
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-widest font-semibold flex flex-col items-center justify-center p-2"
              >
                <span>Zatvoriť</span>
              </button>
              <span className="font-serif text-3xl font-bold">Slovensko.</span>
              <div className="w-10"></div> {/* Placeholder for balance */}
            </div>
            <div className="flex-1 overflow-y-auto px-6 py-12 md:px-24">
              <nav className="flex flex-col gap-8 text-3xl md:text-5xl font-serif font-light">
                <Link href="/destinacie" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-700 transition-colors">Zaujímavé miesta</Link>
                <Link href="/aktivity" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-700 transition-colors">Čo zažiť</Link>
                <Link href="/podujatia" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-700 transition-colors">Podujatia</Link>
                <Link href="/ubytovanie" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-700 transition-colors">Ubytovanie</Link>
                <Link href="/inspiracie" onClick={() => setMobileMenuOpen(false)} className="hover:text-red-700 transition-colors">Inšpirácie</Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
