
import React from 'react';
import { MapPin, Palmtree, Bus, Star } from 'lucide-react';
import { Motion } from '@/components/ui/motion';

const BenefitsSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5521988384869?text=Olá,%20quero%20conhecer%20todos%20os%20benefícios.';
  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Access the global gtag_report_conversion_whatsapp function
    if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion_whatsapp === 'function') {
      return (window as any).gtag_report_conversion_whatsapp(whatsappUrl);
    } else {
      // Fallback if function isn't available
      window.open(whatsappUrl, '_blank');
    }
  };

  const benefits = [{
    id: 1,
    icon: <MapPin className="w-8 h-8 text-orla-blue" />,
    title: "Localização privilegiada",
    description: "A poucos metros da praia do Recreio, entre a natureza e toda a conveniência da Av. das Américas."
  }, {
    id: 2,
    icon: <Palmtree className="w-8 h-8 text-orla-green" />,
    title: "Lazer completo",
    description: "Piscinas, academia, espaço gourmet, playground e muito mais para seu conforto e bem-estar."
  }, {
    id: 3,
    icon: <Bus className="w-8 h-8 text-orla-blue" />,
    title: "Acesso fácil",
    description: "BRT próximo e conexão direta para a Av. das Américas e Recreio Shopping."
  }, {
    id: 4,
    icon: <Star className="w-8 h-8 text-orla-green" />,
    title: "Minha Casa Minha Vida",
    description: "Financiamento facilitado com as melhores condições do mercado."
  }];
  
  return <section id="beneficios" className="section bg-white">
      <div className="container mx-auto">
        <Motion initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }}>
          <h2 className="section-title">Viver como se estivesse de férias o ano inteiro</h2>
          <p className="section-subtitle">
            Na orla do Recreio, entre a natureza, a mobilidade e toda a conveniência da Av. das Américas.
          </p>
        </Motion>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {benefits.map((benefit, index) => <Motion key={benefit.id} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className="benefit-card flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4 p-3 bg-orla-sand rounded-full">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </Motion>)}
        </div>
        
        <div className="mt-16 text-center">
          <Motion initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>
            <a 
              href={whatsappUrl} 
              onClick={handleWhatsAppClick}
              className="cta-button"
            >
              Quero conhecer o ORLA RECREIO
            </a>
          </Motion>
        </div>
      </div>
    </section>;
};
export default BenefitsSection;
