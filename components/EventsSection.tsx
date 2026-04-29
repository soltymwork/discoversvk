'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF9F6] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex gap-6 overflow-x-auto snap-x scrollbar-hide md:grid md:grid-cols-2 pb-8 md:pb-0" style={{ scrollbarWidth: 'none' }}>
          
          {/* Event 1 */}
          <div className="relative min-w-[85vw] md:min-w-0 h-[450px] md:h-[550px] rounded-3xl overflow-hidden drop-shadow-xl flex flex-col justify-center items-center text-center snap-center group">
            <Image 
              src="https://picsum.photos/seed/event1/1000/1000" 
              alt="Medzinárodný maratón" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            
            <div className="relative z-10 px-6 sm:px-10 flex flex-col items-center w-full">
              <div className="flex gap-2 mb-4">
                <span className="border border-white/50 text-white backdrop-blur px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest">Podujatie</span>
                <span className="border border-white/50 text-white backdrop-blur px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest">Tip</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8 leading-[1.1] drop-shadow-lg">
                04.–05. 10. 2026 - Najstarší maratón v Európe.
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/podujatia/mmm" className="bg-[#ee1c25] hover:bg-red-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <ArrowUpRight size={18} /> Medzinárodný maratón
                </Link>
                <Link href="/podujatia" className="border border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 rounded text-sm font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                  <ArrowUpRight size={18} /> Všetky podujatia v meste
                </Link>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="relative min-w-[85vw] md:min-w-0 h-[450px] md:h-[550px] rounded-3xl overflow-hidden drop-shadow-xl flex flex-col justify-center items-center text-center snap-center group">
            <Image 
              src="https://picsum.photos/seed/event2/1000/1000" 
              alt="Dni majstrov ÚĽUV" 
              fill 
              className="object-cover transition-transform duration-1000 group-hover:scale-105" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
            
            <div className="relative z-10 px-6 sm:px-10 flex flex-col items-center w-full">
              <div className="flex gap-2 mb-4">
                <span className="border border-white/50 text-white backdrop-blur px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest">Kultúra</span>
                <span className="border border-white/50 text-white backdrop-blur px-3 py-1 rounded-sm text-[10px] uppercase font-bold tracking-widest">Rodina</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-serif font-medium text-white mb-8 leading-[1.1] drop-shadow-lg">
                Dni majstrov ÚĽUV: Oslava tradičných remesiel.
              </h3>
              
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Link href="/podujatia/uluv" className="bg-[#ee1c25] hover:bg-red-700 text-white px-6 py-3 rounded text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                  <ArrowUpRight size={18} /> Dni majstrov ÚĽUV
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
