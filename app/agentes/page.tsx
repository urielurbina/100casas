import { Target, BarChart, Users, CheckCircle, Star, Zap, Shield, Award, TrendingUp, Smartphone, Building, Map, Clock } from 'lucide-react';

export default function AgentesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-indigo-50 to-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 to-indigo-50 opacity-90" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <span className="text-indigo-600 font-semibold text-lg mb-4 block">
              Plataforma Premium para Agentes Inmobiliarios
            </span>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">
              Potencia tu Negocio con
              <span className="block text-indigo-600 mt-2">Leads Cualificados por IA</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
              Accede a propietarios verificados con intención real de venta y aumenta tus conversiones hasta un 300%
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition duration-300">
                Comenzar Prueba Gratuita
              </button>
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition duration-300 border-2 border-indigo-600">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '300%', label: 'Aumento en Conversiones' },
              { number: '15,000+', label: 'Leads Generados' },
              { number: '2,000+', label: 'Agentes Activos' },
              { number: '95%', label: 'Satisfacción' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lead Generation Process */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Proceso de Generación de Leads</h2>
            <p className="mt-4 text-xl text-gray-600">
              Así es como convertimos visitantes en oportunidades de venta cualificadas
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Building,
                title: 'Captación',
                description: 'Atraemos propietarios interesados en vender mediante marketing digital especializado',
              },
              {
                icon: Target,
                title: 'Cualificación',
                description: 'La IA analiza y califica cada lead según su probabilidad de conversión',
              },
              {
                icon: Map,
                title: 'Asignación',
                description: 'Distribución inteligente basada en tu zona y especialización',
              },
              {
                icon: TrendingUp,
                title: 'Conversión',
                description: 'Seguimiento y soporte para maximizar el cierre de operaciones',
              },
            ].map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-indigo-100 rounded-full p-6 mb-6">
                    <step.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/3 right-0 transform translate-x-1/2">
                    <div className="w-8 h-0.5 bg-indigo-200"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Herramientas Profesionales</h2>
            <p className="mt-4 text-xl text-gray-600">
              Todo lo que necesitas para potenciar tus ventas inmobiliarias
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: 'Leads Cualificados',
                description: 'Accede a propietarios verificados con alta intención de venta',
                features: ['Score de calificación por IA', 'Datos verificados', 'Historial de interacciones'],
              },
              {
                icon: BarChart,
                title: 'Analytics Avanzados',
                description: 'Métricas detalladas y seguimiento de conversiones en tiempo real',
                features: ['Dashboard personalizado', 'Reportes automáticos', 'Predicciones de mercado'],
              },
              {
                icon: Zap,
                title: 'Notificaciones Instantáneas',
                description: 'Recibe alertas inmediatas de nuevos leads en tu zona',
                features: ['Alertas personalizadas', 'Notificaciones push', 'Integración con WhatsApp'],
              },
              {
                icon: Shield,
                title: 'Territorio Protegido',
                description: 'Exclusividad en tu zona de operación',
                features: ['Zonas exclusivas', 'Protección de leads', 'Sin competencia directa'],
              },
              {
                icon: Smartphone,
                title: 'App Móvil Dedicada',
                description: 'Gestiona tus leads desde cualquier lugar',
                features: ['Disponible iOS/Android', 'Sincronización en tiempo real', 'Modo offline'],
              },
              {
                icon: Clock,
                title: 'Automatización CRM',
                description: 'Seguimiento automático de leads y tareas',
                features: ['Workflows personalizados', 'Recordatorios automáticos', 'Plantillas de seguimiento'],
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-indigo-100 rounded-full p-4 inline-block mb-6">
                  <feature.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ROI Calculator Section */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Calcula tu ROI</h2>
                <p className="text-lg mb-8">
                  Con PropTech IA, nuestros agentes ven un retorno promedio de inversión del 300% en los primeros 3 meses
                </p>
                <div className="space-y-4">
                  {[
                    'Promedio de 15 leads cualificados por mes',
                    'Tasa de conversión del 20%',
                    'Comisión promedio de $80,000 MXN',
                  ].map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl text-gray-900">
                <h3 className="text-2xl font-bold mb-6">ROI Estimado Mensual</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-4">
                    <span>Inversión Mensual</span>
                    <span className="font-semibold">$1,999 MXN</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-4">
                    <span>Ingresos Estimados</span>
                    <span className="font-semibold">$240,000 MXN</span>
                  </div>
                  <div className="flex justify-between items-center text-xl font-bold text-indigo-600">
                    <span>ROI</span>
                    <span>11,900%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">Lo que Dicen Nuestros Agentes</h2>
            <p className="mt-4 text-xl text-gray-600">
              Historias de éxito de agentes que ya utilizan nuestra plataforma
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Roberto García',
                role: 'Agente Inmobiliario Senior',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                content: 'Increíble plataforma. Mis ventas aumentaron un 200% en el primer trimestre.',
              },
              {
                name: 'María Rodríguez',
                role: 'Broker Independiente',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                content: 'La calidad de los leads es excepcional. La mejor inversión para mi negocio.',
              },
              {
                name: 'Carlos Mendoza',
                role: 'Director de Agencia',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
                content: 'PropTech IA revolucionó nuestra forma de captar clientes. Altamente recomendado.',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-600 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            ¿Listo para Transformar tu Negocio Inmobiliario?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition duration-300">
              Comenzar Prueba Gratuita
            </button>
            <button className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white/10 transition duration-300">
              Agendar Demo
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}