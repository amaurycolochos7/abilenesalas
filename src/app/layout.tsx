import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abilene Salas | Micropigmentación & Beauty Expert",
  description: "Master en Micropigmentación y CEO de DASH Studio. Reserva tu cita para cejas, labios, pestañas y más.",
  keywords: ["micropigmentación", "pestañas", "cejas", "beauty", "Abilene Salas", "DASH Studio"],
  openGraph: {
    title: "Abilene Salas | Micropigmentación & Beauty Expert",
    description: "Master en Micropigmentación y CEO de DASH Studio. Reserva tu cita hoy.",
    type: "website",
    locale: "es_MX",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
