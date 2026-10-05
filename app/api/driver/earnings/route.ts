import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { prisma } from '@/lib/prisma';

const schema = z.object({
  customerId: z.string().min(1),
  dropId: z.string().min(1),
  quantity: z.coerce.number().min(1),
  deliveryAddress: z.string().min(4),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    const drop = await prisma.dailyDrop.findUnique({ where: { id: parsed.dropId } });
    if (!drop) {
      return NextResponse.json({ message: 'Drop not found.' }, { status: 404 });
    }

    const total = drop.price * parsed.quantity + 4;

    const order = await prisma.order.create({
      data: {
        customerId: parsed.customerId,
        dropId: parsed.dropId,
        quantity: parsed.quantity,
        totalCents: Math.round(total * 100),
        deliveryAddress: parsed.deliveryAddress,
        status: 'confirmed',
      },
    });

    return NextResponse.json({ message: 'Your order has been placed successfully.', order }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'Unable to place order.',
    }, { status: 400 });
  }
}
