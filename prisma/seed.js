const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Önce eski kayıtları sil
  await prisma.workingHours.deleteMany();
  await prisma.contactInfo.deleteMany();

  // İletişim bilgisi ekle
  const contactInfo = await prisma.contactInfo.create({
    data: {
      address: 'Karlıbayır Mah. Selçuklu Cd. No:5 D:11\nArnavutköy/İSTANBUL',
      phone: '+90 212 597 97 00',
      mobile: '+90 533 490 29 85',
      email: 'tsivri@pusulaharita.com',
    },
  });

  // Çalışma saatleri ekle
  await prisma.workingHours.create({
    data: {
      weekdays: '09:00 - 18:00',
      saturday: '09:00 - 13:00',
      sunday: 'Kapalı',
      contactInfoId: contactInfo.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 