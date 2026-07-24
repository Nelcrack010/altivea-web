"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Rocket, Lightbulb, Zap, Users } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; // Asegúrate de tener este componente

// --- COMPONENTE INTERNO PARA ANIMAR NÚMEROS (Igual que antes) ---
const AnimatedNumber = ({ end, duration = 2000 }) => {
const [count, setCount] = useState(0);
const countRef = useRef(null);
const [hasAnimated, setHasAnimated] = useState(false);

useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
        setHasAnimated(true);
        let start = 0;
        const totalFrames = (duration / 1000) * 60;
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
    { threshold: 0.5 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => { if (countRef.current) observer.unobserve(countRef.current); };
}, [end, duration, hasAnimated]);

return <span ref={countRef}>{count}</span>;
};

// --- COMPONENTE PRINCIPAL ---
export default function PorQueElegirnos() {
return (
    <section className="py-24 bg-slate-50 text-altivea-blue overflow-hidden relative">
    
    {/* Fondo decorativo muy sutil (Opcional, un destello azul atrás) */}
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-altivea-accent2/5 blur-[100px] rounded-full -z-0" />

    <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* TÍTULO */}
        <ScrollReveal>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué Elegirnos?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
            Resultados que hablan por sí mismos.
            </p>
        </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* COLUMNA IZQUIERDA: BENEFICIOS (Iconos Azules) */}
        <div className="grid grid-cols-2 gap-8">
            {/* Item 1 */}
            <ScrollReveal delay={100}>
            <div className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform duration-300">
                {/* CAMBIO: Icono Azul Eléctrico */}
                <Rocket size={48} strokeWidth={1.5} className="mb-4 text-altivea-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg group-hover:text-altivea-accent transition-colors">Enfoque en Resultados</h3>
            </div>
            </ScrollReveal>

            {/* Item 2 */}
            <ScrollReveal delay={200}>
            <div className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform duration-300">
                <Lightbulb size={48} strokeWidth={1.5} className="mb-4 text-altivea-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg group-hover:text-altivea-accent transition-colors">Estrategias Únicas</h3>
            </div>
            </ScrollReveal>

            {/* Item 3 */}
            <ScrollReveal delay={300}>
            <div className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform duration-300">
                <Zap size={48} strokeWidth={1.5} className="mb-4 text-altivea-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg group-hover:text-altivea-accent transition-colors">Entregas Rápidas</h3>
            </div>
            </ScrollReveal>

            {/* Item 4 */}
            <ScrollReveal delay={400}>
            <div className="flex flex-col items-center text-center p-4 group hover:-translate-y-1 transition-transform duration-300">
                <Users size={48} strokeWidth={1.5} className="mb-4 text-altivea-accent group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg group-hover:text-altivea-accent transition-colors">Acompañamiento</h3>
            </div>
            </ScrollReveal>
        </div>

        {/* COLUMNA DERECHA: ESTADÍSTICAS (Números con Degradado) */}
        <ScrollReveal delay={500}>
            <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-[0_10px_40px_-10px_rgba(37,99,235,0.15)] relative overflow-hidden">
            
            {/* Pequeña línea superior decorativa */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-altivea-accent to-altivea-accent2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-6">
                
                {/* Stat 1 */}
                <div>
                {/* CAMBIO: Texto con degradado (Gradient Text) */}
                <span className="flex items-baseline text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2 mb-2">
                    +<AnimatedNumber end={40} />
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Proyectos Entregados
                </span>
                </div>

                {/* Stat 2 */}
                <div>
                <span className="flex items-baseline text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2 mb-2">
                    +<AnimatedNumber end={4} duration={1000} />
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Años de Experiencia
                </span>
                </div>

                {/* Stat 3 */}
                <div>
                <span className="flex items-baseline text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2 mb-2">
                    <AnimatedNumber end={95} />%
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Clientes Satisfechos
                </span>
                </div>

                {/* Stat 4 */}
                <div>
                <span className="block text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2 mb-2">
                    24/7
                </span>
                <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">
                    Soporte Activo
                </span>
                </div>

            </div>
            </div>
        </ScrollReveal>

        </div>
    </div>
    </section>
);
}