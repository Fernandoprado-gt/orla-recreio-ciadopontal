
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

interface LeadFormProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ variant = 'primary', className = '' }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatPhoneNumber = (value: string) => {
    if (!value) return value;
    
    // Remove all non-digits
    const phoneNumber = value.replace(/[^\d]/g, '');
    
    // Format as (XX) XXXXX-XXXX
    if (phoneNumber.length <= 2) {
      return `(${phoneNumber}`;
    } else if (phoneNumber.length <= 7) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    } else if (phoneNumber.length <= 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    } else {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
    }
  };

  const handleWhatsappChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setWhatsapp(formatted);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !whatsapp || !interest) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    // Basic WhatsApp validation
    const digitsOnly = whatsapp.replace(/\D/g, '');
    if (digitsOnly.length < 11) {
      toast.error('Por favor, insira um número de WhatsApp válido.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Handle form submission logic here
      console.log({ name, whatsapp, interest });
      
      toast.success('Obrigado! Entraremos em contato em breve.');
      setName('');
      setWhatsapp('');
      setInterest('');
    } catch (error) {
      toast.error('Ocorreu um erro. Por favor, tente novamente.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} bg-white p-4 md:p-6 rounded-lg shadow-md`}>
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={handleWhatsappChange}
            className="form-input"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <Select value={interest} onValueChange={setInterest} disabled={isSubmitting}>
            <SelectTrigger className="form-input">
              <SelectValue placeholder="Interesse" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="1-quarto">1 Quarto (47,66m²)</SelectItem>
                <SelectItem value="2-quartos">2 Quartos (47,39m² a 50,66m²)</SelectItem>
                <SelectItem value="3-quartos">3 Quartos (59,54m²)</SelectItem>
                <SelectItem value="todos">Todos</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button 
          type="submit"
          className={variant === 'primary' ? 'cta-button w-full' : 'cta-button-secondary w-full'}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Quero saber mais sobre o ORLA RECREIO'}
        </Button>
        <p className="text-xs text-gray-500 text-center mt-2">
          Seus dados estão seguros e protegidos conforme a LGPD.
        </p>
      </div>
    </form>
  );
};

export default LeadForm;
