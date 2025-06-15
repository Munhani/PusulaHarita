'use client';

import Link from 'next/link';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pusula Harita</h3>
            <p className="text-gray-400">
              Modern harita mühendisliği çözümleri ile projelerinize değer katıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              {[
                { name: 'Ana Sayfa', href: '/' },
                { name: 'Hizmetlerimiz', href: '/hizmetler' },
                { name: 'Hakkımızda', href: '/hakkimizda' },
                { name: 'Projeler', href: '/projeler' },
                { name: 'İletişim', href: '/iletisim' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Hizmetlerimiz</h3>
            <ul className="space-y-2">
              {[
                'Harita Çizimi',
                'Kadastro',
                'GPS Ölçümleri',
                'Arazi Analizi',
                'Proje Yönetimi',
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">İletişim</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPinIcon className="w-6 h-6 text-blue-500 flex-shrink-0" />
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Karlıbayır+Mah.+Selçuklu+Cd.+No:5+D:11+Arnavutköy/İSTANBUL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Karlıbayır Mah. Selçuklu Cd. No:5 D:11<br />
                  Arnavutköy/İSTANBUL
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <PhoneIcon className="w-6 h-6 text-blue-500" />
                <a href="tel:+902125979700" className="text-gray-400 hover:text-white transition-colors">
                  +90 212 597 97 00
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <DevicePhoneMobileIcon className="w-6 h-6 text-blue-500" />
                <a href="tel:+905334902985" className="text-gray-400 hover:text-white transition-colors">
                  +90 533 490 29 85
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-500" />
                <a href="mailto:tsivri@pusulaharita.com" className="text-gray-400 hover:text-white transition-colors">
                  tsivri@pusulaharita.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Pusula Harita. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 