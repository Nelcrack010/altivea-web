"use client"; // Importante para que funcionen los hooks

import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Lightbulb, Zap, Users } from 'lucide-react';

// --- COMPONENTE INTERNO PARA ANIMAR NÚMEROS ---
const AnimatedNumber = ({ end, duration = 2000 }) => {
const [count, setCount] = useState(0);
const countRef = useRef(null);
const [hasAnimated, setHasAnimated] = useState(false); // Para que anime solo una vez

useEffect(() => {
const observer = new IntersectionObserver(
    (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        
        // Lógica de conteo
        let start = 0;
        const totalFrames = (duration / 1000) * 60; // 60 FPS
        const increment = end / totalFrames;
        let current = 0;

        const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            setCount(end);
            clearInterval(timer);
        } else {
            setCount(Math.floor(current));
        }
        }, 1000 / 60);

        return () => clearInterval(timer);
    }
    },
    { threshold: 0.5 } // Se activa cuando el 50% del elemento es visible
);

if (countRef.current) {
    observer.observe(countRef.current);
}

return () => {
    if (countRef.current) observer.unobserve(countRef.current);
};
}, [end, duration, hasAnimated]);

return <span ref={countRef}>{count}</span>;
};

// --- COMPONENTE PRINCIPAL ---
export default function PorQueElegirnos() {
return (
<section className="py-24 bg-slate-50 text-slate-900">
    <div className="max-w-6xl mx-auto px-6">
    
    {/* TÍTULO */}
    <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué Elegirnos?</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
        Datos que respaldan nuestra experiencia y compromiso.
        </p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: BENEFICIOS */}
        <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center text-center p-4">
            <Rocket size={48} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h3 className="font-bold text-lg">Enfoque en Resultados</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4">
            <Lightbulb size={48} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h3 className="font-bold text-lg">Estrategias Personalizadas</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4">
            <Zap size={48} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h3 className="font-bold text-lg">Entregas Rápidas</h3>
        </div>
        <div className="flex flex-col items-center text-center p-4">
            <Users size={48} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h3 className="font-bold text-lg">Acompañamiento constante</h3>
        </div>
        </div>

        {/* COLUMNA DERECHA: ESTADÍSTICAS ANIMADAS */}
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
            
            {/* Stat 1: +50 */}
            <div>
            <span className="flex items-baseline text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                +<AnimatedNumber end={50} />
            </span>
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                Proyectos Entregados
            </span>
            </div>

            {/* Stat 2: +5 */}
            <div>
            <span className="flex items-baseline text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                +<AnimatedNumber end={5} duration={1000} /> {/* Más rápido por ser número chico */}
            </span>
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                Años de Experiencia
            </span>
            </div>

            {/* Stat 3: 98% */}
            <div>
            <span className="flex items-baseline text-4xl md:text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-400">
                <AnimatedNumber end={98} />%
            </span>
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                Clientes Satisfechos
            </span>
            </div>

            {/* Stat 4: 24/7 (Este no se anima porque es texto fijo) */}
            <div>
            <span className="block text-4xl md:text-5xl font-black text-slate-900 mb-2">
                24/7
            </span>
            <span className="text-slate-600 text-sm font-medium uppercase tracking-wide">
                Soporte Activo
            </span>
            </div>

        </div>
        </div>

    </div>
    </div>
</section>
);
}