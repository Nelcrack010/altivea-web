import React from 'react';
import { Monitor, TrendingUp, Cpu, ShoppingCart, Search, Smartphone } from 'lucide-react';

const services = [
{
    icon: <Monitor size={40} />,
    title: "Desarrollo Web & Software",
    description: "Creamos sitios web de alto impacto y software a medida. Desde landing pages hasta sistemas complejos en Next.js y Python."
},
{
    icon: <TrendingUp size={40} />,
    title: "Marketing Digital & Ads",
    description: "Estrategias de Meta Ads y Google Ads enfocadas en ROI. Transformamos tu inversión en clientes potenciales reales."
},
{
    icon: <Cpu size={40} />,
    title: "Automatización e IA",
    description: "Implementamos inteligencia artificial y chatbots para automatizar tu atención al cliente y optimizar procesos internos."
},
{
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce",
    description: "Tiendas online rápidas y seguras. Integramos pasarelas de pago y gestión de inventario para que vendas 24/7."
},
{
    icon: <Search size={40} />,
    title: "SEO y Posicionamiento",
    description: "Mejoramos tu visibilidad en Google. Hacemos que tus clientes te encuentren antes que a tu competencia."
},
{
    icon: <Smartphone size={40} />,
    title: "Desarrollo de Apps",
    description: "Aplicaciones móviles nativas e híbridas con diseño intuitivo para conectar con tus usuarios en cualquier lugar."
}
];

export default function Services() {
return (
    <section className="py-24 bg-white text-altivea-blue" id="servicios">
    <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ENCABEZADO DE LA SECCIÓN */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="text-altivea-accent font-bold tracking-widest uppercase text-sm mb-2 block">
            Nuestras Soluciones
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-altivea-blue">
            Todo lo que tu empresa necesita para <span className="text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2">escalar</span>
        </h2>
        <p className="text-lg text-slate-600">
            Combinamos tecnología de punta con estrategias de marketing probadas para dar resultados tangibles.
        </p>
        </div>

        {/* GRID DE SERVICIOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
            <div 
            key={index} 
            className="group p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
            {/* ICONO */}
            <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center text-altivea-blue shadow-sm mb-6 group-hover:bg-altivea-accent group-hover:text-white transition-colors duration-300">
                {service.icon}
            </div>
            
            {/* TEXTO */}
            <h3 className="text-xl font-bold mb-3 text-altivea-blue group-hover:text-altivea-accent transition-colors">
                {service.title}
            </h3>
            <p className="text-slate-600 leading-relaxed">
                {service.description}
            </p>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}