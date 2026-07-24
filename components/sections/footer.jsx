import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
return (
    <footer className="bg-altivea-blue text-white w-full">
    
    {/* 1. SECCIÓN CTA - PANTALLA COMPLETA (Igual al Hero) */}
    <div className="h-screen w-full flex flex-col items-center justify-center text-center px-4">
        
        {/* Título Gigante */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
        ¿Listo para escalar <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent to-altivea-accent2">
            tu negocio?
        </span>
        </h2>

        {/* Subtítulo */}
        <p className="text-slate-400 text-lg md:text-2xl mb-12 max-w-2xl font-light">
        No esperes más. La transformación digital empieza hoy.
        </p>

        {/* Botón CTA Blanco */}
        <Link 
        href="https://wa.me/51958176903"
        className="
            bg-white 
            text-altivea-blue 
            px-12 
            py-4 
            rounded-full 
            font-bold 
            text-xl 
            hover:scale-105 
            hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] 
            transition-all 
            duration-300
        "
        >
        Cotizar Ahora
        </Link>
    </div>

    {/* 2. FOOTER - ENLACES (Wireframe) */}
    <div className="border-t border-white/10 pt-16 pb-12 bg-altivea-blue">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-sm">
            
            {/* COLUMNA 1: LOGO E INFO */}
            <div className="flex flex-col gap-6">
            {/* Usa aquí tu logo (el ícono o el texto blanco) */}
            <img 
                src="/ALTIVEA LOGO BLANCO.png" 
                alt="Altivea Logo" 
                className="w-32"
            />
            <div className="text-slate-500 text-xs leading-relaxed space-y-1">
                <p>Agencia de Marketing Digital.</p>
                <p>Av. Victoria, Chiclayo.</p>
                <p>Todos los derechos reservados.</p>
            </div>
            </div>

            {/* COLUMNA 2: EXPLORAR */}
            <div>
            <h3 className="font-bold text-base mb-6 text-white">Explorar</h3>
            <ul className="flex flex-col gap-3 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link></li>
                <li><Link href="#proyectos" className="hover:text-white transition-colors">Proyectos</Link></li>
                <li><Link href="#resultados" className="hover:text-white transition-colors">Resultados</Link></li>
            </ul>
            </div>

            {/* COLUMNA 3: CONTACTO */}
            <div>
            <h3 className="font-bold text-base mb-6 text-white">Contacto</h3>
            <ul className="flex flex-col gap-4 text-slate-400">
                <li className="flex items-center gap-3">
                <Mail size={16} />
                <span>altiveagroup@gmail.com</span>
                </li>
                <li className="flex items-center gap-3">
                <Phone size={16} />
                <span>+51 958 176 903</span>
                </li>
                <li className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Chiclayo, Perú</span>
                </li>
            </ul>
            </div>

            {/* COLUMNA 4: LEGAL */}
            <div>
            <h3 className="font-bold text-base mb-6 text-white">Legal</h3>
            <ul className="flex flex-col gap-3 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Libro de Reclamaciones</Link></li>
            </ul>
            </div>

        </div>
        </div>
    </div>

    </footer>
);
}