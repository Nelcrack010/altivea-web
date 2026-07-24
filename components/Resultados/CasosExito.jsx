'use client'
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

// Componente interno para el Gráfico Lineal (Hecho con SVG puro)
const LinearGrowthChart = ({ colorStr }) => (
<div className="relative w-full h-24 mt-6">
    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
    {/* Área con gradiente debajo de la línea */}
    <path 
        d="M0,35 C20,32 40,25 60,15 S80,5 100,0 L100,40 L0,40 Z" 
        fill={`url(#gradient-${colorStr})`} 
        opacity="0.2"
    />
    {/* Línea principal de crecimiento */}
    <path 
        d="M0,35 C20,32 40,25 60,15 S80,5 100,0" 
        className={colorStr === 'blue' ? 'stroke-blue-500' : 'stroke-emerald-400'}
        fill="none" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        style={{ filter: `drop-shadow(0 4px 6px ${colorStr === 'blue' ? 'rgba(59,130,246,0.5)' : 'rgba(52,211,153,0.5)'})` }}
    />
    {/* Punto de inicio (Antes) */}
    <circle cx="0" cy="35" r="2" className={colorStr === 'blue' ? 'fill-blue-400' : 'fill-emerald-400'} />
    {/* Punto final (Después) */}
    <circle cx="100" cy="0" r="3" className="fill-white" stroke={colorStr === 'blue' ? '#3b82f6' : '#34d399'} strokeWidth="1.5" />
    
    {/* Definición del gradiente */}
    <defs>
        <linearGradient id={`gradient-${colorStr}`} x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor={colorStr === 'blue' ? '#3b82f6' : '#34d399'} stopOpacity="1" />
        <stop offset="100%" stopColor={colorStr === 'blue' ? '#3b82f6' : '#34d399'} stopOpacity="0" />
        </linearGradient>
    </defs>
    </svg>
    <div className="flex justify-between text-xs font-medium text-slate-400 mt-3 uppercase tracking-wider">
    <span>Antes</span>
    <span className={colorStr === 'blue' ? 'text-blue-400' : 'text-emerald-400'}>Crecimiento Actual</span>
    </div>
</div>
);

export default function CasosExito() {
const casos = [
    {
    cliente: "Casa Hacienda Las Palmeras",
    servicio: "Marketing & Gestión Comercial",
    tiempo: "En 3 meses",
    resultadoPrincipal: "+256%",
    labelResultado: "Crecimiento en Ventas",
    desc: "Incremento directo en ventas de S/ 122 mil a S/ 435 mil mensuales, superando las 140,000 visualizaciones de forma totalmente orgánica.",
    metricasSecundarias: [
        { valor: "+200%", label: "Interacciones" },
        { valor: "+257%", label: "Alcance Prom." }
    ],
    colorTema: "emerald",
    imagenRuta: "/PALMERAS-HACIENDA.png" 
    },
    {
    cliente: "Concreafer",
    servicio: "Redes & Posicionamiento",
    tiempo: "En 2 meses",
    resultadoPrincipal: "9x",
    labelResultado: "Alcance Promedio",
    desc: "Multiplicamos el alcance visual de la marca por 9, pasando de un promedio de 290 a más de 3,100 vistas mediante reestructuración digital.",
    metricasSecundarias: [
        { valor: "+345%", label: "Vis. Mínima" },
        { valor: "+130%", label: "Interacciones" }
    ],
    colorTema: "blue",
    imagenRuta: "/Concrafer.jpeg" 
    }
];

return (
    <section className="py-24 bg-white text-slate-900">
    <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Casos de Éxito
        </h2>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Resultados reales y medibles. Así es como ayudamos a las empresas a escalar su facturación y presencia digital.
        </p>
        </div>

        <div className="space-y-12">
        {casos.map((caso, index) => (
            <div key={index} className="flex flex-col lg:flex-row bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 group">
            
            {/* LADO IZQUIERDO: IMAGEN */}
            <div className="lg:w-1/2 relative h-64 lg:h-auto overflow-hidden bg-slate-800">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600">
                    <img 
                        src={caso.imagenRuta} 
                        alt={caso.cliente}
                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent"></div>
                
                <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                {caso.servicio}
                </div>
            </div>

            {/* LADO DERECHO: DATOS Y GRÁFICO */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative">
                
                <div className="flex justify-between items-start mb-4">
                <div>
                    <span className={`text-sm font-semibold tracking-wider uppercase mb-2 block ${caso.colorTema === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
                    {caso.tiempo}
                    </span>
                    <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                    {caso.cliente}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                    {caso.desc}
                    </p>
                </div>
                <div className="hidden sm:flex bg-white/5 p-3 rounded-full group-hover:bg-white/10 transition-colors">
                    <ArrowUpRight size={24} className="text-white" />
                </div>
                </div>

                {/* Bloque de Métricas (AQUÍ ESTÁ LA MAGIA RESPONSIVE) */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4 mb-2">
                
                {/* Esta métrica principal toma las 2 columnas en celular, y 1 columna en PC */}
                <div className="col-span-2 lg:col-span-1">
                    <div className={`text-5xl font-black mb-1 ${caso.colorTema === 'emerald' ? 'text-emerald-400' : 'text-blue-400'}`}>
                    {caso.resultadoPrincipal}
                    </div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">
                    {caso.labelResultado}
                    </div>
                </div>
                
                {/* Estas métricas toman 1 columna en celular (se ponen una al lado de la otra) */}
                {caso.metricasSecundarias.map((metrica, idx) => (
                    <div key={idx} className="col-span-1 border-l-2 border-slate-700 pl-4 flex flex-col justify-center">
                    <div className="text-2xl font-bold text-white mb-1">{metrica.valor}</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold leading-tight">{metrica.label}</div>
                    </div>
                ))}
                
                </div>

                {/* Integración del Gráfico Lineal */}
                <LinearGrowthChart colorStr={caso.colorTema} />

            </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}