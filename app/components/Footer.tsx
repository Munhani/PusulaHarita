'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaMobile, FaEnvelope, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface ContactInfo {
  address: string;
  phone: string;
  mobile: string;
  email: string;
  workingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
}

export default function Footer() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact-info');
        if (response.ok) {
          const data = await response.json();
          setContactInfo(data);
        }
      } catch (error) {
        console.error('İletişim bilgileri alınırken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  // Varsayılan iletişim bilgileri
  const defaultContactInfo: ContactInfo = {
    address: 'Karlıbayır Mah. Selçuklu Cd. No:5 D:11 Arnavutköy/İSTANBUL',
    phone: '+90 212 597 97 00',
    mobile: '+90 533 490 29 85',
    email: 'tsivri@pusulaharita.tr',
    workingHours: {
      weekdays: '09:00 - 18:00',
      saturday: '09:00 - 14:00',
      sunday: 'Kapalı'
    }
  };

  // contactInfo yoksa varsayılan değerleri kullan
  const displayContactInfo = contactInfo || defaultContactInfo;

  // Google Maps navigasyon URL'si oluştur
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(displayContactInfo.address)}`;

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-blue-400" />
                <a 
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors"
                >
                  {displayContactInfo.address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <a href={`tel:${displayContactInfo.phone}`} className="hover:text-blue-400 transition-colors">
                  {displayContactInfo.phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMobile className="text-blue-400" />
                <a href={`tel:${displayContactInfo.mobile}`} className="hover:text-blue-400 transition-colors">
                  {displayContactInfo.mobile}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a href={`mailto:${displayContactInfo.email}`} className="hover:text-blue-400 transition-colors">
                  {displayContactInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-blue-400" />
                <div>
                  <p>Pazartesi - Cuma: {displayContactInfo.workingHours.weekdays}</p>
                  <p>Cumartesi: {displayContactInfo.workingHours.saturday}</p>
                  <p>Pazar: {displayContactInfo.workingHours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-blue-400">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hizmetlerimiz" className="text-gray-300 hover:text-blue-400">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="text-gray-300 hover:text-blue-400">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="text-gray-300 hover:text-blue-400">
                  RealityModel
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-gray-300 hover:text-blue-400">
                  İletişim
                </Link>
              </li>
              <li>
                <a
                  href="/images/Katalog.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400"
                >
                  Katalog
                </a>
              </li>
            </ul>
          </div>

          {/* Hizmetler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetler/arazi-olcumu" className="hover:text-blue-400 transition-colors">
                  Arazi Ölçümü
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/kadastro" className="hover:text-blue-400 transition-colors">
                  Kadastro
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/imar-planlari" className="hover:text-blue-400 transition-colors">
                  İmar Planları
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/jeodezik-olcumler" className="hover:text-blue-400 transition-colors">
                  Jeodezik Ölçümler
                </Link>
              </li>
            </ul>
          </div>

          {/* Sosyal Medya */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Sosyal Medya</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {currentYear} Pusula Harita. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 