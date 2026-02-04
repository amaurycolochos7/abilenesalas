
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// Placeholder data - will be replaced with API calls
const branches = [
  {
    id: "1",
    name: "DASH Studio Centro",
    slug: "dash-centro",
    address: "Av. Principal #123, Centro",
    imageUrl: "/images/branch-1.jpg",
  },
  {
    id: "2",
    name: "DASH Studio Norte",
    slug: "dash-norte",
    address: "Blvd. Norte #456, Zona Norte",
    imageUrl: "/images/branch-2.jpg",
  },
];

const services = [
  { category: "Micropigmentación", items: ["Cejas", "Labios", "Ojos"], image: "/images/services/cejas-micro.png" },
  { category: "Pestañas", items: ["Clásicas", "Volumen", "Mega Volumen"] },
  { category: "Láser", items: ["Depilación", "Rejuvenecimiento"] },
];

const galleryImages = [
  "/images/gallery/labios-01.png",
  "/images/gallery/labios-02.png",
  "/images/gallery/labios-03.png",
  "/images/gallery/labios-04.png",
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#faf9f7]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-40 sm:h-14 sm:w-48">
                <Image
                  src="/images/logo/dash-studio-logo.png"
                  alt="DASH Studio Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              <Link href="/servicios" className="text-gray-700 hover:text-[#d4a574] transition">
                Servicios
              </Link>
              <Link href="/galeria" className="text-gray-700 hover:text-[#d4a574] transition">
                Galería
              </Link>
              <Link href="/sucursales" className="text-gray-700 hover:text-[#d4a574] transition">
                Sucursales
              </Link>
              <Link href="/promociones" className="text-gray-700 hover:text-[#d4a574] transition">
                Promociones
              </Link>
              <Link href="/login" className="text-gray-700 hover:text-[#d4a574] font-medium transition">
                Iniciar sesión
              </Link>
              <Link href="/reservar" className="btn-primary">
                Reservar Cita
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link
                href="/servicios"
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/galeria"
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Galería
              </Link>
              <Link
                href="/sucursales"
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Sucursales
              </Link>
              <Link
                href="/promociones"
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Promociones
              </Link>
              <Link
                href="/login"
                className="block py-3 px-4 text-gray-700 hover:text-[#d4a574] hover:bg-gray-50 rounded-lg transition font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link
                href="/reservar"
                className="block btn-primary text-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Reservar Cita
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in order-2 lg:order-1">
              <span className="badge badge-primary mb-4 inline-flex">
                Master PMU & CEO de DASH Studio
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Realza tu <span className="gradient-text">belleza natural</span> con expertos
              </h1>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                Micropigmentación de cejas, labios y ojos. Extensiones de pestañas.
                Tratamientos láser. Con más de 10 años de experiencia transformando miradas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-0">
                <Link href="/reservar" className="btn-primary text-center w-full sm:w-auto">
                  Reservar Cita
                </Link>
                <Link href="/servicios" className="btn-secondary text-center w-full sm:w-auto">
                  Ver Servicios
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">10+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Años</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">5000+</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Clientas</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">2</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">Sucursales</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in order-1 lg:order-2" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[3/4] sm:aspect-[4/5] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/abilene-hero.png"
                  alt="Abilene Salas"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Card - Hidden on small mobile */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-fade-in max-w-[200px]" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Citas Disponibles</div>
                    <div className="text-xs text-gray-500">Reserva hoy</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Nuestras Sucursales</h2>
            <p className="section-subtitle mx-auto px-4">
              Elige la sucursal más cercana a ti y agenda tu cita
            </p>
          </div>

          <div className="space-y-4 sm:space-y-5 max-w-4xl mx-auto">
            {branches.map((branch) => (
              <Link
                key={branch.id}
                href={`/sucursales/${branch.slug}`}
                className="group block">

                <div className="card p-5 sm:p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-[#d4a574]">
                  <div className="flex items-center justify-between gap-4">
                    {/* Left: Icon + Info */}
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {/* Icon */}
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg bg-gradient-to-br from-[#f5e6d8] to-[#fef9f5] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold mb-1 group-hover:text-[#d4a574] transition">
                          {branch.name}
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 truncate">
                          {branch.address}
                        </p>
                      </div>
                    </div>

                    {/* Right: Actions */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      {/* Ver detalles link - hidden on mobile */}
                      <div className="hidden sm:flex items-center gap-1 text-[#d4a574] font-medium text-sm">
                        <span>Ver detalles</span>
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Reservar button */}
                      <button
                        onClick={(e) => { e.preventDefault(); window.location.href = `/reservar?branch=${branch.slug}`; }}
                        className="px-4 sm:px-5 py-2 bg-[#d4a574] text-white text-sm font-semibold rounded-lg hover:bg-[#b8845a] transition-colors whitespace-nowrap"
                      >
                        Reservar
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle mx-auto px-4">
              Tratamientos de belleza con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((category) => (
              <div key={category.category} className="card p-6 sm:p-8 hover:shadow-lg transition-all">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-[#f5e6d8] flex items-center justify-center mb-4 sm:mb-6 overflow-hidden relative">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.category}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-sm sm:text-base text-gray-600">
                      <svg className="w-4 h-4 text-[#d4a574] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/servicios" className="inline-block mt-4 sm:mt-6 text-[#d4a574] font-medium hover:underline text-sm sm:text-base">
                  Ver precios →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="section-title">Resultados Reales</h2>
            <p className="section-subtitle mx-auto px-4">
              Una muestra de nuestro trabajo y la transformación de nuestras clientas
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-lg sm:rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Trabajo Abilene Salas ${idx + 1} `}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-sm sm:text-base font-medium border border-white/50 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm">
                    Ver detalle
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-6 sm:mt-10">
            <Link href="/galeria" className="btn-secondary inline-block w-full sm:w-auto">
              Ver Galería Completa
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Lista para transformar tu mirada?
            </h2>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 max-w-xl mx-auto">
              Agenda tu cita hoy y descubre por qué miles de clientas confían en nosotras.
            </p>
            <Link href="/reservar" className="inline-block bg-white text-[#2d2d2d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition w-full sm:w-auto">
              Reservar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative h-12 w-40">
                  <Image
                    src="/images/logo/dash-studio-logo.png"
                    alt="DASH Studio Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-400 mb-4 max-w-md">
                Master en Micropigmentación y CEO de DASH Studio. Transformando miradas con pasión y profesionalismo.
              </p>

              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-3">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/Dash.Beauty.Studio13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#1877F2] flex items-center justify-center transition-colors group"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/abilenesalas_pmu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#e6683c] hover:to-[#dc2743] flex items-center justify-center transition-all group"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@abilenesalas_master?lang=es-419"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center transition-colors group"
                  aria-label="TikTok"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                  </svg>
                </a>

                {/* Threads */}
                <a
                  href="https://www.threads.com/@abilenesalas_pmu?xmt=AQF0MgRhTM49dIpN-7xepkq46W56BULtxQup7VoG9GhxRPU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-black flex items-center justify-center transition-colors group"
                  aria-label="Threads"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
                    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/5219612313295"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#25D366] flex items-center justify-center transition-colors group"
                  aria-label="WhatsApp"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-[#FF0000] flex items-center justify-center transition-colors group opacity-50 cursor-not-allowed"
                  aria-label="YouTube (Próximamente)"
                  title="Próximamente"
                >
                  <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Enlaces</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li><Link href="/servicios" className="hover:text-[#d4a574] transition">Servicios</Link></li>
                <li><Link href="/galeria" className="hover:text-[#d4a574] transition">Galería</Link></li>
                <li><Link href="/sucursales" className="hover:text-[#d4a574] transition">Sucursales</Link></li>
                <li><Link href="/reservar" className="hover:text-[#d4a574] transition">Reservar</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contacto</h4>
              <ul className="space-y-2 text-sm sm:text-base text-gray-400">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d4a574] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>WhatsApp: 961 231 3295</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d4a574] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <Link href="/sucursales" className="hover:text-[#d4a574] transition">Ver sucursales</Link>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#d4a574] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <a href="https://www.instagram.com/abilenesalas_pmu/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4a574] transition">@abilenesalas_pmu</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-500 text-xs sm:text-sm">
            © 2026 Abilene Salas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}

