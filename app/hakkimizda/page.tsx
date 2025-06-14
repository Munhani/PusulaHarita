'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20 yılı aşkın tecrübemizle harita ve kadastro alanında öncü çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src="/about-image.jpg"
              alt="Pusula Harita Ofis"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vizyonumuz</h2>
              <p className="text-gray-600">
                Harita ve kadastro sektöründe teknoloji odaklı, yenilikçi ve güvenilir çözümler sunarak
                sektörün öncü firmalarından biri olmak.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Misyonumuz</h2>
              <p className="text-gray-600">
                Müşterilerimize en yüksek kalitede hizmet sunarak, projelerinin başarıyla
                tamamlanmasına katkıda bulunmak ve sektörde güvenilir bir çözüm ortağı olmak.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Değerlerimiz</h2>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Müşteri memnuniyeti odaklı yaklaşım</li>
                <li>Teknolojik yenilikleri takip etme</li>
                <li>Profesyonel ve etik çalışma prensipleri</li>
                <li>Sürekli gelişim ve öğrenme</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 