@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #fff7f9;
  --panel: rgba(255, 255, 255, 0.76);
  --panel-strong: #ffffff;
  --text: #1f1a1d;
  --muted: #665c5f;
  --rose: #f43f5e;
  --rose-dark: #be123c;
  --gold: #f59e0b;
  --green: #16a34a;
  --border: rgba(17, 24, 39, 0.08);
  --shadow: 0 18px 40px rgba(35, 21, 24, 0.12);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  font-family: 'Inter', Arial, sans-serif;
  background: linear-gradient(180deg, #fff9fb 0%, #fff3f4 100%);
  color: var(--text);
}

a { color: inherit; text-decoration: none; }
button, input, select { font: inherit; }

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 18px 90px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 26px;
}

.logo {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  font-size: 1.25rem;
}

.logo-mark {
  width: 36px;
  height: 36px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--rose) 0%, #f97316 100%);
  display: grid;
  place-items: center;
  color: white;
  font-size: 1rem;
}

.nav-links {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-button,
.primary-btn,
.secondary-btn,
.ghost-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  border-radius: 999px;
  padding: 0 18px;
  border: 1px solid transparent;
  transition: 0.2s ease;
}

.nav-button,
.secondary-btn,
.ghost-btn {
  background: rgba(255,255,255,0.78);
  border-color: var(--border);
  color: var(--text);
}

.primary-btn {
  background: var(--rose);
  color: white;
  font-weight: 700;
}

.primary-btn:hover, .secondary-btn:hover, .ghost-btn:hover, .nav-button:hover {
  transform: translateY(-1px);
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: center;
}

.hero-copy,
.panel,
.countdown-card,
.form-card,
.summary-card,
.list-card,
.checkout-card {
  background: var(--panel);
  border: 1px solid rgba(244, 63, 94, 0.08);
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 42px 32px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--rose-dark);
  font-size: 0.74rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 0.95;
}

.lead {
  color: var(--muted);
  line-height: 1.7;
  font-size: 1.08rem;
  margin: 18px 0 0;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 28px;
}

.countdown-card {
  padding: 26px;
  background: linear-gradient(135deg, #fff, #ffe4eb);
}

.countdown-header,
.section-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 0 12px;
  border-radius: 999px;
  background: rgba(244, 63, 94, 0.1);
  color: var(--rose-dark);
  font-size: 0.72rem;
  font-weight: 800;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
  margin-top: 18px;
}

.time-box {
  background: rgba(255, 255, 255, 0.72);
  border-radius: 18px;
  padding: 18px 8px 12px;
  text-align: center;
}

.time-box strong {
  display: block;
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1;
}

.time-box span {
  display: block;
  margin-top: 8px;
  color: var(--muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.7rem;
  font-weight: 700;
}

.panel {
  padding: 26px 24px;
  margin-top: 28px;
}

.section-head h2,
.panel h2,
.form-card h1,
.summary-card h2,
.list-card h2,
.checkout-card h2 {
  margin: 0;
  font-size: clamp(1.7rem, 2vw, 2.5rem);
}

.menu-grid, .dashboard-grid, .stats-grid, .orders-grid {
  display: grid;
  gap: 18px;
}

.menu-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.food-card {
  overflow: hidden;
  background: var(--panel-strong);
  border: 1px solid rgba(17,24,39,0.05);
  border-radius: 22px;
}

.card-image {
  height: 168px;
  background: linear-gradient(135deg, #fda4af, #f9a8d4 45%, #facc15);
}

.card-body {
  padding: 18px;
}

.card-topline {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.8rem;
}

.card-body h3 {
  margin: 14px 0 8px;
  font-size: 1.3rem;
}

.card-body p {
  margin: 0;
  color: var(--muted);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0,1fr));
  gap: 20px;
  margin-top: 24px;
}

.earnings-list,
.check-list {
  display: grid;
  gap: 12px;
  margin-top: 20px;
}

.earning-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 16px 18px;
  border-radius: 14px;
  font-weight: 700;
}

.earning-row.rose { background: rgba(244, 63, 94, 0.08); }
.earning-row.gold { background: rgba(245, 158, 11, 0.08); }
.earning-row.green { background: rgba(22, 163, 74, 0.08); }

.check-list {
  list-style: disc;
  padding-left: 22px;
  color: var(--muted);
  line-height: 1.9;
}

.auth-shell {
  min-height: 100vh;
  display: grid;
  place-items: center;
  padding: 32px 18px;
}

.form-card {
  width: min(560px, 100%);
  padding: 28px 24px;
}

.form-card p {
  color: var(--muted);
}

.form-grid {
  display: grid;
  gap: 14px;
  margin-top: 24px;
}

.form-grid input,
.form-grid select,
.form-grid textarea {
  width: 100%;
  border: 1px solid rgba(15, 23, 42, 0.1);
  border-radius: 14px;
  padding: 12px 14px;
  background: rgba(255,255,255,0.7);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.field-label {
  display: grid;
  gap: 6px;
  color: var(--muted);
  font-size: 0.9rem;
  font-weight: 600;
}

.form-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 18px;
}

.status-box {
  margin-top: 14px;
  padding: 12px 14px;
  background: rgba(22, 163, 74, 0.08);
  color: #166534;
  border-radius: 12px;
  font-weight: 700;
}

.dashboard-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 20px;
}

.summary-card,
.list-card,
.checkout-card {
  padding: 22px 20px;
}

.stats-grid {
  grid-template-columns: repeat(3,minmax(0,1fr));
  margin-top: 18px;
}

.metric {
  background: rgba(255,255,255,0.8);
  border-radius: 16px;
  padding: 16px;
  border: 1px solid var(--border);
}

.metric span {
  display: block;
  color: var(--muted);
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.metric strong {
  font-size: 1.7rem;
}

.list-wrap {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.list-item {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  background: rgba(255,255,255,0.76);
  border: 1px solid var(--border);
  border-radius: 14px;
  padding: 14px 16px;
}

.list-item h4 { margin: 0 0 6px; }

.list-item p { margin: 0; color: var(--muted); }

.order-card {
  display: grid;
  gap: 10px;
}

.eyebrow-tag {
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.12);
  color: #0f766e;
  font-size: 0.72rem;
  font-weight: 700;
}

.checkout-layout {
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 22px;
  margin-top: 26px;
}

.checkout-list {
  display: grid;
  gap: 12px;
  margin-top: 18px;
}

.checkout-line {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.total-box {
  margin-top: 18px;
  padding-top: 10px;
  border-top: 1px solid rgba(15,23,42,0.08);
  display: grid;
  gap: 10px;
}

@media (max-width: 860px) {
  .hero,
  .info-grid,
  .menu-grid,
  .dashboard-grid,
  .checkout-layout,
  .stats-grid,
  .form-row {
    grid-template-columns: 1fr;
  }
  .topbar {
    flex-direction: column;
    align-items: flex-start;
  }
}
