"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
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
            // TODO: Implement login API call
            console.log("Login attempt:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // router.push("/panel");
        } catch (err) {
            setError("Email o contraseña incorrectos");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a574] rounded-full blur-3xl"></div>
            </div>

            <div className="w-full max-w-md relative z-10">
                {/* Header */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center justify-center space-x-3 mb-6">
                        <div className="relative w-12 h-12">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Abilene Salas Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                            Abilene Salas
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                        Bienvenido de nuevo
                    </h1>
                    <p className="text-gray-600">
                        Inicia sesión para gestionar tus citas
                    </p>
                </div>

                {/* Card */}
                <div className="card p-8">

                    {/* Error Message */}
                    {error && (
                        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                            {error}
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Correo electrónico
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="input"
                                placeholder="tu@email.com"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <label className="block text-sm font-medium">
                                    Contraseña
                                </label>
                                <Link href="/recuperar-contrasena" className="text-sm text-[#d4a574] hover:underline">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="input"
                                placeholder="••••••••"
                            />
                        </div>

                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={formData.rememberMe}
                                onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                                className="w-4 h-4 text-[#d4a574] border-gray-300 rounded focus:ring-[#d4a574]"
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-700">
                                Recordarme
                            </label>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    <span>Iniciando sesión...</span>
                                </div>
                            ) : (
                                "Iniciar sesión"
                            )}
                        </button>
                    </form>

                    {/* Register Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ¿No tienes una cuenta?{" "}
                            <Link href="/registro" className="text-[#d4a574] font-medium hover:underline">
                                Regístrate gratis
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Admin Link */}
                <div className="mt-6 text-center">
                    <Link href="/admin/login" className="text-sm text-gray-500 hover:text-gray-700">
                        ¿Eres administrador o staff? Ingresa aquí
                    </Link>
                </div>
            </div>
        </div>
    );
}
