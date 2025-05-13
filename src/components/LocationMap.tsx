
import React from 'react';
import { MapPin, ShoppingBag, Bus, Waves, Road } from 'lucide-react';

const LocationMap: React.FC = () => {
  const locations = [
    { id: 1, icon: <ShoppingBag className="w-5 h-5" />, name: 'Recreio Shopping', distance: '5 min' },
    { id: 2, icon: <Bus className="w-5 h-5" />, name: 'BRT', distance: '3 min' },
    { id: 3, icon: <Road className="w-5 h-5" />, name: 'Av. das Américas', distance: '1 min' },
    { id: 4, icon: <Waves className="w-5 h-5" />, name: 'Praia do Recreio', distance: '2 min' },
  ];

  return (
    <section className="section bg-orla-sand" id="localizacao">
      <div className="container mx-auto">
        <h2 className="section-title">Localização Estratégica</h2>
        <p className="section-subtitle">
          No coração do Recreio dos Bandeirantes, com fácil acesso aos principais pontos da região.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="aspect-video relative rounded-md overflow-hidden">
              {/* This would be replaced with an actual map integration */}
              <div className="bg-gray-200 w-full h-full flex items-center justify-center">
                <MapPin className="w-12 h-12 text-orla-blue animate-bounce" />
                <span className="sr-only">Mapa de localização do ORLA RECREIO</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Principais pontos de interesse:</h3>
              <ul className="space-y-3">
                {locations.map((location) => (
                  <li key={location.id} className="flex items-center">
                    <span className="bg-orla-blue/10 p-2 rounded-full mr-3 text-orla-blue">
                      {location.icon}
                    </span>
                    <span className="flex-1">{location.name}</span>
                    <span className="text-orla-green font-medium">{location.distance}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">O melhor do Recreio ao seu alcance</h3>
            <div className="space-y-4 mb-8">
              <p className="flex items-start">
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Próximo às principais vias de acesso como Avenida das Américas e Avenida Lúcio Costa
              </p>
              <p className="flex items-start">
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                A poucos minutos das praias do Recreio e Reserva
              </p>
              <p className="flex items-start">
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Acesso fácil a comércios, restaurantes e serviços essenciais
              </p>
              <p className="flex items-start">
                <span className="bg-orla-blue rounded-full p-1 mr-3 mt-1">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                Estação de BRT a poucos passos, facilitando o deslocamento pela cidade
              </p>
            </div>
            <a href="#cadastro" className="cta-button self-start">
              Quero conhecer a localização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
