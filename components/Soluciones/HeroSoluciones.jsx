"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function HeroSoluciones() {
const [isNight, setIsNight] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    
    // Mantenemos solo la lógica de Día/Noche para el video
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
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full grayscale brightness-[0.4]"
        >
        <source src={isNight ? "/video-lima-mañana.mp4" : "/video-lima-mañana-2.mp4"} type="video/mp4" />
        </video>
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-altivea-blue/70' : 'bg-altivea-blue/50'}`}></div>
    </div>

    {/* 2. CONTENIDO CENTRAL */}
    {/* Eliminamos el div del Reloj que estaba aquí antes */}
    
    <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-5xl mx-auto text-center animate-fade-in-up">
        
        {/* Píldora Superior (La mantenemos porque ayuda al contexto) */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-6 py-2 mb-8 backdrop-blur-md">
        <Sparkles size={14} className="text-white" />
        <span className="text-xs text-white font-bold tracking-wide uppercase font-sans">
            Soluciones Integrales
        </span>
        </div>

        {/* TÍTULO */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tight leading-tight drop-shadow-2xl">
        Nuestros <br className="md:hidden" />
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-altivea-accent2 via-white to-altivea-accent">
            Servicios
        </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-slate-300 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
        Estrategias probadas para escalar tu facturación y automatizar tu negocio.
        </p>
        
        {/* BOTÓN */}
        <Link 
        href="https://wa.me/51999999999"
        className="
            bg-white 
            text-altivea-blue 
            px-10 
            py-4 
            rounded-full 
            font-extrabold 
            text-lg 
            tracking-tight
            hover:scale-105 
            hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
            transition-all 
            duration-300
        "
        >
        Cotizar Ahora
        </Link>

    </div>
    </section>
);
}