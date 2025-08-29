/* ────────────────────────────────────────────────────────────────── */
/* Header                                                             */
/* ────────────────────────────────────────────────────────────────── */
function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[#293C3D]/95 backdrop-blur border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            {/* Logo real */}
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
