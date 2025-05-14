
import React from 'react';
import { Shield, Award, CircleCheck } from 'lucide-react';
import { Motion, MotionContainer, MotionItem } from '@/components/ui/motion';
import { motion } from 'framer-motion';

const CredentialsSection: React.FC = () => {
  return <section className="section bg-white" id="construtora">
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">60 Anos de Excelência</h2>
          <p className="section-subtitle">
            A Cury é referência no mercado imobiliário, com mais de seis décadas de tradição e qualidade comprovada.
          </p>
        </Motion>
        
        <MotionContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <MotionItem>
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-orla-gray rounded-lg"
            >
              <Award className="w-12 h-12 text-orla-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Mais de 40 prêmios</h3>
              <p className="text-gray-700">
                Reconhecimentos nacionais e internacionais pela qualidade e inovação em seus projetos.
              </p>
            </motion.div>
          </MotionItem>
          
          <MotionItem>
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-orla-gray rounded-lg"
            >
              <Shield className="w-12 h-12 text-orla-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Certificações de Excelência</h3>
              <p className="text-gray-700">
                ISO e PBQP-H nível A, garantindo os mais altos padrões de qualidade em todos os processos.
              </p>
            </motion.div>
          </MotionItem>
          
          <MotionItem>
            <motion.div 
              whileHover={{ y: -10, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center p-6 bg-orla-gray rounded-lg"
            >
              <CircleCheck className="w-12 h-12 text-orla-blue mb-4" />
              <h3 className="text-xl font-semibold mb-3">Garantia de Entrega</h3>
              <p className="text-gray-700">
                Compromisso com prazos e qualidade, construindo a confiança de milhares de clientes satisfeitos.
              </p>
            </motion.div>
          </MotionItem>
        </MotionContainer>
        
        <div className="mt-16 flex items-center justify-center">
          
        </div>
      </div>
    </section>;
};
export default CredentialsSection;
