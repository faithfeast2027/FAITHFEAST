import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { comparePassword } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = schema.parse(body);

    const user = await prisma.user.findUnique({ where: { email: parsed.email } });
    if (!user) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    const valid = await comparePassword(parsed.password, user.passwordHash);
    if (!valid) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    return NextResponse.json({
      message: 'Login successful.',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    return NextResponse.json({
      message: error instanceof Error ? error.message : 'Login failed.',
    }, { status: 400 });
  }
}
