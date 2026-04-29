import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function DestinaciePage() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] pt-24 md:pt-32">
      <Navbar />
      
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-gray-900 mb-6">
          Zaujímavé miesta
        </h1>
        <p className="font-sans text-xl text-gray-600 max-w-2xl font-light mb-16">
          Od majestátnych štítov až po uličky historických miest. Objavte tie najkrajšie destinácie na Slovensku.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {[
            {
              id: 'vysoke-tatry',
              title: "Vysoké Tatry",
              img: "https://picsum.photos/seed/tatry-page/800/600",
              items: 45
            },
            {
              id: 'slovensky-raj',
              title: "Slovenský raj",
              img: "https://picsum.photos/seed/slovensky-raj-page/800/600",
              items: 32
            },
            {
              id: 'bratislava',
              title: "Bratislava a okolie",
              img: "https://picsum.photos/seed/bratislava-page/800/600",
              items: 58
            },
            {
              id: 'liptov',
              title: "Liptov",
              img: "https://picsum.photos/seed/liptov-page/800/600",
              items: 80
            }
          ].map(dest => (
            <div key={dest.id} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6 drop-shadow-md">
                <Image 
                  src={dest.img}
                  alt={dest.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h2 className="font-serif text-3xl font-medium text-gray-900 group-hover:text-red-600 transition-colors">
                {dest.title}
              </h2>
              <span className="text-gray-500 font-medium text-sm tracking-widest uppercase mt-2 block">
                {dest.items} Zaujímavostí
              </span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
