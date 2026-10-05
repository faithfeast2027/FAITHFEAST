'use client';

import { useState, useEffect } from 'react';

export default function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as any);
      setIsVisible(true);
    };

    const beforeInstallEvent = 'beforeinstallprompt' as const;
    window.addEventListener(beforeInstallEvent, handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(beforeInstallEvent, handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    (deferredPrompt as any).prompt();
    const { outcome } = await (deferredPrompt as any).userChoice;

    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={handleInstallClick}
      className="px-4 py-2 bg-amber-500 text-stone-950 font-semibold rounded-xl shadow-lg hover:bg-amber-400 transition"
    >
      Install Faith Feast App
    </button>
  );
}
