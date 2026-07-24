import React from 'react';
import Image from 'next/image'; // <--- 1. ¡No olvides importar esto!
import { Lightbulb, Presentation } from 'lucide-react'; 

export default function InfoAgencia() {
return (
    <section className="bg-white text-altivea-blue py-24">
    <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* --- SECCIÓN 1: SOBRE NOSOTROS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <span className="text-altivea-accent font-bold tracking-widest uppercase text-sm mb-3 block">
            Quiénes Somos
            </span>
            <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-slate-600 leading-relaxed text-justify">
            Altivea Group nació en Chiclayo con un objetivo claro: acercar a las empresas peruanas
            —desde emprendimientos hasta PYMES en crecimiento— la misma tecnología y estrategia
            digital que antes solo tenían las grandes marcas. Somos un equipo multidisciplinario
            que combina marketing, desarrollo de software y automatización con inteligencia
            artificial para convertir cada proyecto en un motor de ventas real.
            <br /><br />
            No trabajamos con plantillas genéricas: cada estrategia, cada línea de código y cada
            campaña se diseña a la medida del negocio que la necesita. Creemos en la transparencia,
            en los reportes claros y en resultados que se puedan medir, no en promesas vacías.
            </p>
        </div>
        
        {/* 2. LA CAJA DE LA IMAGEN ACTUALIZADA */}
        <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden group">
            <Image 
                src="/FOTO-EQUIPO.jpg"
                alt="Equipo de Altivea Group"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Barra de acento inferior para reforzar la marca */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-altivea-accent to-altivea-accent2" />
            <div className="absolute inset-0 bg-altivea-blue/10 transition-opacity duration-500 group-hover:bg-transparent" />
        </div>
        </div>

        {/* --- SECCIÓN 2: MISIÓN Y VISIÓN --- */}
        <div>
        <h2 className="text-3xl font-bold text-center mb-12">Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Misión */}
            <div className="bg-altivea-light p-10 rounded-lg text-center h-full flex flex-col items-center justify-center transition-all hover:shadow-md border-t-4 border-altivea-accent">
            <Lightbulb size={36} className="text-altivea-accent mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-4">Misión</h3>
            <p className="text-slate-600 text-sm">
                Diseñar e implementar soluciones tecnológicas que conecten a las marcas con su público, integrando creatividad, data e inteligencia artificial. Buscamos que cada proyecto sea rentable y escalable.
            </p>
            </div>
            {/* Tarjeta Visión */}
            <div className="bg-altivea-light p-10 rounded-lg text-center h-full flex flex-col items-center justify-center transition-all hover:shadow-md border-t-4 border-altivea-accent2">
            <Presentation size={36} className="text-altivea-accent2 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold mb-4">Visión</h3>
            <p className="text-slate-600 text-sm">
                Ser la consultora de agencias líder a nivel nacional en transformación digital para el 2030, reconocidos por un enfoque estratégico y resultados medibles que transforman el ecosistema empresarial peruano.
            </p>
            </div>
        </div>
        </div>

    </div>
    </section>
);
}