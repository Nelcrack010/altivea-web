'use client'
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CasosExito() {
const casos = [
    {
    cliente: "Inmobiliaria Horizon",
    servicio: "Lead Generation & Ads",
    resultado: "+450% ROI",
    desc: "Optimización de campañas en Meta Ads para venta de departamentos de lujo.",
    img: "/caso-inmobiliaria.jpg"
    },
    {
    cliente: "E-commerce Moda",
    servicio: "Desarrollo Shopify + SEO",
    resultado: "3X Ventas",
    desc: "Rediseño total de la experiencia de usuario y estrategia de posicionamiento.",
    img: "/caso-moda.jpg"
    },
    {
    cliente: "Clínica Dental",
    servicio: "Automatización WhatsApp",
    resultado: "-40% Tasa de Fuga",
    desc: "Implementación de bots para agendamiento y confirmación de citas.",
    img: "/caso-clinica.jpg"
    },
    {
    cliente: "StartUp Tech",
    servicio: "Branding & Web",
    resultado: "Ronda A",
    desc: "Identidad visual completa para levantamiento de capital exitoso.",
    img: "/caso-tech.jpg"
    }
];

return (
    <section className="py-24 bg-white text-slate-900">
    <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-20">
        <h2 className="text-4xl font-black mb-4">Proyectos Destacados</h2>
        <p className="text-slate-500 text-lg">Un vistazo a nuestras colaboraciones recientes.</p>
        </div>

        {/* GRID DE CASOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {casos.map((caso, index) => (
            <div 
            key={index} 
            className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
            {/* IMAGEN DE FONDO */}
            <div className="absolute inset-0">
                <img 
                src={caso.img} 
                alt={caso.cliente} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                onError={(e) => { e.target.style.backgroundColor = '#1e293b'; e.target.style.display = 'none'; }} // Fallback si no hay imagen
                />
                <div className="absolute inset-0 bg-slate-900/90 group-hover:bg-slate-900/40 transition-colors duration-500" />
            </div>

            {/* CONTENIDO TEXTO */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
                
                {/* Header Card */}
                <div className="flex justify-between items-start translate-y-0 transition-transform duration-500">
                <div>
                    <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase mb-2 block">{caso.servicio}</span>
                    <h3 className="text-3xl font-bold">{caso.cliente}</h3>
                </div>
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-emerald-500 transition-colors">
                    <ArrowUpRight size={24} className="text-white" />
                </div>
                </div>

                {/* Resultado Gigante (Aparece al hover o siempre visible) */}
                <div className="mt-auto">
                    <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                        {caso.resultado}
                    </div>
                    <p className="text-slate-300 text-sm max-w-md opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {caso.desc}
                    </p>
                </div>

            </div>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}