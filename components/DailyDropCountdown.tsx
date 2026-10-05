'use client';

import { useEffect, useState } from 'react';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function DailyDropCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = new Date(targetDate).getTime() - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown-card">
      <div className="countdown-header">
        <span className="eyebrow">Next drop</span>
        <span className="badge">Live</span>
      </div>

      <div className="time-grid">
        <div className="time-box">
          <strong>{timeLeft.days}</strong>
          <span>Days</span>
        </div>
        <div className="time-box">
          <strong>{timeLeft.hours}</strong>
          <span>Hours</span>
        </div>
        <div className="time-box">
          <strong>{timeLeft.minutes}</strong>
          <span>Minutes</span>
        </div>
        <div className="time-box">
          <strong>{timeLeft.seconds}</strong>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}

export function PwaInstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handler);
    return () => window.removeEventListener('beforeinstallprompt', handler);
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
