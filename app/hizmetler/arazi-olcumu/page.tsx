import React from 'react';

export default function AraziOlcumu() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Arazi Ölçümü</h1>
          <p className="text-xl text-gray-600">
            Profesyonel arazi ölçüm hizmetlerimiz ile projelerinizi güvenle hayata geçirin
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Hizmet Kapsamımız</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>GPS ile hassas koordinat ölçümleri</li>
            <li>Topografik harita çizimi</li>
            <li>Arazi tesviye işlemleri</li>
            <li>Parsel sınır tespiti</li>
            <li>Yükseklik ölçümleri</li>
            <li>Detaylı arazi raporları</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kullanılan Teknolojiler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">GPS Cihazları</h3>
              <p className="text-gray-600">Hassas koordinat ölçümleri için modern GPS teknolojisi</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Total Station</h3>
              <p className="text-gray-600">Açı ve mesafe ölçümleri için elektronik teodolit</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Lazer Tarayıcılar</h3>
              <p className="text-gray-600">3D lazer tarama ile detaylı yüzey analizi</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Drone Teknolojisi</h3>
              <p className="text-gray-600">Havadan görüntüleme ve ölçüm imkanı</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Neden Bizi Seçmelisiniz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hassasiyet</h3>
              <p className="text-gray-600">Milimetrik hassasiyetle ölçüm yapıyoruz</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hız</h3>
              <p className="text-gray-600">Hızlı ve verimli ölçüm süreçleri</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Raporlama</h3>
              <p className="text-gray-600">Detaylı ve anlaşılır raporlar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 