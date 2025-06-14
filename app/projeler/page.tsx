'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'İstanbul Kadıköy İmar Planı',
    description: 'Kadıköy ilçesi için kapsamlı imar planı çalışması ve uygulaması.',
    image: '/images/project1.jpg',
    year: '2023',
  },
  {
    title: 'Ankara Çankaya Parsel Tespiti',
    description: 'Çankaya bölgesinde 500+ parsel için sınır tespiti ve harita çizimi.',
    image: '/images/project2.jpg',
    year: '2022',
  },
  {
    title: 'İzmir Bornova Aplikasyon',
    description: 'Bornova bölgesinde yapı aplikasyonu ve koordinat belirleme projesi.',
    image: '/images/project3.jpg',
    year: '2022',
  },
  {
    title: 'Bursa Nilüfer Kadastro',
    description: 'Nilüfer ilçesi için kadastro ölçümleri ve harita çizimi projesi.',
    image: '/images/project4.jpg',
    year: '2021',
  },
];

export default function Projeler() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projelerimiz</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tamamladığımız başarılı projelerden örnekler.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  <span className="text-sm text-primary-600 font-medium">{project.year}</span>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 