"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Categorías de trabajos
const categories = [
    { id: "all", name: "Todos" },
    { id: "labios", name: "Labios" },
    { id: "cejas", name: "Cejas" },
    { id: "pestanas", name: "Pestañas" },
];

// Datos de ejemplo de trabajos realizados
const galleryItems = [
    {
        id: 1,
        category: "labios",
        beforeImage: "/images/gallery/labios-01.png",
        afterImage: "/images/gallery/labios-01.png",
        title: "Micropigmentación de Labios",
        description: "Técnica degradado natural",
    },
    {
        id: 2,
        category: "labios",
        beforeImage: "/images/gallery/labios-02.png",
        afterImage: "/images/gallery/labios-02.png",
        title: "Labios Efecto Natural",
        description: "Realce sutil y elegante",
    },
    {
        id: 3,
        category: "labios",
        beforeImage: "/images/gallery/labios-03.png",
        afterImage: "/images/gallery/labios-03.png",
        title: "Perfilado de Labios",
        description: "Definición perfecta",
    },
    {
        id: 4,
        category: "labios",
        beforeImage: "/images/gallery/labios-04.png",
        afterImage: "/images/gallery/labios-04.png",
        title: "Labios Completos",
        description: "Color uniforme y duradero",
    },
];

export default function GaleriaPage() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [showBefore, setShowBefore] = useState(false);

    const filteredItems = selectedCategory === "all"
        ? galleryItems
        : galleryItems.filter(item => item.category === selectedCategory);

    const selectedItem = selectedImage !== null
        ? galleryItems.find(item => item.id === selectedImage)
        : null;

    return (
        <div className="min-h-screen bg-[#faf9f7]">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
                            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                                <Image
                                    src="/images/logo/dash-studio-logo.png"
                                    alt="DASH Studio Logo"
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
                            <span className="font-medium text-gray-700 group-hover:text-[#d4a574] transition-colors">Volver al inicio</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Galería de <span className="gradient-text">Trabajos</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Descubre la transformación de nuestras clientas. Resultados reales que hablan por sí mismos.
                    </p>
                </div>
            </section>

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

            {/* Gallery Grid */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                onClick={() => setSelectedImage(item.id)}
                                className="card p-0 overflow-hidden cursor-pointer group hover:shadow-xl transition-all"
                            >
                                <div className="relative aspect-[3/4] overflow-hidden">
                                    <Image
                                        src={item.afterImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                        <div className="text-white">
                                            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-200">{item.description}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity">
                                        Click para ampliar
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="text-center py-20">
                            <p className="text-gray-500 text-lg">No hay trabajos en esta categoría aún.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            ¿Te gustó lo que viste?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Agenda tu cita hoy y sé parte de nuestras próximas transformaciones.
                        </p>
                        <Link href="/reservar" className="inline-block bg-white text-[#2d2d2d] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition">
                            Reservar Ahora
                        </Link>
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedItem && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
                    >
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <div className="max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl mb-6">
                            <Image
                                src={showBefore ? selectedItem.beforeImage : selectedItem.afterImage}
                                alt={selectedItem.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="text-center text-white">
                            <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                            <p className="text-gray-300 mb-4">{selectedItem.description}</p>

                            <button
                                onClick={() => setShowBefore(!showBefore)}
                                className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full font-medium hover:bg-white/30 transition"
                            >
                                {showBefore ? "Ver Después" : "Ver Antes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="bg-[#2d2d2d] text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2026 Abilene Salas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}

