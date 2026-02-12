import React from 'react';
import { FileSearch, Lightbulb, Presentation } from 'lucide-react'; // Iconos para Valores

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
        {/* Caja Gris (Placeholder de Imagen) */}
        <div className="w-full h-[400px] bg-gray-200 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
            {/* Aquí iría la imagen <img src="..." /> */}
            <span className="font-mono text-sm">Espacio para Imagen</span>
        </div>
        </div>

        {/* --- SECCIÓN 2: MISIÓN Y VISIÓN --- */}
        <div>
        <h2 className="text-3xl font-bold text-center mb-12">Misión y Visión</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tarjeta Misión */}
            <div className="bg-gray-100 p-10 rounded-lg text-center h-full flex flex-col justify-center">
            <h3 className="text-xl font-bold mb-4">Misión</h3>
            <p className="text-slate-600 text-sm">
                Diseñar e implementar soluciones tecnológicas que conecten a las marcas con su público, integrando creatividad, data e inteligencia artificial. Buscamos que cada proyecto sea rentable y escalable.
            </p>
            </div>
            {/* Tarjeta Visión */}
            <div className="bg-gray-100 p-10 rounded-lg text-center h-full flex flex-col justify-center">
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