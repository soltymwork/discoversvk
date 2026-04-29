import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function AktivityPage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-24 md:pt-32">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6">
          Čo zažiť na Slovensku
        </h1>
        <p className="font-sans text-xl text-gray-600 max-w-2xl font-light mb-16">
          Nezáleží na tom ako dlho sa zdržíte, máme pre vás pripravené zážitky, na ktoré nikdy nezabudnete.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { id: 1, title: 'Turistika a hory', img: 'https://picsum.photos/seed/turistika/800/800' },
            { id: 2, title: 'Termálne kúpele', img: 'https://picsum.photos/seed/kupele/800/800' },
            { id: 3, title: 'Historické pamiatky', img: 'https://picsum.photos/seed/historia/800/800' },
            { id: 4, title: 'Zimné radovánky', img: 'https://picsum.photos/seed/zima/800/800' },
            { id: 5, title: 'Adrenalín', img: 'https://picsum.photos/seed/adrenalin/800/800' },
            { id: 6, title: 'Tradičné remeslá', img: 'https://picsum.photos/seed/remesla/800/800' },
          ].map(activity => (
            <div key={activity.id} className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer drop-shadow hover:drop-shadow-xl transition-shadow">
              <Image 
                src={activity.img}
                alt={activity.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-black/20 to-transparent" />
              <h3 className="absolute bottom-8 left-8 right-8 font-serif text-3xl font-medium text-white">
                {activity.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
