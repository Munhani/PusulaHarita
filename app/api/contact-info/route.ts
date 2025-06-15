import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    const contactInfo = await prisma.contactInfo.findFirst({
      include: {
        workingHours: true
      }
    });
    
    if (!contactInfo) {
      return NextResponse.json(
        { error: 'İletişim bilgileri bulunamadı' },
        { status: 404 }
      );
    }

    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('İletişim bilgileri alınırken hata oluştu:', error);
    return NextResponse.json(
      { error: 'İletişim bilgileri alınırken bir hata oluştu' },
      { status: 500 }
    );
  }
} 