import React from 'react';
import { Accessibility, User } from 'lucide-react';

export default function NuestroEquipo() {
return (
    <section className="py-24 bg-slate-100 text-slate-900">
    <div className="max-w-6xl mx-auto px-6">
        
        {/* TÍTULO */}
        <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
        <p className="text-slate-500">
            Conoce a los expertos detrás de cada estrategia.
        </p>
        </div>

        {/* 1. LÍDER (Luis Aguilar) - Centrado y Destacado */}
        <div className="flex justify-center mb-12">
        <div className="bg-white p-10 rounded-2xl shadow-md text-center max-w-sm w-full border border-slate-200 hover:-translate-y-2 transition-transform duration-300">
            {/* Icono Grande */}
            <div className="flex justify-center mb-6">
            <Accessibility size={80} strokeWidth={1.5} className="text-slate-900" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-1">Luis Aguilar</h3>
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-2">
            Gerente General
            </p>
            <span className="text-slate-500 text-sm">(Área de Marketing)</span>
        </div>
        </div>

        {/* 2. EL RESTO DEL EQUIPO (Grid de 4) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Luz Mimbela */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <User size={50} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h4 className="font-bold text-lg mb-1">Luz Montalico</h4>
            <p className="text-slate-500 text-sm">Área de Finanzas</p>
        </div>

        {/* Mauricio Guerrero */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <User size={50} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h4 className="font-bold text-lg mb-1">Mauricio Guerrero</h4>
            <p className="text-slate-500 text-sm">Área de I+D</p>
        </div>

        {/* Eduardo Ortiz */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <User size={50} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h4 className="font-bold text-lg mb-1">Eduardo Ortiz</h4>
            <p className="text-slate-500 text-sm">Innovación y Creatividad</p>
        </div>

        {/* Nelson Siancas */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 text-center hover:shadow-lg transition-shadow duration-300 flex flex-col items-center">
            <User size={50} strokeWidth={1.5} className="mb-4 text-slate-800" />
            <h4 className="font-bold text-lg mb-1">Nelson Juarez</h4>
            <p className="text-slate-500 text-sm">Área de Tecnología</p>
        </div>

        </div>

    </div>
    </section>
);
}