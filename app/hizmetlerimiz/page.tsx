import React from 'react';

export default function Hizmetlerimiz() {
  const hizmetler = [
    {
      baslik: 'Harita ve Kadastro Hizmetleri',
      aciklama: 'Parselasyon, aplikasyon, kadastro tespit, sınır düzeltme ve harita çizim işlemleri.',
      icon: '🗺️'
    },
    {
      baslik: 'İmar ve Yapı İşleri',
      aciklama: 'İmar planı uygulamaları, yapı ruhsatı işlemleri ve yapı denetim hizmetleri.',
      icon: '🏗️'
    },
    {
      baslik: 'Arazi Ölçüm Hizmetleri',
      aciklama: 'GPS ölçümleri, topografik harita çizimi ve arazi tesviye işlemleri.',
      icon: '📏'
    },
    {
      baslik: 'Danışmanlık Hizmetleri',
      aciklama: 'İmar ve yapı mevzuatı konularında teknik danışmanlık ve proje yönetimi.',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h1>
          <p className="text-xl text-gray-600 mb-12">
            Profesyonel kadromuz ve modern teknolojik altyapımızla sunduğumuz hizmetler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {hizmetler.map((hizmet, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl mb-4">{hizmet.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {hizmet.baslik}
              </h3>
              <p className="text-gray-600">{hizmet.aciklama}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 