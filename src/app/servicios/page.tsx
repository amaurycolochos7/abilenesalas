"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Type definition for services
interface Service {
    id: string;
    name: string;
    description: string;
    price: number;
    duration: number;
    benefits: string[];
    images?: string[];
}

interface ServiceCategory {
    id: string;
    name: string;
    description: string;
    services: Service[];
}

// Servicios organizados por categorías
const serviceCategories: ServiceCategory[] = [
    {
        id: "micropigmentacion",
        name: "Micropigmentación",
        description: "Técnicas avanzadas de maquillaje semipermanente",
        services: [
            {
                id: "cejas-microblading",
                name: "Microblading",
                description: "Técnica de micropigmentación que recrea cada vello de la ceja de manera individual con micro cortes, logrando un efecto natural de cejas rellenas y definidas. Apta únicamente para pieles secas de 19 a 35 años. NO ES APTO PARA PIELES SENSIBLES. Duración de hasta 1 a 2 años con su retoque (Costo de retoque $1,500).",
                price: 5000,
                duration: 120,
                benefits: ["Efecto natural pelo a pelo", "Solo pieles secas (19-35 años)", "NO apto pieles sensibles", "Duración 1-2 años"],
            },
            {
                id: "cejas-powder",
                name: "Powder Brows",
                description: "Cejas con efecto maquillaje, diseñadas con mi técnica original de sombreado: perfeccionada por mí y única en su calidad en Chiapas. Aunque hoy en día otros intentan replicarla, ninguna logra el acabado, duración y tono que yo consigo. No cambian a colores indeseados, son ideales para piel grasa, cicatrizan suave y su diseño es 100% personalizado. Duración de 2 a 4 años con su retoque / El retoque tiene costo de $1,500",
                price: 5000,
                duration: 120,
                benefits: ["Técnica exclusiva único en Chiapas", "No cambian a colores indeseados", "Ideales para piel grasa", "Cicatrización suave", "Diseño 100% personalizado", "Duración de 2 a 4 años"],
            },
            {
                id: "luxury-brows",
                name: "Luxury Brows",
                description: "🇨🇴 Desde Colombia, traigo a Chiapas una técnica exclusiva y de alto nivel: Luxury Brows. Un sombreado delicadamente difuminado que deja un efecto maquillaje natural, suave y elegante. Apta para todo tipo de pieles, incluso las más sensibles. Cicatriza limpio, sin costras visibles, y mantiene su color intacto con el paso del tiempo. Duración de 2 a 3 años con su retoque (Costo de retoque $1,500).",
                price: 5000,
                duration: 150,
                benefits: ["Técnica exclusiva de Colombia 🇨🇴", "Efecto maquillaje natural y suave", "Apta para pieles sensibles", "Cicatriza sin costras visibles"],
            },
            {
                id: "cejas-latin-brows",
                name: "Latín Brows",
                description: "Técnica de micropigmentación híbrida que combina dos mundos: Powder y Microblading. Perfecta para quienes buscan cejas bien estructuradas y con un acabado equilibrado entre lo natural y lo delineado. Es apto para pieles seca, normal y mixta. Dando un aspecto hermoso y equilibrado. Duración de 2 a 3 años con su retoque (Costo de retoque es de $1,500).",
                price: 5000,
                duration: 120,
                benefits: ["Técnica híbrida (Powder + Microblading)", "Cejas estructuradas y equilibradas", "Apto piel seca, normal y mixta", "Duración 2-3 años"],
            },
            {
                id: "neutralizacion-labial",
                name: "Neutralización Labial",
                description: "Técnica de micropigmentación labial para aclarar labios oscuros y con manchas. Deja un tono uniforme, natural y delicado. Retoque a los 3 meses (Costo de retoque $3,000).",
                price: 8000,
                duration: 150,
                benefits: ["Aclara labios oscuros", "Tono uniforme y natural", "Efecto delicado"],
            },
            {
                id: "micro-lips",
                name: "Micro Lips",
                description: "Micropigmentación labial que ofrece un color natural con efecto de volumen ruso. Define y realza la forma, logrando un aspecto voluminoso y elegante. Acabado suave y sofisticado. Retoque a los 3 meses (Costo de retoque $3,000).",
                price: 8000,
                duration: 150,
                benefits: ["Volumen ruso visual", "Color natural", "Acabado suave y esponjoso"],
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
                id: "efecto-rimel",
                name: "Efecto Rímel",
                description: "Consiste en llevarte una extensión flat por pestaña. Material premium (Da un aspecto de más grosor y negras: al ser flat su peso es el mismo que una clásica, pero su resultado es distinto)",
                price: 900,
                duration: 100,
                benefits: ["Aspecto de más grosor", "Color negro intenso", "Peso ligero (Flat)"],
            },
            {
                id: "clasicas",
                name: "Pestañas Clásicas",
                description: "Consiste en llevarte una extensión por pestaña. Material premium (son mates y ligeras: te da un aspecto natural).",
                price: 900,
                duration: 90,
                benefits: ["Efecto natural", "Material premium (Mate/Ligero)", "Una extensión por pestaña"],
            },
            {
                id: "volumen-griego",
                name: "Volumen Griego",
                description: "El volumen más ligero y elegante. Una técnica sofisticada para quienes buscan un realce notorio pero refinado.",
                price: 900,
                duration: 100,
                benefits: ["Volumen ligero y elegante", "Acabado sofisticado", "Duración 3-4 semanas"],
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

// Helper para formatear precio
const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 2
    }).format(price) + ' MXN';
};

export default function ServiciosPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [selectedService, setSelectedService] = useState<any>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(-1);

    const filteredCategories =
        selectedCategory === "all"
            ? serviceCategories
            : serviceCategories.filter((cat) => cat.id === selectedCategory);

    // Update Powder Brows data with images if not present in source
    const enhancedServiceCategories = serviceCategories.map(cat => ({
        ...cat,
        services: cat.services.map(service => {
            if (service.id === 'cejas-powder' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/powder-brows/1.png",
                        "/images/services/powder-brows/2.jpg",
                        "/images/services/powder-brows/3.jpg",
                        "/images/services/powder-brows/4.png",
                        "/images/services/powder-brows/5.png"
                    ]
                };
            }
            if (service.id === 'cejas-microblading' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/microblading/1.png",
                        "/images/services/microblading/2.jpg",
                        "/images/services/microblading/3.jpg",
                        "/images/services/microblading/4.jpg",
                        "/images/services/microblading/5.png"
                    ]
                };
            }
            if (service.id === 'cejas-latin-brows' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/latin-brows/1.jpg",
                        "/images/services/latin-brows/2.jpg",
                        "/images/services/latin-brows/3.jpg"
                    ]
                };
            }
            if (service.id === 'luxury-brows' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/luxury-brows/1.jpg",
                        "/images/services/luxury-brows/2.jpg"
                    ]
                };
            }
            if (service.id === 'neutralizacion-labial' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/neutralizacion-labial/1.jpg"
                    ]
                };
            }
            if (service.id === 'micro-lips' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/micro-lips/1.jpg",
                        "/images/services/micro-lips/2.jpg",
                        "/images/services/micro-lips/3.png",
                        "/images/services/micro-lips/4.jpg",
                        "/images/services/micro-lips/5.png"
                    ]
                };
            }
            if (service.id === 'volumen-griego' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/volumen-griego/1.png",
                        "/images/services/volumen-griego/2.png"
                    ]
                };
            }

            if (service.id === 'efecto-rimel' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/efecto-rimel/1.png",
                        "/images/services/efecto-rimel/2.png",
                        "/images/services/efecto-rimel/3.png"
                    ]
                };
            }

            if (service.id === 'clasicas' && !service.images) {
                return {
                    ...service,
                    images: [
                        "/images/services/clasicas/1.png",
                        "/images/services/clasicas/2.jpg",
                        "/images/services/clasicas/3.jpg"
                    ]
                };
            }
            return service;
        })
    }));

    const activeCategories = selectedCategory === "all"
        ? enhancedServiceCategories
        : enhancedServiceCategories.filter(cat => cat.id === selectedCategory);

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
                            <span className="font-medium text-gray-700 group-hover:text-[#d4a574] transition-colors">Volver</span>
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
                        Tratamientos de belleza premium con más de 10 años de experiencia.
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
                    {activeCategories.map((category) => (
                        <div key={category.id} className="animate-fade-in">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                    {category.name}
                                </h2>
                                <p className="text-gray-600">{category.description}</p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {category.services.map((service) => (
                                    <div
                                        key={service.id}
                                        className="card group p-6 hover:shadow-xl transition-all cursor-pointer relative overflow-hidden border border-transparent hover:border-[#d4a574]/30"
                                        onClick={() => setSelectedService(service)}
                                    >
                                        {/* Tap Hint Animation */}
                                        <div className="absolute top-4 right-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                            <div className="relative">
                                                <div className="w-8 h-8 bg-[#d4a574]/10 rounded-full flex items-center justify-center animate-pulse">
                                                    <svg className="w-5 h-5 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mb-4 pr-10">
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-[#d4a574] transition-colors">{service.name}</h3>
                                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">{service.description}</p>
                                        </div>

                                        <div className="space-y-2 mb-6">
                                            {service.benefits.slice(0, 3).map((benefit, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-[#d4a574] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    <span className="truncate">{benefit}</span>
                                                </div>
                                            ))}
                                            {service.benefits.length > 3 && (
                                                <div className="text-xs text-[#d4a574] pl-6 italic">
                                                    + {service.benefits.length - 3} beneficios más...
                                                </div>
                                            )}
                                        </div>

                                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-4 border-t border-gray-100 mt-auto">
                                            <div>
                                                <div className="text-2xl font-bold gradient-text">{formatPrice(service.price)}</div>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedService(service);
                                                }}
                                                className="btn-primary text-sm px-4 py-2 text-center w-full sm:w-auto"
                                            >
                                                Ver Detalles
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Service Details Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={() => setSelectedService(null)}>
                    <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl relative flex flex-col" onClick={e => e.stopPropagation()}>
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>

                        <div className="grid md:grid-cols-2">
                            {/* Gallery Section */}
                            <div className="bg-gray-100 min-h-[300px] md:min-h-[500px] relative">
                                {selectedService.images && selectedService.images.length > 0 ? (
                                    <div className="h-full grid grid-rows-2 gap-1 p-1">
                                        <div className="relative row-span-1">
                                            <Image
                                                src={selectedService.images[0]}
                                                alt={selectedService.name}
                                                fill
                                                className="object-cover cursor-zoom-in"
                                                onClick={() => setCurrentImageIndex(0)}
                                            />
                                        </div>
                                        <div className={`grid gap-1 row-span-1 ${selectedService.images.length === 2 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                                            {selectedService.images.slice(1, 3).map((img: string, idx: number) => (
                                                <div key={idx} className="relative group cursor-zoom-in" onClick={() => setCurrentImageIndex(idx + 1)}>
                                                    <Image
                                                        src={img}
                                                        alt={`${selectedService.name} ${idx + 2}`}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    {/* Overlay for +N images on the last visible image (index 1 of slice => index 2 of full array) */}
                                                    {idx === 1 && selectedService.images.length > 3 && (
                                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-bold text-xl backdrop-blur-[2px] transition-all hover:bg-black/60">
                                                            +{selectedService.images.length - 3}
                                                        </div>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-full flex items-center justify-center text-gray-400">
                                        <div className="text-center">
                                            <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            <p>Imágenes próximamente</p>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="p-5 sm:p-8 overflow-y-auto">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-2 pr-8" style={{ fontFamily: 'var(--font-display)' }}>
                                    {selectedService.name}
                                </h2>
                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-6 border-b border-gray-100">
                                    {selectedService.durability && (
                                        <div className="flex items-center">
                                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                            {selectedService.durability}
                                        </div>
                                    )}
                                </div>

                                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                                    {selectedService.fullDescription || selectedService.description}
                                </p>

                                <div className="space-y-4 mb-8">
                                    <h4 className="font-semibold text-gray-900">Beneficios:</h4>
                                    <ul className="space-y-2">
                                        {selectedService.benefits.map((benefit: string, idx: number) => (
                                            <li key={idx} className="flex items-start text-sm text-gray-600">
                                                <svg className="w-5 h-5 text-[#d4a574] mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                                <span className="break-words">{benefit}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="bg-[#fef9f5] p-6 rounded-xl border border-[#d4a574]/20 text-center">
                                    <div className="text-sm text-gray-500 mb-1">Precio total</div>
                                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
                                        {formatPrice(selectedService.price)}
                                    </div>
                                    <Link href={`/reservar?service=${selectedService.id}`} className="btn-primary w-full block">
                                        Reservar ahora
                                    </Link>
                                    <p className="text-xs text-gray-400 mt-4">
                                        * Se requiere un anticipo para asegurar tu cita
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Image Lightbox Carousel */}
            {currentImageIndex !== -1 && selectedService && (
                <div
                    className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-md flex items-center justify-center animate-fade-in p-4"
                    onClick={() => setCurrentImageIndex(-1)}
                >
                    <button
                        onClick={() => setCurrentImageIndex(-1)}
                        className="absolute top-4 right-4 z-[210] w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-all backdrop-blur-md"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Navigation Buttons */}
                    {selectedService.images.length > 1 && (
                        <>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : selectedService.images.length - 1));
                                }}
                                className="absolute left-4 z-[210] p-3 text-white/70 hover:text-white transition-colors"
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex((prev) => (prev < selectedService.images.length - 1 ? prev + 1 : 0));
                                }}
                                className="absolute right-4 z-[210] p-3 text-white/70 hover:text-white transition-colors"
                            >
                                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </>
                    )}

                    <div className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <Image
                            src={selectedService.images[currentImageIndex]}
                            alt={`Imagen ${currentImageIndex + 1} de ${selectedService.name}`}
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80 text-sm font-medium px-4 py-2 bg-black/40 rounded-full backdrop-blur-sm">
                            {currentImageIndex + 1} / {selectedService.images.length}
                        </div>
                    </div>
                </div>
            )}

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
                            <p className="text-gray-600">La mayoría de los servicios de micropigmentación incluyen un retoque en el precio. Para Powder Brows, el retoque tiene un costo de $1,500 MXN entre los 4-8 semanas, y se recomienda para mantener el resultado óptimo durante 2-4 años.</p>
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

