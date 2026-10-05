import { NextResponse } from 'next/server';

const earnings = [
  { period: 'Monday', tips: 52, deliveryFees: 40, total: 92 },
  { period: 'Tuesday', tips: 48, deliveryFees: 28, total: 76 },
  { period: 'Wednesday', tips: 82, deliveryFees: 50, total: 132 },
];

export async function GET() {
  return NextResponse.json({ earnings });
}
