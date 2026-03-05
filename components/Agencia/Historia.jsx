import React from 'react';
import Image from 'next/image'; // <--- 1. ¡No olvides importar esto!
import { FileSearch, Lightbulb, Presentation } from 'lucide-react'; 

export default function InfoAgencia() {
return (
    <section className="bg-white text-slate-900 py-24">
    <div className="max-w-6xl mx-auto px-6 space-y-32">
        
        {/* --- SECCIÓN 1: SOBRE NOSOTROS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl font-bold mb-6">Sobre Nosotros</h2>
            <p className="text-slate-600 leading-relaxed text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam turpis turpis, ac sit malesuada neque viverra. At varius et suspendisse viverra lectus pulvinar arcu. Vel nulla suscipit diam tellus risus sit hoc sit. Aliquam sagittis convallis tellus at laoreet amet.
            <br /><br />
            Leo ut purus habitant aliquet. Aliquam eros adipiscing nibh nec feugiat tristique aliquam. Duis arcu tellus quis auctor eget eu cursus. Sed sapien sit lacinia egestas libero dignissim et at. Ipsum mauris lorem condimentum dignissim ac.
            </p>
        </div>
        
        {/* 2. LA CAJA DE LA IMAGEN ACTUALIZADA */}
        <div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden group">
            <Image 
                src="/FOTO-EQUIPO.jpg"
                alt="Sobre Altivea Group"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Capa oscura sutil opcional para darle un toque premium */}
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:bg-transparent" />
        </div>
        </div>

        {/* --- SECCIÓN 2: MISIÓN Y VISIÓN --- */}
        <div>
        <h2 className="text-3xl font-bold text-center mb-12">Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Misión */}
            <div className="bg-gray-100 p-10 rounded-lg text-center h-full flex flex-col justify-center transition-all hover:shadow-md">
            <h3 className="text-xl font-bold mb-4">Misión</h3>
            <p className="text-slate-600 text-sm">
                Diseñar e implementar soluciones tecnológicas que conecten a las marcas con su público, integrando creatividad, data e inteligencia artificial. Buscamos que cada proyecto sea rentable y escalable.
            </p>
            </div>
            {/* Tarjeta Visión */}
            <div className="bg-gray-100 p-10 rounded-lg text-center h-full flex flex-col justify-center transition-all hover:shadow-md">
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