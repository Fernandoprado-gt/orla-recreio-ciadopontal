
import React from 'react';
import { Motion } from '@/components/ui/motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';

const ApartmentTypes: React.FC = () => {
  const apartmentFeatures = {
    "3-quartos": ["Ampla sala de estar e jantar com varanda", "Cozinha integrada", "Suíte master com closet", "Dois quartos adicionais", "Localização privilegiada a poucos metros da praia"]
  };
  
  const whatsappUrl = 'https://wa.me/5521988384869?text=Olá,%20tenho%20interesse%20nessa%20planta.';
  
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

  return <section className="section bg-orla-gray" id="plantas">
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
          <h2 className="section-title">Planta e Tipologia</h2>
          <p className="section-subtitle">
            Conheça a planta do ORLA RECREIO, projetada para o seu máximo conforto e bem-estar.
          </p>
        </Motion>
        
        <div className="mt-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <Motion initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5
            }} className="flex justify-center">
                <div className="w-full max-w-md">
                  <AspectRatio ratio={1 / 1} className="bg-gray-100">
                    <img alt="Planta Apartamento 3 Quartos" className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200" src="/lovable-uploads/8eb4350b-b2b5-4e59-b400-1c87391c872f.png" />
                  </AspectRatio>
                </div>
              </Motion>
              <Motion initial={{
              opacity: 0,
              x: 20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.2
            }}>
                <h3 className="text-2xl font-semibold mb-3">Apartamento 3 Quartos</h3>
                <p className="text-lg mb-4">59,54m²</p>
                <div className="space-y-3 mb-6">
                  {apartmentFeatures["3-quartos"].map((feature, index) => <p key={index} className="flex items-center">
                      <Check className="w-4 h-4 text-orla-green mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </p>)}
                </div>
                <div className="mt-6">
                  <a 
                    href={whatsappUrl} 
                    onClick={handleWhatsAppClick}
                    className="cta-button w-full md:w-auto"
                  >
                    Tenho interesse nesta planta
                  </a>
                </div>
              </Motion>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ApartmentTypes;
