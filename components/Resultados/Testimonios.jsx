import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonios() {
const reviews = [
    {
    quote: "Altivea transformó nuestra forma de vender online. Pasamos de perseguir clientes a recibir leads calificados todos los días.",
    author: "Carlos Méndez",
    role: "CEO, Importadora Global"
    },
    {
    quote: "La velocidad de implementación y la claridad en los reportes es algo que no habíamos visto en otras agencias.",
    author: "Andrea Soria",
    role: "Marketing Manager, Red Salud"
    },
    {
    quote: "Entendieron nuestra visión desde el día uno. La nueva web no solo es bonita, es una máquina de ventas.",
    author: "Javier Torres",
    role: "Fundador, StartUp X"
    }
];

return (
    <section className="py-24 bg-slate-50 text-altivea-blue">
    <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Lo que dicen nuestros socios</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((rev, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative">
            <Quote className="text-altivea-accent/15 absolute top-4 right-4" size={60} />
            <p className="text-slate-600 italic mb-6 relative z-10">"{rev.quote}"</p>
            <div>
                <h4 className="font-bold text-altivea-blue">{rev.author}</h4>
                <span className="text-xs text-slate-400 uppercase tracking-wide">{rev.role}</span>
            </div>
            </div>
        ))}
        </div>
    </div>
    </section>
);
}