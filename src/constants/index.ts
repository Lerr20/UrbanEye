import { Feature, Testimonial, FAQ, DemoMessage } from '../types';
import { Building2, Search, Clock, LineChart, MessagesSquare, MapPin, Home, PenSquare } from 'lucide-react';

export const SITE_TITLE = 'InmoBot AI';
export const SITE_DESCRIPTION = 'Tu asistente inmobiliario inteligente en WhatsApp';

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#funciones', label: 'Funciones' },
  { href: '#como-funciona', label: 'Cómo Funciona' },
  { href: '#demo', label: 'Demo' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#faq', label: 'FAQ' },
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: 'Búsqueda en Tiempo Real',
    description: 'Accede a listados de propiedades en tiempo real de múltiples inmobiliarias con actualizaciones instantáneas.',
    icon: 'Search',
  },
  {
    id: 2,
    title: 'Recomendaciones Personalizadas',
    description: 'Recibe sugerencias adaptadas a tus preferencias específicas de ubicación, presupuesto y características.',
    icon: 'Building2',
  },
  {
    id: 3,
    title: 'Respuestas Instantáneas',
    description: 'Obtén información detallada sobre propiedades al instante, sin esperar por un agente humano.',
    icon: 'Clock',
  },
  {
    id: 4,
    title: 'Análisis de Mercado',
    description: 'Accede a datos comparativos del mercado inmobiliario para tomar decisiones informadas.',
    icon: 'LineChart',
  },
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: 'Inicia una Conversación',
    description: 'Envía un mensaje a nuestro número de WhatsApp para comenzar a utilizar el asistente inmobiliario.',
    icon: 'MessagesSquare',
  },
  {
    id: 2,
    title: 'Especifica tus Requisitos',
    description: 'Describe lo que buscas: ubicación, presupuesto, número de habitaciones y otras características.',
    icon: 'PenSquare',
  },
  {
    id: 3,
    title: 'Exploración Automática',
    description: 'Nuestro sistema analiza miles de propiedades en tiempo real utilizando web scraping avanzado.',
    icon: 'Search',
  },
  {
    id: 4,
    title: 'Recibe Recomendaciones',
    description: 'Obtén una selección personalizada de propiedades que coinciden con tus criterios específicos.',
    icon: 'Home',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Rodríguez',
    role: 'Comprador Reciente',
    content: 'Gracias a InmoBot AI encontré mi apartamento ideal en menos de una semana. La precisión de las recomendaciones me ahorró muchísimo tiempo.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    name: 'Marta González',
    role: 'Inversora Inmobiliaria',
    content: 'Como inversora, necesito estar al tanto de las oportunidades rápidamente. Este bot me permite analizar el mercado en tiempo real y tomar decisiones ágiles.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    name: 'Daniel Fernández',
    role: 'Arrendatario',
    content: 'Estaba buscando un departamento para alquilar con urgencia y el bot me mostró opciones que no había encontrado en ningún otro sitio. Excelente servicio.',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const FAQS: FAQ[] = [
  {
    id: 1,
    question: '¿Cómo empiezo a utilizar el servicio?',
    answer: 'Simplemente agrega nuestro número a tus contactos de WhatsApp y envía un mensaje con la palabra "Hola". El asistente te guiará a través del proceso.',
  },
  {
    id: 2,
    question: '¿El servicio tiene algún costo?',
    answer: 'Ofrecemos un plan básico gratuito que te permite realizar búsquedas limitadas. Para acceso ilimitado y funciones premium, contamos con planes mensuales a partir de $9.99.',
  },
  {
    id: 3,
    question: '¿Qué inmobiliarias están incluidas en la búsqueda?',
    answer: 'Nuestro sistema analiza propiedades de más de 50 inmobiliarias principales y portales como Idealista, Fotocasa, Habitaclia, entre otros.',
  },
  {
    id: 4,
    question: '¿Qué tan actualizados están los datos?',
    answer: 'Nuestro sistema actualiza la información cada 30 minutos, garantizando que siempre tengas acceso a los listados más recientes del mercado.',
  },
  {
    id: 5,
    question: '¿Puedo programar visitas a través del bot?',
    answer: 'Sí, una vez que encuentres una propiedad que te interese, el bot puede coordinar una visita con la inmobiliaria correspondiente según su disponibilidad.',
  },
];

export const DEMO_MESSAGES: DemoMessage[] = [
  {
    id: 1,
    text: 'Hola, me gustaría buscar un apartamento de 2 habitaciones en Madrid, con un presupuesto máximo de 250.000€',
    isUser: true,
    time: '14:25',
  },
  {
    id: 2,
    text: '¡Hola! Encantado de ayudarte con tu búsqueda. Voy a buscar apartamentos de 2 habitaciones en Madrid con un precio máximo de 250.000€. Dame un momento...',
    isUser: false,
    time: '14:25',
  },
  {
    id: 3,
    text: 'He encontrado 8 apartamentos que coinciden con tus criterios. Aquí tienes los 3 más relevantes:',
    isUser: false,
    time: '14:26',
  },
  {
    id: 4,
    text: '1️⃣ Apartamento en Chamberí, 65m², 2 hab, 1 baño, reformado. Precio: 245.000€\n\nCaracterísticas destacadas:\n- Tercer piso con ascensor\n- Cocina equipada\n- Cerca de metro Quevedo\n\n¿Te interesa ver más detalles de este?',
    isUser: false,
    time: '14:26',
  },
  {
    id: 5,
    text: 'Me interesa el de Chamberí. ¿Puedes mostrarme más información?',
    isUser: true,
    time: '14:27',
  },
  {
    id: 6,
    text: 'Claro, aquí tienes más detalles del apartamento en Chamberí:\n\n📍 Calle Garcilaso 12\n🏢 3º piso exterior\n🛌 2 habitaciones (1 suite)\n🚿 1 baño completo\n⚡ Certificación energética: D\n🏗️ Año construcción: 1975, reformado en 2019\n\nDisponibilidad para visitas: Lunes a viernes de 10:00 a 19:00.\n\n¿Te gustaría programar una visita o ver otro apartamento?',
    isUser: false,
    time: '14:28',
  },
];