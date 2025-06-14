import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import nodemailer from 'nodemailer';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  if (request.method !== 'POST') {
    return NextResponse.json(
      { success: false, error: 'Method not allowed' },
      { status: 405 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Input doğrulama
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Tüm alanları doldurun' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { success: false, error: 'Geçerli bir e-posta adresi girin' },
        { status: 400 }
      );
    }

    // Veritabanına kaydet
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        message,
      },
    });

    // E-posta gönder
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // E-posta gönderme işlemini try-catch bloğuna al
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Yeni İletişim Formu Mesajı',
        html: `
          <h2>Yeni İletişim Formu Mesajı</h2>
          <p><strong>Ad Soyad:</strong> ${name}</p>
          <p><strong>E-posta:</strong> ${email}</p>
          <p><strong>Mesaj:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (emailError) {
      console.error('E-posta gönderme hatası:', emailError);
      // E-posta gönderilemese bile veritabanına kaydedildiği için başarılı sayıyoruz
    }

    return NextResponse.json({ 
      success: true, 
      data: contact,
      message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
    });
  } catch (error) {
    console.error('İletişim formu hatası:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' 
      },
      { status: 500 }
    );
  }
} 