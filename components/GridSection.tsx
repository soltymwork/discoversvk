'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface GridCard {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

interface GridSectionProps {
  title: string;
  mainCard: GridCard;
  sideCards: GridCard[];
}

export default function GridSection({ title, mainCard, sideCards }: GridSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-12">
          {title}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Main Large Card */}
          <Link href={mainCard.href} className="col-span-1 block group h-[500px] lg:h-[700px] relative rounded-3xl overflow-hidden drop-shadow-xl cursor-pointer">
            <Image 
              src={mainCard.image}
              alt={mainCard.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 flex justify-between items-end">
              <div>
                <h3 className="font-serif text-3xl md:text-5xl text-white font-medium mb-4">{mainCard.title}</h3>
                <span className="bg-white/20 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-semibold uppercase tracking-wider">
                  {mainCard.category}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white transition-colors shrink-0">
                <ArrowRight size={20} className="text-white group-hover:text-gray-900" />
              </div>
            </div>
          </Link>

          {/* Side Cards Stack */}
          <div className="col-span-1 flex flex-col gap-6 md:gap-8">
            {sideCards.map((card, idx) => (
              <Link href={card.href} key={card.id} className="flex-1 min-h-[160px] group bg-white rounded-3xl overflow-hidden drop-shadow-sm hover:drop-shadow-md transition-shadow flex items-center pr-6 md:pr-10 gap-6 cursor-pointer border border-gray-100">
                <div className="relative w-[130px] md:w-[180px] self-stretch shrink-0">
                  <Image 
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 flex py-6 justify-between items-center h-full">
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-gray-900 font-medium mb-3 group-hover:text-red-600 transition-colors">{card.title}</h3>
                    <span className="text-xs font-semibold text-gray-500 border border-gray-200 px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {card.category}
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center shrink-0 group-hover:border-red-600 group-hover:text-red-600 transition-colors text-gray-400">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
