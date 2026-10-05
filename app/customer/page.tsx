'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

export default function LoginPage() {
  const [role, setRole] = useState('customer');
  const [status, setStatus] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const payload = {
      email: form.get('email'),
      password: form.get('password'),
      name: form.get('name'),
      role,
    };

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();
    setStatus(data.message || 'Account saved');
  };

  return (
    <main className="auth-shell">
      <div className="form-card">
        <p className="eyebrow">Access portal</p>
        <h1>Sign up or log in</h1>
        <p>Customers order daily drops, vendors manage inventory, and drivers track earnings.</p>

        <form className="form-grid" onSubmit={handleSubmit}>
          <label className="field-label">
            Full name
            <input name="name" placeholder="Jordan Nguyen" required />
          </label>

          <label className="field-label">
            Email
            <input type="email" name="email" placeholder="name@faithfeast.com" required />
          </label>

          <label className="field-label">
            Password
            <input type="password" name="password" placeholder="••••••••" required />
          </label>

          <label className="field-label">
            Account type
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="customer">Customer</option>
              <option value="vendor">Vendor</option>
              <option value="driver">Driver</option>
            </select>
          </label>

          <div className="form-actions">
            <button type="submit" className="primary-btn">Create account</button>
            <Link href="/customer" className="secondary-btn">Quick demo</Link>
          </div>
        </form>

        {status ? <div className="status-box">{status}</div> : null}
      </div>
    </main>
  );
}
