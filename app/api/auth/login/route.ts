import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { hashPassword, isValidRole } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(8),
  role: z.enum(['customer', 'vendor', 'driver', 'admin']).default('customer'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    if (!isValidRole(parsed.role)) {
      return NextResponse.json({ message: 'Invalid role.' }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({ where: { email: parsed.email } });
    if (existingUser) {
      return NextResponse.json({ message: 'Account already exists.' }, { status: 409 });
    }

    const passwordHash = await hashPassword(parsed.password);
    const user = await prisma.user.create({
      data: {
        name: parsed.name,
        email: parsed.email,
        passwordHash,
        role: parsed.role,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
    });

    return NextResponse.json({
      message: `${parsed.role} account created successfully.`,
      user,
    }, { status: 201 });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'Registration failed.',
    }, { status: 400 });
  }
}
