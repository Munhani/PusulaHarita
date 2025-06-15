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

    // Çalışma saatlerini dizi formatına dönüştür
    const formattedWorkingHours = [
      {
        id: 1,
        day: 'Pazartesi - Cuma',
        hours: contactInfo.workingHours?.weekdays || '09:00 - 18:00',
        contactInfoId: contactInfo.id
      },
      {
        id: 2,
        day: 'Cumartesi',
        hours: contactInfo.workingHours?.saturday || '09:00 - 14:00',
        contactInfoId: contactInfo.id
      },
      {
        id: 3,
        day: 'Pazar',
        hours: contactInfo.workingHours?.sunday || 'Kapalı',
        contactInfoId: contactInfo.id
      }
    ];

    return NextResponse.json({
      ...contactInfo,
      workingHours: formattedWorkingHours
    });
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