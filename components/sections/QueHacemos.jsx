import React from 'react';
import { Megaphone, Code, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal'; // <--- Importante

export default function QueHacemos() {
const services = [
{
    icon: <Megaphone size={64} strokeWidth={1.5} />,
    title: "Marketing Digital",
    description: "Estrategias que conectan marcas con clientes ideales.",
    delay: 0 // Aparece de inmediato
},
{
    icon: <Code size={64} strokeWidth={1.5} />,
    title: "Desarrollo Web",
    description: "Sitios rápidos, modernos y optimizados para ventas.",
    delay: 200 // Espera 200ms
},
{
    icon: <Briefcase size={64} strokeWidth={1.5} />,
    title: "Automatización",
    description: "Sistemas modernos y soluciones escalables.",
    delay: 400 // Espera 400ms (Efecto escalera)
}
];

return (
// CAMBIO 1: Fondo con un degradado sutil en vez de blanco puro
<section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white text-altivea-blue relative overflow-hidden">
    
    {/* CAMBIO 2: Decoración de fondo (Mancha de color azul muy suave) */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-altivea-accent2/10 blur-[120px] rounded-full -z-10" />

    <div className="max-w-6xl mx-auto px-6">
    
    <ScrollReveal>
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-altivea-blue">
        ¿Qué Hacemos?
        </h2>
    </ScrollReveal>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((item, index) => (
        // CAMBIO 3: Envolvemos cada tarjeta con su delay
        <ScrollReveal key={index} delay={item.delay}>
            <div 
            className="group bg-white rounded-2xl p-10 border border-slate-100 shadow-sm 
            transition-all duration-500 ease-out 
            hover:-translate-y-4 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.2)] hover:border-altivea-accent/30 relative overflow-hidden"
            >
            {/* Barrita superior de color (Detalle Tech) */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-altivea-accent to-altivea-accent2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

            <div className="flex flex-col items-center text-center relative z-10">
                <div className="mb-6 text-slate-400 transition-all duration-500 group-hover:text-altivea-accent group-hover:scale-110 group-hover:rotate-3">
                {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-altivea-blue transition-colors duration-300 group-hover:text-altivea-accent">
                {item.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed max-w-xs group-hover:text-slate-600">
                {item.description}
                </p>
            </div>
            </div>
        </ScrollReveal>
        ))}
    </div>

    </div>
</section>
);
}