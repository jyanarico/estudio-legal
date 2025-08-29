import { useEffect, useState } from 'react'

export default function InstallApp() {
  const [promptEvent, setPromptEvent] = useState(null)
  const [canInstall, setCanInstall] = useState(false)

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault()
      setPromptEvent(e)
      setCanInstall(true)
    }
    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const onInstall = async () => {
    if (!promptEvent) return
    promptEvent.prompt()
    await promptEvent.userChoice
    setPromptEvent(null)
    setCanInstall(false)
  }

  const isiOS = /iphone|ipad|ipod/i.test(navigator.userAgent)

  return (
    <div className="mx-auto max-w-7xl px-6 my-4">
      <div className="rounded-2xl bg-white text-slate-900 p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow">
        <p className="text-sm md:text-base">
          <b>Descarga nuestra app</b> y recibe tu <b>primera consulta gratis</b>.
        </p>

        {isiOS ? (
          <div className="text-xs md:text-sm text-slate-600">
            En iPhone: abre en Safari → toca <b>Compartir</b> → <b>Añadir a pantalla de inicio</b>.
          </div>
        ) : canInstall ? (
          <button onClick={onInstall} className="px-4 py-2 rounded-lg bg-[#293C3D] text-white">
            Instalar app
          </button>
        ) : (
          <a href="/consultas" className="px-4 py-2 rounded-lg border border-slate-300">
            Empezar ahora
          </a>
        )}
      </div>
    </div>
  )
}
