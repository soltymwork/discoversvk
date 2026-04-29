import Link from 'next/link';
import { Camera, MapPin, Search } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t items-center text-white py-16 md:py-24 mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
        <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start justify-between">
          <Link href="/" className="font-serif text-4xl font-bold tracking-tighter mb-4 text-white">
            Slovensko.
          </Link>
          <div className="text-sm font-medium tracking-widest uppercase opacity-60">
            Oficiálny portál
          </div>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-xl italic mb-2 text-white/50">Objavujte</h4>
          <Link href="/destinacie" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Kam ísť</Link>
          <Link href="/aktivity" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Čo robiť</Link>
          <Link href="/gastronomia" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Jedlo & Pitie</Link>
        </div>
        
        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-xl italic mb-2 text-white/50">Zážitky</h4>
          <Link href="/inspiracie" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Cestovateľské nápady</Link>
          <Link href="/tradicie" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Tradície</Link>
          <Link href="/pristupnost" className="text-sm font-medium hover:text-red-400 transition-colors uppercase tracking-widest">Bezbariérové cestovanie</Link>
        </div>

        <div className="col-span-1 flex flex-col gap-4">
          <h4 className="font-serif text-xl italic mb-2 text-white/50">Sledujte nás</h4>
          <p className="text-sm text-gray-400 font-light leading-relaxed">
            Nezabudnite použiť #discoversvk na vašich fotografiách na sociálnych sieťach. Credit patrí majiteľom fotiek.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <Camera size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
              <MapPin size={18} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/10 text-center md:text-left text-xs uppercase tracking-widest text-gray-500 font-medium flex flex-col md:flex-row justify-between">
        <p>&copy; {new Date().getFullYear()} Discover Slovakia.</p>
        <div className="flex gap-6 justify-center mt-4 md:mt-0">
          <Link href="/ochrana-sukromia" className="hover:text-white">Ochrana súkromia</Link>
          <Link href="/podmienky" className="hover:text-white">Podmienky použitia</Link>
        </div>
      </div>
    </footer>
  );
}
