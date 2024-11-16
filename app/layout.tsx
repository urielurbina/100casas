import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import { Home } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Valoración Inmobiliaria con IA',
  description: 'Plataforma de valoración inmobiliaria impulsada por IA que conecta propietarios con agentes inmobiliarios',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-blue-600" />
              <span className="font-semibold text-xl">PropTech IA</span>
            </Link>
            <div className="flex items-center space-x-6">
              <Link href="/propietarios" className="text-gray-600 hover:text-gray-900">
                Propietarios
              </Link>
              <Link href="/agentes" className="text-gray-600 hover:text-gray-900">
                Agentes
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Iniciar Sesión
              </button>
            </div>
          </nav>
        </header>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">PropTech IA</h3>
                <p className="text-gray-400">
                  Transformando la valoración inmobiliaria con inteligencia artificial
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Propietarios</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Valoración Gratuita</li>
                  <li>Cómo Funciona</li>
                  <li>Preguntas Frecuentes</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Agentes</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Planes y Precios</li>
                  <li>Portal de Agentes</li>
                  <li>Recursos</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Contacto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Soporte</li>
                  <li>Contacto</li>
                  <li>Política de Privacidad</li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2024 PropTech IA. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}