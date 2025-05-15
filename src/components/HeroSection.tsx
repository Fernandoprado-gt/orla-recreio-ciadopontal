
import React from 'react';
import LeadForm from './LeadForm';
import { Button } from '@/components/ui/button';
import { Motion, fadeIn, slideIn } from '@/components/ui/motion';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  const whatsappUrl = 'https://wa.me/5521988384869?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Orla%20Recreio';
  
  const handleWhatsAppClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Access the global gtag_report_conversion function
    if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      // Fallback if function isn't available
      window.open(whatsappUrl, '_blank');
    }
  };

  return <section className="relative overflow-hidden pt-8 pb-16 md:py-20 lg:py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('/lovable-uploads/917c7bf4-2c17-4e06-b50b-326df08f161b.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div> {/* Overlay para melhorar legibilidade */}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <Motion {...fadeIn} transition={{ duration: 0.7 }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-4 drop-shadow-lg">
                O melhor lugar do Rio é a Orla, o melhor é o ORLA.
              </h1>
              <p className="text-xl text-white mb-8 drop-shadow-md">3 quartos no Recreio, com lazer completo e localização privilegiada.</p>
              <div className="md:hidden">
                <LeadForm className="bg-white/95 backdrop-blur-sm shadow-lg" />
              </div>
              <div className="hidden md:block">
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="cta-button animate-pulse hover:animate-none" size="lg">
                    <a 
                      href={whatsappUrl}
                      onClick={handleWhatsAppClick}
                    >
                      Quero saber mais sobre o ORLA RECREIO
                    </a>
                  </Button>
                </motion.div>
              </div>
            </Motion>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="hidden md:block w-full max-w-md">
              <Motion {...slideIn.right} transition={{ duration: 0.7, delay: 0.2 }} id="cadastro">
                <LeadForm className="shadow-lg bg-white/95 backdrop-blur-sm" />
              </Motion>
            </div>
            <div className="block md:hidden w-full">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="ORLA RECREIO - Vista privilegiada para a praia" 
                className="w-full h-auto rounded-lg shadow-lg object-cover" 
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="absolute -bottom-16 -left-16 w-32 h-32 bg-orla-blue/20 rounded-full backdrop-blur-sm z-0"
        style={{ animationDelay: "0.5s" }}
      ></motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="absolute top-24 -right-20 w-40 h-40 bg-orla-green/20 rounded-full backdrop-blur-sm z-0"
      ></motion.div>
    </section>;
};
export default HeroSection;
