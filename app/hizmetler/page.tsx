'use client';

import { motion } from 'framer-motion';
import {
  MapIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  PresentationChartLineIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Harita ve Kadastro Hizmetleri',
    description: 'Parsel bazlı harita çizimi, kadastro ölçümleri ve sınır tespiti hizmetleri.',
    icon: MapIcon,
  },
  {
    title: 'İmar ve Yapı Ruhsatı',
    description: 'İmar planı hazırlama, yapı ruhsatı başvuruları ve danışmanlık hizmetleri.',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'Aplikasyon ve Yer Tespiti',
    description: 'Yapı aplikasyonu, yer tespiti ve koordinat belirleme hizmetleri.',
    icon: DocumentTextIcon,
  },
  {
    title: 'Proje Yönetimi',
    description: 'Harita ve kadastro projelerinin yönetimi ve koordinasyonu.',
    icon: PresentationChartLineIcon,
  },
];

export default function Hizmetler() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Modern teknoloji ve uzman kadromuzla harita ve kadastro alanında kapsamlı çözümler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <service.icon className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 