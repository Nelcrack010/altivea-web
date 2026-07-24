"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Zap, TrendingUp, Users, ArrowRight, Mail, MapPin } from 'lucide-react'; 

// --- 1. COMPONENTE DE ENLACE MÓVIL (Con Icono y Descripción) ---
const MobileNavLink = ({ href, icon, title, subtitle, onClick }: any) => {
return (
    <Link 
    href={href} 
    onClick={onClick}
    className="group flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-white/5 active:scale-95 border border-transparent hover:border-white/10"
    >
    {/* Icono con fondo circular */}
    <div className="p-3 rounded-full bg-white/5 text-slate-300 group-hover:bg-altivea-accent group-hover:text-white transition-all duration-300 shadow-lg group-hover:shadow-altivea-accent/30">
        {icon}
    </div>
    
    {/* Textos */}
    <div className="flex-1">
        <h4 className="text-lg font-bold text-white group-hover:text-altivea-accent2 transition-colors">
        {title}
        </h4>
        <p className="text-xs text-slate-400 group-hover:text-slate-300">
        {subtitle}
        </p>
    </div>

    {/* Flechita decorativa */}
    <ArrowRight size={16} className="text-slate-600 group-hover:text-altivea-accent2 transform group-hover:translate-x-1 transition-all" />
    </Link>
);
};

// --- 2. COMPONENTE DE ENLACE ESCRITORIO ---
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
return (
    <Link href={href} className="relative group py-1 inline-block">
    <span className="relative z-10 text-white/90 font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300">
        {children}
    </span>
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-altivea-accent2 transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
);
};

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Bloquear el scroll del body cuando el menú está abierto
useEffect(() => {
    if (isOpen) {
    document.body.style.overflow = 'hidden';
    } else {
    document.body.style.overflow = 'unset';
    }
}, [isOpen]);

return (
    <nav 
    className={`
        fixed top-0 z-50 w-full 
        transition-all duration-500 ease-in-out
        ${scrolled || isOpen // Si está scrolleado O el menú abierto -> Fondo sólido
        ? 'bg-altivea-blue/90 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' 
        : 'bg-transparent py-6 border-transparent' 
        }
    `}
    >
    
    <div className="container mx-auto px-6 flex justify-between items-center relative z-50">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden">
            <Image 
                src="/logo-A-altivea.png" 
                alt="Altivea Logo" 
                width={50} 
                height={50}
                className="object-contain group-hover:scale-110 transition-transform duration-300 brightness-0 invert" 
            />
            </div>
            <span className="font-bold text-xl tracking-tight text-white hidden md:block">
            ALTIVEA
            </span>
        </Link>
        
        {/* MENÚ ESCRITORIO */}
        <div className="hidden md:flex items-center gap-10">
            <NavLink href="/soluciones">Soluciones</NavLink>
            <NavLink href="/resultados">Resultados</NavLink>
            <NavLink href="/agencia">Agencia</NavLink>
        </div>

        {/* BOTÓN CTA */}
        <div className="hidden md:block">
            <Link 
                href="https://wa.me/51999999999" 
                target="_blank"
                className={`
                px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300
                ${scrolled 
                    ? 'bg-white text-altivea-blue hover:bg-altivea-accent hover:text-white' 
                    : 'bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white hover:text-altivea-blue' 
                }
                `}
            >
                Hablemos
            </Link>
        </div>

        {/* BOTÓN HAMBURGUESA (Móvil) */}
        <div className="md:hidden">
            <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white p-2 focus:outline-none"
            >
                {isOpen ? <X size={28} className="text-altivea-accent2" /> : <Menu size={28} />}
            </button>
        </div>
    </div>

    {/* --- MENÚ MÓVIL DESPLEGABLE --- */}
    {/* Ocupa toda la pantalla debajo de la barra */}
    <div className={`
        md:hidden fixed inset-0 top-[72px] z-40 bg-altivea-blue/95 backdrop-blur-xl 
        transition-all duration-500 ease-in-out
        ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
    `}>
        
        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto pb-24">
            
            {/* 1. LINKS DE NAVEGACIÓN (Estilo App) */}
            <div className="flex flex-col gap-4">
            <MobileNavLink 
                href="/soluciones" 
                icon={<Zap size={20} />} 
                title="Soluciones" 
                subtitle="Servicios & Tecnología"
                onClick={() => setIsOpen(false)}
            />
            <MobileNavLink 
                href="/resultados" 
                icon={<TrendingUp size={20} />} 
                title="Resultados" 
                subtitle="Casos de éxito reales"
                onClick={() => setIsOpen(false)}
            />
            <MobileNavLink 
                href="/agencia" 
                icon={<Users size={20} />} 
                title="Agencia" 
                subtitle="Conoce al equipo"
                onClick={() => setIsOpen(false)}
            />
            </div>

            {/* Divisor */}
            <div className="h-px bg-white/10 w-full my-8"></div>

            {/* 2. BOTÓN PRINCIPAL */}
            <Link 
                href="https://wa.me/51999999999"
                className="w-full bg-altivea-accent text-white py-4 rounded-xl font-bold text-lg text-center shadow-lg shadow-altivea-blue/50 hover:bg-altivea-accent active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
            >
                ¡Hablemos Ahora!
            </Link>

            {/* 3. FOOTER (Info Extra Amigable) */}
            <div className="mt-auto flex flex-col gap-4 pt-8 text-center md:text-left">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <Mail size={16} />
                <span>hola@altiveagroup.com</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
                <MapPin size={16} />
                <span>Chiclayo, Perú</span>
            </div>
            <p className="text-xs text-slate-600 mt-4">© 2026 Altivea Group</p>
            </div>

        </div>
    </div>

    </nav>
);
}