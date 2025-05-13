
import React from 'react';
import { Palmtree, MapPin, Bus, Building } from 'lucide-react';

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      id: 1,
      icon: <MapPin className="w-8 h-8 text-orla-blue" />,
      title: "Localização privilegiada",
      description: "Na orla do Recreio, entre a natureza, a mobilidade e toda a conveniência da Av. das Américas."
    },
    {
      id: 2,
      icon: <Palmtree className="w-8 h-8 text-orla-green" />,
      title: "Lazer completo",
      description: "Dentro e fora de casa, com inúmeras opções para seu conforto e bem-estar."
    },
    {
      id: 3,
      icon: <Bus className="w-8 h-8 text-orla-blue" />,
      title: "Acesso fácil",
      description: "BRT próximo e conexão direta para a Av. das Américas e Recreio Shopping."
    },
    {
      id: 4,
      icon: <Building className="w-8 h-8 text-orla-green" />,
      title: "Design moderno",
      description: "Acabamento de alto padrão com detalhes que fazem a diferença."
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Viver como se estivesse de férias o ano inteiro</h2>
        <p className="section-subtitle">
          Na orla do Recreio, entre a natureza, a mobilidade e toda a conveniência da Av. das Américas.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 bg-orla-sand rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#cadastro" className="cta-button">
            Quero conhecer o ORLA RECREIO
          </a>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
