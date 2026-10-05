import { NextRequest, NextResponse } from 'next/server';

const drops = [
  { id: 'drop-1', name: 'Fire-Roasted Chicken Bowl', vendor: 'Kite Kitchen', price: 18, quantity: 22 },
  { id: 'drop-2', name: 'Crispy Tofu & Greens', vendor: 'Bloom Table', price: 16, quantity: 18 },
  { id: 'drop-3', name: 'Rosemary Lamb Flatbread', vendor: 'Moss & Ember', price: 22, quantity: 12 },
];

export async function GET() {
  return NextResponse.json({ drops });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const nextDrop = {
    id: `drop-${Date.now()}`,
    name: body.name,
    vendor: body.vendor || 'Faith Feast Vendor',
    price: Number(body.price || 0),
    quantity: Number(body.quantity || 0),
  };

  drops.push(nextDrop);
  return NextResponse.json({ message: 'Drop created', drop: nextDrop }, { status: 201 });
}
