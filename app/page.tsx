'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { MapIcon, BuildingOfficeIcon, GlobeAltIcon, ChartBarIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRef } from 'react';
import Link from 'next/link';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-100/50 via-fuchsia-100/50 to-pink-100/50"></div>
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>
        
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 text-center px-4 max-w-5xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-violet-100 text-violet-600 text-sm font-medium mb-4">
              Modern Harita Mühendisliği
            </span>
            <h1 className="text-7xl md:text-9xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600">
              Pusula Harita
            </h1>
            <p className="text-xl md:text-2xl text-violet-700 max-w-3xl mx-auto">
              Geleceğin haritalarını bugünden çiziyoruz. Modern teknoloji ve uzman kadromuzla projelerinizi hayata geçiriyoruz.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link href="/hizmetlerimiz">
              <button className="group relative px-8 py-4 bg-violet-600 text-white rounded-full font-semibold overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Hizmetlerimizi Keşfedin
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>
            </Link>
            <Link href="/iletisim">
              <button className="px-8 py-4 border-2 border-violet-600/20 text-violet-600 rounded-full font-semibold hover:bg-violet-50 transition-colors">
                İletişime Geçin
              </button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="relative py-32 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="text-violet-600 font-medium">Hizmetlerimiz</span>
            <h2 className="text-4xl md:text-6xl font-bold text-violet-900 mt-4 mb-6">
              Kapsamlı Çözümler
            </h2>
            <p className="text-violet-700 max-w-2xl mx-auto text-lg">
              Modern teknolojiler ve uzman kadromuzla, harita mühendisliği alanında ihtiyacınız olan tüm çözümleri sunuyoruz.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: MapIcon,
                title: "Harita Çizimi",
                description: "Profesyonel harita çizimi ve düzenleme hizmetleri ile projelerinizi hayata geçiriyoruz.",
                color: "from-violet-500 to-fuchsia-500"
              },
              {
                icon: BuildingOfficeIcon,
                title: "Kadastro",
                description: "Kadastro ölçümleri ve belgelendirme işlemlerinde uzman çözümler sunuyoruz.",
                color: "from-fuchsia-500 to-pink-500"
              },
              {
                icon: GlobeAltIcon,
                title: "GPS Ölçümleri",
                description: "Hassas GPS ölçümleri ve konumlandırma hizmetleri ile kesin sonuçlar elde ediyoruz.",
                color: "from-pink-500 to-rose-500"
              },
              {
                icon: ChartBarIcon,
                title: "Arazi Analizi",
                description: "Detaylı arazi analizi ve raporlama ile projelerinize değer katıyoruz.",
                color: "from-rose-500 to-violet-500"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-violet-900 mb-4">{service.title}</h3>
                  <p className="text-violet-700">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl opacity-10 blur-2xl"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                <span className="text-violet-600 font-medium">Hakkımızda</span>
                <h2 className="text-4xl md:text-5xl font-bold text-violet-900 mt-4 mb-8">
                  Geleceği Şekillendiriyoruz
                </h2>
                <p className="text-violet-700 mb-6 text-lg">
                  Pusula Harita olarak, 20 yılı aşkın deneyimimizle harita mühendisliği alanında öncü çözümler sunuyoruz. 
                  Modern teknolojiler ve uzman kadromuzla, projelerinizi en yüksek kalitede tamamlıyoruz.
                </p>
                <p className="text-violet-700 mb-8 text-lg">
                  Müşteri memnuniyeti ve kaliteli hizmet anlayışımızla, sektörde güvenilir bir çözüm ortağı olmaya devam ediyoruz.
                </p>
                <Link href="/hakkimizda" className="group relative px-8 py-4 bg-violet-600 text-white rounded-full font-semibold overflow-hidden inline-block">
                  <span className="relative z-10 flex items-center gap-2">
                    Daha Fazla Bilgi
                    <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Katalog Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-violet-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Katalog</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tüm projelerimizi ve hizmetlerimizi içeren kataloğumuzu aşağıdan inceleyebilir veya indirebilirsiniz.
            </p>
            <a
              href="/images/Katalog.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-violet-600 text-white rounded-full font-semibold shadow hover:bg-violet-700 transition-colors mb-4 mt-8"
            >
              Kataloğu Görüntüle / İndir
            </a>
            <div className="mt-8 flex justify-center">
              <iframe
                src="/images/Katalog.pdf"
                width="100%"
                height="600"
                style={{ maxWidth: '900px', border: 0 }}
                title="Katalog PDF"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 bg-violet-50">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "20+", label: "Yıllık Deneyim", color: "from-violet-500 to-fuchsia-500" },
              { number: "1000+", label: "Tamamlanan Proje", color: "from-fuchsia-500 to-pink-500" },
              { number: "50+", label: "Uzman Personel", color: "from-pink-500 to-rose-500" },
              { number: "100%", label: "Müşteri Memnuniyeti", color: "from-rose-500 to-violet-500" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="absolute -inset-4 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl opacity-10 blur-2xl"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg">
                  <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-violet-700">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 