'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HighlightSection() {
  return (
    <section className="py-12 md:py-20 bg-[#FAF9F6] relative z-10 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="relative w-full h-[550px] md:h-[650px] rounded-3xl overflow-hidden drop-shadow-2xl flex items-center justify-center group cursor-pointer">
          <Image
            src="https://picsum.photos/seed/slovak-highlight/1920/1200"
            alt="Slovenská esencia"
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 group-hover:bg-black/40 transition-colors duration-500" />

          <div className="relative z-10 flex flex-col items-center text-center px-4 w-full">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="border border-white/40 bg-black/20 backdrop-blur-md text-white px-5 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase shadow-sm">
                Turistika
              </span>
              <span className="border border-white/40 bg-black/20 backdrop-blur-md text-white px-5 py-1.5 rounded-sm text-xs font-semibold tracking-widest uppercase shadow-sm">
                Cyklistika
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-white mb-10 tracking-tight drop-shadow-md">
              Slovenská esencia
            </h2>

            <Link href="/inspiracie/esencia" className="bg-[#ee1c25] hover:bg-red-700 text-white px-8 py-4 rounded font-semibold transition-all hover:-translate-y-1 shadow-xl flex items-center gap-3 border border-red-500">
              <span className="tracking-wide uppercase text-sm">Tú už z hlavy nedostanete</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
