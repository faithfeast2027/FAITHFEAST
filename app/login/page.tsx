import Link from 'next/link';

const menuPreview = [
  {
    name: 'Fire-Roasted Chicken Bowl',
    vendor: 'Kite Kitchen',
    price: '$18',
    quantity: '22 bowls left',
    description: 'Smoky chicken, saffron rice, greens, and chili-lime drizzle.',
    accent: 'sunset',
  },
  {
    name: 'Crispy Tofu & Greens',
    vendor: 'Bloom Table',
    price: '$16',
    quantity: '18 bowls left',
    description: 'Crisp tofu, seasonal greens, roasted grains, and bright tahini.',
    accent: 'sage',
  },
  {
    name: 'Rosemary Lamb Flatbread',
    vendor: 'Moss & Ember',
    price: '$22',
    quantity: '12 orders left',
    description: 'Herb-roasted lamb, charred onion, feta, and mint yogurt.',
    accent: 'gold',
  },
];

const benefitCards = [
  { title: 'Daily drop', copy: 'One curated menu per day to reduce waste and make ordering easy.' },
  { title: 'Fair pay', copy: 'Drivers keep the full tip and delivery fee, with no hidden deductions.' },
  { title: 'Local kitchens', copy: 'Support small neighborhood vendors with transparent prep windows.' },
];

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <Link href="/" className="logo" aria-label="Faith Feast home">
          <span className="logo-mark">F</span>
          <span>Faith Feast</span>
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          <Link href="/" className="nav-button is-active">Home</Link>
          <Link href="/login" className="nav-button">Login</Link>
          <Link href="/customer" className="nav-button">Customer</Link>
          <Link href="/vendor" className="nav-button">Vendor</Link>
          <Link href="/driver" className="nav-button">Driver</Link>
        </nav>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Daily drop • fair pay • community-first</p>
          <h1>Fresh meals, shared with the community.</h1>
          <p className="lead">
            One curated kitchen drop each day, built to reduce waste, support local cooks,
            and give drivers a more transparent earning model.
          </p>

          <div className="hero-actions">
            <Link href="#today" className="primary-btn">View today&apos;s drop</Link>
            <Link href="/login#drivers" className="secondary-btn">Driver login</Link>
          </div>

          <div className="hero-meta">
            <div>
              <strong>2.4k</strong>
              <span>community meals</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>driver satisfaction</span>
            </div>
            <div>
              <strong>24 min</strong>
              <span>avg. delivery</span>
            </div>
          </div>
        </div>

        <div className="countdown-card">
          <div className="countdown-header">
            <div>
              <p className="eyebrow">Next drop</p>
              <h2>Today at 6:00 PM</h2>
            </div>
            <span className="badge">Live</span>
          </div>

          <div className="time-grid">
            <div className="time-box"><strong>06</strong><span>Hours</span></div>
            <div className="time-box"><strong>42</strong><span>Minutes</span></div>
            <div className="time-box"><strong>18</strong><span>Seconds</span></div>
            <div className="time-box"><strong>04</strong><span>Orders</span></div>
          </div>
        </div>
      </section>

      <section id="today" className="content-panel">
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
              <div className={`card-image ${item.accent}`} aria-hidden="true" />
              <div className="card-body">
                <div className="card-topline">
                  <span>{item.vendor}</span>
                  <strong>{item.price}</strong>
                </div>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <span>{item.quantity}</span>
                  <button type="button" className="mini-btn">Reserve</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="info-grid">
        <div className="content-panel">
          <p className="eyebrow">Driver earnings</p>
          <h2>100% of tips and delivery fees stay with the driver.</h2>
          <div className="earnings-list">
            <div className="earning-row rose">
              <span>Tip payout</span>
              <strong>100%</strong>
            </div>
            <div className="earning-row gold">
              <span>Delivery fee</span>
              <strong>100%</strong>
            </div>
            <div className="earning-row green">
              <span>Platform fee</span>
              <strong>0%</strong>
            </div>
          </div>
        </div>

        <div className="content-panel">
          <p className="eyebrow">Why people love it</p>
          <h2>Simple sign-up, clear pricing, and a stronger local network.</h2>
          <div className="benefit-grid">
            {benefitCards.map((card) => (
              <div key={card.title} className="benefit-item">
                <span className="benefit-dot" aria-hidden="true" />
                <div>
                  <h3>{card.title}</h3>
                  <p>{card.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
