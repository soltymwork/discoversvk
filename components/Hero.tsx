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

      {/* Mountain silhouette decoration — Slovak Tatras inspired */}
      <svg
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-full z-10 opacity-10 pointer-events-none"
        viewBox="0 0 1440 180"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,180 L0,120 L80,60 L140,90 L200,30 L270,80 L340,10 L420,70 L500,40 L570,90 L640,20 L720,75 L800,45 L870,85 L940,15 L1010,65 L1080,35 L1150,80 L1220,50 L1300,90 L1370,55 L1440,80 L1440,180 Z"
          fill="#0b4ea2"
        />
        <path
          d="M0,180 L0,150 L100,110 L180,130 L260,90 L350,120 L440,80 L530,115 L620,95 L700,130 L780,100 L860,125 L950,85 L1040,120 L1130,105 L1220,130 L1310,110 L1440,135 L1440,180 Z"
          fill="#1a1a2e"
          opacity="0.6"
        />
      </svg>

      <div className="relative z-10 text-center w-full max-w-7xl mx-auto px-6 h-full flex flex-col justify-center mt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="font-sans uppercase tracking-[0.3em] text-xs md:text-sm font-semibold text-gray-800 mb-6 block drop-shadow-sm">
            Discover Slovakia
          </span>
          <h1 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] font-bold">
            <span className="text-white drop-shadow-[0_4px_32px_rgba(0,0,0,1)]">Objavte</span><br />
            <span className="italic text-[#0b4ea2] mr-[0.5em] md:mr-4 tracking-tighter drop-shadow-[0_3px_16px_rgba(0,0,0,0.7)]">krásy</span>
            <span className="text-[#ee1c25] drop-shadow-[0_3px_16px_rgba(0,0,0,0.6)]">Slovenska</span>
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
