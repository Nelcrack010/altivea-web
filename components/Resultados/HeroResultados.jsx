"use client";

import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react'; // Icono de crecimiento

export default function HeroResultados() {
const [isNight, setIsNight] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    
    // Mantenemos la lógica de día/noche para el video de fondo
    const updateTime = () => {
    const hour = new Date().getHours();
    setIsNight(hour < 6 || hour >= 18);
    };

    updateTime(); 
}, []);

if (!mounted) return <div className="h-screen bg-altivea-blue" />;

return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-altivea-blue">
    
    {/* 1. VIDEO DE FONDO */}
    <div className="absolute inset-0 z-0">
        <video
        key={isNight ? "night" : "day"} 
        autoPlay loop muted playsInline
        className="object-cover w-full h-full grayscale brightness-[0.4]"
        >
        <source src={isNight ? "/video-lima-mañana.mp4" : "/video-lima-mañana-2.mp4"} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-altivea-blue/70' : 'bg-altivea-blue/50'}`}></div>
    </div>

    {/* 2. CONTENIDO CENTRAL */}
    {/* Sin reloj en la esquina para dejar espacio al menú */}
    
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl mx-auto animate-fade-in-up">
        
        {/* Píldora Contextual (Esta sí la dejamos) */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
        <TrendingUp size={16} className="text-altivea-accent2" />
        <span className="text-xs text-white font-bold tracking-wide uppercase font-sans">
            Casos de Éxito
        </span>
        </div>

        {/* TÍTULO */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
        Resultados que <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-altivea-accent2 via-white to-altivea-accent">
            Hacen Ruido
        </span>
        </h1>

        {/* Descripción */}
        <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
        No nos juzgues por lo que decimos, júzganos por lo que hemos logrado para nuestros clientes.
        </p>

    </div>
    </section>
);
}