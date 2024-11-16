import { Building, CheckCircle, ArrowRight, Search, Home, Users } from 'lucide-react';
import Image from 'next/image';
import { TestimonialCard } from '@/components/ui/testimonial-card';
import { FAQSection } from '@/components/ui/faq-section';
import { MarketStats } from '@/components/ui/market-stats';
import { ComparisonTable } from '@/components/ui/comparison-table';

export default function PropietariosPage() {
  const testimonials = [
    {
      name: 'Carlos Ramírez',
      role: 'Propietario en CDMX',
      content: 'Increíble precisión en la valoración. Vendí mi casa en 2 semanas al precio sugerido.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Ana Martínez',
      role: 'Inversionista Inmobiliaria',
      content: 'La herramienta perfecta para análisis rápido de propiedades. Uso PropTech IA para todas mis inversiones.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Roberto Sánchez',
      role: 'Propietario en Monterrey',
      content: 'Excelente servicio y muy preciso. Me ayudó a tomar una decisión informada sobre la venta de mi propiedad.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ];

  const faqs = [
    {
      question: '¿Cómo funciona la valoración con IA?',
      answer: 'Nuestra IA analiza miles de datos del mercado inmobiliario, incluyendo ventas recientes, características de la propiedad, ubicación y tendencias del mercado para proporcionar una valoración precisa en tiempo real.',
    },
    {
      question: '¿Qué tan precisa es la valoración?',
      answer: 'Nuestro sistema mantiene una precisión promedio del 95% en comparación con los precios finales de venta, gracias a nuestro extenso análisis de datos y algoritmos de aprendizaje automático.',
    },
    {
      question: '¿Cuánto tiempo toma recibir la valoración?',
      answer: 'La valoración inicial es instantánea. Un reporte detallado está disponible en menos de 24 horas.',
    },
    {
      question: '¿Qué información necesito proporcionar?',
      answer: 'Principalmente necesitamos la dirección de la propiedad, metros cuadrados, número de habitaciones y baños. Información adicional mejorará la precisión de la valoración.',
    },
    {
      question: '¿El servicio tiene algún costo?',
      answer: 'La valoración básica es completamente gratuita. Ofrecemos servicios premium con análisis más detallados y acceso a reportes especializados.',
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-blue-50 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Conoce el Valor Real de tu Propiedad
              <span className="block text-blue-600 mt-2">En Minutos y Gratis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Utiliza nuestra tecnología de IA para obtener una valoración precisa y conecta con los mejores agentes inmobiliarios
            </p>
            
            {/* CTA Form */}
            <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-xl">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Ingresa la dirección de tu propiedad"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  Valorar Ahora <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Market Stats Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Estadísticas del Mercado</h2>
            <p className="mt-4 text-xl text-gray-600">
              Datos actualizados del mercado inmobiliario
            </p>
          </div>
          <MarketStats />
        </div>
      </div>

      {/* Process Steps */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Proceso Simple y Transparente</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: 'Ingresa tu Dirección',
                description: 'Proporciona los datos básicos de tu propiedad para comenzar',
                color: 'bg-blue-100 text-blue-600',
              },
              {
                icon: Home,
                title: 'Obtén la Valoración',
                description: 'Recibe un análisis detallado basado en datos del mercado actual',
                color: 'bg-green-100 text-green-600',
              },
              {
                icon: Users,
                title: 'Conecta con Expertos',
                description: 'Accede a una red de agentes inmobiliarios verificados',
                color: 'bg-purple-100 text-purple-600',
              },
            ].map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center">
                  <div className={`rounded-full p-6 ${step.color} mb-6`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/4 right-0 transform translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">PropTech IA vs. Valuación Tradicional</h2>
            <p className="mt-4 text-xl text-gray-600">
              Descubre por qué somos la opción más eficiente
            </p>
          </div>
          <ComparisonTable />
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Lo que Dicen Nuestros Usuarios</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experiencias reales de propietarios que han utilizado nuestra plataforma
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection
        title="Preguntas Frecuentes"
        description="Todo lo que necesitas saber sobre nuestra plataforma"
        items={faqs}
      />

      {/* CTA Section */}
      <div className="bg-blue-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Listo para Conocer el Valor de tu Propiedad?
          </h2>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
            Comenzar Valoración Gratuita
          </button>
        </div>
      </div>
    </main>
  );
}