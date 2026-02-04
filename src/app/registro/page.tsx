"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegistroPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        age: "",
        gender: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        acceptTerms: false,
    });
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        // Validations
        if (!formData.name.trim()) {
            setError("El nombre completo es requerido");
            return;
        }

        const age = parseInt(formData.age);
        if (!formData.age || isNaN(age) || age < 18 || age > 100) {
            setError("Debes tener al menos 18 años");
            return;
        }

        if (!formData.gender) {
            setError("Selecciona tu género");
            return;
        }

        if (!formData.phone.trim() || formData.phone.length < 10) {
            setError("Ingresa un número de teléfono válido (10 dígitos)");
            return;
        }

        if (formData.password.length < 8) {
            setError("La contraseña debe tener al menos 8 caracteres");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Las contraseñas no coinciden");
            return;
        }

        if (!formData.acceptTerms) {
            setError("Debes aceptar los términos y condiciones");
            return;
        }

        setIsLoading(true);

        try {
            // TODO: Implement register API call
            console.log("Register attempt:", formData);

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // router.push("/panel");
        } catch (err) {
            setError("Error al crear la cuenta. Intenta de nuevo.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4 py-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
                <div className="absolute top-20 right-10 w-72 h-72 bg-[#d4a574] rounded-full blur-3xl"></div>
                <div className="absolute bottom-40 left-10 w-96 h-96 bg-[#d4a574] rounded-full blur-3xl"></div>
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
                        Crea tu cuenta
                    </h1>
                    <p className="text-gray-600">
                        Únete a nuestra comunidad y agenda tus citas fácilmente
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

                    {/* Register Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Nombre Completo */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Nombre completo *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="input"
                                placeholder="María Fernanda López"
                            />
                        </div>

                        {/* Edad y Género en la misma fila */}
                        <div className="grid grid-cols-2 gap-4">
                            {/* Edad */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Edad *
                                </label>
                                <input
                                    type="number"
                                    required
                                    min="18"
                                    max="100"
                                    value={formData.age}
                                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                                    className="input"
                                    placeholder="25"
                                />
                            </div>

                            {/* Género */}
                            <div>
                                <label className="block text-sm font-medium mb-2">
                                    Género *
                                </label>
                                <select
                                    required
                                    value={formData.gender}
                                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                                    className="input"
                                >
                                    <option value="">Seleccionar</option>
                                    <option value="mujer">Mujer</option>
                                    <option value="hombre">Hombre</option>
                                </select>
                            </div>
                        </div>

                        {/* Teléfono */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Número de teléfono *
                            </label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                                className="input"
                                placeholder="9612345678"
                                maxLength={10}
                            />
                            <p className="text-xs text-gray-500 mt-1">10 dígitos sin espacios</p>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Correo electrónico *
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

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Contraseña *
                            </label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                className="input"
                                placeholder="••••••••"
                                minLength={8}
                            />
                            <p className="text-xs text-gray-500 mt-1">Mínimo 8 caracteres</p>
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Confirmar contraseña *
                            </label>
                            <input
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                className="input"
                                placeholder="••••••••"
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="terms"
                                checked={formData.acceptTerms}
                                onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
                                className="w-4 h-4 text-[#d4a574] border-gray-300 rounded focus:ring-[#d4a574] mt-1"
                            />
                            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                                Acepto los{" "}
                                <Link href="/terminos" className="text-[#d4a574] hover:underline">
                                    términos y condiciones
                                </Link>
                                {" "}y la{" "}
                                <Link href="/privacidad" className="text-[#d4a574] hover:underline">
                                    política de privacidad
                                </Link>
                            </label>
                        </div>

                        {/* Submit Button */}
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
                                    <span>Creando cuenta...</span>
                                </div>
                            ) : (
                                "Crear cuenta"
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            ¿Ya tienes una cuenta?{" "}
                            <Link href="/login" className="text-[#d4a574] font-medium hover:underline">
                                Inicia sesión
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
