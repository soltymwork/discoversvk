import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function TatryDetail() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-red-500 selection:text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex flex-col justify-end overflow-hidden px-6 md:px-12 pb-24">
        <div className="absolute inset-0 z-0 opacity-80">
          <Image
            src="https://picsum.photos/seed/tatrydetail/1920/1080"
            alt="Vysoké Tatry"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl w-full mx-auto">
          <span className="text-white/80 font-sans text-sm uppercase tracking-widest font-semibold mb-4 block">
            Prírodný klenot
          </span>
          <h1 className="font-serif text-5xl md:text-8xl font-medium tracking-tight text-white mb-6">
            Vysoké Tatry
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <section className="max-w-4xl mx-auto px-6 md:px-12 py-20 bg-white -mt-16 relative z-20 rounded-t-[3rem] shadow-xl mb-32">
        <div className="prose prose-lg md:prose-xl prose-gray font-light font-sans max-w-none">
          <p className="lead text-2xl text-gray-900 font-serif mb-8">
            Najmenšie veľhory sveta spájajú na malom priestore obrovské množstvo krás, ktoré inde len tak nenájdete. Začnite svoj deň výstupom na jeden z vysokých štítov a ukončite ho romantickou prechádzkou pri Štrbskom plese.
          </p>
          
          <h2 className="font-serif text-3xl text-gray-900 mt-12 mb-6">Kedy vyraziť na túru?</h2>
          <p className="mb-6">
            Ideálnym časom pre peších turistov je koniec leta a jeseň, kedy je počasie najstabilnejšie a vzduch ostro čistý. Trasy na horské chaty patria medzi najkrajšie európske výlety, kde sa vám naskytne pohľad na krištáľovo čisté plesá a kamzíky.
          </p>

          {/* YouTube Video Embed - Simulating embedded video request */}
          <div className="my-16 relative aspect-video w-full rounded-2xl overflow-hidden drop-shadow-xl border border-gray-100 bg-gray-100 flex items-center justify-center">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>

          <h2 className="font-serif text-3xl text-gray-900 mt-12 mb-6">Pohostinnosť a kultúra relaxu</h2>
          <p>
            Tatry sú úžasným miestom nielen pre aktívnych športovcov. Množstvo termálnych kúpeľov v blízkom okolí zaistí, že po dni v horách načerpáte sily v horúcej minerálnej vode s výhľadom na zasnežené kopce.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
