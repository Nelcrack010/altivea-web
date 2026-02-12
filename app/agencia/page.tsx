import React from "react";
import HeroAgencia from "../../components/Agencia/HeroAgencia";
import ScrollReveal from "../../components/sections/ScrollReveal";
import Piesas from "../../components/sections/footer";
import NuestroEquipo from "@/components/sections/NuestroEquipo";
import Historia from "@/components/Agencia/Historia";
import Valores from "@/components/Agencia/Valores";

export default function AgenciaPage() {
return (
    <main className="bg-white min-h-screen">
    
    {/* 1. Hero */}
    <HeroAgencia />

    {/* 2. Historia y Misión */}
    <ScrollReveal>
        <Historia />
    </ScrollReveal>

    {/* 3. Valores (Fondo Oscuro para contraste) */}
    <ScrollReveal>
        <Valores />
    </ScrollReveal>

    {/* 4. Nuestro Equipo (Reutilizado) */}
    {/* Como ya tiene su propio background (slate-50), queda perfecto después del oscuro */}
    <ScrollReveal>
        <NuestroEquipo />
    </ScrollReveal>

    {/* 5. Footer */}
    <ScrollReveal>
        <Piesas />
    </ScrollReveal>

    </main>
);
}