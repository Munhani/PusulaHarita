import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET() {
  try {
    // İletişim bilgilerini veritabanından al
    const contactInfo = await prisma.contactInfo.findFirst();

    if (!contactInfo) {
      // Eğer veritabanında bilgi yoksa varsayılan değerleri döndür
      return NextResponse.json({
        address: 'Karlıbayır Mah. Selçuklu Cd. No:5 D:11, Arnavutköy/İSTANBUL',
        phone: '+90 212 597 97 00',
        mobile: '+90 533 490 29 85',
        email: 'tsivri@pusulaharita.com',
        workingHours: {
          weekdays: '09:00 - 18:00',
          saturday: '09:00 - 13:00',
          sunday: 'Kapalı'
        }
      });
    }

    return NextResponse.json(contactInfo);
  } catch (error) {
    console.error('İletişim bilgileri alınırken hata oluştu:', error);
    return NextResponse.json(
      { error: 'İletişim bilgileri alınamadı' },
      { status: 500 }
    );
  }
} 