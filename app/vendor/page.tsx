'use client';

import { FormEvent, useEffect, useState } from 'react';

type Drop = {
  id: string;
  name: string;
  vendor: string;
  price: number;
  quantity: number;
};

export default function CustomerPage() {
  const [drops, setDrops] = useState<Drop[]>([]);
  const [selected, setSelected] = useState<Drop | null>(null);
  const [status, setStatus] = useState('');

  useEffect(() => {
    fetch('/api/vendor/drops')
      .then((r) => r.json())
      .then((data) => {
        setDrops(data.drops || []);
        setSelected(data.drops?.[0] || null);
      });
  }, []);

  const handleCheckout = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selected) return;

    const form = new FormData(event.currentTarget);
    const response = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        dropId: selected.id,
        customerId: 'customer-001',
        quantity: Number(form.get('quantity')) || 1,
        deliveryAddress: form.get('address'),
      }),
    });

    const data = await response.json();
    setStatus(data.message || 'Order created');
  };

  return (
    <main className="page-shell">
      <div className="section-head">
        <div>
          <p className="eyebrow">Customer portal</p>
          <h1>Today&apos;s daily drop</h1>
        </div>
        <span className="badge">15 min left</span>
      </div>

      <section className="checkout-layout">
        <div className="checkout-card">
          <h2>Choose your drop</h2>
          <div className="checkout-list">
            {drops.map((drop) => (
              <button
                key={drop.id}
                type="button"
                onClick={() => setSelected(drop)}
                style={{
                  textAlign: 'left',
                  background: selected?.id === drop.id ? '#fff1f2' : '#fff',
                  border: '1px solid rgba(15, 23, 42, 0.08)',
                  borderRadius: 14,
                  padding: 14,
                  cursor: 'pointer'
                }}
              >
                <div className="checkout-line">
                  <strong>{drop.name}</strong>
                  <strong>${drop.price}</strong>
                </div>
                <div className="checkout-line">
                  <span>{drop.vendor}</span>
                  <span>{drop.quantity} left</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <aside className="checkout-card">
          <h2>Review</h2>
          {selected ? (
            <>
              <div className="order-card">
                <span className="eyebrow-tag">Drop available</span>
                <h3>{selected.name}</h3>
                <p>{selected.vendor}</p>
                <p>{selected.quantity} portions available</p>
              </div>
              <div className="total-box">
                <div className="checkout-line"><span>Food</span><strong>${selected.price}</strong></div>
                <div className="checkout-line"><span>Delivery</span><strong>$4.00</strong></div>
                <div className="checkout-line"><span>Total</span><strong>${selected.price + 4}</strong></div>
              </div>
            </>
          ) : null}
        </aside>
      </section>

      <section className="panel">
        <h2>Checkout</h2>
        <form className="form-grid" onSubmit={handleCheckout}>
          <label className="field-label">
            Quantity
            <input name="quantity" type="number" min={1} max={10} defaultValue={1} />
          </label>
          <label className="field-label">
            Delivery address
            <input name="address" placeholder="123 Walnut Street, Apt 7" required />
          </label>

          <div className="form-actions">
            <button type="submit" className="primary-btn">Place order</button>
          </div>
        </form>
        {status ? <div className="status-box">{status}</div> : null}
      </section>
    </main>
  );
}
