'use client';

import { useState, useEffect } from 'react';
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

export default function ContactPage() {
  const [contactInfo, setContactInfo] = useState<ContactInfo | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await fetch('/api/contact-info');
        if (!response.ok) {
          throw new Error('İletişim bilgileri alınamadı');
        }
        const data = await response.json();
        setContactInfo(data);
      } catch (error) {
        console.error('İletişim bilgileri alınırken hata oluştu:', error);
      }
    };

    fetchContactInfo();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Form gönderilemedi');
      }

      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Form gönderilirken hata oluştu:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (!contactInfo) {
    return <div>Yükleniyor...</div>;
  }

  // Google Maps embed URL'si oluştur
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`;

  // Google Maps navigasyon URL'si oluştur
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(contactInfo.address)}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            İletişim
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Bizimle iletişime geçin, size yardımcı olmaktan mutluluk duyarız.
          </p>
        </div>

        {/* Google Maps */}
        <div className="mb-12">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">İletişim Bilgileri</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Adres</h3>
                  <a 
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.address}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaPhone className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Telefon</h3>
                  <a 
                    href={`tel:${contactInfo.phone}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaMobile className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Cep Telefonu</h3>
                  <a 
                    href={`tel:${contactInfo.mobile}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.mobile}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaEnvelope className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">E-posta</h3>
                  <a 
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FaClock className="text-blue-600 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900">Çalışma Saatleri</h3>
                  <div className="text-gray-600">
                    <p>Pazartesi - Cuma: {contactInfo.workingHours.weekdays}</p>
                    <p>Cumartesi: {contactInfo.workingHours.saturday}</p>
                    <p>Pazar: {contactInfo.workingHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Bize Ulaşın</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Konu
                </label>
                <select
                  name="subject"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="">Seçiniz</option>
                  <option value="arazi-olcumu">Arazi Ölçümü</option>
                  <option value="kadastro">Kadastro</option>
                  <option value="imar-planlari">İmar Planları</option>
                  <option value="jeodezik-olcumler">Jeodezik Ölçümler</option>
                  <option value="diger">Diğer</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Mesajınız
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? 'Gönderiliyor...' : 'Gönder'}
                </button>
              </div>

              {status === 'success' && (
                <div className="rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">
                        Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 