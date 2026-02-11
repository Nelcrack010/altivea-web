"use client";
import React, { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, delay = 0 }) {
const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

useEffect(() => {
    const observer = new IntersectionObserver(
    ([entry]) => {
        // Cuando el elemento es visible en la pantalla...
        if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(ref.current); // Dejamos de observar para que no se repita la animación
        }
    },
    { threshold: 0.1 } // Se activa cuando el 10% del elemento se asoma
    );

    if (ref.current) {
    observer.observe(ref.current);
    }

    return () => {
    if (ref.current) observer.unobserve(ref.current);
    };
}, []);

return (
    <div
    ref={ref}
    // Clases de Tailwind para la animación
    className={`transition-all duration-1000 ease-out transform ${
        isVisible 
        ? "opacity-100 translate-y-0" // Estado Visible: Opaco y en su sitio
        : "opacity-0 translate-y-20"  // Estado Oculto: Transparente y 20px más abajo
    }`}
    style={{ transitionDelay: `${delay}ms` }} // Retraso opcional
    >
    {children}
    </div>
);
}