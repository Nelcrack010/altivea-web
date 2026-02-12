import React from 'react';
import HeroResultados from '@/components/Resultados/HeroResultados';
import CasosExito from '@/components/Resultados/CasosExito';
import Testimonios from '@/components/Resultados/Testimonios';
import Paisas from '@/components/sections/footer';
import ScrollReveal from '@/components/sections/ScrollReveal';

export default function ResultadosPage() {
return (
    <main className="bg-white min-h-screen">
    {/* 1. Hero Resultados */}
    <HeroResultados />

    {/* 2. Portfolio / Casos */}
    <ScrollReveal>
        <CasosExito />
    </ScrollReveal>

    {/* 3. Testimonios */}
    <ScrollReveal>
        <Testimonios />
    </ScrollReveal>

    {/* 4. Footer */}
    <ScrollReveal>
        <Paisas />
    </ScrollReveal>

    </main>
);
}