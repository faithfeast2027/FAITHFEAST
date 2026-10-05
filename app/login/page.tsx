import Link from 'next/link';
import SiteLogo from '@/components/SiteLogo';

export default function LoginPage() {
  return (
    <main className="auth-shell">
      <div className="auth-panel">
        <div className="brand-block">
          <SiteLogo size="lg" priority />
          <p>Welcome back. Choose your access point.</p>
        </div>

        <div className="auth-tabs" role="tablist" aria-label="Login type">
          <button type="button" className="auth-tab active" aria-pressed="true">
            Customer
          </button>
          <button type="button" className="auth-tab" aria-pressed="false">
            Driver
          </button>
        </div>

        <div className="auth-card-grid">
          <section className="auth-card customer-card" aria-label="Customer login">
            <div className="auth-card-header">
              <span className="chip chip-green">Customer</span>
              <span className="auth-card-subtitle">Order your next drop</span>
            </div>

            <form className="auth-form">
              <label className="field-label">
                Email address
                <input type="email" placeholder="you@example.com" />
              </label>

              <label className="field-label">
                Password
                <input type="password" placeholder="Enter your password" />
              </label>

              <div className="inline-row">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>
                <Link href="/login" className="text-link">Forgot password?</Link>
              </div>

              <button type="submit" className="primary-btn auth-submit">Sign in</button>
            </form>
          </section>

          <section className="auth-card driver-card is-highlighted" id="drivers" aria-label="Driver login">
            <div className="auth-card-header">
              <span className="chip chip-amber">Driver</span>
              <span className="auth-card-subtitle">Pick up and deliver</span>
            </div>

            <form className="auth-form">
              <label className="field-label">
                Driver email
                <input type="email" placeholder="driver@faithfeast.com" />
              </label>

              <label className="field-label">
                Access code
                <input type="password" placeholder="••••••••" />
              </label>

              <div className="inline-row">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Keep me signed in</span>
                </label>
                <Link href="/driver" className="text-link">Open dashboard</Link>
              </div>

              <button type="submit" className="primary-btn auth-submit driver-submit">Sign in as driver</button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
