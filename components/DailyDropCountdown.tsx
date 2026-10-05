'use client';

import { useEffect, useMemo, useState } from 'react';

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export function DailyDropCountdown({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<CountdownState>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(targetDate).getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const values = useMemo(
    () => [
      { label: 'Days', value: timeLeft.days },
      { label: 'Hours', value: timeLeft.hours },
      { label: 'Minutes', value: timeLeft.minutes },
      { label: 'Seconds', value: timeLeft.seconds },
    ],
    [timeLeft]
  );

  return (
    <div className="countdown-card" aria-live="polite">
      <div className="countdown-header">
        <span className="eyebrow">Next drop</span>
        <span className="badge">Live</span>
      </div>

      <div className="time-grid">
        {values.map((item) => (
          <div key={item.label} className="time-box">
            <strong>{String(item.value).padStart(2, '0')}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyDropCountdown;
