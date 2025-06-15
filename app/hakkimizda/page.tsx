import React from 'react';

export default function Hakkimizda() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600">
            Pusula Harita olarak, müşterilerimize en iyi hizmeti sunmak için çalışıyoruz
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Vizyonumuz</h2>
          <p className="text-gray-600 mb-6">
            Harita ve kadastro sektöründe teknolojik yenilikleri takip eden, müşteri memnuniyetini ön planda tutan ve sürdürülebilir bir büyüme hedefleyen lider bir firma olmak.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Misyonumuz</h2>
          <p className="text-gray-600 mb-6">
            Müşterilerimize en kaliteli harita ve kadastro hizmetlerini sunarak, projelerinin başarıyla tamamlanmasına katkıda bulunmak ve sektörde güvenilir bir çözüm ortağı olmak.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Değerlerimiz</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Müşteri odaklılık ve memnuniyeti</li>
            <li>Teknik mükemmellik ve kalite</li>
            <li>Dürüstlük ve şeffaflık</li>
            <li>Yenilikçilik ve sürekli gelişim</li>
            <li>Çevreye ve topluma duyarlılık</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 