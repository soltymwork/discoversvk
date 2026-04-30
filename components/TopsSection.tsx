'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, Heart } from 'lucide-react';

const topCards = [
  {
    id: "folklor",
    title: "Čarovné folklórne slávnosti",
    description: "Folklórne slávnosti vo Východnej a na Detve predstavujú kultúrne vyvrcholenie sezóny. Užívajte si farby a jedinečnú hudbu.",
    category: "Kultúra",
    country: "Slovensko",
    image: "https://picsum.photos/seed/folklor/800/600",
    linkText: "Folklórne slávnosti",
    href: "/inspiracie/folklor"
  },
  {
    id: "trhy",
    title: "Vianočné zvyky a trhy",
    description: "Ak si chcete odniesť domov kúsok vianočného Slovenska, navštívte trhy s umeleckými remeselníkmi a voňavou medovinou.",
    category: "Trhy",
    country: "Slovensko",
    image: "https://picsum.photos/seed/vianocnetrhy/800/600",
    linkText: "Vianočné zvyky a trhy",
    href: "/inspiracie/vianoce"
  },
  {
    id: "hrady",
    title: "Najkrajšie hrady a zámky pod Tatrami",
    description: "Nadšenie pre históriu - zrúcaniny aj veľkolepé hrady obklopené jedinečnou prírodou. Presvedčte sa sami!",
    category: "História",
    country: "Slovensko",
    image: "https://picsum.photos/seed/slovenskehrady/800/600",
    linkText: "Historické miesta",
    href: "/inspiracie/hrady"
  }
];

export default function TopsSection() {
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
    <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div className="flex items-center gap-6">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-gray-900 leading-tight max-w-2xl">
              Slovenské NAJ, ktoré vás nadchnú vo všetkých ročných obdobiach
            </h2>
            <Heart className="text-[#ee1c25] hidden md:block" size={40} strokeWidth={1.5} fill="#ee1c25" />
          </div>
          
          <div className="hidden md:flex gap-3 shrink-0">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Predošlé"
            >
              <ArrowLeft size={20} className="text-gray-700" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Ďalšie"
            >
              <ArrowRight size={20} className="text-gray-700" />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x scrollbar-hide pb-10 pt-4" 
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {topCards.map(card => (
            <div key={card.id} className="min-w-[85vw] md:min-w-[360px] lg:min-w-[400px] flex-1 flex flex-col group snap-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden mb-5 rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                   <span className="bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                     {card.category}
                   </span>
                   <span className="bg-white/90 backdrop-blur text-gray-900 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm shadow-sm">
                     {card.country}
                   </span>
                </div>
              </div>

              <div className="flex-1 flex flex-col pb-6">
                <h3 className="font-serif text-2xl md:text-3xl text-gray-900 font-medium mb-3 leading-tight">{card.title}</h3>
                <p className="text-gray-600 font-light leading-relaxed mb-8 flex-1">
                  {card.description}
                </p>

                <Link href={card.href} className="inline-flex items-center gap-3 text-[#ee1c25] font-semibold group-hover:text-red-700 transition-colors pb-2">
                   <span className="w-8 h-8 rounded-full border border-red-200 group-hover:bg-red-50 flex items-center justify-center shrink-0 transition-colors">
                     <ArrowRight size={16} />
                   </span>
                   <span className="text-sm tracking-wide">{card.linkText}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
