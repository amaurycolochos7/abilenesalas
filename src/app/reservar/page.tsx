"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

// Placeholder data
const branches = [
    {
        id: "1",
        name: "DASH Studio Centro",
        slug: "dash-centro",
        address: "Av. Principal #123, Centro",
    },
    {
        id: "2",
        name: "DASH Studio Norte",
        slug: "dash-norte",
        address: "Blvd. Norte #456, Zona Norte",
    },
];

const services = [
    { id: "1", name: "Micropigmentación de Cejas", category: "Micropigmentación", price: 2500, duration: 120 },
    { id: "2", name: "Micropigmentación de Labios", category: "Micropigmentación", price: 2800, duration: 90 },
    { id: "3", name: "Pestañas Clásicas", category: "Pestañas", price: 800, duration: 90 },
    { id: "4", name: "Pestañas Volumen", category: "Pestañas", price: 1200, duration: 120 },
    { id: "5", name: "Pestañas Mega Volumen", category: "Pestañas", price: 1500, duration: 150 },
];

type Step = 1 | 2 | 3 | 4;

export default function ReservarPage() {
    const [step, setStep] = useState<Step>(1);
    const [selectedBranch, setSelectedBranch] = useState<string | null>(null);
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<string>("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        notes: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const selectedBranchData = branches.find((b) => b.id === selectedBranch);
    const selectedServiceData = services.find((s) => s.id === selectedService);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // TODO: Connect to real API
        // const response = await fetch('/api/bookings', {
        //   method: 'POST',
        //   body: JSON.stringify({
        //     branchId: selectedBranch,
        //     serviceId: selectedService,
        //     requestedDate: selectedDate,
        //     clientName: formData.name,
        //     clientPhone: formData.phone,
        //     clientEmail: formData.email,
        //     clientNotes: formData.notes,
        //   })
        // });

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center px-4">
                <div className="max-w-md w-full text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                        <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <h1 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                        ¡Solicitud Enviada!
                    </h1>
                    <p className="text-gray-600 mb-8">
                        Hemos recibido tu solicitud de cita. Te confirmaremos por WhatsApp al número {formData.phone} en las próximas horas.
                    </p>
                    <div className="card p-6 text-left mb-8">
                        <h3 className="font-semibold mb-4">Resumen de tu solicitud:</h3>
                        <div className="space-y-2 text-sm text-gray-600">
                            <p><strong>Sucursal:</strong> {selectedBranchData?.name}</p>
                            <p><strong>Servicio:</strong> {selectedServiceData?.name}</p>
                            <p><strong>Fecha solicitada:</strong> {new Date(selectedDate).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                            <p><strong>Nombre:</strong> {formData.name}</p>
                        </div>
                    </div>
                    <Link href="/" className="btn-primary inline-block">
                        Volver al Inicio
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#faf9f7]">
            {/* Header */}
            <nav className="bg-white shadow-sm">
                <div className="max-w-4xl mx-auto px-4 py-4">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative w-10 h-10 sm:w-12 sm:h-12">
                            <Image
                                src="/images/logo/logo.png"
                                alt="Abilene Salas Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <span className="text-xl sm:text-2xl font-bold gradient-text" style={{ fontFamily: 'var(--font-display)' }}>
                            Abilene Salas
                        </span>
                    </Link>
                </div>
            </nav>

            <div className="max-w-4xl mx-auto px-4 py-8">
                {/* Progress Steps */}
                <div className="flex items-center justify-center mb-12">
                    {[1, 2, 3, 4].map((s) => (
                        <div key={s} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition ${step >= s
                                    ? "bg-[#d4a574] text-white"
                                    : "bg-gray-200 text-gray-500"
                                    }`}
                            >
                                {s}
                            </div>
                            {s < 4 && (
                                <div
                                    className={`w-16 h-1 mx-2 transition ${step > s ? "bg-[#d4a574]" : "bg-gray-200"
                                        }`}
                                />
                            )}
                        </div>
                    ))}
                </div>

                {/* Step 1: Select Branch */}
                {step === 1 && (
                    <div className="animate-fade-in">
                        <h1 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Elige una Sucursal
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                            Selecciona la sucursal donde deseas recibir tu servicio
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            {branches.map((branch) => (
                                <button
                                    key={branch.id}
                                    onClick={() => setSelectedBranch(branch.id)}
                                    className={`card p-6 text-left transition ${selectedBranch === branch.id
                                        ? "ring-2 ring-[#d4a574] bg-[#fdf8f4]"
                                        : ""
                                        }`}
                                >
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#f5e6d8] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">{branch.name}</h3>
                                            <p className="text-sm text-gray-500">{branch.address}</p>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={() => setStep(2)}
                                disabled={!selectedBranch}
                                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2: Select Service */}
                {step === 2 && (
                    <div className="animate-fade-in">
                        <h1 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Elige un Servicio
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                            Selecciona el servicio que deseas agendar
                        </p>

                        <div className="space-y-4">
                            {services.map((service) => (
                                <button
                                    key={service.id}
                                    onClick={() => setSelectedService(service.id)}
                                    className={`card p-4 w-full text-left transition ${selectedService === service.id
                                        ? "ring-2 ring-[#d4a574] bg-[#fdf8f4]"
                                        : ""
                                        }`}
                                >
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <span className="text-xs text-[#d4a574] font-medium">{service.category}</span>
                                            <h3 className="font-semibold">{service.name}</h3>
                                            <p className="text-sm text-gray-500">{service.duration} minutos</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-xl font-bold">${service.price.toLocaleString()}</span>
                                            <span className="text-gray-500 text-sm"> MXN</span>
                                        </div>
                                    </div>
                                </button>
                            ))}
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(1)} className="btn-secondary">
                                Atrás
                            </button>
                            <button
                                onClick={() => setStep(3)}
                                disabled={!selectedService}
                                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Select Date */}
                {step === 3 && (
                    <div className="animate-fade-in">
                        <h1 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Elige una Fecha
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                            Selecciona el día de tu preferencia. Te confirmaremos la hora disponible.
                        </p>

                        <div className="max-w-md mx-auto">
                            <div className="card p-6">
                                <label className="block mb-2 font-medium">Fecha deseada</label>
                                <input
                                    type="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    min={new Date().toISOString().split('T')[0]}
                                    className="input"
                                />
                                <p className="text-sm text-gray-500 mt-2">
                                    Nota: Te asignaremos el horario disponible más cercano a tu preferencia.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(2)} className="btn-secondary">
                                Atrás
                            </button>
                            <button
                                onClick={() => setStep(4)}
                                disabled={!selectedDate}
                                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                Continuar
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 4: Contact Info */}
                {step === 4 && (
                    <div className="animate-fade-in">
                        <h1 className="text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                            Tus Datos
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                            Ingresa tus datos para confirmar la cita
                        </p>

                        <div className="max-w-md mx-auto">
                            {/* Summary */}
                            <div className="card p-4 mb-6 bg-[#fdf8f4]">
                                <h3 className="font-semibold mb-3">Resumen de tu cita</h3>
                                <div className="space-y-1 text-sm">
                                    <p><strong>Sucursal:</strong> {selectedBranchData?.name}</p>
                                    <p><strong>Servicio:</strong> {selectedServiceData?.name}</p>
                                    <p><strong>Precio:</strong> ${selectedServiceData?.price.toLocaleString()} MXN</p>
                                    <p><strong>Fecha:</strong> {new Date(selectedDate).toLocaleDateString('es-MX', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="card p-6 space-y-4">
                                <div>
                                    <label className="block mb-2 font-medium">Nombre completo *</label>
                                    <input
                                        type="text"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        placeholder="Tu nombre"
                                        className="input"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Teléfono (WhatsApp) *</label>
                                    <input
                                        type="tel"
                                        value={formData.phone}
                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                        placeholder="55 1234 5678"
                                        className="input"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Email (opcional)</label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        placeholder="tu@email.com"
                                        className="input"
                                    />
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium">Notas adicionales (opcional)</label>
                                    <textarea
                                        value={formData.notes}
                                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                                        placeholder="¿Algo que debamos saber?"
                                        rows={3}
                                        className="input"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={() => setStep(3)} className="btn-secondary">
                                Atrás
                            </button>
                            <button
                                onClick={handleSubmit}
                                disabled={!formData.name || !formData.phone || isSubmitting}
                                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Enviando...
                                    </>
                                ) : (
                                    "Enviar Solicitud"
                                )}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
