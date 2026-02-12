"use client";

import React, { useState, useEffect } from 'react';

export default function HeroAgencia() {
const [isNight, setIsNight] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    // Mantenemos solo la lógica para saber si es de día o de noche (para el video)
    const updateTime = () => {
    const hour = new Date().getHours();
    setIsNight(hour < 6 || hour >= 18);
    };
    updateTime(); 
}, []);

if (!mounted) return <div className="h-screen bg-slate-900" />;

return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
    
    {/* 1. VIDEO DE FONDO */}
    <div className="absolute inset-0 z-0">
        <video
        key={isNight ? "night" : "day"} 
        autoPlay loop muted playsInline
        className="object-cover w-full h-full grayscale brightness-[0.4]"
        >
        <source src={isNight ? "/video-lima-mañana.mp4" : "/video-lima-mañana-2.mp4"} type="video/mp4" />
        </video>
        {/* Degradado para asegurar legibilidad del texto */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-black/70' : 'bg-black/50'}`}></div>
    </div>

    {/* 2. CONTENIDO CENTRAL (Título) */}
    {/* z-10: Para estar encima del video */}
    {/* flex-col items-center justify-center: Centrado vertical y horizontal perfecto */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-6xl mx-auto animate-fade-in-up">
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-tight drop-shadow-2xl">
        Más que una <br className="md:hidden" /> Agencia, <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-slate-200 to-slate-500">
            Tu Socio Estratégico
        </span>
        </h1>

        <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
        Nuestra misión es elevar los estándares <br className="hidden md:block" />
        digitales de las empresas en Perú.
        </p>

    </div>
    </section>
);
}