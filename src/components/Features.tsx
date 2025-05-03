import React from 'react';
import { FEATURES } from '../constants';
import { Building2, Search, Clock, LineChart } from 'lucide-react';

const FeatureIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconClass = "w-12 h-12 text-blue-600 mb-4";
  
  switch (name) {
    case 'Building2':
      return <Building2 className={iconClass} />;
    case 'Search':
      return <Search className={iconClass} />;
    case 'Clock':
      return <Clock className={iconClass} />;
    case 'LineChart':
      return <LineChart className={iconClass} />;
    default:
      return <Building2 className={iconClass} />;
  }
};

const Features: React.FC = () => {
  return (
    <section id="funciones" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características Principales
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Nuestro asistente inmobiliario utiliza inteligencia artificial avanzada 
            para ofrecerte la mejor experiencia de búsqueda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="bg-white p-8 rounded-2xl transition-all duration-300
              hover:shadow-xl border border-gray-100 hover:border-blue-100
              hover:translate-y-[-8px] group"
            >
              <div className="relative h-48 mb-6 overflow-hidden rounded-lg">
                <img
                  src={`https://images.pexels.com/photos/${feature.id === 1 ? '1643384' : 
                    feature.id === 2 ? '1571460' : 
                    feature.id === 3 ? '4050315' : '7031595'}/pexels-photo-${feature.id === 1 ? '1643384' : 
                    feature.id === 2 ? '1571460' : 
                    feature.id === 3 ? '4050315' : '7031595'}.jpeg`}
                  alt={feature.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <FeatureIcon name={feature.icon} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;