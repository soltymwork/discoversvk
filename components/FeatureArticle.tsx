'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface FeatureArticleProps {
  title: string;
  paragraph1: string;
  paragraph2?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function FeatureArticle({ title, paragraph1, paragraph2, imageSrc, imageAlt }: FeatureArticleProps) {
  return (
    <section className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-4xl mb-16 md:mb-24">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 tracking-tight leading-[1.1] mb-10">
          {title}
        </h2>
        <div className="font-sans text-lg md:text-xl text-gray-600 font-light leading-relaxed space-y-6">
          <p>{paragraph1}</p>
          {paragraph2 && <p>{paragraph2}</p>}
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full relative aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden drop-shadow-2xl"
      >
        <Image 
          src={imageSrc} 
          alt={imageAlt}
          fill
          className="object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>
    </section>
  );
}
