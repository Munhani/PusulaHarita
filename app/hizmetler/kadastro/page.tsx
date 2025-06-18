import React from 'react';

export default function Kadastro() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Kadastro Hizmetleri</h1>
          <p className="text-xl text-gray-600">
            Kadastro işlemlerinde uzman ekibimizle yanınızdayız
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kadastro Hizmetlerimiz</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Parselasyon işlemleri</li>
            <li>Aplikasyon çalışmaları</li>
            <li>Kadastro tespit işlemleri</li>
            <li>Sınır düzeltme işlemleri</li>
            <li>Harita çizim işlemleri</li>
            <li>Kadastro belgelendirme</li>
            <li>Tapu işlemleri desteği</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Süreç Adımları</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Saha İncelemesi</h3>
              <p className="text-gray-600">Arazinin detaylı incelenmesi ve planlama</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Ölçüm</h3>
              <p className="text-gray-600">Hassas ölçüm ve koordinat tespiti</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Haritalama</h3>
              <p className="text-gray-600">Profesyonel harita çizimi</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Belgelendirme</h3>
              <p className="text-gray-600">Resmi belge hazırlama ve teslim</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Avantajlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Teknik Uzmanlık</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• 20+ yıl deneyim</li>
                <li>• Uzman kadro</li>
                <li>• Modern teknoloji</li>
                <li>• Sürekli eğitim</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Müşteri Odaklılık</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Hızlı teslimat</li>
                <li>• Şeffaf iletişim</li>
                <li>• Kalite garantisi</li>
                <li>• Sürekli destek</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 