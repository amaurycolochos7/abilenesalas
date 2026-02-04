"use client";

import Link from "next/link";
import Image from "next/image";

export default function PrivacidadPage() {
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
                        Política de <span className="gradient-text">Privacidad</span>
                    </h1>
                    <p className="text-center text-gray-600 mb-8">
                        Última actualización: Febrero 2026
                    </p>

                    <div className="card p-8 space-y-8">
                        {/* Introducción */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                Introducción
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                En Abilene Salas, nos comprometemos a proteger tu privacidad y tus datos personales.
                                Esta Política de Privacidad describe cómo recopilamos, usamos, almacenamos y protegemos tu información
                                cuando utilizas nuestra plataforma y servicios.
                            </p>
                        </section>

                        {/* 1. Información que Recopilamos */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                1. Información que Recopilamos
                            </h2>
                            <div className="space-y-4 text-gray-700">
                                <div>
                                    <p className="font-semibold mb-2">Información Personal:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Nombre completo</li>
                                        <li>Edad</li>
                                        <li>Género</li>
                                        <li>Número de teléfono</li>
                                        <li>Correo electrónico</li>
                                        <li>Información médica relevante para los tratamientos</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold mb-2">Información de Servicios:</p>
                                    <ul className="list-disc list-inside space-y-1 ml-4">
                                        <li>Historial de citas y servicios recibidos</li>
                                        <li>Fotografías del antes y después (con tu consentimiento explícito)</li>
                                        <li>Preferencias de tratamiento</li>
                                        <li>Comentarios y retroalimentación</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* 2. Cómo Usamos tu Información */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                2. Cómo Usamos tu Información
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Utilizamos tu información personal para los siguientes propósitos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Gestión de Servicios:</strong> Programar, confirmar y gestionar tus citas</li>
                                <li><strong>Comunicación:</strong> Enviarte confirmaciones, recordatorios y seguimientos de tratamientos</li>
                                <li><strong>Mejora del Servicio:</strong> Analizar y mejorar la calidad de nuestros servicios y experiencia del cliente</li>
                                <li><strong>Marketing y Promociones:</strong> Enviarte ofertas especiales, promociones exclusivas y novedades (puedes cancelar en cualquier momento)</li>
                                <li><strong>Campañas Publicitarias:</strong> Crear campañas de marketing personalizadas según tus intereses</li>
                                <li><strong>Análisis y Estadísticas:</strong> Generar informes para entender mejor las necesidades de nuestros clientes</li>
                                <li><strong>Cumplimiento Legal:</strong> Cumplir con obligaciones legales y regulatorias del sector salud y belleza</li>
                            </ul>
                        </section>

                        {/* 3. Compartir Información */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                3. Compartir tu Información
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                No vendemos ni alquilamos tu información personal a terceros. Podemos compartir tu información solo en los siguientes casos:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Proveedores de Servicios:</strong> Con proveedores que nos ayudan a operar nuestro negocio (plataformas de email, sistemas de gestión)</li>
                                <li><strong>Redes Sociales:</strong> Contenido publicitario en redes sociales (con tu consentimiento para uso de imágenes)</li>
                                <li><strong>Requisitos Legales:</strong> Cuando sea requerido por ley o para proteger nuestros derechos</li>
                            </ul>
                        </section>

                        {/* 4. Uso de Imágenes */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                4. Uso de Fotografías del Antes/Después
                            </h2>
                            <div className="bg-[#fdf8f4] border-l-4 border-[#d4a574] p-4 rounded-lg">
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Importante:</strong> Para utilizar fotografías de tu tratamiento en redes sociales, portafolio o material promocional,
                                    siempre solicitaremos tu consentimiento explícito y por escrito. Tienes derecho a:
                                </p>
                                <ul className="list-disc list-inside space-y-1 text-gray-700 mt-2 ml-4">
                                    <li>Negarte al uso de tus imágenes sin afectar tu servicio</li>
                                    <li>Solicitar que se eliminen imágenes previamente autorizadas</li>
                                    <li>Decidir en qué plataformas pueden aparecer tus fotos</li>
                                </ul>
                            </div>
                        </section>

                        {/* 5. Seguridad de Datos */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                5. Seguridad de tu Información
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                                acceso no autorizado, pérdida o alteración. Esto incluye:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700 mt-3">
                                <li>Encriptación de datos sensibles</li>
                                <li>Acceso restringido solo a personal autorizado</li>
                                <li>Almacenamiento seguro de registros físicos y digitales</li>
                                <li>Capacitación del personal en protección de datos</li>
                            </ul>
                        </section>

                        {/* 6. Tus Derechos */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                6. Tus Derechos
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Conforme a la Ley Federal de Protección de Datos Personales en Posesión de Particulares (LFPDPPP), tienes derecho a:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre ti</li>
                                <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos o incompletos</li>
                                <li><strong>Cancelación:</strong> Solicitar la eliminación de tus datos (sujeto a obligaciones legales)</li>
                                <li><strong>Oposición:</strong> Negarte al tratamiento de tus datos para fines específicos</li>
                                <li><strong>Revocación del Consentimiento:</strong> Retirar tu autorización en cualquier momento</li>
                            </ul>
                        </section>

                        {/* 7. Marketing y Comunicaciones */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                7. Comunicaciones de Marketing
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Si has aceptado recibir comunicaciones de marketing, podemos enviarte:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Promociones y ofertas exclusivas</li>
                                <li>Novedades sobre nuevos servicios y tratamientos</li>
                                <li>Consejos de cuidado y belleza</li>
                                <li>Invitaciones a eventos especiales</li>
                                <li>Contenido educativo sobre micropigmentación y belleza</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mt-3">
                                <strong>Puedes darte de baja en cualquier momento</strong> haciendo clic en el enlace de "Cancelar suscripción"
                                en nuestros emails o contactándonos directamente.
                            </p>
                        </section>

                        {/* 8. Cookies */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                8. Cookies y Tecnologías Similares
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web,
                                analizar el tráfico y personalizar contenido. Puedes configurar tu navegador para rechazar cookies,
                                aunque esto puede afectar algunas funcionalidades del sitio.
                            </p>
                        </section>

                        {/* 9. Menores de Edad */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                9. Menores de Edad
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Nuestros servicios están dirigidos a personas mayores de 18 años. Si un menor de edad desea recibir servicios,
                                requerimos el consentimiento y presencia de un padre o tutor legal.
                            </p>
                        </section>

                        {/* 10. Cambios a esta Política */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                10. Cambios a esta Política
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios significativos
                                publicando la nueva política en nuestro sitio web. Te recomendamos revisar esta página periódicamente.
                            </p>
                        </section>

                        {/* 11. Contacto */}
                        <section>
                            <h2 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                11. Contacto
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-3">
                                Para ejercer tus derechos, presentar una queja o consultas sobre esta Política de Privacidad, contáctanos:
                            </p>
                            <div className="bg-[#fdf8f4] p-4 rounded-lg space-y-2 text-gray-700">
                                <p><strong>Responsable de Datos:</strong> Abilene Salas</p>
                                <p>📧 <strong>Email:</strong> privacidad@abilenesalas.com</p>
                                <p>📱 <strong>WhatsApp:</strong> +52 961 231 3295</p>
                                <p>📍 <strong>Dirección:</strong> Tuxtla Gutiérrez, Chiapas, México</p>
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

