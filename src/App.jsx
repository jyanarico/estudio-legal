import React from "react";
import {
  CalendarClock, ArrowRight, Scale, Gavel, Landmark, Building2, Users2,
  CheckCircle2, Phone, Mail, MapPin
} from "lucide-react";

const BRAND = { primary: "#293C3D", dark: "#1F2E2F", gold: "#C9A461" };

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Header />
      <Hero />
      <TrustBar />
      <Servicios />
      <SobreMi />
      <Contacto />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/* Header */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3">
          {/* Si tienes /public/Logo.png, úsalo aquí */}
          {/* <img src="/Logo.png" className="h-9 w-9 rounded-2xl object-contain ring-1 ring-white/60" alt="Logo" /> */}
          <div className="h-9 w-9 rounded-2xl grid place-content-center text-white shadow-sm" style={{ backgroundColor: BRAND.primary }}>
            <Scale className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="font-semibold">J. Yanarico Abogados & Asociados</p>
            <p className="text-xs text-gray-500">Cajamarca • Perú</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#servicios" className="hover:text-brand">Servicios</a>
          <a href="#sobre" className="hover:text-brand">Sobre el estudio</a>
          <a href="#contacto" className="hover:text-brand">Contacto</a>
        </nav>
        <CTAButton className="hidden md:inline-flex" />
      </div>
    </header>
  );
}

function CTAButton({ className = "" }) {
  const whatsapp = "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a
      href={whatsapp}
      className={"inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow hover:opacity-90 " + className}
      style={{ backgroundColor: BRAND.primary }}
    >
      <CalendarClock className="h-4 w-4" />
      <span>Agenda una consulta</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

/* Hero (usa /public/hero.png) */
function Hero() {
  return (
    <section id="inicio" className="relative text-white">
      <img src="/hero.png" alt="Columnas y balanza" className="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-black/55" />
      <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
          Defensa estratégica y soluciones legales <span className="text-[#EDEBE7]">claras</span>
        </h1>
        <p className="mt-4 text-gray-100">Civil • Penal • Laboral • Saneamiento Físico‑Legal</p>
        <div className="mt-6 flex justify-center"><CTAButton /></div>
      </div>
    </section>
  );
}

/* Barra de confianza */
function TrustBar() {
  return (
    <div className="border-y border-white/10" style={{ backgroundColor: BRAND.primary }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-white text-xs flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span className="inline-flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> ICAC Reg. 3495</span>
        <span className="inline-flex items-center gap-2"><Gavel className="h-4 w-4" /> Litigio estratégico</span>
        <span className="inline-flex items-center gap-2"><Landmark className="h-4 w-4" /> Arbitraje & vía administrativa</span>
        <span className="inline-flex items-center gap-2"><Building2 className="h-4 w-4" /> Asesoría corporativa (Bitel)</span>
      </div>
    </div>
  );
}

/* Servicios */
function Servicios() {
  const items = [
    { icon: <Gavel className="h-5 w-5 text-brand" />, title: "Derecho Civil", desc: "Contratos, responsabilidad civil, desalojos y más." },
    { icon: <Landmark className="h-5 w-5 text-brand" />, title: "Derecho Penal", desc: "Defensa en investigaciones y procesos penales." },
    { icon: <Users2 className="h-5 w-5 text-brand" />, title: "Derecho Laboral", desc: "Patrocinio a trabajadores y empleadores." },
    { icon: <Building2 className="h-5 w-5 text-brand" />, title: "Saneamiento Físico‑Legal", desc: "Regularización de propiedad y títulos." },
  ];
  return (
    <section id="servicios" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="md:text-center">
        <p className="text-brand font-semibold">Servicios</p>
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">Especialidades del estudio</h2>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {items.map((s, i) => (
          <div key={i} className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">{s.icon}<h3 className="font-medium">{s.title}</h3></div>
            <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Sobre el estudio */
function SobreMi() {
  return (
    <section id="sobre" className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-brand">Sobre el estudio</h2>
          <p className="mt-3 text-gray-600">
            Dirigido por el abogado <span className="font-medium">Javier Alexis Yanarico Vilchez</span> (ICAC 3495),
            con experiencia en asesoría corporativa y patrocinio en litigios civiles, penales y laborales.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-gray-700 list-disc list-inside">
            <li>Atención personalizada y comunicación clara.</li>
            <li>Estrategias de defensa enfocadas en resultados.</li>
            <li>Experiencia con empresas del sector telecomunicaciones (Bitel).</li>
          </ul>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-inner">
          <h3 className="font-medium">Ubicación y horario</h3>
          <ul className="mt-4 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Jr. Miguel Iglesias N° 195, Cajamarca — 3er piso</li>
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> +51 988 996 057 (WhatsApp)</li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> jyanarico.abogado@gmail.com</li>
          </ul>
          <div className="mt-6 text-sm text-gray-700">
            <p className="font-medium">Horario de atención</p>
            <p>Lun–Vie: 9:00 a. m. – 6:00 p. m.</p>
            <p>Sáb: 9:00 a. m. – 1:00 p. m.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Contacto */
function Contacto() {
  const whatsapp = "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <section id="contacto" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          <p className="text-brand font-semibold">Contacto</p>
          <h3 className="mt-2 text-xl font-semibold">Agenda tu consulta</h3>
          <ul className="mt-6 space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4" /> <a href={whatsapp} className="hover:underline">+51 988 996 057 (WhatsApp)</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4" /> <a href="mailto:jyanarico.abogado@gmail.com" className="hover:underline">jyanarico.abogado@gmail.com</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4" /> Jr. Miguel Iglesias N° 195, Cajamarca — 3er piso</li>
          </ul>
          <div className="mt-6">
            <a href={whatsapp} className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-white shadow hover:opacity-90" style={{ backgroundColor: BRAND.primary }}>
              <Phone className="h-4 w-4" /> Escribir por WhatsApp
            </a>
          </div>
          <p className="mt-6 text-xs text-gray-500">*La comunicación no crea relación abogado‑cliente hasta la confirmación de encargo y aceptación de honorarios.</p>
        </div>
        <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 shadow-inner">
          <h3 className="font-medium">Envíanos un mensaje</h3>
          <form className="mt-4 grid grid-cols-1 gap-4" onSubmit={(e)=>e.preventDefault()}>
            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Nombre y apellidos" />
            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Correo electrónico" />
            <input className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Teléfono" />
            <textarea rows={4} className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand" placeholder="Cuéntanos brevemente tu caso" />
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-white text-sm shadow" style={{ backgroundColor: BRAND.primary }}>
              Enviar mensaje <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* Footer + CTA flotante */
function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-2xl grid place-content-center text-white shadow-sm" style={{ backgroundColor: BRAND.primary }}>
            <Scale className="h-5 w-5" />
          </div>
          <div>
            <p className="font-semibold">J. Yanarico Abogados & Asociados</p>
            <p className="text-xs text-gray-500">ICAC 3495</p>
          </div>
        </div>
        <div className="text-xs text-gray-500">© {new Date().getFullYear()} J. Yanarico Abogados & Asociados — Cajamarca, Perú</div>
      </div>
    </footer>
  );
}

function FloatingCTA() {
  const whatsapp = "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a href={whatsapp} className="fixed bottom-4 right-4 md:bottom-6 md:right-6 inline-flex items-center gap-2 rounded-full px-4 py-3 text-white shadow-lg" style={{ backgroundColor: BRAND.primary }}>
      <Phone className="h-5 w-5" /> Consultar ahora
    </a>
  );
}
