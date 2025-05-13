
import React from 'react';
import LeadForm from './LeadForm';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-orla-sand relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orla-dark-text leading-tight mb-4">
                O melhor lugar do Rio é a Orla, o melhor é o ORLA.
              </h1>
              <p className="text-xl text-orla-dark-text/80 mb-8">
                1, 2 e 3 quartos no Recreio, com lazer completo e o lifestyle carioca que você merece.
              </p>
              <div className="md:hidden">
                <LeadForm className="bg-white/90 backdrop-blur-sm" />
              </div>
              <div className="hidden md:block">
                <a href="#cadastro" className="cta-button">
                  Quero saber mais sobre o ORLA RECREIO
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="hidden md:block w-full max-w-md">
              <div id="cadastro">
                <LeadForm />
              </div>
            </div>
            <div className="block md:hidden w-full">
              <img
                src="/placeholder.svg" 
                alt="ORLA RECREIO - Fachada do Empreendimento" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-orla-blue/10 rounded-full"></div>
      <div className="absolute top-24 -right-20 w-40 h-40 bg-orla-green/10 rounded-full"></div>
    </section>
  );
};

export default HeroSection;
