import React from 'react';
import { SITE_DESCRIPTION } from '../constants';
import { MessageSquare, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="inicio" 
      className="pt-28 pb-20 md:pt-40 md:pb-28 bg-gradient-to-br from-blue-50 via-white to-blue-100 relative overflow-hidden"
    >
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4">
              Tu Asistente Inmobiliario <span className="text-blue-600">Inteligente</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg">
              {SITE_DESCRIPTION} Encuentra el hogar perfecto con la ayuda de nuestra inteligencia artificial que analiza miles de propiedades en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#como-funciona" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium 
                hover:bg-blue-700 transition-colors shadow-md flex items-center justify-center"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Probar Ahora
              </a>
              <a 
                href="#funciones" 
                className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-full 
                font-medium hover:bg-blue-50 transition-colors shadow-sm flex items-center justify-center"
              >
                Descubrir Más
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative mx-auto w-full max-w-sm">
              {/* Phone mockup with chat interface */}
              <div className="bg-white rounded-3xl shadow-xl p-3 border-4 border-gray-800 relative mx-auto">
                <div className="w-full h-[520px] bg-gray-100 rounded-2xl overflow-hidden relative">
                  {/* Phone status bar */}
                  <div className="bg-gray-800 h-6 w-full flex items-center justify-between px-4">
                    <div className="text-white text-xs">9:41</div>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  {/* WhatsApp header */}
                  <div className="bg-green-600 p-3 flex items-center">
                    <div className="w-8 h-8 bg-white rounded-full mr-3"></div>
                    <div>
                      <div className="text-white font-medium">InmoBot AI</div>
                      <div className="text-green-200 text-xs">En línea</div>
                    </div>
                  </div>
                  
                  {/* Chat content */}
                  <div className="p-3 bg-[url('https://i.stack.imgur.com/eUC0e.png')] bg-repeat h-[calc(100%-96px)] overflow-y-auto">
                    <div className="bg-white p-2 rounded-lg rounded-tl-none mb-2 max-w-[80%] ml-auto">
                      Hola, busco un apartamento de 2 habitaciones en Madrid
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg rounded-tr-none mb-1 max-w-[80%]">
                      ¡Hola! Puedo ayudarte con eso. ¿Tienes un presupuesto específico?
                    </div>
                    <div className="bg-white p-2 rounded-lg rounded-tl-none mb-2 max-w-[80%] ml-auto">
                      Máximo 250.000€
                    </div>
                    <div className="bg-green-100 p-2 rounded-lg rounded-tr-none mb-1 max-w-[80%]">
                      Perfecto, estoy buscando apartamentos que coincidan con tus criterios...
                    </div>
                  </div>
                  
                  {/* Input area */}
                  <div className="bg-gray-100 p-2 absolute bottom-0 w-full flex items-center">
                    <div className="bg-white rounded-full flex-grow p-2 px-4 mr-2">
                      Escribe un mensaje...
                    </div>
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-70 blur-md"></div>
              <div className="absolute -bottom-8 -right-8 w-28 h-28 bg-blue-500 rounded-full opacity-70 blur-md"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;