"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';

export default function Paquetes() {
// Ahora iniciamos en 'capacitacion' para que veas tus nuevos paquetes directamente
const [departamentoActivo, setDepartamentoActivo] = useState('marketing'); 
const [subcategoriaActiva, setSubcategoriaActiva] = useState('microempresas');

// --- BASE DE DATOS ESTRUCTURADA ---
const datosPaquetes = {
    marketing: {
        nombre: "Marketing/Comercial",
        subcategorias: {
            emprendedores: {
                nombre: "Emprendedores",
                paquetes: [
                    { 
                        title: "Básico", 
                        price: "S/ 349.00", 
                        features: ["4 Videos mensuales.", "1 Visita de producción.", "Dirección, producción y edición.", "Entregable (formato documento y HD).", "(Incluye entrevista general)"] 
                    },
                    { 
                        title: "Básico Pro", 
                        price: "S/ 749.00", 
                        features: ["6 Videos mensuales y 2 Historias semanales.", "2 Visitas de producción.", "Calendario y Plan de contenidos.", "Gestión de redes sociales (básica).", "(Incluye entrevista general)"] 
                    }
                ]
            },
            microempresas: {
                nombre: "Microempresas",
                paquetes: [
                    { 
                        title: "Básico", 
                        price: "S/ 549.00", 
                        features: ["6 Videos mensuales.", "2 Visitas de producción y 4 Fotos para historia.", "Dirección, producción y edición.", "Entregable (formato documento y HD).", "(Incluye entrevista general)"] 
                    },
                    { 
                        title: "Pro", 
                        price: "S/ 949.00", 
                        features: ["8 Videos mensuales y 2 Historias semanales.", "3 Visitas de producción y 1 Visita general.", "Calendario y Plan de contenidos.", "Gestión de redes sociales (básica).", "(Incluye entrevista general)"] 
                    }
                ]
            },
            pymes: {
                nombre: "Pequeñas y Medianas",
                paquetes: [
                    { 
                        title: "Básico", 
                        price: "S/ 1,850.00", 
                        features: ["6 Videos, 2 Shorts y 3 Historias semanales.", "2 Visitas de producción.", "Calendario/Plan de contenidos.", "Gestión de RRSS (básica) y Mensajería.", "FODA Cruzado - Apartado.", "(Incluye entrevista general)"] 
                    },
                    { 
                        title: "Intermedio", 
                        price: "S/ 2,975.00", 
                        features: ["7 Videos, 3 Shorts y 1 Historia diaria.", "3 Visitas de producción y 1 de monitoreo.", "Calendario/Plan de contenidos.", "Gestión de RRSS (intermedia) y Mensajería.", "Estudio de oportunidades y resultados.", "(Incluye entrevista a profundidad)"] 
                    },
                    { 
                        title: "Avanzado", 
                        price: "S/ 3,845.00", 
                        features: ["8 Videos, 4 Shorts y 3 Historias diarias.", "4 Visitas de producción y 2 de monitoreo.", "Calendario/Plan de contenidos.", "Gestión de RRSS (avanzada - Meta ADS) y Mensajería.", "Estudio de oportunidades + Benchmarking.", "(Incluye entrevista a profundidad)"] 
                    },
                    { 
                        title: "Premium", 
                        price: "S/ 4,975.00", 
                        features: ["Todo lo que incluye el PAQUETE AVANZADO (+2 videos + 1 historia diaria).", "1 Focus Group.", "Reportes de resultados de F.G.", "2 consultorías en Gestión Estratégica.", "(Incluye entrevista a profundidad)"] 
                    },
                    { 
                        title: "VIP", 
                        price: "S/ 8,265.00", 
                        features: ["4 Videos mensuales y 1 Visita de producción.", "Todo lo que incluye el PAQUETE PREMIUM.", "1 campaña local.", "Proyección estratégica.", "(Incluye entrevista a profundidad)"] 
                    }
                ]
            },
            adicionales: {
                nombre: "Adicionales",
                paquetes: [
                    { 
                        title: "Servicios Adicionales", 
                        price: "A Cotizar", 
                        features: ["Rebranding.", "Estudio publicitario.", "Calendario y plan de contenidos.", "Campaña BTL.", "Consultoría en marketing, gestión comercial y ventas.", "Merchandising."] 
                    }
                ]
            }
        }
    },
    // innovacion: {
    // nombre: "Innovación y Creatividad",
    // subcategorias: {
    //     naturales: {
    //     nombre: "Personas Naturales",
    //     paquetes: [
    //         { title: "Clásico", price: "S/ 500.00", features: ["Duración: 2 Meses", "Levantamiento de necesidad e Inv. secundaria", "Encuesta corta (hasta 50 respuestas)", "Análisis de demanda y Mini resumen"] },
    //         { title: "Pro", price: "S/ 900.00", features: ["Duración: 3 Meses", "Todo el paquete Clásico", "Encuesta ampliada y Perfilamiento de cliente", "Benchmark local y Recomendaciones"] }
    //     ]
    //     },
    //     emprendimientos: {
    //     nombre: "Emprendimientos",
    //     paquetes: [
    //         { title: "Clásico", price: "S/ 1,200.00", features: ["Duración: 2 Meses", "Diagnóstico de negocio y Análisis sectorial", "Encuestas (100) o Entrevistas (5-8)", "Identificación de competidores e Informe"] },
    //         { title: "Pro", price: "S/ 1,900.00", features: ["Duración: 4 Meses", "Todo el paquete Clásico + Sesiones estratégicas", "Segmentación y Estimación de demanda", "Adicional: Benchmarking y Mini roadmap"] }
    //     ]
    //     },
    //     formalizacion: {
    //     nombre: "Formalización",
    //     paquetes: [
    //         { title: "Clásico", price: "S/ 2,200.00", features: ["Duración: 3 Meses", "Análisis de mercado local y posicionamiento", "Benchmark competitivo", "Evaluación de oportunidades e Informe"] },
    //         { title: "Pro", price: "S/ 3,000.00", features: ["Duración: 5 Meses", "Todo el paquete Clásico + Sesiones estratégicas", "Focus group / Entrevistas a profundidad", "Adicional: Elaboración de KPIs y Roadmap"] }
    //     ]
    //     },
    //     b2b: {
    //     nombre: "Segmento B2B",
    //     paquetes: [
    //         { title: "Clásico", price: "S/ 3,300.00", features: ["Duración: 4 Meses", "Análisis sectorial y Clientes potenciales", "Evaluación y Benchmarking competitivo", "Informe estratégico final"] },
    //         { title: "Pro", price: "S/ 4,200.00", features: ["Duración: 6 Meses", "Todo el paquete Clásico + Inv. mixta", "Segmentación avanzada y Modelado", "Presentación ejecutiva + Roadmap"] }
    //     ]
    //     }
    // }
    // },
    // finanzas: {
    // nombre: "Finanzas",
    // subcategorias: {
    //     emprendedores: {
    //     nombre: "Emprendedores",
    //     paquetes: [
    //         { title: "Ventas Básico", price: "S/ 500.00", features: ["Duración: 3 sesiones (1.5 h c/u)", "Comunicación y persuasión", "Manejo de objeciones frecuentes", "Técnicas simples de cierre"] },
    //         { title: "Ventas Pro", price: "S/ 800.00", features: ["Duración: 3 sesiones (1.5 - 2 h c/u)", "Ventas emocionales y cierre avanzado", "Trabajo con casos reales del negocio", "Feedback personalizado"] },
    //         { title: "Atención al Cliente Básico", price: "S/ 500.00", features: ["Duración: 3 sesiones (1.5 h c/u)", "Empatía y manejo de emociones", "Resolución básica de quejas", "Role play de atención al cliente"] },
    //         { title: "Atención al Cliente Pro", price: "S/ 800.00", features: ["Duración: 3 sesiones (1.5 - 2 h c/u)", "Atención alineada a identidad de marca", "Manejo avanzado de clientes difíciles", "Diseño de protocolos simples"] }
    //     ]
    //     },
    //     pymes: {
    //     nombre: "PYMES",
    //     paquetes: [
    //         { title: "Ventas Básico", price: "S/ 900.00", features: ["Duración: 3 sesiones (2 h c/u)", "Ventas consultivas para PYMES", "Manejo de objeciones comerciales", "Talleres y ejercicios comerciales"] },
    //         { title: "Ventas Pro", price: "S/ 1,200.00", features: ["Duración: 4 sesiones (2 - 3 h c/u)", "Optimización del proceso comercial", "Trabajo con pipeline real", "Estrategias de fidelización"] },
    //         { title: "Coaching Básico", price: "S/ 1,200.00", features: ["Duración: 4 sesiones (2 h c/u)", "Coaching estratégico organizacional", "Manejo básico de conflictos", "Dinámicas de equipo"] },
    //         { title: "Coaching Pro", price: "S/ 1,600.00", features: ["Duración: 5 sesiones (2 h c/u)", "Diagnóstico organizacional inicial", "Liderazgo y toma de decisiones", "Acompañamiento a líderes clave"] },
    //         { title: "Atención Básico", price: "S/ 800.00", features: ["Duración: 3 sesiones (2 h c/u)", "Estrategias orientadas a CX", "Manejo de quejas y reclamos", "Simulaciones de servicio"] },
    //         { title: "Atención Pro", price: "S/ 1,200.00", features: ["Duración: 4 sesiones (2 - 3 h c/u)", "Diagnóstico de experiencia del cliente", "Manejo de clientes complejos", "Plan de fidelización y satisfacción"] }
    //     ]
    //     }
    // }
    // },
    tecnologia: {
        nombre: "Tecnología",
        paquetes: [
            { 
                title: 'Servicio Bot Lead', 
                price: "S/ 1,200.00", 
                features: ["Chatbot Inteligente WhatsApp/Web", "Árbol de conversación (3 ramas)", "Reporte automatizado en Google Sheets", "+ S/ 150.00 Mantenimiento mensual"] 
            },
            { 
                title: 'Servicio "Presence"', 
                price: "S/ 1,500.00", 
                features: ["Landing Page One-Page (5 secciones)", "Desarrollo en Next.js, SEO Básico", "Formulario de contacto y botón WhatsApp", "Optimización de velocidad e imágenes"] 
            },
            { 
                title: 'Servicio Corporate Pro', 
                price: "S/ 3,200.00", 
                features: ["Web Multi-página Full-Stack", "CMS Básico Autoadministrable", "Integración con Google Analytics", "Diseño UI/UX 100% personalizado"] 
            },
            { 
                title: 'Servicio E-commerce Advanced', 
                price: "S/ 5,500.00", 
                features: ["Tienda Online Completa", "Integración pasarela de pagos", "Panel control inventario y envíos", "Capacitación de 2 horas al equipo"] 
            }
        ]
    }
};

// --- LÓGICA DE SELECCIÓN ---
const deptActual = datosPaquetes[departamentoActivo];
const tieneSubmenu = !!deptActual.subcategorias;

const paquetesActivos = tieneSubmenu 
    ? deptActual.subcategorias[subcategoriaActiva]?.paquetes || [] 
    : deptActual.paquetes;

// --- LÓGICA DE WHATSAPP ---
const handleCotizar = (paquete) => {
    const numeroWhatsApp = "51958176903";
    let categoriaTexto = deptActual.nombre;
    
    if (tieneSubmenu) {
    const subcategoriaTexto = deptActual.subcategorias[subcategoriaActiva].nombre;
    categoriaTexto = `${categoriaTexto} - ${subcategoriaTexto}`;
    }

    const mensaje = `¡Hola equipo de Altivea Group! 👋%0A%0AEstoy interesado en cotizar el paquete *${paquete.title}* de la categoría *${categoriaTexto}*. %0A%0AMe gustaría recibir más información al respecto. ¡Gracias!`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, '_blank');
};

// --- GRID DINÁMICO ---
let gridClasses = "lg:grid-cols-3 max-w-6xl mx-auto"; 
if (paquetesActivos.length === 1) gridClasses = "lg:grid-cols-1 max-w-sm mx-auto";
else if (paquetesActivos.length === 2) gridClasses = "lg:grid-cols-2 max-w-4xl mx-auto";
else if (paquetesActivos.length === 4) gridClasses = "lg:grid-cols-4 max-w-7xl mx-auto";

return (
    <section className="py-24 bg-slate-100 text-altivea-blue min-h-screen">
    <div className="w-full px-6">
        
        <div className="text-center mb-10 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Paquetes que ofrecemos
        </h2>
        <p className="text-slate-500">
            Soluciones a medida para escalar tu negocio en cada área.
        </p>
        </div>

        {/* --- 1. MENÚ PRINCIPAL --- */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(datosPaquetes).map((key) => (
            <button
            key={key}
            onClick={() => {
                setDepartamentoActivo(key);
                if (datosPaquetes[key].subcategorias) {
                const primerSubMenu = Object.keys(datosPaquetes[key].subcategorias)[0];
                setSubcategoriaActiva(primerSubMenu);
                }
            }}
            className={`px-7 py-3.5 rounded-xl font-semibold tracking-wide transition-all duration-300 border-2 ${
                departamentoActivo === key
                ? 'border-altivea-blue bg-altivea-blue text-white shadow-xl shadow-altivea-blue/20 -translate-y-1'
                : 'border-slate-200 bg-transparent text-slate-500 hover:border-altivea-blue hover:text-altivea-blue hover:bg-slate-50'
            }`}
            >
            {datosPaquetes[key].nombre}
            </button>
        ))}
        </div>

        {/* --- 2. SUBMENÚ CONDICIONAL --- */}
        {tieneSubmenu && (
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up">
            {Object.keys(deptActual.subcategorias).map((subKey) => (
            <button
                key={subKey}
                onClick={() => setSubcategoriaActiva(subKey)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 border ${
                subcategoriaActiva === subKey
                    ? 'border-altivea-accent bg-altivea-accent text-white shadow-md'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-400 hover:text-altivea-blue'
                }`}
            >
                {deptActual.subcategorias[subKey].nombre}
            </button>
            ))}
        </div>
        )}

        {!tieneSubmenu && <div className="h-12"></div>}

        {/* --- 3. GRID DE PAQUETES --- */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${gridClasses} gap-6`}>
        {paquetesActivos.map((pkg, index) => (
            <div 
            key={`${departamentoActivo}-${subcategoriaActiva}-${index}`}
            className="bg-altivea-blue text-white p-8 rounded-2xl shadow-xl hover:-translate-y-2 transition-transform duration-300 flex flex-col border border-altivea-blueLight animate-fade-in-up"
            >
            <h3 className="text-xl font-bold mb-2 text-white">{pkg.title}</h3>
            
            <div className="mb-6">
                <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-altivea-accent2 to-white">
                {pkg.price}
                </span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
                {pkg.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                    <Check size={18} className="text-altivea-accent min-w-[18px] mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                </li>
                ))}
            </ul>

            {/* AQUÍ SE EJECUTA LA MAGIA DEL WHATSAPP AL HACER CLIC */}
            <button 
                onClick={() => handleCotizar(pkg)}
                className="w-full py-3 rounded-xl font-bold bg-white text-altivea-blue hover:bg-altivea-accent hover:text-white transition-colors duration-300 mt-auto"
            >
                Cotizar ahora
            </button>
            </div>
        ))}
        </div>

    </div>
    </section>
);
}