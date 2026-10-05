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

{"path":"app/login/page.tsx","content":"import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className=\"auth-shell\">
      <div className=\"auth-panel\">
        <div className=\"brand-block\">
          <Link href=\"/\" className=\"logo\" aria-label=\"Faith Feast home\">
            <span className=\"logo-mark\">F</span>
            <span>Faith Feast</span>
          </Link>
          <p>Welcome back. Choose your access point.</p>
        </div>

        <div className=\"auth-tabs\" role=\"tablist\" aria-label=\"Login type\">
          <button type=\"button\" className=\"auth-tab active\" aria-pressed=\"true\">
            Customer
          </button>
          <button type=\"button\" className=\"auth-tab\" aria-pressed=\"false\">
            Driver
          </button>
        </div>

        <div className=\"auth-card-grid\">
          <section className=\"auth-card customer-card\" aria-label=\"Customer login\">
            <div className=\"auth-card-header\">
              <span className=\"chip chip-green\">Customer</span>
              <span className=\"auth-card-subtitle\">Order your next drop</span>
            </div>

            <form className=\"auth-form\">
              <label className=\"field-label\">
                Email address
                <input type=\"email\" placeholder=\"you@example.com\" />
              </label>

              <label className=\"field-label\">
                Password
                <input type=\"password\" placeholder=\"Enter your password\" />
              </label>

              <div className=\"inline-row\">
                <label className=\"checkbox-label\">
                  <input type=\"checkbox\" />
                  <span>Remember me</span>
                </label>
                <Link href=\"/login\" className=\"text-link\">Forgot password?</Link>
              </div>

              <button type=\"submit\" className=\"primary-btn auth-submit\">Sign in</button>
            </form>
          </section>

          <section className=\"auth-card driver-card is-highlighted\" id=\"drivers\" aria-label=\"Driver login\">
            <div className=\"auth-card-header\">
              <span className=\"chip chip-amber\">Driver</span>
              <span className=\"auth-card-subtitle\">Pick up and deliver</span>
            </div>

            <form className=\"auth-form\">
              <label className=\"field-label\">
                Driver email
                <input type=\"email\" placeholder=\"driver@faithfeast.com\" />
              </label>

              <label className=\"field-label\">
                Access code
                <input type=\"password\" placeholder=\"••••••••\" />
              </label>

              <div className=\"inline-row\">
                <label className=\"checkbox-label\">
                  <input type=\"checkbox\" defaultChecked />
                  <span>Keep me signed in</span>
                </label>
                <Link href=\"/driver\" className=\"text-link\">Open dashboard</Link>
              </div>

              <button type=\"submit\" className=\"primary-btn auth-submit driver-submit\">Sign in as driver</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}

"},{"path":"app/driver/page.tsx","content":"const stats = [
  { label: 'Today', value: '$482', tone: 'emerald' },
  { label: 'Routes', value: '12', tone: 'amber' },
  { label: 'Drop rate', value: '96%', tone: 'rose' },
  { label: 'Avg. time', value: '24m', tone: 'sky' },
];

const activeRoutes = [
  { id: 'FF-204', name: 'Kite Kitchen → Northside', eta: '15 min away', status: 'Assigned' },
  { id: 'FF-187', name: 'Bloom Table → Midtown', eta: '7 min away', status: 'Picking up' },
  { id: 'FF-219', name: 'Moss & Ember → Riverfront', eta: '22 min away', status: 'Scheduled' },
];

const dailyDrops = [
  { name: 'Fire-Roasted Chicken Bowl', quantity: 22, price: '$18' },
  { name: 'Crispy Tofu & Greens', quantity: 18, price: '$16' },
  { name: 'Rosemary Lamb Flatbread', quantity: 12, price: '$22' },
];

export default function DriverPage() {
  return (
    <main className=\"page-shell driver-shell\">
      <header className=\"dashboard-header\">
        <div>
          <p className=\"eyebrow\">Driver portal</p>
          <h1>Good evening, Jordan.</h1>
        </div>

        <div className=\"header-actions\">
          <span className=\"status-pill\">Online</span>
          <button type=\"button\" className=\"primary-btn\">View route map</button>
        </div>
      </header>

      <section className=\"stats-grid four-up\">
        {stats.map((stat) => (
          <article key={stat.label} className={`metric-card ${stat.tone}`}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </article>
        ))}
      </section>

      <section className=\"driver-layout\">
        <div className=\"driver-column main-column\">
          <div className=\"content-panel\">
            <div className=\"section-head compact\">
              <div>
                <p className=\"eyebrow\">Active routes</p>
                <h2>Assignments</h2>
              </div>
              <span className=\"badge\">3 live</span>
            </div>

            <div className=\"route-list\">
              {activeRoutes.map((route) => (
                <div key={route.id} className=\"route-item\">
                  <div>
                    <p className=\"route-id\">{route.id}</p>
                    <h3>{route.name}</h3>
                  </div>
                  <div className=\"route-meta\">
                    <span>{route.eta}</span>
                    <strong>{route.status}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=\"content-panel\">
            <div className=\"section-head compact\">
              <div>
                <p className=\"eyebrow\">Daily drops</p>
                <h2>Inventory nearby</h2>
              </div>
            </div>

            <div className=\"drop-list\">
              {dailyDrops.map((drop) => (
                <div key={drop.name} className=\"drop-row\">
                  <div>
                    <h3>{drop.name}</h3>
                    <p>{drop.quantity} remaining</p>
                  </div>
                  <strong>{drop.price}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className=\"driver-column side-column\">
          <div className=\"content-panel summary-panel\">
            <p className=\"eyebrow\">Today's payout</p>
            <h2>$142.80</h2>
            <ul className=\"summary-list\">
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

          <div className=\"content-panel quick-panel\">
            <p className=\"eyebrow\">Quick actions</p>
            <div className=\"action-stack\">
              <button type=\"button\" className=\"secondary-btn\">Start shift</button>
              <button type=\"button\" className=\"secondary-btn\">Check earnings</button>
              <button type=\"button\" className=\"secondary-btn\">Message support</button>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

"},{"path":"app/globals.css","content":"@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #f4f0e8;
  --bg-strong: #e7f0eb;
  --panel: rgba(255, 255, 255, 0.84);
  --panel-strong: #ffffff;
  --text: #183529;
  --muted: #536d62;
  --line: rgba(24, 53, 41, 0.1);
  --green: #1a563d;
  --green-soft: #dfeee7;
  --sage: #afcbb8;
  --amber: #d6a15b;
  --amber-soft: #fdf0df;
  --rose: #d96b5d;
  --rose-soft: #fde7e2;
  --shadow: 0 20px 45px rgba(14, 40, 31, 0.12);
}

* { box-sizing: border-box; }

html { scroll-behavior: smooth; }

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', Arial, sans-serif;
  background:
    radial-gradient(circle at top, rgba(17, 87, 63, 0.14), transparent 30%),
    linear-gradient(180deg, #f9f5ef 0%, #f0f7f2 100%);
  color: var(--text);
}

img { max-width: 100%; display: block; }

a { color: inherit; text-decoration: none; }

button, input, select, textarea { font: inherit; }

button { cursor: pointer; }

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 18px 80px;
}

.topbar, .section-head, .auth-card-header, .inline-row, .dashboard-header, .header-actions, .route-item, .route-meta, .drop-row, .summary-list li, .card-topline, .card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.topbar { margin-bottom: 28px; }

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.15rem;
}

.logo-mark {
  width: 36px;
  height: 36px;
  display: grid;
  place-items: center;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--green) 0%, #2d8a63 100%);
  color: #fff;
  font-size: 0.94rem;
}

.nav-links {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.nav-button, .primary-btn, .secondary-btn, .mini-btn, .auth-tab {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 999px;
  border: 1px solid transparent;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  font-weight: 600;
}

.nav-button, .secondary-btn, .auth-tab {
  padding: 0 16px;
  background: rgba(255, 255, 255, 0.65);
  border-color: rgba(24, 53, 41, 0.08);
  color: var(--text);
}

.nav-button.is-active, .auth-tab.active {
  background: var(--green);
  color: white;
  box-shadow: 0 10px 25px rgba(26, 86, 61, 0.24);
}

.primary-btn {
  padding: 0 18px;
  background: linear-gradient(135deg, var(--green) 0%, #2a7a59 100%);
  color: white;
  box-shadow: 0 14px 24px rgba(26, 86, 61, 0.2);
}

.primary-btn:hover, .secondary-btn:hover, .nav-button:hover, .auth-tab:hover, .mini-btn:hover {
  transform: translateY(-1px);
}

.hero-section {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 22px;
  align-items: center;
  margin-bottom: 24px;
}

.hero-copy, .content-panel, .auth-panel, .metric-card, .auth-card, .countdown-card {
  background: var(--panel);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.hero-copy { padding: clamp(28px, 4vw, 42px); }

.eyebrow {
  margin: 0 0 12px;
  color: var(--green);
  font-size: 0.72rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1, h2, h3, p { margin: 0; }

.hero-copy h1 {
  font-size: clamp(2.6rem, 5vw, 4.5rem);
  line-height: 0.96;
  letter-spacing: -0.06em;
}

.lead {
  margin-top: 18px;
  color: var(--muted);
  font-size: 1.04rem;
  line-height: 1.7;
  max-width: 620px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 24px;
}

.hero-meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 26px;
}

.hero-meta div {
  background: rgba(255, 255, 255, 0.62);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 16px;
  padding: 16px 14px;
}

.hero-meta strong, .metric-card strong {
  display: block;
  font-size: clamp(1.3rem, 2vw, 2rem);
  letter-spacing: -0.05em;
}

.hero-meta span, .metric-card span {
  display: block;
  margin-top: 6px;
  color: var(--muted);
  font-size: 0.8rem;
}

.countdown-card {
  padding: 22px;
  background: linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(223, 238, 231, 0.92) 100%);
}

.countdown-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.badge, .chip, .status-pill {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
}

.badge {
  background: rgba(26, 86, 61, 0.12);
  color: var(--green);
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 10px;
  margin-top: 18px;
}

.time-box {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 18px;
  padding: 16px 8px 12px;
  text-align: center;
}

.time-box strong {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  letter-spacing: -0.05em;
}

.time-box span {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  font-size: 0.68rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
}

.content-panel {
  padding: 26px 24px;
}

.section-head {
  margin-bottom: 18px;
}

.section-head h2 {
  font-size: clamp(1.7rem, 2vw, 2.4rem);
  letter-spacing: -0.05em;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.food-card {
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 24px;
}

.card-image { height: 170px; }
.card-image.sunset { background: linear-gradient(135deg, #f1b36a 0%, #d96b5d 35%, #fbe7c2 100%); }
.card-image.sage { background: linear-gradient(135deg, #b9d5bf 0%, #7aa98c 40%, #eaf4eb 100%); }
.card-image.gold { background: linear-gradient(135deg, #e8d7a2 0%, #d6a15b 48%, #f8f0d9 100%); }

.card-body { padding: 18px; }
.card-topline { color: var(--muted); font-size: 0.76rem; text-transform: uppercase; letter-spacing: 0.04em; }
.card-body h3 { margin-top: 14px; font-size: 1.28rem; line-height: 1.3; }
.card-body p { margin-top: 10px; color: var(--muted); line-height: 1.6; }
.card-footer { margin-top: 18px; font-size: 0.82rem; color: var(--muted); }

.mini-btn {
  padding: 0 12px;
  min-height: 34px;
  background: var(--green-soft);
  color: var(--green);
  border-color: transparent;
  font-size: 0.76rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 22px;
}

.earnings-list, .benefit-grid, .route-list, .drop-list, .action-stack, .summary-list {
  display: grid;
  gap: 12px;
}

.earning-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 18px;
  font-weight: 700;
}

.earning-row.rose { background: var(--rose-soft); color: #8a3b2d; }
.earning-row.gold { background: var(--amber-soft); color: #855d19; }
.earning-row.green { background: var(--green-soft); color: var(--green); }

.benefit-grid { margin-top: 18px; }

.benefit-item {
  display: flex;
  gap: 14px;
  background: rgba(255, 255, 255, 0.66);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 18px;
  padding: 14px 16px;
}

.benefit-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--green) 0%, #63b494 100%);
  margin-top: 8px;
  flex-shrink: 0;
}

.benefit-item h3 { font-size: 1.04rem; margin-bottom: 4px; }
.benefit-item p { color: var(--muted); line-height: 1.6; }

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 28px 18px;
}

.auth-panel {
  width: min(980px, 100%);
  padding: clamp(22px, 3vw, 32px);
}

.brand-block { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
.brand-block p { color: var(--muted); }

.auth-tabs {
  display: inline-flex;
  width: fit-content;
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(24, 53, 41, 0.08);
  border-radius: 999px;
  padding: 6px;
  gap: 6px;
}

.auth-tab {
  min-width: 120px;
  background: transparent;
  border: 0;
  color: var(--muted);
}

.auth-card-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
}

.auth-card {
  padding: 22px 20px;
  background: rgba(255, 255, 255, 0.7);
}

.is-highlighted {
  background: linear-gradient(135deg, rgba(223, 238, 231, 0.7) 0%, rgba(255,255,255,0.88) 100%);
  border-color: rgba(26, 86, 61, 0.16);
}

.auth-card-header { align-items: flex-start; margin-bottom: 18px; }
.chip { min-height: 28px; padding: 0 10px; }
.chip-green { background: rgba(26, 86, 61, 0.12); color: var(--green); }
.chip-amber { background: rgba(214, 161, 91, 0.16); color: #8b5c1d; }
.auth-card-subtitle { color: var(--muted); font-size: 0.8rem; }
.auth-form { display: grid; gap: 16px; }
.field-label { display: grid; gap: 8px; color: var(--muted); font-size: 0.88rem; font-weight: 600; }
.field-label input {
  width: 100%;
  min-height: 48px;
  padding: 0 14px;
  border-radius: 14px;
  border: 1px solid rgba(24, 53, 41, 0.12);
  background: rgba(255, 255, 255, 0.75);
  color: var(--text);
}
.field-label input:focus { outline: 2px solid rgba(26, 86, 61, 0.14); border-color: rgba(26, 86, 61, 0.4); }
.inline-row { display: flex; align-items: center; justify-content: space-between; gap: 10px; color: var(--muted); }
.checkbox-label { display: inline-flex; align-items: center; gap: 8px; font-size: 0.84rem; }
.checkbox-label input { width: 16px; height: 16px; }
.text-link { color: var(--green); font-weight: 600; }
.auth-submit { width: 100%; min-height: 48px; margin-top: 4px; }
.driver-submit { background: linear-gradient(135deg, #d6a15b 0%, #c5824a 100%); }

.dashboard-header, .header-actions { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.driver-shell { padding-top: 12px; }
.dashboard-header h1 { font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.07em; }
.status-pill { background: rgba(26, 86, 61, 0.12); color: var(--green); }

.stats-grid { display: grid; gap: 16px; margin-top: 22px; }
.four-up { grid-template-columns: repeat(4, minmax(0, 1fr)); }
.metric-card { padding: 22px 18px; }
.metric-card.emerald { background: linear-gradient(135deg, rgba(223,238,231,0.9), rgba(255,255,255,0.8)); }
.metric-card.amber { background: linear-gradient(135deg, rgba(253,240,223,0.9), rgba(255,255,255,0.8)); }
.metric-card.rose { background: linear-gradient(135deg, rgba(253,231,226,0.9), rgba(255,255,255,0.8)); }
.metric-card.sky { background: linear-gradient(135deg, rgba(230,244,255,0.9), rgba(255,255,255,0.8)); }

.driver-layout { display: grid; grid-template-columns: 1.45fr 0.75fr; gap: 20px; margin-top: 24px; }
.driver-column { display: grid; gap: 20px; }
.route-item, .drop-row, .summary-list li { display: flex; align-items: center; justify-content: space-between; gap: 12px; }
.route-item, .drop-row {
  padding: 16px 18px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.68);
  border: 1px solid rgba(24, 53, 41, 0.08);
}
.route-id { color: var(--muted); font-size: 0.72rem; margin-bottom: 8px; letter-spacing: 0.06em; text-transform: uppercase; }
.route-meta { display: grid; justify-items: end; gap: 6px; }
.route-meta span, .drop-row p, .summary-list li span { color: var(--muted); font-size: 0.82rem; }
.route-item h3, .drop-row h3 { font-size: 1.04rem; }
.summary-panel h2 { font-size: 2.5rem; letter-spacing: -0.06em; margin-top: 8px; }
.summary-list { margin-top: 18px; padding: 0; list-style: none; }
.summary-list li { padding: 12px 0; border-bottom: 1px solid rgba(24, 53, 41, 0.08); }
.quick-panel { min-height: 220px; }
.action-stack { margin-top: 12px; }
.action-stack .secondary-btn { width: 100%; justify-content: center; }

@media (max-width: 860px) {
  .hero-section, .info-grid, .menu-grid, .auth-card-grid, .driver-layout, .four-up, .hero-meta { grid-template-columns: 1fr; }
  .hero-section, .info-grid, .driver-layout, .auth-card-grid { display: grid; }
  .topbar, .dashboard-header, .header-actions, .section-head, .route-item, .drop-row, .card-topline, .card-footer, .inline-row { flex-direction: column; align-items: flex-start; }
  .nav-links { width: 100%; }
  .nav-button, .primary-btn, .secondary-btn, .auth-tab { width: 100%; }
  .page-shell { padding-left: 14px; padding-right: 14px; }
}

@media (max-width: 520px) {
  .hero-copy h1 { font-size: 2.5rem; }
  .section-head h2, .hero-copy h1, .dashboard-header h1, .summary-panel h2 { letter-spacing: -0.04em; }
}
"}]}