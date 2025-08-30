import React from "react";

export default function Consultas() {
  const whatsapp =
    "https://wa.me/51988996057?text=Hola%20Lic.%20Yanarico,%20quisiera%20mi%20primera%20consulta%20gratis";

  return (
    <section className="min-h-screen bg-[#293C3D] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#293C3D] text-center">
          Consultas gratuitas — respuesta en menos de 24h
        </h1>
        <p className="text-center text-slate-600 mt-2 mb-6">
          Atención en Cajamarca y provincias. Trato directo por WhatsApp.
        </p>

        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.location.href = whatsapp;
          }}
        >
          <div>
            <label className="block text-sm font-medium text-slate-700">
              Nombre completo*
            </label>
            <input
              required
              placeholder="Escribe tu nombre"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 shadow-sm focus:border-[#365455] focus:ring focus:ring-[#365455]/30 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              WhatsApp*
            </label>
            <input
              type="tel"
              required
              placeholder="+51..."
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 shadow-sm focus:border-[#365455] focus:ring focus:ring-[#365455]/30 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Correo (opcional)
            </label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 shadow-sm focus:border-[#365455] focus:ring focus:ring-[#365455]/30 outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Área legal*
            </label>
            <select className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 shadow-sm focus:border-[#365455] focus:ring focus:ring-[#365455]/30 outline-none">
              <option>Penal</option>
              <option>Civil</option>
              <option>Laboral</option>
              <option>Saneamiento Físico-Legal</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">
              Cuéntame tu caso*
            </label>
            <textarea
              required
              rows="4"
              placeholder="Escribe los detalles de tu consulta…"
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 shadow-sm focus:border-[#365455] focus:ring focus:ring-[#365455]/30 outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#293C3D] text-white font-medium py-3 hover:bg-[#1F2E2F] transition"
          >
            Enviar consulta gratis
          </button>
        </form>

        <p className="text-center text-xs text-slate-500 mt-4">
          Al enviar, te redirigimos a WhatsApp para coordinar tu atención.
        </p>
      </div>
    </section>
  );
}
