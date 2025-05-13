
import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const handleWhatsAppClick = () => {
    // You can replace this with actual WhatsApp number
    const whatsappNumber = '5521000000000';
    const message = "Olá! Tenho interesse no ORLA RECREIO. Poderia me dar mais informações?";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
      aria-label="Fale pelo WhatsApp"
    >
      <MessageSquare className="h-6 w-6" />
    </Button>
  );
};

export default FloatingWhatsApp;
