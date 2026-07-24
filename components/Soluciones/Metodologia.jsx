import React from 'react';
import { Search, Target, Rocket, BarChart, TrendingUp } from 'lucide-react';

export default function Metodologia() {
const steps = [
    { 
    icon: <Search size={32} />, 
    title: "DIAGNÓSTICO", /*[cite: 2] */
    desc: "Analizamos tu negocio, mercado, competencia y publico objetivo, entre la medición de otros KPI para identificar oportunidades clave." /*[cite: 2] */
    },
    { 
    icon: <Target size={32} />, 
    title: "ESTRATEGIA", /*[cite: 2] */
    desc: "Diseñamos un plan estratégico personalizado alineado a tus objetivos comerciales." /*[cite: 2] */
    },
    { 
    icon: <Rocket size={32} />, 
    title: "EJECUCIÓN", /*[cite: 2] */
    desc: "Implementamos las acciones con creatividad, tecnología y enfoque en resultados." /*[cite: 2] */
    },
    { 
    icon: <BarChart size={32} />, 
    title: "MEDICIÓN Y OPTIMIZACIÓN", /*[cite: 2] */
    desc: "Medimos, analizamos y optimizamos continuamente para maximizar el retorno de inversión." /*[cite: 2] */
    },
    { 
    icon: <TrendingUp size={32} />, 
    title: "CRECIMIENTO", /*[cite: 2] */
    desc: "Escalamos las estrategias que funcionan para lograr un crecimiento sostenible." /*[cite: 2] */
    },
];

return (
    <section className="py-24 bg-slate-50 text-slate-900 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-slate-900">
            Nuestra Metodología
        </h2>
        <p className="text-slate-500 font-medium text-lg">
            Resultados medibles, crecimiento sostenible.
        </p>
        </div>

        {/* CONTENEDOR FLEXIBLE */}
        <div className="flex flex-col lg:flex-row items-start justify-between relative gap-12 lg:gap-6">
        
        {/* LÍNEA CONECTORA (Solo visible en Desktop) */}
        <div className="hidden lg:block absolute top-10 left-10 right-10 h-[2px] bg-slate-200 -z-10 mt-0.5"></div>

        {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center group w-full">
            
            {/* CIRCULO ICONO */}
            <div className="w-20 h-20 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:scale-110 text-blue-600 transition-all duration-300 shadow-sm z-10 relative">
                {step.icon}
                
                {/* Pequeño punto indicador en hover */}
                <div className="absolute -bottom-1.5 w-3 h-3 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* TEXTO */}
            <h3 className="text-lg font-bold mb-3 text-slate-800">{step.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-[250px]">
                {step.desc}
            </p>

            {/* FLECHA MÓVIL (Solo visible en celular, debajo de cada item excepto el último) */}
            {index < steps.length - 1 && (
                <div className="lg:hidden mt-8 text-blue-300 text-2xl animate-bounce">↓</div>
            )}
            </div>
        ))}

        </div>
    </div>
    </section>
);
}