import Link from 'next/link';
import { Home, Users, ArrowRight, Star, Shield, Clock } from 'lucide-react';

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section with Background Pattern */}
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                PropTech IA
              </span>
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              La plataforma que revoluciona la valoración inmobiliaria en México con Inteligencia Artificial
            </p>

            {/* Path Selection Cards */}
            <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Property Owners Card */}
              <Link href="/propietarios" className="group">
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 bg-blue-600 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                    Gratuito
                  </div>
                  <Home className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Propietarios</h2>
                  <p className="text-gray-600 mb-6">
                    Descubre el valor real de tu propiedad con nuestra valoración precisa basada en IA
                  </p>
                  <div className="flex items-center justify-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                    Obtener Valoración <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>

              {/* Real Estate Agents Card */}
              <Link href="/agentes" className="group">
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute top-0 right-0 bg-indigo-600 text-white px-4 py-2 rounded-bl-2xl rounded-tr-2xl text-sm font-semibold">
                    Premium
                  </div>
                  <Users className="h-16 w-16 text-indigo-600 mx-auto mb-6" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Agentes Inmobiliarios</h2>
                  <p className="text-gray-600 mb-6">
                    Accede a leads cualificados y potencia tu negocio con nuestra plataforma inteligente
                  </p>
                  <div className="flex items-center justify-center text-indigo-600 font-semibold group-hover:gap-2 transition-all">
                    Comenzar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">¿Por qué PropTech IA?</h2>
            <p className="mt-4 text-xl text-gray-600">
              Tecnología de punta al servicio del mercado inmobiliario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Star,
                title: 'Precisión Inigualable',
                description: 'Algoritmos de IA entrenados con millones de datos del mercado mexicano',
                color: 'text-yellow-500',
              },
              {
                icon: Shield,
                title: 'Confianza Total',
                description: 'Datos verificados y actualizados en tiempo real',
                color: 'text-green-500',
              },
              {
                icon: Clock,
                title: 'Rapidez Extrema',
                description: 'Resultados instantáneos y conexiones inmediatas',
                color: 'text-blue-500',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full transform -rotate-6 scale-110" />
                  <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                    <feature.icon className={`h-12 w-12 mx-auto ${feature.color} mb-6`} />
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '50K+', label: 'Propiedades Valuadas' },
              { number: '95%', label: 'Precisión Promedio' },
              { number: '2000+', label: 'Agentes Activos' },
              { number: '24/7', label: 'Soporte Disponible' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}