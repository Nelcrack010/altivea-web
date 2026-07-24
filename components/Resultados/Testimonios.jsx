import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonios() {
const reviews = [
    {
    quote: "El equipo de Altivea entendió perfectamente el sector construcción. Pasamos de una presencia tradicional a multiplicar nuestro alcance digital, conectando directamente con las obras y proyectos que necesitan nuestro concreto.",
    author: "Jesús Palmer",
    role: "Gerente de Concreafer"
    }
];

return (
    <section className="py-24 bg-slate-50 text-altivea-blue">
    <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">Lo que dicen nuestros clientes</h2>
        
        {/* LA MAGIA SUCEDE AQUÍ: Cambiamos grid por flex y centramos con justify-center */}
        <div className="flex flex-wrap justify-center gap-8">
        {reviews.map((rev, index) => (
            <div 
            key={index} 
            className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative max-w-lg w-full transition-transform"
            >
            <Quote className="text-altivea-accent/15 absolute top-6 right-6" size={60} />
            
            <p className="text-slate-600 italic mb-6 relative z-10 text-lg leading-relaxed">
                "{rev.quote}"
            </p>
            
            <div className="mt-4 pt-4 border-t border-slate-50">
                <h4 className="font-bold text-altivea-blue text-lg">{rev.author}</h4>
                <span className="text-xs text-altivea-accent uppercase tracking-wider font-semibold">{rev.role}</span>
            </div>
            </div>
        ))}
        </div>
        
    </div>
    </section>
);
}