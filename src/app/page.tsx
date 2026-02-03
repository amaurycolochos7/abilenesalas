
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
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/images/logo/logo.png"
                  alt="Abilene Salas Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-lg sm:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                Abilene Salas
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
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
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-6 space-y-4">
              <Link href="/servicios" className="block text-gray-700 hover:text-[#d4a574]">Servicios</Link>
              <Link href="/galeria" className="block text-gray-700 hover:text-[#d4a574]">Galería</Link>
              <Link href="/sucursales" className="block text-gray-700 hover:text-[#d4a574]">Sucursales</Link>
              <Link href="/promociones" className="block text-gray-700 hover:text-[#d4a574]">Promociones</Link>
              <Link href="/reservar" className="block btn-primary text-center">Reservar Cita</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">
              <span className="badge badge-primary mb-4">
                Master PMU & CEO de DASH Studio
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Realza tu <span className="gradient-text">belleza natural</span> con expertos
              </h1>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Micropigmentación de cejas, labios y ojos. Extensiones de pestañas.
                Tratamientos láser. Con más de 10 años de experiencia transformando miradas.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/reservar" className="btn-primary text-center">
                  Reservar Cita
                </Link>
                <Link href="/galeria" className="btn-secondary text-center">
                  Ver Trabajos
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-gray-500">Años de experiencia</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">5000+</div>
                  <div className="text-sm text-gray-500">Clientas felices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text">2</div>
                  <div className="text-sm text-gray-500">Sucursales</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/images/hero/abilene-principal.png"
                  alt="Abilene Salas"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Gradient Overlay for text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold">Citas Disponibles</div>
                    <div className="text-sm text-gray-500">Reserva hoy mismo</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branches Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestras Sucursales</h2>
            <p className="section-subtitle mx-auto">
              Elige la sucursal más cercana a ti y agenda tu cita
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {branches.map((branch) => (
              <Link
                key={branch.id}
                href={`/sucursales/${branch.slug}`}
                className="card p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-[#d4a574] to-[#b8845a] flex items-center justify-center text-white shrink-0">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d4a574] transition">
                      {branch.name}
                    </h3>
                    <p className="text-gray-500 mb-4">{branch.address}</p>
                    <span className="text-[#d4a574] font-medium inline-flex items-center">
                      Ver sucursal
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Nuestros Servicios</h2>
            <p className="section-subtitle mx-auto">
              Tratamientos de belleza con los más altos estándares de calidad
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((category) => (
              <div key={category.category} className="card p-8 hover:shadow-lg transition-all">
                <div className="w-14 h-14 rounded-xl bg-[#f5e6d8] flex items-center justify-center mb-6 overflow-hidden relative">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.category}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <svg className="w-7 h-7 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center text-gray-600">
                      <svg className="w-4 h-4 text-[#d4a574] mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/servicios" className="inline-block mt-6 text-[#d4a574] font-medium hover:underline">
                  Ver precios →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Resultados Reales</h2>
            <p className="section-subtitle mx-auto">
              Una muestra de nuestro trabajo y la transformación de nuestras clientas
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden group">
                <Image
                  src={src}
                  alt={`Trabajo Abilene Salas ${idx + 1} `}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                    Ver detalle
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/galeria" className="btn-secondary inline-block">
              Ver Galería Completa
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
              ¿Lista para transformar tu mirada?
            </h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Agenda tu cita hoy y descubre por qué miles de clientas confían en nosotras.
            </p>
            <Link href="/reservar" className="inline-block bg-white text-[#2d2d2d] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition">
              Reservar Ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2d2d2d] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/logo/logo.png"
                    alt="Abilene Salas Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                  Abilene Salas
                </h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Master en Micropigmentación y CEO de DASH Studio. Transformando miradas con pasión y profesionalismo.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#d4a574]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#d4a574]">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/servicios" className="hover:text-[#d4a574]">Servicios</Link></li>
                <li><Link href="/galeria" className="hover:text-[#d4a574]">Galería</Link></li>
                <li><Link href="/sucursales" className="hover:text-[#d4a574]">Sucursales</Link></li>
                <li><Link href="/reservar" className="hover:text-[#d4a574]">Reservar</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>📱 WhatsApp: +52 XXX XXX XXXX</li>
                <li>📍 Ver sucursales</li>
                <li>📸 @dash_pmu.lash</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
            © 2026 Abilene Salas. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
}
