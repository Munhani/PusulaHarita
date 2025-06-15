'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

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

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* İletişim Bilgileri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim Bilgileri</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {contactInfo.address}
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.phone}
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {contactInfo.mobile}
              </p>
              <p className="flex items-center">
                <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {contactInfo.email}
              </p>
            </div>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Çalışma Saatleri</h3>
            <div className="space-y-2">
              <p>Pazartesi - Cuma: {contactInfo.workingHours.weekdays}</p>
              <p>Cumartesi: {contactInfo.workingHours.saturday}</p>
              <p>Pazar: {contactInfo.workingHours.sunday}</p>
            </div>
          </div>

          {/* Hızlı Linkler */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hizmetlerimiz" className="hover:text-gray-300 transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/hakkimizda" className="hover:text-gray-300 transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/projeler" className="hover:text-gray-300 transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-gray-300 transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} Pusula Harita. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 