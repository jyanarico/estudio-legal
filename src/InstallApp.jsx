import { useEffect, useState } from 'react';

export default function InstallApp() {
  const [promptEvent, setPromptEvent] = useState(null);
  const [canInstall, setCanInstall] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone =
    window.matchMedia('(display-mode: standalone)').matches ||
    window.navigator.standalone;

  useEffect(() => {
    const handler = (e) => {
      // Chrome/Edge/Android disparan este evento si es instalable
      e.preventDefault();
      setPromptEvent(e);
      setCanInstall(true);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const onInstall = async () => {
    if (!promptEvent) {
      setShowHelp(true);
      return;
    }
    promptEvent.prompt();
    await promptEvent.userChoice;
    setPromptEvent(null);
    setCanInstall(false);
  };

  // Si ya está instalada, no mostramos nada
  if (isStandalone) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 my-6">
      {isIOS ? (
        <button
          onClick={() => setShowHelp((v) => !v)}
          className="px-4 py-2 rounded-lg border bg-white text-[#293C3D] font-medium"
        >
          ¿Cómo instalar en iPhone?
        </button>
      ) : canInstall ? (
        <div className="flex items-center gap-2">
          <button
            onClick={onInstall}
            className="px-4 py-2 rounded-lg bg-[#293C3D] text-white font-medium hover:bg-[#1F2E2F]"
          >
            Instalar app
          </button>
          {!promptEvent && (
            <button
              onClick={() => setShowHelp((v) => !v)}
              className="px-3 py-2 rounded-lg border bg-white text-[#293C3D]"
            >
              ¿No ves el botón?
            </button>
          )}
        </div>
      ) : null}

      {showHelp && (
        <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
          {isIOS ? (
            <ol className="list-decimal ml-5 space-y-1">
              <li>Abre esta web en <b>Safari</b>.</li>
              <li>Toca <b>Compartir</b> (ícono con flecha).</li>
              <li>Elige <b>Añadir a pantalla de inicio</b>.</li>
              <li>Confirma con <b>Añadir</b>.</li>
            </ol>
          ) : (
            <div>
              <p className="mb-2">En Android/Chrome puedes:</p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Mirar el ícono <b>Instalar</b> en la barra de direcciones.</li>
                <li>Menú ⋮ &nbsp;→ <b>Instalar aplicación</b>.</li>
                <li>Recargar la página y tocar el botón <b>Instalar app</b> de arriba.</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
