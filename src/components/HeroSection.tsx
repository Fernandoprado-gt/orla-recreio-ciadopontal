
import React from 'react';
import LeadForm from './LeadForm';
import { Button } from '@/components/ui/button';
import { Motion } from '@/components/ui/motion';

const HeroSection: React.FC = () => {
  return <section className="bg-orla-sand relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Motion initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="max-w-xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-orla-dark-text leading-tight mb-4">
                O melhor lugar do Rio é a Orla, o melhor é o ORLA.
              </h1>
              <p className="text-xl text-orla-dark-text/80 mb-8">3 quartos no Recreio, com lazer completo e localização privilegiada.</p>
              <div className="md:hidden">
                <LeadForm className="bg-white/90 backdrop-blur-sm shadow-lg" />
              </div>
              <div className="hidden md:block">
                <Button asChild className="cta-button animate-pulse hover:animate-none" size="lg">
                  <a 
                    href="https://wa.me/5521988384869?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Orla%20Recreio" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Quero saber mais sobre o ORLA RECREIO
                  </a>
                </Button>
              </div>
            </Motion>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="hidden md:block w-full max-w-md">
              <Motion initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }} id="cadastro">
                <LeadForm className="shadow-lg" />
              </Motion>
            </div>
            <div className="block md:hidden w-full">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="ORLA RECREIO - Vista privilegiada para a praia" className="w-full h-auto rounded-lg shadow-lg object-cover" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-orla-blue/10 rounded-full"></div>
      <div className="absolute top-24 -right-20 w-40 h-40 bg-orla-green/10 rounded-full"></div>
    </section>;
};
export default HeroSection;
