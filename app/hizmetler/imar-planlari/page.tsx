import React from 'react';

export default function ImarPlanlari() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">İmar Planları</h1>
          <p className="text-xl text-gray-600">
            İmar planı uygulamaları ve yapı ruhsatı işlemlerinde profesyonel çözümler
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">İmar Hizmetlerimiz</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>İmar planı uygulamaları</li>
            <li>Yapı ruhsatı işlemleri</li>
            <li>Yapı denetim hizmetleri</li>
            <li>İmar durumu belgesi</li>
            <li>Parselasyon planları</li>
            <li>Koruma amaçlı imar planları</li>
            <li>Mevzi imar planları</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Plan Türleri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Çevre Düzeni Planları</h3>
              <p className="text-gray-600 mb-3">Bölgesel ve çevresel planlama çalışmaları</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Bölge planları</li>
                <li>• Çevre düzeni planları</li>
                <li>• Havza planları</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">İlave İmar Planları</h3>
              <p className="text-gray-600 mb-3">Detaylı imar planı çalışmaları</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nazım imar planları</li>
                <li>• Uygulama imar planları</li>
                <li>• Koruma amaçlı planlar</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Mevzi İmar Planları</h3>
              <p className="text-gray-600 mb-3">Özel proje alanları için planlar</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Konut alanları</li>
                <li>• Ticari alanlar</li>
                <li>• Endüstriyel alanlar</li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-3">Revizyon Planları</h3>
              <p className="text-gray-600 mb-3">Mevcut planların güncellenmesi</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Plan revizyonları</li>
                <li>• Plan değişiklikleri</li>
                <li>• Plan ilaveleri</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Süreç ve Aşamalar</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Ön İnceleme ve Analiz</h3>
                <p className="text-gray-600">Mevcut durum analizi, yasal gerekliliklerin belirlenmesi ve planlama stratejisinin oluşturulması</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Plan Hazırlama</h3>
                <p className="text-gray-600">Teknik çalışmalar, harita hazırlama ve plan dokümanlarının oluşturulması</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Onay Süreci</h3>
                <p className="text-gray-600">İlgili kurumlara sunum, görüş alma ve onay süreçlerinin yönetimi</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Uygulama Desteği</h3>
                <p className="text-gray-600">Plan uygulaması sırasında teknik destek ve danışmanlık hizmetleri</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 