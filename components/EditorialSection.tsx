'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface Card {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  href: string;
}

interface EditorialSectionProps {
  title: string;
  subtitle: string;
  icon?: React.ReactNode;
  cards: Card[];
  seeAllHref: string;
  seeAllText: string;
}

export default function EditorialSection({ title, subtitle, icon, cards, seeAllHref, seeAllText }: EditorialSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-32 w-full overflow-hidden bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-red-600 font-sans text-xs uppercase tracking-widest font-semibold mb-3 block">
            {subtitle}
          </span>
          <div className="flex items-center gap-4">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 leading-tight">
              {title}
            </h2>
            {icon && <div className="text-red-500 mb-2">{icon}</div>}
          </div>
        </div>
        
        {/* Navigation Buttons for desktop */}
        <div className="hidden md:flex gap-3">
          <button 
            onClick={scrollLeft}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ArrowLeft size={20} className="text-gray-700" />
          </button>
          <button 
            onClick={scrollRight}
            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ArrowRight size={20} className="text-gray-700" />
          </button>
        </div>
      </div>

      <div 
        ref={containerRef}
        className="flex gap-6 overflow-x-auto px-6 md:px-12 pb-10 scrollbar-hide snap-x pt-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <Link href={card.href} key={card.id} className="snap-start shrink-0">
            <motion.div 
              whileHover={{ y: -8 }}
              className="relative w-[85vw] md:w-[400px] h-[500px] md:h-[600px] rounded-3xl overflow-hidden group cursor-pointer drop-shadow-xl"
            >
              <Image 
                src={card.image}
                alt={card.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 tracking-tighter via-gray-900/20 to-transparent" />
              
              <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                {card.tags.map(tag => (
                  <span key={tag} className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="absolute justify-between items-end flex inset-x-0 bottom-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl text-white font-medium pr-4 leading-snug">
                  {card.title}
                </h3>
                <div className="w-10 h-10 rounded-full border border-white/40 group-hover:bg-white flex items-center justify-center transition-colors mb-1 shrink-0">
                  <ArrowRight size={18} className="text-white group-hover:text-gray-900" />
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-4 text-center">
        <Link 
          href={seeAllHref}
          className="inline-flex items-center text-sm uppercase tracking-widest font-semibold text-gray-900 border-b border-gray-300 pb-1 hover:border-gray-900 transition-colors"
        >
          {seeAllText}
        </Link>
      </div>
    </section>
  );
}
