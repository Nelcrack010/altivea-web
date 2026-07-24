"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export default function Hero() {
const [isNight, setIsNight] = useState(false);
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    
    // Mantenemos la lógica para detectar si es de día o noche
    const updateTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    // Lógica: MODO NOCHE (6pm a 6am)
    if (hour < 6 || hour >= 18) {
        setIsNight(true);
    } else {
        setIsNight(false);
    }
    };

    updateTime(); 
    // Revisamos cada minuto por si cambia el turno
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
}, []);

// Evitar parpadeos de hidratación
if (!mounted) return <div className="h-screen bg-altivea-blue" />;

return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-altivea-blue">
    
    {/* 1. VIDEO DE FONDO DINÁMICO */}
    <div className="absolute inset-0 z-0">
        <video
        key={isNight ? "night" : "day"} 
        autoPlay
        loop
        muted
        playsInline
        className="object-cover w-full h-full grayscale brightness-75"
        >
        <source src={isNight ? "/video-lima-mañana.mp4" : "/video-lima-mañana-2.mp4"} type="video/mp4" />
        </video>
        
        {/* Capa oscura (más oscura de noche) */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-altivea-blue/60' : 'bg-altivea-blue/40'}`}></div>
    </div>

    {/* 2. CONTENIDO PRINCIPAL */}
    {/* Eliminamos el reloj de la esquina para limpiar el diseño */}
    
    <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto animate-fade-in-up">
        
        {/* Etiqueta dinámica (Sol/Luna) - Esta la dejamos porque aporta valor */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-8 backdrop-blur-sm">
            {isNight ? <Moon size={16} className="text-altivea-accent2"/> : <Sun size={16} className="text-yellow-300"/>}
            <span className="text-sm text-white font-medium">
                {isNight ? "Tecnología que nunca duerme" : "Impulsando negocios"}
            </span>
        </div>

        {/* LOGO ALTIVEA */}
        <div className="mb-10 w-full flex justify-center">
            <img 
            src="/ALTIVEA LOGO BLANCO.png" 
            alt="Altivea Group Logo" 
            className="w-full max-w-[320px] md:max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
        </div>

        {/* BOTÓN "HABLEMOS" */}
        <Link 
            href="https://wa.me/51999999999"
            className="
                bg-white 
                text-altivea-blue 
                px-12 
                py-3 
                rounded-full 
                font-bold 
                text-lg 
                hover:scale-105 
                hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]
                transition-all 
                duration-300
            "
        >
            Hablemos
        </Link>
    </div>
    </section>
);
}