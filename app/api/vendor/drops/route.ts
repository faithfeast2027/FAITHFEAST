import { NextRequest, NextResponse } from 'next/server';

const users: Array<{ email: string; name: string; password: string; role: string }> = [];

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password, name, role } = body;

  if (!email || !password || !name || !role) {
    return NextResponse.json({ message: 'Missing required account fields.' }, { status: 400 });
  }

  const existing = users.find((user) => user.email === String(email));
  if (existing) {
    return NextResponse.json({ message: 'Account already exists.' }, { status: 409 });
  }

  users.push({ email, name, password, role });

  return NextResponse.json({
    message: `${role} account created successfully.`,
    user: { email, name, role },
  });
}
