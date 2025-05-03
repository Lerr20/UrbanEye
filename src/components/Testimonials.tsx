import React, { useState } from 'react';
import { TESTIMONIALS } from '../constants';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1
    );
  };

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-blue-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo Que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Descubre cómo nuestro asistente inmobiliario ha transformado la búsqueda de propiedades para miles de personas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute -top-12 -left-12 w-32 h-32 text-blue-200 opacity-50">
            <Quote size={128} strokeWidth={1} />
          </div>
          
          {TESTIMONIALS.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
                index === activeIndex ? 'block opacity-100' : 'hidden opacity-0'
              }`}
            >
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative z-10">
                <p className="text-xl text-gray-700 mb-8 italic">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          <div className="flex justify-center mt-8 space-x-2">
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12">
            <button 
              onClick={prevTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12">
            <button 
              onClick={nextTestimonial}
              className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-blue-50 transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;