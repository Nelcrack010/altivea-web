import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

// 1. Componente reutilizable para el enlace con efecto "Underline"
const NavLink = ({ href, children }: NavLinkProps) => {
return (
    <Link href={href} className="relative group py-1 inline-block">
    {/* Texto del enlace */}
    <span className="relative z-10 text-altivea-text font-medium group-hover:text-altivea-accent transition-colors duration-300">
        {children}
    </span>
    
    {/* LA BARRA MÁGICA (Subrayado animado) */}
    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-altivea-accent transition-all duration-300 ease-out group-hover:w-full"></span>
    </Link>
);
};

export default function Navbar() {
    return (
        <nav className="w-full h-20 bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
            
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image 
                    src="/logo-A-altivea.png" 
                    alt="Logo Altivea Group" 
                    width={150} 
                    height={40} 
                    className="object-contain h-12 w-auto" 
                    priority 
                />
            </Link>
            
            {/* Links de Navegación (Escritorio) con el NUEVO EFECTO */}
            <div className="hidden md:flex gap-8">
                <NavLink href="/soluciones">Soluciones</NavLink>
                <NavLink href="/resultados">Resultados</NavLink>
                <NavLink href="/agencia">Agencia</NavLink>
            </div>

            {/* Botón CTA */}
            <a 
                href="https://wa.me/51999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-altivea-blue text-white px-6 py-2 rounded-md font-bold hover:bg-altivea-accent transition-all duration-300 shadow-lg hover:shadow-altivea-accent/50 hover:-translate-y-0.5"
            >
                Hablemos
            </a>
            </div>
        </nav>
    )
}