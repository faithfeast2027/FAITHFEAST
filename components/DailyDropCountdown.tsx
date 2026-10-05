'use client';

import { useEffect, useState } from 'react';

export function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  if (!deferredPrompt) return null;

  const handleInstall = async () => {
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  return (
    <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1000 }}>
      <button
        onClick={handleInstall}
        style={{
          border: 'none',
          borderRadius: 999,
          background: '#f43f5e',
          color: '#fff',
          padding: '12px 18px',
          fontWeight: 700,
          cursor: 'pointer',
          boxShadow: '0 8px 22px rgba(244, 63, 94, 0.28)',
        }}
      >
        Install Faith Feast
      </button>
    </div>
  );
}
