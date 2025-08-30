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
    console.log('[PWA] isStandalone?', isStandalone, 'isIOS?', isIOS);

    const handler = (e) => {
      // Chrome/Edge/Android disparan este evento si la app es instalable
      e.preventDefault();
      setPromptEvent(e);
      setCanInstall(true);
      console.log('[PWA] beforeinstallprompt recibido');
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, [isStandalone, isIOS]);

  const onInstall = async () => {
    if (!promptEvent) {
      console.log('[PWA] No hay promptEvent. Mostrando ayuda…');
      setShowHelp(true);
      return;
    }
    console.log('[PWA] Lanzando prompt…');
    promptEvent.prompt();
    try {
      const choice = await promptEvent.userChoice;
      console.log('[PWA] userChoice:', choice);
    } catch (e) {
      console.log('[PWA] userChoice error:', e);
    }
    setPromptEvent(null);
    setCanInstall(false);
  };

  // Si ya está instalada, no mostramos la tarjeta
  if (isStandalone) return null;

  return (
    <div className="mx-auto max-w-7xl px-6 my-6">
      <div className="rounded-xl border border-white/15 bg-white/5 p-4 backdrop-blur">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div>
            <p className="font-semibold">Descarga nuestra app</p>
            <p className="text-sm text-white/80">
              Instálala en tu celular y recibe tu <b>primera consulta gratis</b>.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onInstall}
              className="px-4 py-2 rounded-lg bg-white text-[#293C3D] font-medium hover:bg-[#EDEBE7]"
            >
              {canInstall ? 'Instalar app' : 'Instalar app'}
            </button>

            <button
              onClick={() => setShowHelp((v) => !v)}
              className="px-3 py-2 rounded-lg border border-white/25 text-white hover:bg-white/10"
            >
              ¿Cómo instalar?
            </button>
          </div>
        </div>

        {showHelp && (
          <div className="mt-4 rounded-xl border border-white/15 bg-white/10 p-4 text-sm">
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
                  <li>Menú ⋮ → <b>Instalar aplicación</b>.</li>
                  <li>Recargar la página y tocar <b>Instalar app</b> de arriba.</li>
                </ul>
              </div>
            )}
            <p className="mt-3 opacity-80">
              Si ya la instalaste antes, el botón de instalación no aparecerá.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
