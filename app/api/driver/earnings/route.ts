import { NextRequest, NextResponse } from 'next/server';

const orders: Array<{ id: string; customerId: string; dropId: string; quantity: number; total: number; status: string }> = [];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { customerId, dropId, quantity, deliveryAddress } = body;

  if (!customerId || !dropId || !deliveryAddress) {
    return NextResponse.json({ message: 'Missing order fields.' }, { status: 400 });
  }

  const total = Number(quantity || 1) * 18 + 4;
  const order = {
    id: `order-${Date.now()}`,
    customerId,
    dropId,
    quantity: Number(quantity || 1),
    total,
    status: 'confirmed',
  };

  orders.push(order);

  return NextResponse.json({
    message: 'Your order has been placed successfully.',
    order,
  }, { status: 201 });
}
