import { DailyDropCountdown } from '@/components/DailyDropCountdown';

const menuPreview = [
  {
    name: 'Fire-Roasted Chicken Bowl',
    vendor: 'Kite Kitchen',
    price: '$18',
    eta: 'Limited 22 bowls',
  },
  {
    name: 'Crispy Tofu & Greens',
    vendor: 'Bloom Table',
    price: '$16',
    eta: 'Limited 18 bowls',
  },
  {
    name: 'Rosemary Lamb Flatbread',
    vendor: 'Moss & Ember',
    price: '$22',
    eta: 'Limited 12 orders',
  },
];

const earningsBreakdown = [
  { label: 'Tip payout', value: '100%', tone: 'rose' },
  { label: 'Delivery fee', value: '100%', tone: 'gold' },
  { label: 'Platform fee', value: '0%', tone: 'green' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Daily drop • fair pay • community-first</p>
          <h1>Faith Feast</h1>
          <p className="lead">
            One curated daily drop, designed to reduce waste, celebrate local kitchens, and
            keep drivers paid transparently.
          </p>
          <div className="hero-actions">
            <a href="#today" className="primary-btn">View today’s drop</a>
            <a href="#drivers" className="secondary-btn">Driver model</a>
          </div>
        </div>

        <DailyDropCountdown targetDate="2027-02-21T18:00:00Z" />
      </header>

      <section id="today" className="panel">
        <div className="section-head">
          <div>
            <p className="eyebrow">Today&apos;s kitchen drop</p>
            <h2>Menu preview</h2>
          </div>
          <span className="badge">Live inventory</span>
        </div>

        <div className="menu-grid">
          {menuPreview.map((item) => (
            <article key={item.name} className="food-card">
              <div className="card-image" aria-hidden="true" />
              <div className="card-body">
                <div className="card-topline">
                  <span>{item.vendor}</span>
                  <strong>{item.price}</strong>
                </div>
                <h3>{item.name}</h3>
                <p>{item.eta}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="drivers" className="info-grid">
        <div className="panel">
          <p className="eyebrow">Driver earnings</p>
          <h2>100% of tips and delivery fees stay with the driver.</h2>
          <div className="earnings-list">
            {earningsBreakdown.map((item) => (
              <div key={item.label} className={`earning-row ${item.tone}`}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="panel">
          <p className="eyebrow">Vendor + customer flow</p>
          <h2>Simple sign-up and login for both sides of the marketplace.</h2>
          <ul className="check-list">
            <li>Customer account creates orders for the next drop.</li>
            <li>Vendor dashboard manages kitchen inventory and prep timing.</li>
            <li>Driver dashboard receives delivery assignments instantly.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
