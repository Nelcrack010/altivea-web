"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Moon, Sun } from 'lucide-react';

export default function Hero() {
const [isNight, setIsNight] = useState(false);
const [timeString, setTimeString] = useState("");
const [mounted, setMounted] = useState(false);

useEffect(() => {
    setMounted(true);
    
    const updateTime = () => {
    const now = new Date();
    const hour = now.getHours();
    
    // Formato de hora (ej: 10:30 AM)
    setTimeString(now.toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' }));

    // Lógica: MODO NOCHE
    if (hour < 6 || hour >= 18) {
        setIsNight(true);
    } else {
        setIsNight(false);
    }
    };

    updateTime(); 
    const interval = setInterval(updateTime, 60000);

    return () => clearInterval(interval);
}, []);

// CAMBIO 1: Cambié h-[90vh] por h-screen aquí también para evitar saltos al cargar
if (!mounted) return <div className="h-screen bg-slate-900" />;

return (
    // CAMBIO 2: Cambié h-[90vh] por h-screen (100% de la pantalla)
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
    
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
        
        {/* Capa oscura */}
        <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-black/60' : 'bg-black/40'}`}></div>
    </div>

    {/* 2. INDICADOR "EN VIVO" */}
    <div className="absolute top-8 right-8 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        <div className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
        </div>
        <div className="flex flex-col leading-none">
            <span className="text-[10px] font-bold text-white tracking-widest uppercase">En Vivo</span>
            <span className="text-xs text-slate-200 font-mono">{timeString} | {isNight ? 'Noche en Lima' : 'Día en Lima'}</span>
        </div>
    </div>

    {/* 3. CONTENIDO PRINCIPAL */}
    <div className="relative z-10 flex flex-col items-center justify-center px-4 w-full max-w-4xl mx-auto">
        
        {/* Etiqueta dinámica */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1 mb-8 backdrop-blur-sm">
            {isNight ? <Moon size={16} className="text-blue-300"/> : <Sun size={16} className="text-yellow-300"/>}
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
            text-slate-900 
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