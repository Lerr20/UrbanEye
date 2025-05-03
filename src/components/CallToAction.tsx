import React from 'react';
import { MessageSquare } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section id="contacto" className="py-16 md:py-20 bg-blue-600">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Comienza a Buscar tu Propiedad Ideal Hoy Mismo
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            ¡No pierdas más tiempo! Inicia tu búsqueda inmobiliaria con nuestro asistente inteligente y encuentra el hogar de tus sueños.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium 
              hover:bg-blue-50 transition-colors shadow-lg flex items-center justify-center"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Abrir WhatsApp
            </a>
            <a 
              href="#demo"
              className="bg-transparent text-white border-2 border-white px-8 py-3 rounded-full 
              font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Probar Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;