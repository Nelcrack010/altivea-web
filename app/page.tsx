import Hero from "../components/sections/Hero"; // Importamos el componente que creamos

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* Aquí mostramos el Hero */}
      <Hero />
      
      {/* Espacio temporal para ver que la página sigue hacia abajo */}
      <div className="py-20 text-center bg-white text-slate-400">
        <h2 className="text-2xl font-bold mb-4">Nuestros Servicios</h2>
        <p>(Pronto construiremos esta sección...)</p>
      </div>

    </main>
  );
}