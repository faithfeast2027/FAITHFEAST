'use client';

import { useEffect, useState } from 'react';

type Drop = {
  id: string;
  name: string;
  vendor: string;
  price: number;
  quantity: number;
};

export default function VendorPage() {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    fetch('/api/vendor/drops')
      .then((r) => r.json())
      .then((data) => setDrops(data.drops || []));
  }, []);

  return (
    <main className="page-shell">
      <div className="section-head">
        <div>
          <p className="eyebrow">Vendor dashboard</p>
          <h1>Kitchen operations</h1>
        </div>
        <span className="badge">Drop live</span>
      </div>

      <section className="dashboard-grid">
        <div className="summary-card">
          <h2>Today&apos;s performance</h2>
          <div className="stats-grid">
            <div className="metric">
              <span>Orders</span>
              <strong>24</strong>
            </div>
            <div className="metric">
              <span>Revenue</span>
              <strong>$412</strong>
            </div>
            <div className="metric">
              <span>On-time</span>
              <strong>98%</strong>
            </div>
          </div>
        </div>

        <div className="summary-card">
          <h2>Inventory status</h2>
          <div className="list-wrap">
            {drops.map((drop) => (
              <div key={drop.id} className="list-item">
                <div>
                  <h4>{drop.name}</h4>
                  <p>{drop.quantity} portions remaining</p>
                </div>
                <strong>${drop.price}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="summary-card">
          <h2>Daily actions</h2>
          <div className="list-wrap">
            <div className="list-item">
              <div>
                <h4>Prep schedule</h4>
                <p>Start at 4:30 PM</p>
              </div>
            </div>
            <div className="list-item">
              <div>
                <h4>Driver handoff</h4>
                <p>3 active routes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panel">
        <div className="section-head">
          <h2>Active drop list</h2>
          <button className="primary-btn" type="button">Add new drop</button>
        </div>
        <div className="list-wrap">
          {drops.map((drop) => (
            <div key={drop.id} className="list-item">
              <div>
                <h4>{drop.name}</h4>
                <p>{drop.vendor}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <strong>${drop.price}</strong>
                <p>{drop.quantity} left</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
