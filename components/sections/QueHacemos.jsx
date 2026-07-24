import React from 'react';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; 

export default function QueHacemos() {
const services = [
    {
    number: "01",
    title: "ALTIVEA CONSULTING",
    description: [
        "Analizamos tu empresa, mercado y oportunidades de crecimiento.",
        "Desarrollamos estrategias innovadoras y personalizadas.",
        "Implementamos acciones que fortalecen tu marca y generan resultados."
    ],
    delay: 0 
    },
    {
    number: "02",
    title: "ALTIVEA AGENCY",
    description: [
        "Estudios de mercado.",
        "Plan de marketing.",
        "Posicionamiento de marca.",
        "Producción audiovisual.",
        "Diseño gráfico.",
        "Gestión de redes sociales.",
        "Reportes de resultados.",
        "Análisis de métricas y KPIS."
    ],
    delay: 200 
    },
    {
    number: "03",
    title: "ALTIVEA TRAINING",
    description: [
        "Capacitación en ventas.",
        "Capacitación en atención al cliente - consumidor.",
        "Capacitación en resolución de conflictos y liderazgo.",
        "Talleres de entrenamiento comercial.",
        "Desarrollo de eventos de networking."
    ],
    delay: 400 
    }
];

return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
    
    {/* Fondo sutil de la sección */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -z-10" />

    <div className="max-w-7xl mx-auto px-6">
        
        <ScrollReveal>
        <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            ¿Qué Hacemos?
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Soluciones integrales diseñadas para atraer, convertir y fidelizar clientes en el entorno digital.
            </p>
        </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
            <ScrollReveal key={index} delay={item.delay}>
            
            {/* Contenedor principal con efecto Glow */}
            <div className="relative group h-full">
                
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-[2rem] blur opacity-0 group-hover:opacity-30 transition duration-500"></div>

                {/* Tarjeta Oscura Premium - Estilo Tipográfico */}
                <div className="relative h-full bg-slate-900 rounded-[2rem] p-8 md:p-10 border border-slate-800 flex flex-col overflow-hidden">
                
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-colors duration-700"></div>

                {/* Cabecera de la Tarjeta (Número gigante + Título) */}
                <div className="flex flex-col mb-8 relative z-10 border-b border-slate-700/50 pb-6">
                    <span className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-slate-500 mb-2 group-hover:from-blue-500 group-hover:to-cyan-300 transition-all duration-500">
                    {item.number}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight tracking-wide">
                    {item.title}
                    </h3>
                </div>

                {/* Lista de Servicios minimalista */}
                <div className="relative z-10 flex-grow">
                    <ul className="space-y-4">
                    {item.description.map((point, idx) => (
                        <li key={idx} className="flex items-start text-slate-400 text-sm leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                        <ArrowRight size={16} className="mr-3 mt-1 text-slate-600 group-hover:text-blue-500 shrink-0 transition-colors duration-300" />
                        <span>{point}</span>
                        </li>
                    ))}
                    </ul>
                </div>
                
                </div>
            </div>
            </ScrollReveal>
        ))}
        </div>

    </div>
    </section>
);
}