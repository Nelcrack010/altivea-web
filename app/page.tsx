import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-altivea-light">
      <h1 className="font-heading text-4xl text-altivea-blue font-bold">
        Hola Altivea 🚀
      </h1>
      <button className="bg-altivea-accent text-white px-6 py-2 rounded mt-4">
        Empezar Proyecto
      </button>
    </main>
  );
}
