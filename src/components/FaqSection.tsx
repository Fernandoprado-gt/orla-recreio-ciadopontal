
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Motion } from '@/components/ui/motion';

const FaqSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "É possível financiar pelo Minha Casa Minha Vida?",
      answer: "Sim, o ORLA RECREIO é um empreendimento elegível para financiamento pelo programa Minha Casa Minha Vida, com condições especiais de taxas e subsídios, dependendo da sua faixa de renda. Entre em contato com nossos consultores para uma simulação personalizada."
    },
    {
      id: 2,
      question: "Quais são as garantias oferecidas pela construtora?",
      answer: "A Cury oferece garantia de 5 anos na estrutura e instalações, além de acompanhamento técnico no período de entrega. O empreendimento possui certificações ISO e PBQP-H nível A, garantindo os mais altos padrões de qualidade."
    },
    {
      id: 3,
      question: "Quais são as condições de pagamento?",
      answer: "Oferecemos condições flexíveis, com entrada facilitada, possibilidade de parcelamento direto com a construtora e opções de financiamento bancário. Entre em contato para uma simulação personalizada."
    },
    {
      id: 4,
      question: "Quando é a previsão de entrega?",
      answer: "O ORLA RECREIO tem previsão de entrega para o segundo semestre de 2026, conforme cronograma estabelecido no contrato. Para informações atualizadas sobre o andamento da obra, entre em contato com nosso time de vendas."
    },
    {
      id: 5,
      question: "Posso personalizar meu apartamento?",
      answer: "A Cury oferece pacotes de personalização para que você possa adaptar alguns aspectos do seu novo lar às suas preferências. Consulte as opções disponíveis e prazos com nossa equipe."
    },
    {
      id: 6,
      question: "Qual o valor do condomínio?",
      answer: "O valor estimado do condomínio é calculado com base na eficiência da gestão e nas áreas comuns. Para informações mais precisas, solicite uma simulação com nossa equipe de vendas."
    },
    {
      id: 7,
      question: "Como posso visitar o apartamento decorado?",
      answer: "Para visitar nosso apartamento decorado, basta agendar um horário através do nosso WhatsApp ou preenchendo o formulário de contato. Nossos consultores terão prazer em recebê-lo e apresentar todos os detalhes do empreendimento."
    },
    {
      id: 8,
      question: "Quais documentos são necessários para a compra?",
      answer: "Para a compra do imóvel, são necessários documentos de identificação (RG e CPF), comprovante de residência, comprovante de renda e certidões negativas. Nossa equipe de vendas fornecerá a lista completa de documentos conforme sua situação específica."
    }
  ];

  return (
    <section className="section bg-orla-gray" id="faq">
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Dúvidas Frequentes</h2>
          <p className="section-subtitle">
            Encontre respostas para as principais perguntas sobre o ORLA RECREIO.
          </p>
        </Motion>
        
        <div className="mt-8 max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="bg-white rounded-lg overflow-hidden shadow-sm">
            {faqs.map((faq, index) => (
              <Motion
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${faq.id}`}>
                  <AccordionTrigger className="px-6 py-4 hover:bg-orla-sand/30 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-orla-sand/10">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Motion>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-12 text-center">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <p className="text-lg mb-6">
              Tem mais alguma dúvida? Entre em contato conosco e ficaremos felizes em ajudar.
            </p>
            <a href="#cadastro" className="cta-button">
              Falar com um consultor
            </a>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
