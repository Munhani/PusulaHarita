'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { FaCamera, FaMapMarkedAlt, FaBuilding, FaCity } from 'react-icons/fa';

const realityModels = [
  {
    title: '3D Lazer Tarama',
    description: 'Yüksek hassasiyetli 3D lazer tarama teknolojisi ile binaların, yapıların ve arazilerin detaylı dijital modellerini oluşturuyoruz.',
    icon: FaCamera,
    features: [
      'Milimetrik hassasiyet',
      'Gerçek zamanlı veri toplama',
      'Detaylı yüzey analizi',
      'Kolay veri paylaşımı'
    ]
  },
  {
    title: 'BIM Entegrasyonu',
    description: 'RealityModel verilerini BIM (Building Information Modeling) sistemleriyle entegre ederek, proje yönetimini daha verimli hale getiriyoruz.',
    icon: FaBuilding,
    features: [
      'BIM uyumlu veri formatları',
      'Proje yönetimi entegrasyonu',
      'Detaylı yapı bilgisi',
      'Kolay revizyon takibi'
    ]
  },
  {
    title: 'Şehir Modelleme',
    description: 'Kentsel alanların 3D dijital modellerini oluşturarak, şehir planlama ve geliştirme projelerine destek sağlıyoruz.',
    icon: FaCity,
    features: [
      'Kentsel dönüşüm planlaması',
      'Altyapı analizi',
      'Görsel simülasyonlar',
      'Planlama desteği'
    ]
  },
  {
    title: 'Harita Entegrasyonu',
    description: 'RealityModel verilerini geleneksel harita sistemleriyle entegre ederek, kapsamlı bir veri altyapısı sunuyoruz.',
    icon: FaMapMarkedAlt,
    features: [
      'GIS entegrasyonu',
      'Koordinat sistemi uyumu',
      'Detaylı arazi analizi',
      'Çoklu veri formatı desteği'
    ]
  }
];

export default function RealityModel() {
  const prefersReducedMotion = useReducedMotion();

  const fadeInUp = {
    initial: prefersReducedMotion ? {} : { opacity: 0, y: 20 },
    animate: prefersReducedMotion ? {} : { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          {...fadeInUp}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">RealityModel</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern 3D tarama ve modelleme teknolojileri ile fiziksel dünyayı dijital ortama taşıyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {realityModels.map((model, index) => (
            <motion.div
              key={model.title}
              {...fadeInUp}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <model.icon className="w-8 h-8 text-violet-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">{model.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-violet-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Neden RealityModel?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hassasiyet</h3>
              <p className="text-gray-600">Milimetrik hassasiyetle ölçüm ve modelleme</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Verimlilik</h3>
              <p className="text-gray-600">Hızlı veri toplama ve işleme süreçleri</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Entegrasyon</h3>
              <p className="text-gray-600">Mevcut sistemlerle tam uyumluluk</p>
            </div>
          </div>
        </motion.div>

        {/* Reality Model Linki */}
        <motion.div
          {...fadeInUp}
          className="mt-16 flex justify-center"
        >
          <div className="bg-gradient-to-r from-violet-600 to-blue-600 p-1 rounded-2xl shadow-lg w-full max-w-xl">
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">3D Reality Modeli Görüntüle</h3>
              <p className="text-gray-600 mb-6 text-center">Bayramtepe projesinin 3D reality modelini interaktif olarak keşfetmek için aşağıdaki butona tıklayın.</p>
              <a
                href="https://drive.google.com/drive/folders/1inHTVS1Sx21aMJAJ3ccTpZmAVOpbYIdu?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-lg font-semibold rounded-xl shadow hover:scale-105 hover:from-violet-700 hover:to-blue-700 transition-transform duration-200"
              >
                Altınşehir,Güvercintepe
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 