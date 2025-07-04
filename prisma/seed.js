const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Önce mevcut verileri temizle
  await prisma.workingHours.deleteMany();
  await prisma.contactInfo.deleteMany();

  // İletişim bilgilerini oluştur
  const contactInfo = await prisma.contactInfo.create({
    data: {
      address: 'Karlıbayır Mah. Selçuklu Cd. No:5 D:11\nArnavutköy/İSTANBUL',
      phone: '+90 212 597 97 00',
      mobile: '+90 533 490 29 85',
      email: 'tsivri@pusulaharita.tr',
      workingHours: {
        create: [
          {
            day: 'Pazartesi - Cuma',
            hours: '09:00 - 18:00'
          },
          {
            day: 'Cumartesi',
            hours: '09:00 - 14:00'
          },
          {
            day: 'Pazar',
            hours: 'Kapalı'
          }
        ]
      }
    }
  });

  console.log('İletişim bilgileri oluşturuldu:', contactInfo);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 