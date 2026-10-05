'use client';

import { useEffect, useState } from 'react';

const formatNumber = (n: number) => String(n).padStart(2, '0');

function getTimeLeft(targetDate: string) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export function DailyDropCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <aside className="countdown-card" aria-live="polite">
      <div className="countdown-header">
        <h2>Next daily drop</h2>
        <span className="badge">Live</span>
      </div>

      <div className="time-grid">
        <div className="time-box">
          <strong>{formatNumber(timeLeft.days)}</strong>
          <span>Days</span>
        </div>
        <div className="time-box">
          <strong>{formatNumber(timeLeft.hours)}</strong>
          <span>Hours</span>
        </div>
        <div className="time-box">
          <strong>{formatNumber(timeLeft.minutes)}</strong>
          <span>Minutes</span>
        </div>
        <div className="time-box">
          <strong>{formatNumber(timeLeft.seconds)}</strong>
          <span>Seconds</span>
        </div>
      </div>
    </aside>
  );
}
