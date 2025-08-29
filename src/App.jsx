import React from "react";
import {
  Gavel,
  Landmark,
  Building2,
  ShieldCheck,
  MessageSquareMore,
  CalendarClock,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

/* Paleta rápida (no requiere tailwind.config):
   - Verde institucional (fondo): #293C3D
   - Verde medio (detalles):      #365455
   - Beige claro (acento texto):  #EDEBE7
*/

export default function App() {
  return (
    <div className="min-h-screen bg-[#293C3D] text-white">
      <Header />
      <Hero />
      <FeatureStrip />
      <Servicios />
      <Sobre />
      <Contacto />
      <Footer />
      <FloatingCTA />
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Header con logo                                                    */
/* ────────────────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#293C3D]/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            {/* Logo real desde /public/logo.png */}
            <img
              src="/logo.png"
              alt="Logo J. Yanarico"
              className="h-9 w-auto rounded-full bg-white p-1"
            />
            <div className="leading-tight">
              <p className="font-semibold">J. Yanarico Abogados & Asociados</p>
              <p className="text-xs text-white/70">Cajamarca • Perú</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm">
            <a href="#servicios" className="text-white/80 hover:text-[#EDEBE7]">
              Nuestros Servicios
            </a>
            <a href="#sobre" className="text-white/80 hover:text-[#EDEBE7]">
              Sobre Nosotros
            </a>
            <a href="#contacto" className="text-white/80 hover:text-[#EDEBE7]">
              Contáctanos
            </a>
          </nav>

          <div className="hidden md:block">
            <CTAButton />
          </div>
        </div>
      </div>
    </header>
  );
}

function CTAButton() {
  const whatsapp =
    "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a
      href={whatsapp}
      className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 bg-white text-[#293C3D] font-medium hover:bg-[#EDEBE7] transition"
    >
      <CalendarClock className="h-4 w-4" />
      <span>Agenda una consulta</span>
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Hero                                                               */
/* ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden text-white min-h-[60vh] md:min-h-[68vh] flex items-center justify-center"
    >
      {/* imagen en /public/hero.png */}
      <img
        src="/hero.png"
        alt="Columnas y balanza"
        className="absolute inset-0 z-0 w-full h-full object-cover"
      />
      {/* capa oscura para contraste */}
      <div className="absolute inset-0 z-10 bg-black/55" />

      <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
          Comprometidos con tu defensa y la seguridad legal de tus derechos
        </h1>
        <p className="mt-4 text-white/90">
          Civil • Penal • Laboral • Saneamiento Físico-Legal
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Tira de diferenciales (verde)                                      */
/* ────────────────────────────────────────────────────────────────── */
function FeatureStrip() {
  const items = [
    { icon: ShieldCheck, label: "Asesoramiento Personalizado" },
    {
      icon: Gavel,
      label: "Conciliación Extrajudicial – Vía Judicial",
    },
    { icon: Building2, label: "Asesoramiento Empresarial" },
  ];
  return (
    <div className="bg-[#22373A] border-y border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-3 flex flex-col md:flex-row gap-3 md:gap-8 items-center justify-center">
        {items.map((it, i) => (
          <div key={i} className="flex items-center gap-2 text-sm">
            <it.icon className="h-4 w-4 text-[#EDEBE7]" />
            <span className="text-white/90">{it.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Servicios – tarjetas claras sobre fondo verde                      */
/* ────────────────────────────────────────────────────────────────── */
function Servicios() {
  const cards = [
    {
      icon: Gavel,
      title: "Derecho Penal",
      desc:
        "Defensa técnica y patrocinio estratégico en investigaciones y procesos.",
    },
    {
      icon: Landmark,
      title: "Derecho Civil",
      desc: "Contratos, indemnizaciones, propiedad y responsabilidades.",
    },
    {
      icon: Building2,
      title: "Derecho Laboral",
      desc: "Asesoría y defensa para trabajadores y empresas.",
    },
    {
      icon: ShieldCheck,
      title: "Saneamiento Físico-Legal",
      desc: "Regularización de inmuebles, títulos y levantamiento de cargas.",
    },
  ];

  return (
    <section id="servicios" className="py-16 bg-[#293C3D]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-10">
          <p className="uppercase tracking-wide text-white/70">Servicios</p>
          <h2 className="text-2xl md:text-4xl font-semibold text-[#EDEBE7]">
            Especialidades del estudio
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white text-slate-800 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <c.icon className="h-6 w-6 text-[#293C3D]" />
              <h3 className="mt-4 font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Sobre nosotros – bloque en verde medio                             */
/* ────────────────────────────────────────────────────────────────── */
function Sobre() {
  return (
    <section id="sobre" className="py-16 bg-[#365455]">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-4xl font-semibold text-[#EDEBE7] text-center">
          Sobre el estudio
        </h2>
        <p className="mt-6 text-white/90 text-center leading-relaxed">
          Encabezado por el abogado <span className="font-semibold">Javier
          Alexis Yanarico Vilchez</span>, especialista en derecho laboral y
          civil, con experiencia adicional en asesoramiento de empresas y
          patrocinio en procesos penales, administrativos y demás.
        </p>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Contacto – caja clara sobre fondo verde                            */
/* ────────────────────────────────────────────────────────────────── */
function Contacto() {
  const whatsapp =
    "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <section id="contacto" className="py-16 bg-[#293C3D]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white text-slate-800 rounded-2xl p-6">
            <h3 className="font-semibold text-lg">Contáctanos</h3>
            <ul className="mt-4 space-y-2 text-slate-700">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#293C3D]" />
                <span>988 996 057</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#293C3D]" />
                <span>jyanarico.abogado@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#293C3D]" />
                <span>
                  Jr. Miguel Iglesias N° 195, 3er piso — Cajamarca, Perú
                </span>
              </li>
            </ul>

            <div className="mt-6 text-sm text-slate-600">
              <p>
                <span className="font-medium">Lun – Vie:</span> 9:00 a. m. – 6:00
                p. m.
              </p>
              <p>
                <span className="font-medium">Sáb:</span> 9:00 a. m. – 1:00 p. m.
              </p>
            </div>

            <a
              href={whatsapp}
              className="mt-6 inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-[#293C3D] text-white hover:bg-[#1F2E2F]"
            >
              <MessageSquareMore className="h-4 w-4" />
              <span>Escríbenos por WhatsApp</span>
            </a>
          </div>

          <div className="rounded-2xl p-6 bg-[#22373A] border border-white/10">
            <h4 className="font-semibold text-[#EDEBE7]">
              ¿Cómo trabajamos?
            </h4>
            <ul className="mt-4 space-y-2 text-white/90">
              <li>• Atención personalizada y comunicación clara.</li>
              <li>• Estrategias de defensa enfocadas en resultados.</li>
              <li>• Experiencia con empresas del sector Salud y Telecomunicaciones.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Footer                                                             */
/* ────────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-[#22373A] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-6 text-center text-white/80">
        <p className="text-sm">
          © {new Date().getFullYear()} J. Yanarico Abogados & Asociados —{" "}
          <span className="text-white/90">Cajamarca • Perú</span>
        </p>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────── */
/* Botón flotante de WhatsApp                                         */
/* ────────────────────────────────────────────────────────────────── */
function FloatingCTA() {
  const whatsapp =
    "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20agendar%20una%20consulta";
  return (
    <a
      href={whatsapp}
      className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full px-4 py-2 bg-white text-[#293C3D] shadow-lg hover:bg-[#EDEBE7]"
    >
      <CalendarClock className="h-4 w-4" />
      <span className="hidden sm:inline">Agenda tu consulta</span>
    </a>
  );
}
