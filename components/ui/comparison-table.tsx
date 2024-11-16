interface ComparisonFeature {
  name: string;
  traditional: string | boolean;
  proptech: string | boolean;
}

export function ComparisonTable() {
  const features: ComparisonFeature[] = [
    {
      name: 'Tiempo de Valoración',
      traditional: '3-5 días',
      proptech: 'Instantáneo',
    },
    {
      name: 'Precisión',
      traditional: 'Variable',
      proptech: '95% promedio',
    },
    {
      name: 'Costo',
      traditional: '$2,000 - $5,000',
      proptech: 'Gratuito',
    },
    {
      name: 'Datos Analizados',
      traditional: '10-20 propiedades',
      proptech: '15,000+ propiedades',
    },
    {
      name: 'Actualización',
      traditional: 'Manual',
      proptech: 'Tiempo real',
    },
    {
      name: 'Reportes Detallados',
      traditional: true,
      proptech: true,
    },
    {
      name: 'Análisis de Mercado',
      traditional: false,
      proptech: true,
    },
    {
      name: 'Predicciones de Valor',
      traditional: false,
      proptech: true,
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Característica
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              Valuación Tradicional
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
              PropTech IA
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {features.map((feature) => (
            <tr key={feature.name} className="hover:bg-gray-50">
              <td className="px-6 py-4 text-sm text-gray-900">{feature.name}</td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {typeof feature.traditional === 'boolean' ? (
                  feature.traditional ? '✓' : '✗'
                ) : (
                  feature.traditional
                )}
              </td>
              <td className="px-6 py-4 text-sm text-gray-600">
                {typeof feature.proptech === 'boolean' ? (
                  feature.proptech ? '✓' : '✗'
                ) : (
                  feature.proptech
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}