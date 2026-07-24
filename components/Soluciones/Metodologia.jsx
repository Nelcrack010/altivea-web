import React from 'react';
import { Users, Map, PlayCircle, Wrench } from 'lucide-react';

export default function Metodologia() {
const steps = [
    { icon: <Users size={40} />, title: "Entrevista", desc: "Entendemos tu negocio" },
    { icon: <Map size={40} />, title: "Estrategia", desc: "Planificamos la ruta" },
    { icon: <PlayCircle size={40} />, title: "Ejecución", desc: "Ponemos manos a la obra" },
    { icon: <Wrench size={40} />, title: "Optimización", desc: "Mejoramos resultados" },
];

return (
    <section className="py-24 bg-white text-altivea-blue">
    <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Metodología</h2>
        <p className="text-slate-500">Un proceso probado para garantizar el éxito.</p>
        </div>

        {/* CONTENEDOR FLEXIBLE */}
        <div className="flex flex-col md:flex-row items-start justify-between relative gap-8 md:gap-0">
        
        {/* LÍNEA CONECTORA (Solo visible en Desktop) */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-slate-200 -z-10 mt-2"></div>

        {steps.map((step, index) => (
            <div key={index} className="flex-1 flex flex-col items-center text-center group w-full">
            
            {/* CIRCULO ICONO */}
            <div className="w-24 h-24 bg-white border-2 border-altivea-blue rounded-full flex items-center justify-center mb-6 group-hover:bg-altivea-blue group-hover:text-white transition-all duration-300 shadow-sm z-10">
                {step.icon}
            </div>
            
            {/* TEXTO */}
            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-slate-500">{step.desc}</p>

            {/* FLECHA MÓVIL (Solo visible en celular, debajo de cada item excepto el último) */}
            {index < steps.length - 1 && (
                <div className="md:hidden mt-6 text-slate-300 text-2xl">↓</div>
            )}
            </div>
        ))}

        </div>
    </div>
    </section>
);
}