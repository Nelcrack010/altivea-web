import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function NuestroEquipo() {
const teamMembers = [
    { 
    name: "Liz Montalico", 
    role: "Dep. Finanzas", 
    img: "/foto-luz.jpg", 
    delay: 100,
    position: "object-[center_80%]" // <-- Puedes cambiar este porcentaje
    },
    { 
    name: "Mauricio Guerrero", 
    role: "Dep. I+D", 
    img: "/MAURICIO.jpg", 
    delay: 200,
    position: "object-[center_80%]" // <-- Puedes cambiar este porcentaje
    },
    { 
    name: "Eduardo Ortiz", 
    role: "Dep. Innovación", 
    img: "/EDUARDO.jpg", 
    delay: 300,
    position: "object-[center_80%]" // <-- Puedes cambiar este porcentaje
    },
    { 
    name: "Nelson Juarez", 
    role: "Dep. Tecnología", 
    img: "/NELSON-JUAREZ.jpg", 
    delay: 400,
    position: "object-[center_60%]" // <-- Tu encuadre personalizado
    },
];

return (
    <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
    
    {/* Fondo decorativo */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute -left-20 top-40 w-96 h-96 bg-blue-100 rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute right-0 bottom-20 w-80 h-80 bg-cyan-100 rounded-full blur-3xl mix-blend-multiply" />
    </div>

    <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <ScrollReveal>
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-slate-500">
            Expertos reales impulsando tu negocio.
            </p>
        </div>
        </ScrollReveal>

        {/* 1. EL LÍDER (CEO) - FOTO GRANDE */}
        <ScrollReveal>
        <div className="flex justify-center mb-16">
            <div className="group relative bg-white p-1 rounded-2xl shadow-xl max-w-sm w-full text-center transition-all duration-500 hover:-translate-y-2">
            
            <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 bg-[length:200%_200%] animate-gradient-xy -z-10" />
            
            <div className="bg-white rounded-xl h-full w-full p-8 flex flex-col items-center relative overflow-hidden">
                
                {/* FOTO CEO - RESPONSIVE SIZE (más grande en PC) */}
                <div className="relative w-32 h-32 md:w-40 md:h-40 mb-6 rounded-full p-1 bg-gradient-to-tr from-blue-600 to-cyan-400">
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white bg-slate-100">
                    <Image 
                    src="/LUIS-AGUILAR.jpg" 
                    alt="Luis Aguilar"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 400px"
                    quality={100}
                    className="object-cover object-[center_80%]" 
                    />
                </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900">Luis Aguilar</h3>
                <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 font-bold text-sm uppercase tracking-wider mb-2">
                Gerente General
                </p>
                <span className="text-slate-400 text-xs mb-6">Visionario & Estratega</span>

                <div className="flex gap-4 justify-center">
                <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></a>
                <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Mail size={18} /></a>
                <a href="#" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Instagram size={20} /></a>
                <a href="https://www.facebook.com/luisfrancisco.aguilardiaz.39" className="p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-blue-600 hover:text-white transition-all"><Facebook size={20} /></a>
                </div>
            </div>
            </div>
        </div>
        </ScrollReveal>

        {/* 2. EL EQUIPO (GRID) - GRID MEJORADO */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        
        {teamMembers.map((member, index) => (
            
            <ScrollReveal key={index} delay={member.delay}>
            <div className="group relative bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                
                <div className="pt-8 px-6 pb-20 flex flex-col items-center text-center flex-grow">
                
                {/* FOTO MIEMBRO - RESPONSIVE SIZE & DYNAMIC POSITION */}
                <div className="relative mb-6 w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-blue-400 transition-all duration-300 bg-slate-100">
                    <Image 
                    src={member.img} 
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 300px, 300px"
                    quality={100}
                    // Aquí inyectamos la propiedad 'position' que le pusimos arriba
                    className={`object-cover ${member.position} grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110`}
                    />
                </div>
                
                <h4 className="font-bold text-lg mb-1 text-slate-900 group-hover:text-blue-600 transition-colors">
                    {member.name}
                </h4>
                <p className="text-slate-500 text-xs uppercase tracking-wide">
                    {member.role}
                </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full bg-slate-900 text-white py-4 flex justify-center gap-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    <a href="#" className="hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Mail size={20} /></a>
                    <a href="#" className="hover:text-blue-400 transition-colors"><Instagram size={20} /></a>
                </div>

            </div>
            </ScrollReveal>

        ))}

        </div>

    </div>
    </section>
);
}