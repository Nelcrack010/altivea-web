import React from 'react';
import HeroSoluciones from '../../components/Soluciones/HeroSoluciones';
import Metodologia from '../../components/Soluciones/Metodologia';
import Paquetes from '../../components/Soluciones/Paquetes';
import ScrollReveal from '../../components/sections/ScrollReveal';
import Piesas from '../../components/sections/footer';

export default function SolucionesPage() {
return (
    <main className="bg-white min-h-screen">
    
    {/* Hero sin animación de entrada porque es lo primero que se ve */}
    <HeroSoluciones />

    {/* Metodología con efecto ScrollReveal */}
    <ScrollReveal>
        <Metodologia />
    </ScrollReveal>

    {/* Paquetes con efecto ScrollReveal */}
    <ScrollReveal>
        <Paquetes />
    </ScrollReveal>

    <ScrollReveal>
        <Piesas />
    </ScrollReveal>

    </main>
);
}