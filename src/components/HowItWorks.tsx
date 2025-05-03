import React from 'react';
import { HOW_IT_WORKS } from '../constants';
import { MessagesSquare, PenSquare, Search, Home } from 'lucide-react';

const StepIcon: React.FC<{ name: string }> = ({ name }) => {
  const iconClass = "w-10 h-10 text-blue-600";
  
  switch (name) {
    case 'MessagesSquare':
      return <MessagesSquare className={iconClass} />;
    case 'PenSquare':
      return <PenSquare className={iconClass} />;
    case 'Search':
      return <Search className={iconClass} />;
    case 'Home':
      return <Home className={iconClass} />;
    default:
      return <MessagesSquare className={iconClass} />;
  }
};

const HowItWorks: React.FC = () => {
  return (
    <section 
      id="como-funciona" 
      className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-white to-blue-50"
    >
      <div 
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/7031595/pexels-photo-7031595.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cómo Funciona
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Descubre en cuatro sencillos pasos cómo nuestro asistente te ayuda a encontrar tu propiedad ideal.
          </p>
        </div>

        <div className="relative">
          {/* Connection line (visible on md and up) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {HOW_IT_WORKS.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-md mb-6 border-2 border-blue-100">
                  <span className="text-blue-600 text-xl font-bold">{index + 1}</span>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center w-full group hover:shadow-xl transition-shadow">
                  <div className="relative h-40 mb-6 overflow-hidden rounded-lg">
                    <img
                      src={`https://images.pexels.com/photos/${
                        index === 0 ? '3182833' : 
                        index === 1 ? '4050315' : 
                        index === 2 ? '3183197' : '7031406'
                      }/pexels-photo-${
                        index === 0 ? '3182833' : 
                        index === 1 ? '4050315' : 
                        index === 2 ? '3183197' : '7031406'
                      }.jpeg`}
                      alt={step.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <StepIcon name={step.icon} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;