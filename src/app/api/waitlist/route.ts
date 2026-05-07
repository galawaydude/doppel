import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();
    if (typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ ok: false, error: 'Invalid email' }, { status: 400 });
    }
    console.log('[waitlist] new signup:', email);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Bad request' }, { status: 400 });
  }
}
