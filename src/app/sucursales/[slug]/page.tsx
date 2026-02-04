"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { use } from "react";

// Datos de sucursales - Esto debería venir del backend
const branches = [
    {
        id: "1",
        name: "DASH Studio Centro",
        slug: "dash-centro",
        address: "Av. Principal #123, Centro",
        phone: "+52 XXX XXX XXXX",
        email: "centro@dash-studio.com",
        hours: {
            weekdays: "Lun - Vie: 10:00 AM - 8:00 PM",
            saturday: "Sáb: 10:00 AM - 6:00 PM",
            sunday: "Dom: Cerrado",
        },
        mapUrl: "https://maps.google.com",
        imageUrl: "/images/branch-1.jpg",
        services: [
            "Micropigmentación de Cejas",
            "Micropigmentación de Labios",
            "Extensiones de Pestañas",
            "Tratamientos Láser",
        ],
    },
    {
        id: "2",
        name: "DASH Studio Norte",
        slug: "dash-norte",
        address: "Blvd. Norte #456, Zona Norte",
        phone: "+52 XXX XXX XXXX",
        email: "norte@dash-studio.com",
        hours: {
            weekdays: "Lun - Vie: 9:00 AM - 7:00 PM",
            saturday: "Sáb: 9:00 AM - 5:00 PM",
            sunday: "Dom: Cerrado",
        },
        mapUrl: "https://maps.google.com",
        imageUrl: "/images/branch-2.jpg",
        services: [
            "Micropigmentación de Cejas",
            "Micropigmentación de Labios",
            "Extensiones de Pestañas",
            "Depilación Láser",
        ],
    },
];

export default function BranchPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const branch = branches.find((b) => b.slug === slug);

    if (!branch) {
        notFound();
    }

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
                            className="group flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-gray-200 hover:border-[#d4a574] hover:bg-[#fef9f5] transition-all text-sm sm:text-base"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-[#d4a574] transition-colors group-hover:-translate-x-1 transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            <span className="font-medium text-gray-700 group-hover:text-[#d4a574] transition-colors">Volver al inicio</span>
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="inline-flex items-center space-x-2 bg-[#f5e6d8] px-4 py-2 rounded-full mb-4">
                            <svg className="w-5 h-5 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            </svg>
                            <span className="text-[#d4a574] font-medium text-sm sm:text-base">Sucursal</span>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            {branch.name}
                        </h1>
                        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                            {branch.address}
                        </p>
                    </div>

                    {/* Quick Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16">
                        <Link
                            href={`/reservar?branch=${slug}`}
                            className="btn-primary text-center w-full sm:w-auto"
                        >
                            Reservar Cita
                        </Link>
                        <a
                            href={`tel:${branch.phone.replace(/\s/g, '')}`}
                            className="btn-secondary text-center w-full sm:w-auto"
                        >
                            Llamar Ahora
                        </a>
                        <a
                            href={branch.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-center w-full sm:w-auto"
                        >
                            Ver Mapa
                        </a>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
                        {/* Horarios */}
                        <div className="card p-6 sm:p-8">
                            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#f5e6d8] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                    Horarios
                                </h2>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base">
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Lunes - Viernes</span>
                                    <span className="font-medium">{branch.hours.weekdays.split(': ')[1]}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Sábado</span>
                                    <span className="font-medium">{branch.hours.saturday.split(': ')[1]}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-600">Domingo</span>
                                    <span className="font-medium text-gray-400">{branch.hours.sunday.split(': ')[1]}</span>
                                </div>
                            </div>
                        </div>

                        {/* Contacto */}
                        <div className="card p-6 sm:p-8">
                            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
                                <div className="w-12 h-12 rounded-xl bg-[#f5e6d8] flex items-center justify-center">
                                    <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold" style={{ fontFamily: 'var(--font-display)' }}>
                                    Contacto
                                </h2>
                            </div>
                            <div className="space-y-3 text-sm sm:text-base">
                                <div>
                                    <span className="text-gray-600 block mb-1">Teléfono</span>
                                    <a href={`tel:${branch.phone.replace(/\s/g, '')}`} className="font-medium hover:text-[#d4a574] transition">
                                        {branch.phone}
                                    </a>
                                </div>
                                <div>
                                    <span className="text-gray-600 block mb-1">Email</span>
                                    <a href={`mailto:${branch.email}`} className="font-medium hover:text-[#d4a574] transition">
                                        {branch.email}
                                    </a>
                                </div>
                                <div>
                                    <span className="text-gray-600 block mb-1">Dirección</span>
                                    <p className="font-medium">{branch.address}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Servicios Disponibles */}
                    <div className="card p-6 sm:p-8 mt-6 sm:mt-8">
                        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                            Servicios Disponibles
                        </h2>
                        <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                            {branch.services.map((service, idx) => (
                                <div key={idx} className="flex items-center space-x-3 p-3 sm:p-4 bg-[#faf9f7] rounded-xl">
                                    <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-sm sm:text-base text-gray-700">{service}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-3xl mx-auto">
                    <div className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center text-white" style={{ background: 'var(--gradient-dark)' }}>
                        <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            ¿Lista para tu cita?
                        </h2>
                        <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
                            Agenda tu cita en {branch.name} y comienza tu transformación hoy
                        </p>
                        <Link href={`/reservar?branch=${slug}`} className="inline-block bg-white text-[#2d2d2d] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#f5e6d8] transition w-full sm:w-auto">
                            Reservar en esta Sucursal
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#2d2d2d] text-white py-6 sm:py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center text-gray-400 text-xs sm:text-sm">
                    <p>© 2026 Abilene Salas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
