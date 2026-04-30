'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
      {/* Background Image / Sketch */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/sketch.png"
          alt="Slovak Nature Sketch"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF9F6] via-black/20 to-[#FAF9F6]/30" />
      </div>

      {/* Slovak tricolor accent — three vertical stripes bottom-left */}
      <div className="absolute bottom-0 left-0 z-10 flex gap-[3px] h-32 md:h-48 opacity-70" aria-hidden="true">
        <div className="w-[5px] md:w-[7px] bg-white" />
        <div className="w-[5px] md:w-[7px] bg-[#0b4ea2]" />
        <div className="w-[5px] md:w-[7px] bg-[#ee1c25]" />
      </div>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-gray-800 mb-6 block drop-shadow-sm">
            Discover Slovakia
          </span>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85]">
            <span className="text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]">Objavte</span><br />
            <span className="italic font-light text-[#0b4ea2] mr-[0.5em] md:mr-4 tracking-tighter drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">krásy</span>
            <span className="text-[#ee1c25] drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">Slovenska</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-12 text-lg md:text-xl font-light text-gray-700 max-w-xl mx-auto drop-shadow-sm"
        >
          Malebné hory, starobylé hrady a nezabudnuteľné zážitky. 
          Tu sa začína váš príbeh.
        </motion.p>
      </div>
    </section>
  );
}
