import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auxiliar Administrativo · Consulado España São Paulo",
  description: "Guía interactiva de estudio para el concurso de Auxiliar Administrativo del Consulado General de España en São Paulo",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0f0f13",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
