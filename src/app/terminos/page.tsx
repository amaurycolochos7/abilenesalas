"use client";

import Link from "next/link";
import Image from "next/image";

export default function TerminosPage() {
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
                            href="/registro"
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

            {/* Content */}
            <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-center" style={{ fontFamily: 'var(--font-display)' }}>
                        Términos y <span className="gradient-text">Condiciones</span>
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Última actualización: Febrero 2026
                    </p>

                    <div className="card p-8 space-y-8">
                        {/* 1. Aceptación */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                1. Aceptación de Términos
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Al acceder y utilizar la plataforma de Abilene Salas, aceptas estar sujeto a estos Términos y Condiciones.
                                Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                            </p>
                        </section>

                        {/* 2. Servicios */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                2. Descripción de Servicios
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Abilene Salas ofrece servicios de micropigmentación, extensiones de pestañas, depilación láser y tratamientos faciales.
                                Todos los servicios son realizados por profesionales certificados y con experiencia.
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Los resultados pueden variar según el tipo de piel y cuidados posteriores</li>
                                <li>Se requiere evaluación previa para algunos tratamientos</li>
                                <li>Los precios están sujetos a cambios sin previo aviso</li>
                            </ul>
                        </section>

                        {/* 3. Reservas y Citas */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                3. Reservas y Cancelaciones
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p className="font-semibold">Política de Reservas:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Las citas deben reservarse con al menos 24 horas de anticipación</li>
                                    <li>Se requiere confirmación vía WhatsApp o correo electrónico</li>
                                    <li>Algunos servicios pueden requerir anticipo o pago total</li>
                                </ul>
                                <p className="font-semibold mt-4">Política de Cancelación:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Cancela con al menos 24 horas de anticipación para evitar cargos</li>
                                    <li>No presentarse sin aviso puede resultar en cargos del 50% del servicio</li>
                                    <li>Reprogramaciones están sujetas a disponibilidad</li>
                                </ul>
                            </div>
                        </section>

                        {/* 4. Uso de Datos */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                4. Uso de Información Personal
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Al registrarte en nuestra plataforma, aceptas que podemos utilizar tu información para:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Gestionar tus citas y comunicarnos contigo sobre tus servicios</li>
                                <li>Mejorar la calidad de nuestros servicios y experiencia del cliente</li>
                                <li>Enviarte promociones, ofertas especiales y novedades (con opción de cancelar)</li>
                                <li>Realizar campañas de marketing personalizadas</li>
                                <li>Solicitar retroalimentación y testimonio sobre nuestros servicios</li>
                                <li>Recordatorios de citas y seguimientos post-tratamiento</li>
                            </ul>
                        </section>

                        {/* 5. Consentimiento Informado */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                5. Consentimiento para Tratamientos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Al agendar servicios de micropigmentación, extensiones de pestañas o tratamientos láser, confirmas que:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Has proporcionado información médica completa y veraz</li>
                                <li>Comprendes los riesgos y beneficios del procedimiento</li>
                                <li>Seguirás las instrucciones de cuidado posterior</li>
                                <li>Autorizas el uso de fotografías del antes/después para fines promocionales (con tu consentimiento explícito)</li>
                            </ul>
                        </section>

                        {/* 6. Garantía y Retoques */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                6. Garantía y Política de Retoques
                            </h2>
                            <div className="space-y-3 text-gray-700">
                                <p>Los servicios de micropigmentación incluyen un retoque dentro del período establecido:</p>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>El retoque debe realizarse en el tiempo indicado para cada servicio</li>
                                    <li>Algunos retoques pueden tener costo adicional</li>
                                    <li>El no seguir los cuidados posteriores puede anular la garantía</li>
                                </ul>
                            </div>
                        </section>

                        {/* 7. Propiedad Intelectual */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                7. Propiedad Intelectual
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Todas las técnicas, diseños, contenido y material visual de Abilene Salas son propiedad exclusiva.
                                La técnica de sombreado Powder Brows es una técnica original desarrollada por Abilene Salas y está protegida.
                            </p>
                        </section>

                        {/* 8. Limitación de Responsabilidad */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                8. Limitación de Responsabilidad
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Abilene Salas no se hace responsable por:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Reacciones alérgicas no disclosure previamente</li>
                                <li>Resultados no deseados por no seguir cuidados posteriores</li>
                                <li>Daños causados por información médica incompleta o falsa</li>
                            </ul>
                        </section>

                        {/* 9. Modificaciones */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                9. Modificaciones a los Términos
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Nos reservamos el derecho de modificar estos términos en cualquier momento.
                                Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.
                            </p>
                        </section>

                        {/* 10. Contacto */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                10. Contacto
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Para preguntas sobre estos Términos y Condiciones, contáctanos:
                            </p>
                            <div className="mt-3 space-y-2 text-gray-700">
                                <p>📧 Email: info@abilenesalas.com</p>
                                <p>📱 WhatsApp: +52 961 231 3295</p>
                                <p>📍 Tuxtla Gutiérrez, Chiapas</p>
                            </div>
                        </section>
                    </div>

                    {/* Back Button */}
                    <div className="mt-8 text-center">
                        <Link href="/registro" className="btn-primary inline-block">
                            Volver al Registro
                        </Link>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-[#2d2d2d] text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center text-gray-400">
                    <p>© 2026 Abilene Salas. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>
    );
}
