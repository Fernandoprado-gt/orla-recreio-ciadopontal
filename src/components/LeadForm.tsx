import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Check } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface LeadFormProps {
  variant?: 'primary' | 'secondary';
  className?: string;
}

const LeadForm: React.FC<LeadFormProps> = ({ variant = 'primary', className = '' }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [interest, setInterest] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const whatsappUrl = 'https://wa.me/5521988384869?text=Olá,%20acabei%20de%20me%20cadastrar%20na%20página%20do%20Orla%20Recreio%20e%20gostaria%20de%20receber%20mais%20informações.';

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

  const redirectToWhatsApp = () => {
    if (typeof window !== 'undefined' && typeof (window as any).gtag_report_conversion === 'function') {
      (window as any).gtag_report_conversion(whatsappUrl);
    } else {
      window.open(whatsappUrl, '_blank');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !whatsapp || !interest) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    const digitsOnly = whatsapp.replace(/\D/g, '');
    if (digitsOnly.length < 11) {
      toast.error('Por favor, insira um número de WhatsApp válido.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.rpc('insert_lead_cia_do_pontal', {
        p_nome: name,
        p_telefone: whatsapp,
        p_email: email || null,
        p_interesse: interest
      });
      
      if (error) {
        console.error('Supabase insert error:', error);
        toast.error('Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.');
        setIsSubmitting(false);
        return;
      }
      
      toast.success('Obrigado! Você será redirecionado para o WhatsApp.');
      
      if (typeof window !== 'undefined' && typeof (window as any).gtag_report_form_conversion === 'function') {
        (window as any).gtag_report_form_conversion();
        console.log('Form submission conversion tracked');
      }
      
      setSubmitted(true);
      
      setTimeout(() => {
        redirectToWhatsApp();
        
        setTimeout(() => {
          setName('');
          setWhatsapp('');
          setEmail('');
          setInterest('');
          setSubmitted(false);
        }, 3000);
      }, 1500);
    } catch (error) {
      toast.error('Ocorreu um erro. Por favor, tente novamente.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={`${className} bg-white p-6 md:p-8 rounded-lg shadow-md text-center`}>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="w-16 h-16 bg-orla-green/20 rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-orla-green" />
          </div>
          <h3 className="text-2xl font-semibold text-orla-dark-text">Recebemos seu contato!</h3>
          <p className="text-gray-600">
            Obrigado pelo interesse no ORLA RECREIO. Um de nossos consultores entrará em contato com você em breve.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`${className} bg-white p-4 md:p-6 rounded-lg shadow-md`}>
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center">Receba informações exclusivas</h3>
      <div className="space-y-4">
        <div>
          <Input
            placeholder="Nome completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
            disabled={isSubmitting}
            aria-label="Nome completo"
          />
        </div>
        <div>
          <Input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={handleWhatsappChange}
            className="form-input"
            disabled={isSubmitting}
            aria-label="WhatsApp"
          />
        </div>
        <div>
          <Input
            placeholder="Email (opcional)"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            disabled={isSubmitting}
            aria-label="Email"
          />
        </div>
        <div>
          <Select value={interest} onValueChange={setInterest} disabled={isSubmitting}>
            <SelectTrigger className="form-input">
              <SelectValue placeholder="Interesse" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
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
