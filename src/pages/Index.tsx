
import React, { useEffect } from 'react';
import HeroSection from '@/components/HeroSection';
import BenefitsSection from '@/components/BenefitsSection';
import ApartmentTypes from '@/components/ApartmentTypes';
import AmenitiesGallery from '@/components/AmenitiesGallery';
import LocationMap from '@/components/LocationMap';
import CredentialsSection from '@/components/CredentialsSection';
import FaqSection from '@/components/FaqSection';
import LeadForm from '@/components/LeadForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { motion } from 'framer-motion';
import { Motion, fadeIn, slideIn } from '@/components/ui/motion';
import { Phone, MapPin, Mail } from 'lucide-react';

const Index = () => {
  // Set meta tags for SEO
  useEffect(() => {
    document.title = "ORLA RECREIO | Apartamentos de 3 quartos no Recreio dos Bandeirantes";

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Conheça o ORLA RECREIO, empreendimento no Recreio dos Bandeirantes com apartamentos de 3 quartos, lazer completo e localização privilegiada na orla do Rio de Janeiro. Financiamento pelo Minha Casa Minha Vida.');
    }
  }, []);
  
  return <div className="min-h-screen">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }} 
        animate={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5 }}
        className="bg-white py-4 px-4 sticky top-0 z-40 shadow-sm"
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <motion.img 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.2 }}
              src="/orla-logo.svg" 
              alt="ORLA RECREIO" 
              className="h-12 w-auto" 
            />
          </div>
          <div className="hidden md:flex space-x-6">
            <motion.a 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.3 }}
              href="#plantas" 
              className="text-orla-dark-text hover:text-orla-blue transition-colors"
            >
              Plantas
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.4 }}
              href="#lazer" 
              className="text-orla-dark-text hover:text-orla-blue transition-colors"
            >
              Lazer
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.5 }}
              href="#localizacao" 
              className="text-orla-dark-text hover:text-orla-blue transition-colors"
            >
              Localização
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.6 }}
              href="#construtora" 
              className="text-orla-dark-text hover:text-orla-blue transition-colors"
            >
              Construtora
            </motion.a>
            <motion.a 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.3, delay: 0.7 }}
              href="#faq" 
              className="text-orla-dark-text hover:text-orla-blue transition-colors"
            >
              FAQ
            </motion.a>
          </div>
          <div>
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#cadastro" 
              className="hidden md:inline-block bg-orla-blue text-white px-4 py-2 rounded-md hover:bg-orla-blue/90 transition-colors"
            >
              Cadastre-se
            </motion.a>
            <motion.button 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              transition={{ duration: 0.5, delay: 0.6 }}
              className="md:hidden text-orla-blue" 
              aria-label="Menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main>
        <HeroSection />
        <BenefitsSection />
        <ApartmentTypes />
        <AmenitiesGallery />
        <LocationMap />
        <CredentialsSection />
        <FaqSection />
        
        {/* Final CTA Section */}
        <Motion {...fadeIn} transition={{ duration: 0.7 }}>
          <section className="py-16 bg-orla-blue text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Garanta já o seu apartamento no ORLA RECREIO</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">Apartamentos de 3 quartos com lazer completo e localização privilegiada na orla do Recreio.</p>
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/5521988384869?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20Orla%20Recreio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-orla-blue px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors inline-block"
              >
                Quero saber mais sobre o ORLA RECREIO
              </motion.a>
            </div>
          </section>
        </Motion>
      </main>

      {/* Footer */}
      <Motion {...slideIn.up} transition={{ duration: 0.7 }}>
        <footer className="bg-orla-dark-text text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <img src="/orla-logo.svg" alt="ORLA RECREIO" className="h-12 w-auto mb-4" />
                <p className="text-gray-300 mb-4">
                  O melhor lugar do Rio é a Orla, o melhor é o ORLA.
                </p>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, color: "#4389B8" }}
                    href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-orla-blue transition-colors" 
                    aria-label="Facebook"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, color: "#4389B8" }}
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-orla-blue transition-colors" 
                    aria-label="Instagram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1, color: "#4389B8" }}
                    href="https://youtube.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-orla-blue transition-colors" 
                    aria-label="YouTube"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                    </svg>
                  </motion.a>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">ORLA RECREIO</h3>
                <ul className="space-y-2 text-gray-300">
                  <motion.li whileHover={{ x: 3, color: "#fff" }} transition={{ duration: 0.2 }}>
                    <a href="#plantas" className="hover:text-white transition-colors">Plantas</a>
                  </motion.li>
                  <motion.li whileHover={{ x: 3, color: "#fff" }} transition={{ duration: 0.2 }}>
                    <a href="#lazer" className="hover:text-white transition-colors">Lazer</a>
                  </motion.li>
                  <motion.li whileHover={{ x: 3, color: "#fff" }} transition={{ duration: 0.2 }}>
                    <a href="#localizacao" className="hover:text-white transition-colors">Localização</a>
                  </motion.li>
                  <motion.li whileHover={{ x: 3, color: "#fff" }} transition={{ duration: 0.2 }}>
                    <a href="#construtora" className="hover:text-white transition-colors">Construtora</a>
                  </motion.li>
                  <motion.li whileHover={{ x: 3, color: "#fff" }} transition={{ duration: 0.2 }}>
                    <a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a>
                  </motion.li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Entre em contato</h3>
                <ul className="space-y-2 text-gray-300">
                  <motion.li 
                    className="flex items-start"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span>R. Zélio Valverde, 133 - Recreio dos Bandeirantes, Rio de Janeiro - RJ</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Phone className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>(21) 98838-4869</span>
                  </motion.li>
                  <motion.li 
                    className="flex items-center"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Mail className="h-5 w-5 mr-2 flex-shrink-0" />
                    <span>contato@orlarecreiorio.com.br</span>
                  </motion.li>
                </ul>
              </div>
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-700 text-gray-400 text-sm">
              <p className="text-center">© 2025 ORLA RECREIO. Todos os direitos reservados. Fotos e ilustrações meramente ilustrativas.</p>
              <p className="text-center mt-2">Desenvolvido com <span className="text-red-500">❤</span> por agenciatendencia.com</p>
            </div>
          </div>
        </footer>
      </Motion>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </div>;
};
export default Index;
