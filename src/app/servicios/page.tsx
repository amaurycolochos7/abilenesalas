"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Servicios organizados por categorías
const serviceCategories = [
    {
        id: "micropigmentacion",
        name: "Micropigmentación",
        description: "Técnicas avanzadas de maquillaje semipermanente",
        services: [
            {
                id: "cejas-microblading",
                name: "Microblading de Cejas",
                description: "Técnica pelo a pelo hiperrealista que simula vello natural. Ideal para cejas escasas o sin forma definida.",
                price: 2500,
                duration: 120,
                benefits: ["Resultado natural", "Duración 12-18 meses", "Retoque incluido"],
            },
            {
                id: "cejas-powder",
                name: "Cejas Powder Brows",
                description: "Efecto maquillado suave y difuminado. Perfecto para un look más definido y glamoroso.",
                price: 2800,
                duration: 120,
                benefits: ["Efecto maquillado", "Duración 18-24 meses", "Ideal para piel grasa"],
            },
            {
                id: "labios",
                name: "Micropigmentación de Labios",
                description: "Definición, color y volumen para tus labios. Técnicas de perfilado, degradado o color completo.",
                price: 2800,
                duration: 90,
                benefits: ["Labios definidos 24/7", "Duración 18-24 meses", "Colores personalizados"],
            },
            {
                id: "ojos",
                name: "Delineado de Ojos",
                description: "Delineado permanente superior o inferior. Realza tu mirada sin necesidad de maquillaje diario.",
                price: 2200,
                duration: 90,
                benefits: ["Mirada definida", "Duración 18-24 meses", "Diseño personalizado"],
            },
        ],
    },
    {
        id: "pestanas",
        name: "Extensiones de Pestañas",
        description: "Volumen y longitud instantánea para tu mirada",
        services: [
            {
                id: "clasicas",
                name: "Pestañas Clásicas",
                description: "Una extensión por pestaña natural. Look elegante y sutil, perfecto para el día a día.",
                price: 800,
                duration: 90,
                benefits: ["Efecto natural", "Duración 3-4 semanas", "Fácil mantenimiento"],
            },
            {
                id: "volumen",
                name: "Pestañas Volumen",
                description: "Técnica de abanico que aplica múltiples extensiones por pestaña. Mayor densidad y dramatismo.",
                price: 1200,
                duration: 120,
                benefits: ["Mayor densidad", "Duración 3-4 semanas", "Look sofisticado"],
            },
            {
                id: "mega-volumen",
                name: "Mega Volumen",
                description: "Máxima densidad y dramatismo. Ideal para eventos especiales o para quienes aman un look impactante.",
                price: 1500,
                duration: 150,
                benefits: ["Máximo impacto", "Duración 3-4 semanas", "Efecto WOW"],
            },
            {
                id: "relleno",
                name: "Relleno de Pestañas",
                description: "Mantenimiento para mantener tus extensiones perfectas. Recomendado cada 2-3 semanas.",
                price: 500,
                duration: 60,
                benefits: ["Mantén tu look", "Económico", "Rápido"],
            },
        ],
    },
    {
        id: "laser",
        name: "Tratamientos Láser",
        description: "Tecnología avanzada para depilación y rejuvenecimiento",
        services: [
            {
                id: "depilacion-facial",
                name: "Depilación Láser Facial",
                description: "Eliminación definitiva del vello facial. Incluye labio superior, mentón, patillas y mejillas.",
                price: 600,
                duration: 30,
                benefits: ["Resultados permanentes", "Piel suave", "Sin irritación"],
            },
            {
                id: "depilacion-corporal",
                name: "Depilación Láser Corporal",
                description: "Zonas como axilas, piernas, brazos o bikini. Pregunta por nuestros paquetes.",
                price: 800,
                duration: 45,
                benefits: ["Adiós a la rastrilladora", "Piel perfecta", "Paquetes disponibles"],
            },
            {
                id: "rejuvenecimiento",
                name: "Rejuvenecimiento Facial",
                description: "Estimula la producción de colágeno, reduce manchas y mejora la textura de la piel.",
                price: 1500,
                duration: 60,
                benefits: ["Piel renovada", "Reduce manchas", "Sin cirugía"],
            },
        ],
    },
];

export default function ServiciosPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredCategories =
        selectedCategory === "all"
            ? serviceCategories
            : serviceCategories.filter((cat) => cat.id === selectedCategory);

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

                        <Link href="/" className="text-gray-700 hover:text-[#d4a574] transition">
                            ← Volver
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                        Nuestros <span className="gradient-text">Servicios</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Tratamientos de belleza premium con más de 10 años de experiencia. Usamos las mejores técnicas y productos del mercado.
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="pb-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-3">
                        <button
                            onClick={() => setSelectedCategory("all")}
                            className={`px-6 py-3 rounded-full font-medium transition-all ${selectedCategory === "all"
                                ? "bg-gradient-to-r from-[#d4a574] to-[#b8845a] text-white shadow-lg"
                                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                                }`}
                        >
                            Todos
                        </button>
                        {serviceCategories.map((category) => (
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

            {/* Services Grid */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-16">
                    {filteredCategories.map((category) => (
                        <div key={category.id} className="animate-fade-in">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {category.name}
                                </h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service) => (
                                    <div key={service.id} className="card p-6 hover:shadow-xl transition-all">
                                        <div className="mb-4">
                                            <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {service.benefits.map((benefit, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-[#d4a574] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {benefit}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="flex items-end justify-between pt-4 border-t border-gray-100">
                                            <div>
                                                <div className="text-3xl font-bold gradient-text">${service.price}</div>
                                                <div className="text-sm text-gray-500">{service.duration} min</div>
                                            </div>
                                            <Link href="/reservar" className="btn-primary text-sm">
                                                Reservar
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12" style={{ fontFamily: 'var(--font-display)' }}>
                        Preguntas Frecuentes
                    </h2>

                    <div className="space-y-6">
                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">¿Duele la micropigmentación?</h3>
                            <p className="text-gray-600">Aplicamos anestesia tópica antes y durante el procedimiento para minimizar cualquier molestia. La mayoría de nuestras clientas describen la sensación como tolerable.</p>
                        </div>

                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">¿Cuánto dura el resultado?</h3>
                            <p className="text-gray-600">La micropigmentación dura entre 12-24 meses dependiendo del tipo de piel y cuidados. Las extensiones de pestañas duran 3-4 semanas con mantenimiento adecuado.</p>
                        </div>

                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">¿Incluyen retoque?</h3>
                            <p className="text-gray-600">Sí, todos los servicios de micropigmentación incluyen un retoque gratuito entre 4-8 semanas después del procedimiento inicial.</p>
                        </div>

                        <div className="card p-6">
                            <h3 className="font-semibold mb-2">¿Qué cuidados debo tener?</h3>
                            <p className="text-gray-600">Te proporcionaremos instrucciones detalladas de cuidado posterior. Generalmente incluyen evitar agua, maquillaje y sol directo en la zona tratada durante los primeros días.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            ¿Lista para tu transformación?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Agenda tu cita hoy y recibe una consulta personalizada gratuita.
                        </p>
                        <Link href="/reservar" className="inline-block bg-white text-[#2d2d2d] px-8 py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition">
                            Reservar Cita
                        </Link>
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
