import React from 'react';
import { Check } from 'lucide-react';

export default function Paquetes() {
const paquetes = [
{
    title: "Paquete Inicial",
    price: "Ideal para Empezar",
    features: ["Landing Page One-Page", "Integración WhatsApp", "Hosting incluido (1 año)", "Diseño Responsive"]
},
{
    title: "Paquete Negocio",
    price: "El más popular",
    features: ["Web Corporativa (5 pags)", "SEO Básico", "Blog Autoadministrable", "Correos Corporativos"]
},
{
    title: "Paquete E-commerce",
    price: "Para vender online",
    features: ["Tienda Online Completa", "Pasarela de Pagos", "Gestión de Inventario", "Soporte Prioritario"]
}
];

return (
<section className="py-24 bg-slate-100 text-slate-900">
    <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
        Paquetes que ofrecemos
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {paquetes.map((pkg, index) => (
        <div 
            key={index} 
            className="bg-black text-white p-10 rounded-lg shadow-xl hover:-translate-y-3 transition-transform duration-300 flex flex-col"
        >
            <h3 className="text-2xl font-bold mb-2">{pkg.title}</h3>
            <p className="text-blue-400 text-sm font-semibold uppercase tracking-wider mb-8">
            {pkg.price}
            </p>
            
            <ul className="space-y-4 mb-8 flex-1">
            {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm">
                <Check size={18} className="text-blue-500 min-w-[18px] mt-0.5" />
                <span>{feature}</span>
                </li>
            ))}
            </ul>

            <button className="w-full py-3 border border-white rounded-full font-bold hover:bg-white hover:text-black transition-colors">
            Cotizar
            </button>
        </div>
        ))}
    </div>

    </div>
</section>
);
}