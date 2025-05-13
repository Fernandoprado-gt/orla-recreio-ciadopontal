
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import { Motion } from '@/components/ui/motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Check } from 'lucide-react';

const ApartmentTypes: React.FC = () => {
  const apartmentFeatures = {
    "1-quarto": [
      "Ampla sala de estar e jantar",
      "Cozinha integrada",
      "Quarto espaçoso com acesso ao banheiro",
      "Adaptações para acessibilidade",
    ],
    "2-quartos": [
      "Sala de estar e jantar com varanda",
      "Cozinha americana",
      "Suíte master com closet",
      "Segundo quarto versátil",
    ],
    "3-quartos": [
      "Ampla sala de estar e jantar com varanda",
      "Cozinha integrada",
      "Suíte master com closet",
      "Dois quartos adicionais",
    ]
  };

  return (
    <section className="section bg-orla-gray" id="plantas">
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Plantas e Tipologias</h2>
          <p className="section-subtitle">
            Conheça as opções de plantas disponíveis no ORLA RECREIO e encontre o imóvel perfeito para você.
          </p>
        </Motion>
        
        <div className="mt-8">
          <Tabs defaultValue="2-quartos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="1-quarto">1 Quarto</TabsTrigger>
              <TabsTrigger value="2-quartos">2 Quartos</TabsTrigger>
              <TabsTrigger value="3-quartos">3 Quartos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="1-quarto" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Motion
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-md">
                    <AspectRatio ratio={1/1} className="bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Planta Apartamento 1 Quarto PCD" 
                        className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                    </AspectRatio>
                  </div>
                </Motion>
                <Motion
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 1 Quarto PCD</h3>
                  <p className="text-lg mb-4">47,66m²</p>
                  <div className="space-y-3 mb-6">
                    {apartmentFeatures["1-quarto"].map((feature, index) => (
                      <p key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-orla-green mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <div className="mt-6">
                    <a href="#cadastro" className="cta-button w-full md:w-auto">
                      Tenho interesse nesta planta
                    </a>
                  </div>
                </Motion>
              </div>
            </TabsContent>
            
            <TabsContent value="2-quartos" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Motion
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-md">
                    <AspectRatio ratio={1/1} className="bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Planta Apartamento 2 Quartos" 
                        className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                    </AspectRatio>
                  </div>
                </Motion>
                <Motion
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 2 Quartos</h3>
                  <p className="text-lg mb-4">47,39m² a 50,66m²</p>
                  <div className="space-y-3 mb-6">
                    {apartmentFeatures["2-quartos"].map((feature, index) => (
                      <p key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-orla-green mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <div className="mt-6">
                    <a href="#cadastro" className="cta-button w-full md:w-auto">
                      Tenho interesse nesta planta
                    </a>
                  </div>
                </Motion>
              </div>
            </TabsContent>
            
            <TabsContent value="3-quartos" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Motion
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center"
                >
                  <div className="w-full max-w-md">
                    <AspectRatio ratio={1/1} className="bg-gray-100">
                      <img 
                        src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                        alt="Planta Apartamento 3 Quartos" 
                        className="w-full h-full object-cover rounded-lg shadow-sm border border-gray-200"
                      />
                    </AspectRatio>
                  </div>
                </Motion>
                <Motion
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 3 Quartos</h3>
                  <p className="text-lg mb-4">59,54m²</p>
                  <div className="space-y-3 mb-6">
                    {apartmentFeatures["3-quartos"].map((feature, index) => (
                      <p key={index} className="flex items-center">
                        <Check className="w-4 h-4 text-orla-green mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </p>
                    ))}
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <div className="mt-6">
                    <a href="#cadastro" className="cta-button w-full md:w-auto">
                      Tenho interesse nesta planta
                    </a>
                  </div>
                </Motion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;
