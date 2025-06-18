import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const messages = await prisma.contactForm.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Mesajlar alınırken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Mesajlar alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
} 