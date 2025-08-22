import React from "react";

// Iconos de lucide-react
import { CalendarClock, ArrowRight, Scale } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-white">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

// ───────────────────────────────
// Header
// ───────────────────────────────
function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <a href="#inicio" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-[#293C3D] text-white grid place-content-center shadow-sm">
            <Scale className="h-5 w-5" />
          </div>
          <span className="font-semibold">J. Yanarico Abogados & Asociados</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:text-[#293C3D]">Servicios</a>
          <a href="#contacto" className="hover:text-[#293C3D]">Contacto</a>
        </nav>
        <CTAButton />
      </div>
    </header>
  );
}

function CTAButton() {
  const whatsapp = "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a
      href={whatsapp}
      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow hover:opacity-90"
      style={{ backgroundColor: "#293C3D" }}
    >
      <CalendarClock className="h-4 w-4" />
      <span>Agenda una consulta</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

// ───────────────────────────────
// Hero con imagen de fondo
// ───────────────────────────────
function Hero() {
  return (
    <section
      id="inicio"
      className="relative text-white min-h-[70vh] flex items-center"
    >
      {/* Imagen de fondo */}
      <img
        src="/hero.png"
        alt="Columnas y balanza"
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      {/* Capa oscura encima de la imagen */}
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Defensa estratégica y soluciones legales{" "}
          <span className="text-[#EDEBE7]">claras</span>
        </h1>
        <p className="mt-4 text-lg text-gray-100">
          Civil • Penal • Laboral • Saneamiento Físico-Legal
        </p>
        <div className="mt-6 flex justify-center">
          <CTAButton />
        </div>
      </div>
    </section>
  );
}

// ───────────────────────────────
// Footer
// ───────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#293C3D] text-gray-200 py-6 mt-12">
      <div className="max-w-7xl mx-auto px-6 text-center text-sm">
        © 2025 J. Yanarico Abogados & Asociados — Cajamarca, Perú
      </div>
    </footer>
  );
}
