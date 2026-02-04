"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        rememberMe: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsLoading(true);

        try {
            // TODO: Implement admin login API call
            console.log("Admin login attempt:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // router.push("/admin");
        } catch (err) {
            setError("Email o contraseña incorrectos");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4 py-12">
            {/* Background pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-5">
                    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center space-x-3 mb-6">
                        <div className="relative w-12 h-12 bg-white rounded-lg p-2">
                            <Image
                                src="/images/logo/dash-studio-logo.png"
                                alt="DASH Studio Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                            Abilene Salas
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold mb-2 text-white" style={{ fontFamily: 'var(--font-display)' }}>
                        Panel Administrativo
                    </h1>
                    <p className="text-gray-400">
                        Acceso para administradores y personal autorizado
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Correo corporativo
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="input"
                                placeholder="admin@abilene-salas.com"
                                autoComplete="email"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-semibold mb-2 text-gray-700">
                                Contraseña
                            </label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="input"
                                placeholder="••••••••"
                                autoComplete="current-password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="rememberMe"
                                    checked={formData.rememberMe}
                                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                    className="w-4 h-4 text-[#d4a574] border-gray-300 rounded focus:ring-[#d4a574]"
                                />
                                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700 font-medium">
                                    Recordarme en este dispositivo
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Verificando...</span>
                                </div>
                            ) : (
                                "Acceder al panel"
                            )}
                        </button>
                    </form>

                    {/* Security Note */}
                    <div className="mt-6 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                        <div className="flex items-start gap-2">
                            <svg className="w-5 h-5 text-gray-600 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            <div className="flex-1">
                                <p className="text-xs text-gray-600 font-medium">
                                    Acceso restringido. Solo personal autorizado.
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Si no tienes credenciales, contacta al administrador principal.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back to client login */}
                <div className="mt-6 text-center">
                    <Link
                        href="/login"
                        className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/30 transition-all"
                    >
                        <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors group-hover:-translate-x-1 transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">Volver al login de clientes</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

