export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface DemoMessage {
  id: number;
  text: string;
  isUser: boolean;
  time: string;
}