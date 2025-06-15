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
  const [contactInfo, setContactInfo] = useState<ContactInfo>({
    address: 'Karlıbayır Mah. Selçuklu Cd. No:5 D:11, Arnavutköy/İSTANBUL',
    phone: '+90 212 597 97 00',
    mobile: '+90 533 490 29 85',
    email: 'tsivri@pusulaharita.com',
    workingHours: {
      weekdays: '09:00 - 18:00',
      saturday: '09:00 - 13:00',
      sunday: 'Kapalı'
    }
  });

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact-info');
        if (response.ok) {
          const data = await response.json();
          setContactInfo(data);
        }
      } catch (error) {
        console.error('İletişim bilgileri alınamadı:', error);
      }
    };

    fetchContactInfo();
  }, []);

  const currentYear = new Date().getFullYear();
  const address = "Kadıköy, İstanbul";
  const phone = "+90 555 123 4567";
  const mobile = "+90 555 123 4567";
  const email = "info@pusulaharita.com";
  const workingHours = "Pazartesi - Cuma: 09:00 - 18:00";

  // Google Maps navigasyon URL'si oluştur
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

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
                  {address}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="text-blue-400" />
                <a href={`tel:${phone}`} className="hover:text-blue-400 transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaMobile className="text-blue-400" />
                <a href={`tel:${mobile}`} className="hover:text-blue-400 transition-colors">
                  {mobile}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-blue-400" />
                <a href={`mailto:${email}`} className="hover:text-blue-400 transition-colors">
                  {email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaClock className="text-blue-400" />
                <span>{workingHours}</span>
              </li>
            </ul>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-blue-400 transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-blue-400 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/hizmetler" className="hover:text-blue-400 transition-colors">
                  Hizmetler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-blue-400 transition-colors">
                  İletişim
                </Link>
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