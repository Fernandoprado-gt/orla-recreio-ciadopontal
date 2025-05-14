
import React from 'react';
import { Button } from '@/components/ui/button';
import { Motion } from '@/components/ui/motion';

const FloatingWhatsApp: React.FC = () => {
  return (
    <Motion
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-5 right-5 z-50"
    >
      <Button
        className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
        size="lg"
        onClick={() => window.open('https://wa.me/5521988384869?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20ORLA%20RECREIO', '_blank')}
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
        <span className="sr-only">WhatsApp</span>
      </Button>
    </Motion>
  );
};

export default FloatingWhatsApp;
