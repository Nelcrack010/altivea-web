'use client'
import React from 'react';
import { ArrowUpRight, Building2, ShoppingBag, MessageCircle, Rocket } from 'lucide-react';

export default function CasosExito() {
const casos = [
    {
    cliente: "Inmobiliaria Horizon",
    servicio: "Lead Generation & Ads",
    resultado: "+450% ROI",
    desc: "Optimización de campañas en Meta Ads para venta de departamentos de lujo.",
    icon: <Building2 size={120} strokeWidth={1} />
    },
    {
    cliente: "E-commerce Moda",
    servicio: "Desarrollo Shopify + SEO",
    resultado: "3X Ventas",
    desc: "Rediseño total de la experiencia de usuario y estrategia de posicionamiento.",
    icon: <ShoppingBag size={120} strokeWidth={1} />
    },
    {
    cliente: "Clínica Dental",
    servicio: "Automatización WhatsApp",
    resultado: "-40% Tasa de Fuga",
    desc: "Implementación de bots para agendamiento y confirmación de citas.",
    icon: <MessageCircle size={120} strokeWidth={1} />
    },
    {
    cliente: "StartUp Tech",
    servicio: "Branding & Web",
    resultado: "Ronda A",
    desc: "Identidad visual completa para levantamiento de capital exitoso.",
    icon: <Rocket size={120} strokeWidth={1} />
    }
];

return (
    <section className="py-24 bg-white text-altivea-blue">
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
            {/* FONDO CON GRADIENTE DE MARCA + ICONO */}
            {/* Nota: cuando tengas fotos reales de cada proyecto, reemplaza este bloque por <img src="/tu-foto.jpg" ... /> */}
            <div className="absolute inset-0 bg-gradient-to-br from-altivea-blue to-altivea-blueLight">
                <div className="absolute -right-6 -bottom-6 text-white/10 transition-transform duration-700 group-hover:scale-110 group-hover:text-white/15">
                {caso.icon}
                </div>
                <div className="absolute inset-0 bg-altivea-blue/50 group-hover:bg-altivea-blue/30 transition-colors duration-500" />
            </div>

            {/* CONTENIDO TEXTO */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between z-10 text-white">
                
                {/* Header Card */}
                <div className="flex justify-between items-start translate-y-0 transition-transform duration-500">
                <div>
                    <span className="text-altivea-accent2 font-bold text-sm tracking-wider uppercase mb-2 block">{caso.servicio}</span>
                    <h3 className="text-3xl font-bold">{caso.cliente}</h3>
                </div>
                <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm group-hover:bg-altivea-accent transition-colors">
                    <ArrowUpRight size={24} className="text-white" />
                </div>
                </div>

                {/* Resultado Gigante (Aparece al hover o siempre visible) */}
                <div className="mt-auto">
                    <div className="text-5xl font-black mb-2 text-transparent bg-clip-text bg-gradient-to-r from-white to-altivea-accent2">
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