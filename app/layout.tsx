import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

// importando el navbar
import Navbar from "@/components/layout/Navbar";

// importando las fuentes
const inter = Inter({ subsets: ["latin"], variable: '--font-inter'});
const monserrat = Montserrat({ subsets: ["latin"], variable: '--font-montserrat' });

export const metadata: Metadata = {
  title: "Altivea Group | Marketing y Tecnología",
  description: "Agencia de Marqueting Digital y Desarrollo web en Perú",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${monserrat.variable} font-sans antialiased bg-altivea-light`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
