import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

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
  } finally {
    await prisma.$disconnect();
  }
} 