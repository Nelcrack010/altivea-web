import React from 'react';
import Link from 'next/link';

export default function HeroSoluciones() {
return (
    <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
    
    {/* 1. IMAGEN DE FONDO (Blanco y Negro) */}
    <div className="absolute inset-0 z-0">
        <img 
        src="/ciudad.jpg" // Usa tu imagen de ciudad aquí
        alt="Fondo Soluciones" 
        className="w-full h-full object-cover grayscale brightness-50" 
        />
    </div>

    {/* 2. CONTENIDO */}
    <div className="relative z-10 text-center px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
        Nuestros Servicios
        </h1>
        <p className="text-slate-200 text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light">
        Soluciones estratégicas para cada etapa de tu crecimiento digital.
        </p>
        
        {/* Botón */}
        <Link 
        href="https://wa.me/51999999999"
        className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform inline-block shadow-lg"
        >
        Hablemos
        </Link>
    </div>
    </section>
);
}