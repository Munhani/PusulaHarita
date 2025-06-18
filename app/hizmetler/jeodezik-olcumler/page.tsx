import React from 'react';

export default function JeodezikOlcumler() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Jeodezik Ölçümler</h1>
          <p className="text-xl text-gray-600">
            Yüksek hassasiyetli jeodezik ölçümler ile projelerinizi güvenle hayata geçirin
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Jeodezik Hizmetlerimiz</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>GPS/GNSS ölçümleri</li>
            <li>Total Station ölçümleri</li>
            <li>Nivelman ölçümleri</li>
            <li>Koordinat dönüşümleri</li>
            <li>Jeodezik ağ kurulumu</li>
            <li>Yükseklik belirleme</li>
            <li>Hassas konumlandırma</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Teknolojik Altyapımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📡</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">GPS/GNSS Cihazları</h3>
              <p className="text-gray-600">Çoklu uydu sistemleri ile hassas konumlandırma</p>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• RTK teknolojisi</li>
                <li>• Milimetrik hassasiyet</li>
                <li>• Gerçek zamanlı ölçüm</li>
              </ul>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Total Station</h3>
              <p className="text-gray-600">Elektronik teodolit ile açı ve mesafe ölçümleri</p>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• Lazer teknolojisi</li>
                <li>• Otomatik hedefleme</li>
                <li>• Yüksek hassasiyet</li>
              </ul>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Yazılım Sistemleri</h3>
              <p className="text-gray-600">Profesyonel ölçüm ve analiz yazılımları</p>
              <ul className="text-sm text-gray-600 mt-3 space-y-1">
                <li>• CAD entegrasyonu</li>
                <li>• Veri analizi</li>
                <li>• Raporlama</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uygulama Alanları</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">İnşaat ve Mühendislik</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Köprü ve tünel inşaatları</li>
                <li>• Yol ve otoyol projeleri</li>
                <li>• Baraj ve hidroelektrik santraller</li>
                <li>• Yüksek bina inşaatları</li>
                <li>• Endüstriyel tesisler</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Harita ve Kadastro</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Kadastro ölçümleri</li>
                <li>• Parsel sınır tespiti</li>
                <li>• Topografik haritalar</li>
                <li>• İmar planları</li>
                <li>• Arazi düzenleme</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Kalite Standartlarımız</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">±2mm</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hassasiyet</h3>
              <p className="text-gray-600">Milimetrik hassasiyetle ölçüm</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Hizmet</h3>
              <p className="text-gray-600">Kesintisiz hizmet sunumu</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">ISO</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Standart</h3>
              <p className="text-gray-600">Uluslararası kalite standartları</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">20+</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Yıl</h3>
              <p className="text-gray-600">Sektör deneyimi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 