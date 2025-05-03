import React, { useState, useEffect, useRef } from 'react';
import { DEMO_MESSAGES } from '../constants';
import { Send } from 'lucide-react';

const Demo: React.FC = () => {
  const [messages, setMessages] = useState(DEMO_MESSAGES.slice(0, 2));
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageContainerRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Simulate the bot typing and sending more messages after initial load
    if (messages.length === 2) {
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, DEMO_MESSAGES[2]]);
          
          setTimeout(() => {
            setIsTyping(true);
            setTimeout(() => {
              setIsTyping(false);
              setMessages(prev => [...prev, DEMO_MESSAGES[3]]);
            }, 1500);
          }, 1000);
        }, 2000);
      }, 1000);
    }
  }, [messages.length]);

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    
    const newUserMessage = {
      id: messages.length + 1,
      text: userInput,
      isUser: true,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setUserInput('');
    
    // Simulate bot response after user message
    setTimeout(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        if (userInput.toLowerCase().includes('chamberí') || userInput.toLowerCase().includes('chamberi')) {
          setMessages(prev => [...prev, DEMO_MESSAGES[5]]);
        } else {
          const defaultResponse = {
            id: messages.length + 2,
            text: 'Entendido. ¿Hay algo específico que quieras saber sobre alguna de estas propiedades?',
            isUser: false,
            time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
          };
          setMessages(prev => [...prev, defaultResponse]);
        }
      }, 2000);
    }, 500);
  };

  return (
    <section id="demo" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prueba la Experiencia
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Interactúa con nuestro asistente inmobiliario y descubre cómo puede ayudarte a encontrar tu propiedad ideal.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          {/* Phone mockup with WhatsApp interface */}
          <div className="bg-white rounded-3xl shadow-xl p-4 border-4 border-gray-800 relative mx-auto">
            <div className="w-full h-[600px] bg-gray-100 rounded-2xl overflow-hidden relative">
              {/* Status bar */}
              <div className="bg-gray-800 h-6 w-full flex items-center justify-between px-4">
                <div className="text-white text-xs">
                  {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </div>
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                  <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
              
              {/* WhatsApp header */}
              <div className="bg-green-600 p-3 flex items-center">
                <div className="w-10 h-10 bg-white rounded-full mr-3 flex items-center justify-center">
                  <span className="text-green-600 font-bold text-lg">I</span>
                </div>
                <div>
                  <div className="text-white font-medium">InmoBot AI</div>
                  <div className="text-green-200 text-xs">En línea</div>
                </div>
              </div>
              
              {/* Chat content */}
              <div 
                ref={messageContainerRef}
                className="p-3 bg-[url('https://i.stack.imgur.com/eUC0e.png')] bg-repeat h-[calc(100%-118px)] overflow-y-auto"
              >
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`${
                      msg.isUser 
                        ? 'bg-white rounded-lg rounded-tl-none ml-auto' 
                        : 'bg-green-100 rounded-lg rounded-tr-none'
                    } p-3 mb-2 max-w-[80%] relative animate-fadeIn`}
                  >
                    {msg.text.split('\n').map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < msg.text.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                    <span className="text-xs text-gray-500 float-right mt-1 ml-2">
                      {msg.time}
                    </span>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="bg-green-100 rounded-lg rounded-tr-none p-3 max-w-[80%] animate-pulse">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input area */}
              <div className="bg-gray-200 p-3 absolute bottom-0 w-full flex items-center">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe un mensaje..."
                  className="bg-white rounded-full flex-grow p-2 px-4 focus:outline-none"
                />
                <button 
                  onClick={handleSendMessage}
                  className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center ml-2 focus:outline-none"
                >
                  <Send className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8 text-gray-600">
            <p>Prueba interactuar con el demo. Puedes preguntar por el apartamento en Chamberí.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;