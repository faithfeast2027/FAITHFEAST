:root {
  --bg: #fff7f9;
  --panel: rgba(255, 255, 255, 0.7);
  --panel-strong: #ffffff;
  --text: #1d1b1b;
  --muted: #6e5f63;
  --rose: #f43f5e;
  --rose-strong: #be123c;
  --gold: #f59e0b;
  --green: #16a34a;
  --shadow: 0 18px 54px rgba(41, 22, 26, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: linear-gradient(180deg, #fff8fb 0%, #fff4f1 100%);
  color: var(--text);
}

a {
  text-decoration: none;
}

.page-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 20px 80px;
}

.hero {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 24px;
  align-items: center;
  margin-bottom: 32px;
}

.hero-copy,
.panel,
.countdown-card {
  background: var(--panel);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(244, 63, 94, 0.08);
  border-radius: 28px;
  box-shadow: var(--shadow);
}

.hero-copy {
  padding: 42px 32px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--rose-strong);
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: 0.73rem;
}

h1 {
  margin: 0;
  font-size: clamp(2.4rem, 5vw, 5rem);
  line-height: 0.96;
}

.lead {
  margin: 18px 0 0;
  max-width: 640px;
  color: var(--muted);
  font-size: 1.12rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.primary-btn,
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 0 18px;
  border-radius: 999px;
  font-weight: 700;
}

.primary-btn {
  background: var(--rose);
  color: #fff;
}

.secondary-btn {
  background: #fff;
  color: var(--text);
  border: 1px solid rgba(0, 0, 0, 0.06);
}

.countdown-card {
  padding: 26px;
  background: linear-gradient(135deg, #fff, #ffe4eb);
}

.countdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.countdown-header h2 {
  margin: 0;
  font-size: 1.1rem;
}

.badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: rgba(244, 63, 94, 0.1);
  color: var(--rose-strong);
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.76rem;
  font-weight: 700;
}

.time-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.time-box {
  background: rgba(255, 255, 255, 0.7);
  border-radius: 18px;
  padding: 18px 12px 14px;
  text-align: center;
}

.time-box strong {
  display: block;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
}

.time-box span {
  color: var(--muted);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.panel {
  padding: 26px 24px;
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
}

.section-head h2,
.panel h2 {
  margin: 0;
  font-size: clamp(1.6rem, 2vw, 2.3rem);
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.food-card {
  border-radius: 22px;
  overflow: hidden;
  background: var(--panel-strong);
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.card-image {
  height: 170px;
  background: linear-gradient(135deg, #fda4af, #fbbf24);
}

.card-body {
  padding: 18px;
}

.card-topline {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  color: var(--muted);
  font-size: 0.82rem;
}

.card-body h3 {
  margin: 12px 0 8px;
  font-size: 1.3rem;
}

.card-body p {
  margin: 0;
  color: var(--muted);
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
  margin-top: 26px;
}

.earnings-list {
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

.earning-row.rose {
  background: rgba(244, 63, 94, 0.08);
}

.earning-row.gold {
  background: rgba(245, 158, 11, 0.08);
}

.earning-row.green {
  background: rgba(22, 163, 74, 0.08);
}

.check-list {
  margin: 20px 0 0;
  padding-left: 18px;
  color: var(--muted);
  line-height: 1.9;
}

@media (max-width: 860px) {
  .hero,
  .info-grid,
  .menu-grid {
    grid-template-columns: 1fr;
  }
}
