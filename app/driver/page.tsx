import SiteLogo from '@/components/SiteLogo';

const stats = [
  { label: 'Today', value: '$482', tone: 'emerald' },
  { label: 'Routes', value: '12', tone: 'amber' },
  { label: 'Drop rate', value: '96%', tone: 'rose' },
  { label: 'Avg. time', value: '24m', tone: 'sky' },
];

const activeRoutes = [
  { id: 'FF-204', name: 'Yard Fire Kitchen → Northside', eta: '15 min away', status: 'Assigned' },
  { id: 'FF-187', name: "Mama Pearl's → Midtown", eta: '7 min away', status: 'Picking up' },
  { id: 'FF-219', name: 'Port Royal Grill → Riverfront', eta: '22 min away', status: 'Scheduled' },
];

const dailyDrops = [
  { name: 'Jerk Chicken Plate', quantity: 22, value: '$18' },
  { name: 'Classic Cheeseburger & Fries', quantity: 20, value: '$16' },
  { name: 'Baked Beef Lasagna', quantity: 15, value: '$19' },
  { name: 'Ital Veggie Rundown', quantity: 18, value: '$15' },
];

export default function DriverPage() {
  return (
    <main className="page-shell driver-shell">
      <div className="topbar">
        <SiteLogo priority />
      </div>
      <header className="dashboard-header">
        <div>
          <p className="eyebrow">Driver portal</p>
          <h1>Good evening, Jordan.</h1>
        </div>

        <div className="header-actions">
          <span className="status-pill">Online</span>
          <button type="button" className="primary-btn">View route map</button>
        </div>
      </header>

      <section className="stats-grid four-up">
        {stats.map((stat) => (
          <article key={stat.label} className={`metric-card ${stat.tone}`}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className="driver-layout">
        <div className="driver-column main-column">
          <div className="content-panel">
            <div className="section-head compact">
              <div>
                <p className="eyebrow">Active routes</p>
                <h2>Assignments</h2>
              </div>
              <span className="badge">3 live</span>
            </div>

            <div className="route-list">
              {activeRoutes.map((route) => (
                <div key={route.id} className="route-item">
                  <div>
                    <p className="route-id">{route.id}</p>
                    <h3>{route.name}</h3>
                  </div>
                  <div className="route-meta">
                    <span>{route.eta}</span>
                    <strong>{route.status}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="content-panel">
            <div className="section-head compact">
              <div>
                <p className="eyebrow">Daily drops</p>
                <h2>Inventory nearby</h2>
              </div>
            </div>

            <div className="drop-list">
              {dailyDrops.map((drop) => (
                <div key={drop.name} className="drop-row">
                  <div>
                    <h3>{drop.name}</h3>
                    <p>{drop.quantity} remaining</p>
                  </div>
                  <span className="price-stack">
                    <strong className="free-tag">Free</strong>
                    <span className="value-tag">{drop.value} value</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="driver-column side-column">
          <div className="content-panel summary-panel">
            <p className="eyebrow">Today's payout</p>
            <h2>$142.80</h2>
            <ul className="summary-list">
              <li>
                <span>Base delivery</span>
                <strong>$96.00</strong>
              </li>
              <li>
                <span>Tips</span>
                <strong>$32.80</strong>
              </li>
              <li>
                <span>Bonuses</span>
                <strong>$14.00</strong>
              </li>
            </ul>
          </div>

          <div className="content-panel quick-panel">
            <p className="eyebrow">Quick actions</p>
            <div className="action-stack">
              <button type="button" className="secondary-btn">Start shift</button>
              <button type="button" className="secondary-btn">Check earnings</button>
              <button type="button" className="secondary-btn">Message support</button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
