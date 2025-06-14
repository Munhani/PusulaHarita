'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Iletisim() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: data.message || 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.error || 'Bir hata oluştu');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">İletişim</h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">İletişim Bilgileri</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <MapPinIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Adres</h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      Karlıbayır Mah. Selçuklu Cd. No:5 D:11<br />
                      Arnavutköy/İSTANBUL
                    </p>
                    <a 
                      href="https://www.google.com/maps/dir/?api=1&destination=Karlıbayır+Mah.+Selçuklu+Cd.+No:5+D:11+Arnavutköy/İSTANBUL"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-sm mt-2 inline-block"
                    >
                      Navigasyonda Göster →
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <PhoneIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Telefon</h3>
                    <a href="tel:+902125979700" className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors">
                      +90 212 597 97 00
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <DevicePhoneMobileIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">Cep Telefonu</h3>
                    <a href="tel:+905334902985" className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors">
                      +90 533 490 29 85
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <EnvelopeIcon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-gray-900">E-posta</h3>
                    <a href="mailto:tsivri@pusulaharita.com" className="text-sm sm:text-base text-gray-600 hover:text-primary-600 transition-colors">
                      tsivri@pusulaharita.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Çalışma Saatleri</h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Pazartesi - Cuma</span>
                  <span className="text-sm sm:text-base text-gray-900 font-medium">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Cumartesi</span>
                  <span className="text-sm sm:text-base text-gray-900 font-medium">09:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600">Pazar</span>
                  <span className="text-sm sm:text-base text-gray-900 font-medium">Kapalı</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Bize Ulaşın</h2>
              {status.type && (
                <div
                  className={`p-3 sm:p-4 mb-4 sm:mb-6 rounded-md text-sm sm:text-base ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800'
                      : 'bg-red-50 text-red-800'
                  }`}
                >
                  {status.message}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    minLength={2}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    E-posta
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm sm:text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    minLength={10}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm sm:text-base ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </form>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.2718448125847!2d28.7319!3d41.1833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55f8c5c7c7c7c%3A0x7c7c7c7c7c7c7c7c!2sKarl%C4%B1bay%C4%B1r%20Mah.%20Sel%C3%A7uklu%20Cd.%20No%3A5%20D%3A11%2C%2034534%20Arnavutk%C3%B6y%2F%C4%B0stanbul!5e0!3m2!1str!2str!4v1620000000000!5m2!1str!2str"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[250px] sm:h-[300px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 