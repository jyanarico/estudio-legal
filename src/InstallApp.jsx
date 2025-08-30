import { useEffect, useState } from 'react'

export default function InstallApp() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [showHelp, setShowHelp] = useState(false)

  const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent)
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone

  useEffect(() => {
    const handler = (e) => {
      // Chrome/Edge/Android disparan este evento si es instalable
      e.preventDefault()
      setPromptEvent(e)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const onInstall = async () => {
    if (!promptEvent) { setShowHelp(true); return }
    promptEvent.prompt()
    await promptEvent.userChoice
    setPromptEvent(null)
  }

  // Si ya está instalada, no mostramos nada
  if (isStandalone) return null

  return (
    <div className="mx-auto max-w-7xl px-6 my-4">
      <div className="rounded-2xl bg-white text-slate-900 p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow">
        <p className="text-sm md:text-base">
          <b>Descarga nuestra app</b> y recibe tu <b>primera consulta gratis</b>.
        </p>

        {isiOS ? (
          <button onClick={() => setShowHelp(v => !v)} className="px-4 py-2 rounded-lg border">
            ¿Cómo instalar en iPhone?
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={onInstall} className="px-4 py-2 rounded-lg bg-[#293C3D] text-white">
              Instalar app
            </button>
            {!promptEvent && (
              <button onClick={() => setShowHelp(v => !v)} className="px-3 py-2 rounded-lg border">
                ¿No ves el botón?
              </button>
            )}
          </div>
        )}
      </div>

      {showHelp && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          {isiOS ? (
            <ol className="list-decimal ml-5 space-y-1">
              <li>Abre esta web en <b>Safari</b>.</li>
              <li>Toca <b>Compartir</b> (cuadro con flecha).</li>
              <li>Elige <b>Añadir a pantalla de inicio</b>.</li>
              <li>Confirma con <b>Añadir</b>.</li>
            </ol>
          ) : (
            <div>
              <p className="mb-2">En Android/Chrome puedes:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Mirar el ícono <b>Instalar</b> en la barra de direcciones.</li>
                <li>Menú ⋮ → <b>Instalar aplicación</b>.</li>
                <li>Recargar la página y tocar el botón <b>Instalar app</b> de arriba.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
