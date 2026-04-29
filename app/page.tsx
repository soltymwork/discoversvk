import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HighlightSection from '@/components/HighlightSection';
import EditorialSection from '@/components/EditorialSection';
import EventsSection from '@/components/EventsSection';
import TopsSection from '@/components/TopsSection';
import GridSection from '@/components/GridSection';
import Footer from '@/components/Footer';
import { Sun, Snowflake } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6] selection:bg-red-500 selection:text-white relative">
      <Navbar />
      <Hero />
      
      <HighlightSection />

      <EditorialSection 
        title="Letná dovolenka v meste, v horách i pri jazere"
        subtitle="Zážitky, ktoré musíte aspoň raz skúsiť"
        icon={<Sun size={40} className="text-[#ee1c25]" strokeWidth={1.5} />}
        seeAllHref="/letna-dovolenka"
        seeAllText="Všetky letné inšpirácie"
        cards={[
          {
            id: "tatry",
            title: "Vysoké Tatry: Symbol národa a raj pre turistov",
            category: "Príroda",
            tags: ["Turistika", "Rodiny s deťmi"],
            image: "https://picsum.photos/seed/tatry/800/1000",
            href: "/destinacie/vysoke-tatry"
          },
          {
            id: "slovensky-raj",
            title: "Slovenský raj: Rebríky, vodopády a divoká príroda",
            category: "Dobrodružstvo",
            tags: ["Národný park", "Tiesňavy"],
            image: "https://picsum.photos/seed/slovenskyraj/800/1000",
            href: "/destinacie/slovensky-raj"
          },
          {
            id: "banska-stiavnica",
            title: "Banská Štiavnica: Romantika spojená s históriou",
            category: "Kultúra",
            tags: ["Pamiatky", "Mestá"],
            image: "https://picsum.photos/seed/stiavnica/800/1000",
            href: "/destinacie/banska-stiavnica"
          },
          {
            id: "liptov",
            title: "Liptovská Mara: Kúpanie s výhľadom na kopce",
            category: "Voda",
            tags: ["Kúpanie", "Šport"],
            image: "https://picsum.photos/seed/liptov/800/1000",
            href: "/destinacie/liptov"
          }
        ]}
      />

      <EditorialSection 
        title="Zimná mrazivá rozprávka na svahoch a v dolinách"
        subtitle="Zimná dovolenka"
        icon={<Snowflake size={40} className="text-[#0b4ea2]" strokeWidth={1.5} />}
        seeAllHref="/zimna-dovolenka"
        seeAllText="Kompletný zimný sprievodca"
        cards={[
          {
            id: "lyzovanie",
            title: "Lyžovanie svetovej úrovne v Jasnej",
            category: "Zimné športy",
            tags: ["Lyže", "Snowboard"],
            image: "https://picsum.photos/seed/lyze/800/1000",
            href: "/aktivity/lyzovanie"
          },
          {
            id: "wellness",
            title: "Termálne pramene uprostred zasnežených hôr",
            category: "Wellness",
            tags: ["Relax", "Spa"],
            image: "https://picsum.photos/seed/spa/800/1000",
            href: "/aktivity/wellness"
          },
          {
            id: "bezky",
            title: "Na bežkách cez zamrznuté doliny bežkárskych tratí",
            category: "Pohyb",
            tags: ["Bežky", "Príroda"],
            image: "https://picsum.photos/seed/bezky/800/1000",
            href: "/aktivity/bezky"
          }
        ]}
      />

      <EventsSection />
      
      <TopsSection />

      <GridSection 
        title="Zážitky po celý rok: príroda, kultúra a pôžitky"
        mainCard={{
          id: "main-nature",
          title: "Krajina a príroda na Slovensku",
          category: "Rozmanitosť",
          image: "https://picsum.photos/seed/nature-main/1000/1200",
          href: "/kategorie/priroda"
        }}
        sideCards={[
          {
            id: "side-1",
            title: "Národné a prírodné parky",
            category: "Príroda",
            image: "https://picsum.photos/seed/parky/400/400",
            href: "/aktivity/narodne-parky"
          },
          {
            id: "side-2",
            title: "Historické hrady a zámky",
            category: "Pamiatky",
            image: "https://picsum.photos/seed/hrady/400/400",
            href: "/aktivity/hrady"
          },
          {
            id: "side-3",
            title: "Tradičné chute a gastronómia",
            category: "Pôžitky",
            image: "https://picsum.photos/seed/jedlo/400/400",
            href: "/aktivity/gastronomia"
          }
        ]}
      />

      <Footer />
    </main>
  );
}
