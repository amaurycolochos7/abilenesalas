"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

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
    // Micropigmentación
    { id: "cejas-microblading", name: "Microblading de Cejas", category: "Micropigmentación", price: 2500, duration: 120 },
    { id: "cejas-powder", name: "Powder Brows", category: "Micropigmentación", price: 5000, duration: 120 },
    { id: "labios", name: "Micropigmentación de Labios", category: "Micropigmentación", price: 2800, duration: 90 },
    { id: "ojos", name: "Delineado de Ojos", category: "Micropigmentación", price: 2200, duration: 90 },

    // Pestañas
    { id: "clasicas", name: "Pestañas Clásicas", category: "Pestañas", price: 800, duration: 90 },
    { id: "volumen", name: "Pestañas Volumen", category: "Pestañas", price: 1200, duration: 120 },
    { id: "mega-volumen", name: "Mega Volumen", category: "Pestañas", price: 1500, duration: 150 },
    { id: "relleno", name: "Relleno de Pestañas", category: "Pestañas", price: 500, duration: 60 },

    // Láser
    { id: "depilacion-facial", name: "Depilación Láser Facial", category: "Láser", price: 600, duration: 30 },
    { id: "depilacion-corporal", name: "Depilación Láser Corporal", category: "Láser", price: 800, duration: 45 },
    { id: "rejuvenecimiento", name: "Rejuvenecimiento Facial", category: "Láser", price: 1500, duration: 60 },
];

// Custom Calendar Component
function CustomCalendar({ selectedDate, onDateSelect }: { selectedDate: string; onDateSelect: (date: string) => void }) {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // Get first day of month and total days
    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const daysInMonth = lastDayOfMonth.getDate();
    const startingDayOfWeek = firstDayOfMonth.getDay();

    // Create array of day numbers
    const days = [];
    for (let i = 0; i < startingDayOfWeek; i++) {
        days.push(null);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(i);
    }

    const monthNames = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    const dayNames = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];

    const goToPreviousMonth = () => {
        setCurrentMonth(new Date(year, month - 1, 1));
    };

    const goToNextMonth = () => {
        setCurrentMonth(new Date(year, month + 1, 1));
    };

    const handleDateClick = (day: number) => {
        const date = new Date(year, month, day);
        if (date >= today) {
            onDateSelect(date.toISOString().split('T')[0]);
        }
    };

    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        const date = new Date(year, month, day);
        return date.toISOString().split('T')[0] === selectedDate;
    };

    const isPast = (day: number) => {
        const date = new Date(year, month, day);
        return date < today;
    };

    const isToday = (day: number) => {
        const date = new Date(year, month, day);
        return date.toDateString() === today.toDateString();
    };

    return (
        <div className="card p-4 sm:p-6">
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-4">
                <button
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <h3 className="text-lg font-semibold">
                    {monthNames[month]} {year}
                </h3>
                <button
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 mb-2">
                {dayNames.map((day) => (
                    <div key={day} className="text-center text-xs font-medium text-gray-500 py-2">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
                {days.map((day, index) => (
                    <div key={index} className="aspect-square">
                        {day !== null && (
                            <button
                                onClick={() => handleDateClick(day)}
                                disabled={isPast(day)}
                                className={`w-full h-full rounded-lg text-sm font-medium transition-all
                                    ${isSelected(day)
                                        ? 'bg-[#d4a574] text-white shadow-md'
                                        : isPast(day)
                                            ? 'text-gray-300 cursor-not-allowed'
                                            : isToday(day)
                                                ? 'bg-[#f5e6d8] text-[#d4a574] hover:bg-[#d4a574] hover:text-white'
                                                : 'hover:bg-gray-100'
                                    }
                                `}
                            >
                                {day}
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

function ReservarContent() {
    const searchParams = useSearchParams();
    const [step, setStep] = useState<number>(1);
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

    // Initial setup from URL params
    useEffect(() => {
        const branchSlug = searchParams.get('branch');
        const serviceId = searchParams.get('service');

        if (branchSlug) {
            const branch = branches.find(b => b.slug === branchSlug);
            if (branch) setSelectedBranch(branch.id);
        }

        if (serviceId) {
            // Verify service exists
            const service = services.find(s => s.id === serviceId);
            if (service) setSelectedService(serviceId);
        }

        // Determine initial step
        if (branchSlug && serviceId) {
            setStep(3); // Skip to date if both selected
        } else if (branchSlug) {
            setStep(2); // Skip to service if branch selected
        }
        // If only service is selected, we stay at step 1 (branch selection), 
        // but skipping logic will handle step 2 later.
    }, [searchParams]);

    const handleStep1Next = () => {
        if (selectedService) {
            setStep(3); // Skip Step 2 if service is already selected
        } else {
            setStep(2);
        }
    };

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
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 px-6 py-3 bg-[#d4a574] hover:bg-[#c49564] text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Volver al Inicio</span>
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
                {/* Form Card Container */}
                <div className="card p-6 sm:p-8 lg:p-10">
                    {/* Progress Steps */}
                    <div className="flex items-center justify-center mb-8 sm:mb-12">
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className="flex items-center">
                                <div
                                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base font-semibold transition ${step >= s
                                        ? "bg-[#d4a574] text-white"
                                        : "bg-gray-200 text-gray-500"
                                        }`}
                                >
                                    {s}
                                </div>
                                {s < 4 && (
                                    <div
                                        className={`w-12 sm:w-16 h-1 mx-1 sm:mx-2 transition ${step > s ? "bg-[#d4a574]" : "bg-gray-200"
                                            }`}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Step 1: Select Branch */}
                    {step === 1 && (
                        <div className="animate-fade-in">
                            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                Elige una Sucursal
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
                                Selecciona la sucursal donde deseas recibir tu servicio
                            </p>

                            <div className="grid gap-4 sm:gap-6">
                                {branches.map((branch) => (
                                    <button
                                        key={branch.id}
                                        onClick={() => setSelectedBranch(branch.id)}
                                        className={`card p-4 sm:p-6 text-left transition-all hover:shadow-lg ${selectedBranch === branch.id
                                            ? "ring-2 ring-[#d4a574] bg-[#fdf8f4]"
                                            : "hover:border-[#d4a574]/30"
                                            }`}
                                    >
                                        <div className="flex items-center space-x-3 sm:space-x-4">
                                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#f5e6d8] flex items-center justify-center flex-shrink-0">
                                                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4a574]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                </svg>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h3 className="font-semibold text-base sm:text-lg">{branch.name}</h3>
                                                <p className="text-xs sm:text-sm text-gray-500 truncate">{branch.address}</p>
                                            </div>
                                            {selectedBranch === branch.id && (
                                                <div className="flex-shrink-0">
                                                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#d4a574]" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            )}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 sm:mt-8 flex justify-end">
                                <button
                                    onClick={handleStep1Next}
                                    disabled={!selectedBranch}
                                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Select Service */}
                    {step === 2 && (
                        <div className="animate-fade-in">
                            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                Elige un Servicio
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
                                Selecciona el servicio que deseas agendar
                            </p>

                            <div className="space-y-3 sm:space-y-4">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => setSelectedService(service.id)}
                                        className={`card p-4 sm:p-5 w-full text-left transition-all hover:shadow-lg relative ${selectedService === service.id
                                            ? "ring-4 ring-[#d4a574] bg-gradient-to-r from-[#fdf8f4] to-[#fef9f5] shadow-lg scale-[1.02]"
                                            : "hover:border-[#d4a574]/30"
                                            }`}
                                    >
                                        <div className="flex justify-between items-center gap-3">
                                            <div className="flex-1 min-w-0">
                                                <span className="text-xs sm:text-sm text-[#d4a574] font-semibold block mb-1">
                                                    {service.category}
                                                </span>
                                                <h3 className="text-base sm:text-lg font-bold mb-1">{service.name}</h3>
                                                <p className="text-xs sm:text-sm text-gray-500">{service.duration} minutos</p>
                                            </div>
                                            <div className="flex items-center gap-3 sm:gap-4">
                                                <div className="text-right">
                                                    <div>
                                                        <span className="text-lg sm:text-xl font-bold">${service.price.toLocaleString()}</span>
                                                    </div>
                                                    <span className="text-gray-500 text-xs sm:text-sm">MXN</span>
                                                </div>
                                                {selectedService === service.id && (
                                                    <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#d4a574] flex items-center justify-center">
                                                        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                        </svg>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row justify-between gap-3">
                                <button onClick={() => setStep(1)} className="btn-secondary w-full sm:w-auto">
                                    Atrás
                                </button>
                                <button
                                    onClick={() => setStep(3)}
                                    disabled={!selectedService}
                                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                                >
                                    Continuar
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Select Date */}
                    {step === 3 && (
                        <div className="animate-fade-in">
                            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                Elige una Fecha
                            </h1>
                            <p className="text-sm sm:text-base text-gray-600 text-center mb-6 sm:mb-8">
                                Selecciona el día de tu preferencia. Te confirmaremos la hora disponible.
                            </p>

                            <div className="max-w-md mx-auto">
                                <CustomCalendar
                                    selectedDate={selectedDate}
                                    onDateSelect={(date) => setSelectedDate(date)}
                                />
                                <p className="text-xs sm:text-sm text-gray-500 mt-4 text-center">
                                    Nota: Te asignaremos el horario disponible más cercano a tu preferencia.
                                </p>
                            </div>

                            <div className="mt-6 sm:mt-8 flex flex-col-reverse sm:flex-row justify-between gap-3">
                                <button onClick={() => setStep(2)} className="btn-secondary w-full sm:w-auto">
                                    Atrás
                                </button>
                                <button
                                    onClick={() => setStep(4)}
                                    disabled={!selectedDate}
                                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
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
        </div>
    );
}

// Loading component for Suspense fallback
function ReservarLoading() {
    return (
        <div className="min-h-screen bg-[#faf9f7] flex items-center justify-center">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-[#d4a574] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Cargando...</p>
            </div>
        </div>
    );
}

// Main export wrapped in Suspense
export default function ReservarPage() {
    return (
        <Suspense fallback={<ReservarLoading />}>
            <ReservarContent />
        </Suspense>
    );
}
