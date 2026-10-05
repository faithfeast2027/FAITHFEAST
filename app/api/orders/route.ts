import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const schema = z.object({
  name: z.string().min(2),
  vendor: z.string().min(2),
  price: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
});

export async function GET() {
  const drops = await prisma.dailyDrop.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      name: true,
      vendor: true,
      price: true,
      quantity: true,
    },
  });

  return NextResponse.json({ drops });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    const drop = await prisma.dailyDrop.create({
      data: {
        name: parsed.name,
        vendor: parsed.vendor,
        price: parsed.price,
        quantity: parsed.quantity,
      },
    });

    return NextResponse.json({ message: 'Drop created', drop }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'Unable to create drop.',
    }, { status: 400 });
  }
}
