'use client';

import { useEffect, useState } from 'react';

type Earnings = {
  period: string;
  tips: number;
  deliveryFees: number;
  total: number;
};

export default function DriverPage() {
  const [earnings, setEarnings] = useState<Earnings[]>([]);

  useEffect(() => {
    fetch('/api/driver/earnings')
      .then((response) => response.json())
      .then((data) => setEarnings(data.earnings || []));
  }, []);

  return (
    <main className="page-shell">
      <div className="section-head">
        <div>
          <p className="eyebrow">Driver dashboard</p>
          <h1>Weekly earnings</h1>
        </div>
        <span className="badge">Transparent pay</span>
      </div>

      <section className="dashboard-grid">
        <div className="summary-card">
          <h2>Summary</h2>
          <div className="stats-grid">
            <div className="metric"><span>Tips</span><strong>$182</strong></div>
            <div className="metric"><span>Delivery fees</span><strong>$118</strong></div>
            <div className="metric"><span>Net payout</span><strong>$300</strong></div>
          </div>
        </div>

        <div className="summary-card">
          <h2>Current route</h2>
          <div className="list-wrap">
            <div className="list-item"><div><h4>Deliver to Maple Lofts</h4><p>Drop: Fire-Roasted Chicken Bowl</p></div><strong>$18</strong></div>
            <div className="list-item"><div><h4>Pickup at Kite Kitchen</h4><p>ETA 12 min</p></div></div>
          </div>
        </div>

        <div className="summary-card">
          <h2>Platform policy</h2>
          <ul className="check-list">
            <li>100% of delivery fees retained</li>
            <li>100% of tips retained</li>
            <li>0% platform commission</li>
          </ul>
        </div>
      </section>

      <section className="panel">
        <h2>Earning breakdown</h2>
        <div className="list-wrap">
          {earnings.map((entry) => (
            <div key={entry.period} className="list-item">
              <div>
                <h4>{entry.period}</h4>
                <p>Tips ${entry.tips} • Fees ${entry.deliveryFees}</p>
              </div>
              <strong>${entry.total}</strong>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
