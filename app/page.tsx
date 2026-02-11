import Hero from "../components/sections/Hero"; // Importamos el componente que creamos
import Services from '../components/sections/Services';
import QueHacemos from '../components/sections/QueHacemos';
import PorqueElegirnos from '../components/sections/PorqueElegirnos';
import NuestroEquipo from '../components/sections/NuestroEquipo';
import Piesas from '../components/sections/footer';
import ScrollReveal from '../components/sections/ScrollReveal'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <ScrollReveal>
        <QueHacemos/>
      </ScrollReveal>

      <ScrollReveal>
        <PorqueElegirnos/>
      </ScrollReveal>

      <ScrollReveal>
        <NuestroEquipo/>
      </ScrollReveal>

      <ScrollReveal>
        <Piesas/>
      </ScrollReveal>
    </main>
  );
}