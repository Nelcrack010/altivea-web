import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
    return (
        <nav className="w-full h-20 bg-white border-b border-slate-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-full flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image 
                    src="/logo-A-altivea.png" // Asegúrate de que este sea el nombre correcto en la carpeta 'public'
                    alt="Logo Altivea Group" 
                    width={150} // Ajusta este número según lo grande que lo quieras
                    height={40} // Ajusta la altura proporcionalmente
                    className="object-contain h-12 w-auto" // Esto ayuda a que se vea bien en móviles
                    priority // Para que se cargue inmediatamente
                />
            </Link>
            
            {/* Links de Navegación (Escritorio) */}
            <div className="hidden md:flex gap-8 font-medium">
                <Link href="/soluciones" className="text-altivea-text hover:text-altivea-accent transition-colors">
                    Soluciones
                </Link>
                <Link href="/resultados" className="text-altivea-text hover:text-altivea-accent transition-colors">
                    Resultados
                </Link>
                <Link href="/agencia" className="text-altivea-text hover:text-altivea-accent transition-colors">
                    Agencia
                </Link>
            </div>

            {/* Botón CTA */}
            <a 
                href="https://wa.me/51999999999" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-altivea-blue text-white px-6 py-2 rounded-md font-bold hover:bg-altivea-accent transition-all duration-300 shadow-lg hover:shadow-altivea-accent/50"
            >
                Hablemos
            </a>
            </div>
        </nav>
    )
}