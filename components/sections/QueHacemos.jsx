import React from 'react';
import { Megaphone, Code, Briefcase } from 'lucide-react';

export default function QueHacemos() {
const services = [
    {
    // Usamos el mismo azul (blue-600) como color base para la transición
    icon: <Megaphone size={64} strokeWidth={1.5} />,
    title: "Marketing Digital",
    description: "Estrategias que conectan marcas con clientes ideales."
    },
    {
    icon: <Code size={64} strokeWidth={1.5} />,
    title: "Desarrollo Web",
    description: "Sitios rápidos, modernos y optimizados para ventas."
    },
    {
    icon: <Briefcase size={64} strokeWidth={1.5} />,
    title: "Automatización",
    description: "Sistemas modernos y soluciones escalables."
    }
];

return (
    <section className="py-24 bg-white text-slate-900">
    <div className="max-w-6xl mx-auto px-6">
        
        {/* TÍTULO SIMPLE Y LIMPIO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
        ¿Qué Hacemos?
        </h2>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
            <div 
            key={index} 
            // group: permite controlar los hijos al pasar el mouse sobre el padre
            // hover:-translate-y-2: Elevación sutil
            // hover:border-blue-600: Cambio de borde a azul
            // hover:bg-white: Un ligero cambio de fondo para dar "luz"
            className="group bg-slate-50 rounded-2xl p-10 border border-slate-200 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-600 hover:bg-white hover:shadow-sm"
            >
            {/* CONTENIDO CENTRADO */}
            <div className="flex flex-col items-center text-center">
                
                {/* ICONO */}
                {/* group-hover:text-blue-600: El icono se vuelve azul */}
                {/* group-hover:scale-105: Un mini efecto de crecimiento */}
                <div className="mb-6 text-slate-700 transition-all duration-300 group-hover:text-blue-600 group-hover:scale-105">
                {item.icon}
                </div>
                
                {/* TÍTULO */}
                {/* group-hover:text-blue-600: El título también se vuelve azul */}
                <h3 className="text-2xl font-bold mb-4 text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
                {item.title}
                </h3>
                
                {/* DESCRIPCIÓN */}
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {item.description}
                </p>

            </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}