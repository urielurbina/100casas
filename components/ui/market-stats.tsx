import { TrendingUp, Users, Home, Clock } from 'lucide-react';

interface Stat {
  label: string;
  value: string;
  description: string;
  icon: any;
  trend?: string;
}

export function MarketStats() {
  const stats: Stat[] = [
    {
      label: 'Valor Promedio',
      value: '$3.2M',
      description: 'Propiedades valuadas en 2024',
      icon: TrendingUp,
      trend: '+12.5% vs 2023',
    },
    {
      label: 'Tiempo Promedio',
      value: '45 días',
      description: 'Para vender una propiedad',
      icon: Clock,
      trend: '-15% vs 2023',
    },
    {
      label: 'Propiedades',
      value: '15,000+',
      description: 'En nuestra base de datos',
      icon: Home,
    },
    {
      label: 'Agentes Activos',
      value: '2,000+',
      description: 'En toda la república',
      icon: Users,
    },
  ];

  return (
    <div className="grid md:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-50 rounded-lg">
              <stat.icon className="h-6 w-6 text-blue-600" />
            </div>
            {stat.trend && (
              <span className={`text-sm font-medium ${
                stat.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <h4 className="text-sm text-gray-600">{stat.label}</h4>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            <p className="text-sm text-gray-500">{stat.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}