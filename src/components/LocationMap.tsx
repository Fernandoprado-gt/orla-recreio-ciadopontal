
import React from 'react';
import { MapPin, ShoppingBag, Bus, Waves, Navigation } from 'lucide-react';
import { Motion } from '@/components/ui/motion';

const LocationMap: React.FC = () => {
  const locations = [
    { id: 1, icon: <ShoppingBag className="w-5 h-5" />, name: 'Recreio Shopping', distance: '5 min', type: 'shopping' },
    { id: 2, icon: <Bus className="w-5 h-5" />, name: 'BRT', distance: '3 min', type: 'transporte' },
    { id: 3, icon: <Navigation className="w-5 h-5" />, name: 'Av. das Américas', distance: '1 min', type: 'avenida' },
    { id: 4, icon: <Waves className="w-5 h-5" />, name: 'Praia do Recreio', distance: '2 min', type: 'lazer' },
  ];

  return (
    <section className="section bg-orla-sand" id="localizacao">
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Localização Estratégica</h2>
          <p className="section-subtitle">
            No coração do Recreio dos Bandeirantes, com fácil acesso aos principais pontos da região.
          </p>
        </Motion>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <Motion
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="aspect-video relative rounded-md overflow-hidden border border-gray-200">
              {/* This would be replaced with an actual map integration */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14714.075850514579!2d-43.48445545!3d-23.030291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdc11bdeb266f%3A0xf55c36876e8a0f44!2sRecreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1684854012345!5m2!1spt-BR!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do ORLA RECREIO"
                className="absolute inset-0"
              ></iframe>
              <div className="absolute top-4 left-4 bg-orla-blue text-white p-2 rounded-lg shadow-lg z-10 flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                <span className="font-medium text-sm">ORLA RECREIO</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Principais pontos de interesse:</h3>
              <ul className="space-y-3">
                {locations.map((location) => (
                  <Motion
                    key={location.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: location.id * 0.1 }}
                    className="flex items-center"
                  >
                    <span className="bg-orla-blue/10 p-2 rounded-full mr-3 text-orla-blue">
                      {location.icon}
                    </span>
                    <span className="flex-1">{location.name}</span>
                    <span className="text-orla-green font-medium">{location.distance}</span>
                  </Motion>
                ))}
              </ul>
            </div>
          </Motion>
          
          <Motion
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-6">O melhor do Recreio ao seu alcance</h3>
            <div className="space-y-4 mb-8">
              <Motion
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="flex items-start"
              >
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Próximo às principais vias de acesso como Avenida das Américas e Avenida Lúcio Costa</span>
              </Motion>
              <Motion
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-start"
              >
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>A poucos minutos das praias do Recreio e Reserva</span>
              </Motion>
              <Motion
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="flex items-start"
              >
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Acesso fácil a comércios, restaurantes e serviços essenciais</span>
              </Motion>
              <Motion
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="flex items-start"
              >
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>Estação de BRT a poucos passos, facilitando o deslocamento pela cidade</span>
              </Motion>
            </div>
            <a href="#cadastro" className="cta-button self-start">
              Quero conhecer a localização
            </a>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
