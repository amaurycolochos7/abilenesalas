"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Promociones activas
const promotions = [
    {
        id: "1",
        title: "Bienvenida a DASH Studio",
        subtitle: "Primera vez con nosotras",
        discount: "15%",
        description: "Obtén 15% de descuento en tu primer servicio de micropigmentación o extensiones de pestañas.",
        validUntil: "2026-03-31",
        conditions: [
            "Válido solo para nuevas clientas",
            "No acumulable con otras promociones",
            "Mencionar código: BIENVENIDA15",
        ],
        category: "nuevos",
        featured: true,
    },
    {
        id: "2",
        title: "Paquete Cejas + Labios",
        subtitle: "Combo micropigmentación",
        discount: "$4,800",
        originalPrice: "$5,300",
        description: "Ahorra $500 al combinar micropigmentación de cejas y labios en una sola reserva.",
        validUntil: "2026-02-28",
        conditions: [
            "Ambos servicios en la misma semana",
            "Incluye retoque de ambos",
            "Consulta personalizada incluida",
        ],
        category: "paquetes",
        featured: true,
    },
    {
        id: "3",
        title: "Extensiones Ilimitadas",
        subtitle: "Membresía mensual",
        discount: "$1,800/mes",
        originalPrice: "$2,400",
        description: "Membresía mensual que incluye aplicación + 2 rellenos. Pestañas perfectas todo el mes.",
        validUntil: "2026-12-31",
        conditions: [
            "Compromiso mínimo 3 meses",
            "Agendar con anticipación",
            "Incluye limpieza de pestañas",
        ],
        category: "paquetes",
        featured: false,
    },
    {
        id: "4",
        title: "Depilación Láser - 3x2",
        subtitle: "Oferta por temporada",
        discount: "3x2",
        description: "Compra 3 sesiones y paga solo 2. Válido para rostro completo o zonas corporales.",
        validUntil: "2026-03-15",
        conditions: [
            "Aplicable a cualquier zona",
            "Las 3 sesiones deben usarse en 6 meses",
            "No transferible",
        ],
        category: "temporada",
        featured: false,
    },
    {
        id: "5",
        title: "Trae a tu Amiga",
        subtitle: "Ganan ambas",
        discount: "10%",
        description: "Trae a una amiga nueva y ambas reciben 10% de descuento en cualquier servicio.",
        validUntil: "2026-12-31",
        conditions: [
            "Tu amiga debe ser cliente nueva",
            "Aplica en la misma cita",
            "Sin límite de usos",
        ],
        category: "nuevos",
        featured: false,
    },
    {
        id: "6",
        title: "Cumpleañeras VIP",
        subtitle: "Tu mes especial",
        discount: "20%",
        description: "Celebra tu cumpleaños con 20% de descuento en el servicio de tu elección durante tu mes.",
        validUntil: "2026-12-31",
        conditions: [
            "Válido durante tu mes de cumpleaños",
            "Presentar identificación oficial",
            "Una vez por año",
        ],
        category: "especial",
        featured: false,
    },
];

const categories = [
    { id: "all", name: "Todas" },
    { id: "nuevos", name: "Nuevas Clientas" },
    { id: "paquetes", name: "Paquetes" },
    { id: "temporada", name: "Temporada" },
    { id: "especial", name: "Especiales" },
];

export default function PromocionesPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");

    const filteredPromotions =
        selectedCategory === "all"
            ? promotions
            : promotions.filter((promo) => promo.category === selectedCategory);

    const featuredPromotions = promotions.filter((promo) => promo.featured);

    return (
        <div className="min-h-screen bg-[#faf9f7]">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
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

                        <Link
                            href="/"
                            className="group flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-[#d4a574] hover:bg-[#fef9f5] transition-all"
                        >
                            <svg className="w-5 h-5 text-gray-600 group-hover:text-[#d4a574] transition-colors group-hover:-translate-x-1 transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="font-medium text-gray-700 group-hover:text-[#d4a574] transition-colors">Volver</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <span className="badge badge-primary mb-4 inline-block">
                        🎉 Promociones Activas
                    </span>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        <span className="gradient-text">Ofertas Especiales</span> para Ti
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Aprovecha nuestras promociones exclusivas y ahorra en los mejores tratamientos de belleza.
                    </p>
                </div>
            </section>

            {/* Featured Promotions */}
            {featuredPromotions.length > 0 && (
                <section className="pb-12 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <svg className="w-6 h-6 text-[#d4a574] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            Destacadas
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredPromotions.map((promo) => (
                                <div key={promo.id} className="card p-8 relative overflow-hidden hover:shadow-xl transition-all">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#d4a574] to-[#b8845a] opacity-10 rounded-full -mr-16 -mt-16" />

                                    <div className="relative">
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                                    {promo.title}
                                                </h3>
                                                <p className="text-gray-600 text-sm">{promo.subtitle}</p>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-4xl font-bold gradient-text">{promo.discount}</div>
                                                {promo.originalPrice && (
                                                    <div className="text-sm text-gray-400 line-through">{promo.originalPrice}</div>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-6">{promo.description}</p>

                                        <div className="mb-6">
                                            <h4 className="font-semibold mb-2 text-sm">Condiciones:</h4>
                                            <ul className="space-y-1">
                                                {promo.conditions.map((condition, idx) => (
                                                    <li key={idx} className="flex items-start text-sm text-gray-600">
                                                        <svg className="w-4 h-4 text-[#d4a574] mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                        {condition}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                            <div className="text-sm text-gray-500">
                                                Válido hasta: <strong>{new Date(promo.validUntil).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                                            </div>
                                            <Link href="/reservar" className="btn-primary text-sm">
                                                Reservar
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Category Filter */}
            <section className="pb-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === category.id
                                    ? "bg-gradient-to-r from-[#d4a574] to-[#b8845a] text-white shadow-lg"
                                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Promotions Grid */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredPromotions.map((promo) => (
                            <div key={promo.id} className="card p-6 hover:shadow-xl transition-all">
                                <div className="mb-4">
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-xl font-bold flex-1" style={{ fontFamily: 'var(--font-display)' }}>
                                            {promo.title}
                                        </h3>
                                        <span className="px-3 py-1 bg-[#f5e6d8] text-[#d4a574] rounded-full text-sm font-semibold ml-2">
                                            {promo.discount}
                                        </span>
                                    </div>
                                    <p className="text-gray-600 text-sm">{promo.subtitle}</p>
                                </div>

                                <p className="text-gray-600 text-sm mb-4">{promo.description}</p>

                                <div className="mb-4">
                                    <ul className="space-y-1">
                                        {promo.conditions.slice(0, 2).map((condition, idx) => (
                                            <li key={idx} className="flex items-start text-xs text-gray-500">
                                                <svg className="w-3 h-3 text-[#d4a574] mr-1 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                {condition}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-4 border-t border-gray-100">
                                    <div className="text-xs text-gray-400 mb-3">
                                        Válido hasta {new Date(promo.validUntil).toLocaleDateString('es-MX')}
                                    </div>
                                    <Link href="/reservar" className="btn-primary text-sm w-full text-center block">
                                        Aprovechar Oferta
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredPromotions.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No hay promociones en esta categoría actualmente.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Info Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8" style={{ fontFamily: 'var(--font-display)' }}>
                        Términos y Condiciones
                    </h2>
                    <div className="card p-8 text-gray-600 space-y-4">
                        <p>
                            • Todas las promociones están sujetas a disponibilidad y pueden cambiar sin previo aviso.
                        </p>
                        <p>
                            • Las promociones no son acumulables con otras ofertas salvo que se especifique lo contrario.
                        </p>
                        <p>
                            • Es necesario mencionar el código de promoción al momento de reservar tu cita.
                        </p>
                        <p>
                            • Los descuentos aplican sobre el precio regular de los servicios.
                        </p>
                        <p>
                            • DASH Studio se reserva el derecho de modificar o cancelar promociones en cualquier momento.
                        </p>
                        <p>
                            • Para más información sobre alguna promoción específica, contáctanos por WhatsApp.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            ¿Tienes dudas sobre alguna promoción?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Contáctanos por WhatsApp y nuestro equipo te ayudará a elegir la mejor opción para ti.
                        </p>
                        <a
                            href="https://wa.me/5218112345678"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-white text-[#2d2d2d] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition"
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            Contactar por WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2d2d2d] text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2026 Abilene Salas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
