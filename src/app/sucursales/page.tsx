"use client";

import Link from "next/link";
import Image from "next/image";

// Datos de sucursales
const branches = [
    {
        id: "1",
        name: "DASH Studio Centro",
        slug: "dash-centro",
        address: "Av. Juárez #234, Col. Centro",
        city: "Monterrey, N.L.",
        phone: "+52 81 1234 5678",
        whatsapp: "5218112345678",
        email: "centro@dashstudio.com",
        schedule: {
            weekdays: "Lunes a Viernes: 10:00 AM - 8:00 PM",
            saturday: "Sábado: 10:00 AM - 6:00 PM",
            sunday: "Domingo: Cerrado",
        },
        services: ["Micropigmentación", "Pestañas", "Láser"],
        features: [
            "Estacionamiento disponible",
            "Sala de espera premium",
            "WiFi gratuito",
            "Café de cortesía",
        ],
        mapUrl: "https://maps.google.com/?q=centro+monterrey",
        image: "/images/branches/centro.jpg",
    },
    {
        id: "2",
        name: "DASH Studio Norte",
        slug: "dash-norte",
        address: "Blvd. Antonio L. Rodríguez #456, Col. Valle Alto",
        city: "Monterrey, N.L.",
        phone: "+52 81 8765 4321",
        whatsapp: "5218187654321",
        email: "norte@dashstudio.com",
        schedule: {
            weekdays: "Lunes a Viernes: 11:00 AM - 9:00 PM",
            saturday: "Sábado: 10:00 AM - 7:00 PM",
            sunday: "Domingo: 11:00 AM - 4:00 PM",
        },
        services: ["Micropigmentación", "Pestañas", "Láser", "Tratamientos Faciales"],
        features: [
            "Plaza comercial",
            "Fácil acceso",
            "Área VIP",
            "Productos premium",
        ],
        mapUrl: "https://maps.google.com/?q=valle+alto+monterrey",
        image: "/images/branches/norte.jpg",
    },
];

export default function SucursalesPage() {
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
                        Nuestras <span className="gradient-text">Sucursales</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Visítanos en cualquiera de nuestras ubicaciones. Ambas cuentan con instalaciones premium y el mismo nivel de servicio excepcional.
                    </p>
                </div>
            </section>

            {/* Branches Grid */}
            <section className="pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto space-y-12">
                    {branches.map((branch, index) => (
                        <div
                            key={branch.id}
                            className={`card overflow-hidden ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} flex flex-col lg:flex`}
                        >
                            {/* Image */}
                            <div className="lg:w-1/2 relative h-64 lg:h-auto bg-gradient-to-br from-[#d4a574] to-[#b8845a]">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg className="w-32 h-32 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div className="absolute top-4 left-4">
                                    <span className="badge badge-primary">
                                        Sucursal #{branch.id}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="lg:w-1/2 p-8">
                                <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                                    {branch.name}
                                </h2>

                                {/* Location */}
                                <div className="mb-6">
                                    <div className="flex items-start mb-2">
                                        <svg className="w-5 h-5 text-[#d4a574] mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <div>
                                            <p className="font-medium">{branch.address}</p>
                                            <p className="text-gray-600 text-sm">{branch.city}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div className="grid md:grid-cols-2 gap-4 mb-6">
                                    <a
                                        href={`tel:${branch.phone}`}
                                        className="flex items-center text-gray-600 hover:text-[#d4a574] transition"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        {branch.phone}
                                    </a>

                                    <a
                                        href={`https://wa.me/${branch.whatsapp}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-gray-600 hover:text-green-600 transition"
                                    >
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
                                    </a>
                                </div>

                                {/* Schedule */}
                                <div className="mb-6 bg-[#fdf8f4] rounded-xl p-4">
                                    <h3 className="font-semibold mb-2 flex items-center">
                                        <svg className="w-5 h-5 text-[#d4a574] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        Horarios
                                    </h3>
                                    <div className="text-sm text-gray-600 space-y-1">
                                        <p>{branch.schedule.weekdays}</p>
                                        <p>{branch.schedule.saturday}</p>
                                        <p>{branch.schedule.sunday}</p>
                                    </div>
                                </div>

                                {/* Services & Features */}
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <div>
                                        <h3 className="font-semibold mb-2">Servicios</h3>
                                        <div className="space-y-1">
                                            {branch.services.map((service, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-[#d4a574] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {service}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="font-semibold mb-2">Amenidades</h3>
                                        <div className="space-y-1">
                                            {branch.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center text-sm text-gray-600">
                                                    <svg className="w-4 h-4 text-[#d4a574] mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                    </svg>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <Link href="/reservar" className="btn-primary text-center flex-1">
                                        Reservar Cita
                                    </Link>
                                    <a
                                        href={branch.mapUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn-secondary text-center flex-1"
                                    >
                                        Ver en Mapa
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="rounded-3xl p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            ¿No sabes cuál sucursal elegir?
                        </h2>
                        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
                            Contáctanos por WhatsApp y te ayudamos a elegir la ubicación más conveniente para ti.
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

