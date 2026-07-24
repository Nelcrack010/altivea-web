import React from 'react';
import { Zap, ShieldCheck, Heart, Users } from 'lucide-react';

export default function Valores() {
const valores = [
    { icon: <Zap size={40} />, title: "Innovación Constante", desc: "Nunca nos conformamos. Siempre buscamos la nueva mejor manera de hacerlo." },
    { icon: <ShieldCheck size={40} />, title: "Transparencia Total", desc: "Sin letras chicas. Hablamos claro y mostramos resultados reales." },
    { icon: <Heart size={40} />, title: "Pasión por el Cliente", desc: "Tu negocio nos importa tanto como el nuestro." },
    { icon: <Users size={40} />, title: "Trabajo en Equipo", desc: "El talento gana partidos, pero el trabajo en equipo gana campeonatos." },
];

return (
    <section className="py-24 bg-altivea-blue text-white">
    <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-black mb-4">Nuestro ADN</h2>
        <p className="text-slate-400">Los principios que guían cada línea de código y cada estrategia.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {valores.map((valor, index) => (
            <div key={index} className="bg-altivea-blueLight/50 p-8 rounded-2xl border border-altivea-blueLight hover:border-altivea-accent transition-colors duration-300 group">
            <div className="mb-6 p-4 bg-altivea-blue rounded-full w-fit text-altivea-accent2 group-hover:text-white group-hover:bg-altivea-accent transition-all duration-300">
                {valor.icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{valor.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
                {valor.desc}
            </p>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}