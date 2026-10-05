import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const schema = z.object({
  title: z.string().min(2),
  description: z.string().min(2).default('Fresh daily drop from a local kitchen.'),
  vendor: z.string().min(2),
  price: z.coerce.number().min(1),
  quantity: z.coerce.number().min(1),
  dropDate: z.string().optional(),
  remainingQuantity: z.coerce.number().min(0).optional(),
});

export async function GET() {
  const drops = await prisma.dailyDrop.findMany({
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      title: true,
      description: true,
      vendor: true,
      price: true,
      quantity: true,
      remainingQuantity: true,
      dropDate: true,
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
        title: parsed.title,
        description: parsed.description,
        vendor: parsed.vendor,
        price: parsed.price,
        quantity: parsed.quantity,
        remainingQuantity: parsed.remainingQuantity ?? parsed.quantity,
        dropDate: parsed.dropDate ? new Date(parsed.dropDate) : new Date(),
      },
    });

    return NextResponse.json({ message: 'Drop created', drop }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'Unable to create drop.',
    }, { status: 400 });
  }
}
