import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  const earnings = await prisma.driverEarning.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      periodLabel: true,
      tipsCents: true,
      deliveryFeeCents: true,
      totalCents: true,
    },
  });

  const mapped = earnings.map((entry) => ({
    period: entry.periodLabel,
    tips: entry.tipsCents / 100,
    deliveryFees: entry.deliveryFeeCents / 100,
    total: entry.totalCents / 100,
  }));

  return NextResponse.json({ earnings: mapped });
}
