
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

const ApartmentTypes: React.FC = () => {
  return (
    <section className="section bg-orla-gray" id="plantas">
      <div className="container mx-auto">
        <h2 className="section-title">Plantas e Tipologias</h2>
        <p className="section-subtitle">
          Conheça as opções de plantas disponíveis no ORLA RECREIO e encontre o imóvel perfeito para você.
        </p>
        
        <div className="mt-8">
          <Tabs defaultValue="2-quartos" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="1-quarto">1 Quarto</TabsTrigger>
              <TabsTrigger value="2-quartos">2 Quartos</TabsTrigger>
              <TabsTrigger value="3-quartos">3 Quartos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="1-quarto" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Planta Apartamento 1 Quarto PCD" 
                    className="max-w-full rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 1 Quarto PCD</h3>
                  <p className="text-lg mb-4">47,66m²</p>
                  <div className="space-y-3 mb-6">
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Ampla sala de estar e jantar
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Cozinha integrada
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Quarto espaçoso com acesso ao banheiro
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Adaptações para acessibilidade
                    </p>
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <a href="#cadastro" className="cta-button w-full md:w-auto mt-4">
                    Tenho interesse nesta planta
                  </a>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="2-quartos" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Planta Apartamento 2 Quartos" 
                    className="max-w-full rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 2 Quartos</h3>
                  <p className="text-lg mb-4">47,39m² a 50,66m²</p>
                  <div className="space-y-3 mb-6">
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Sala de estar e jantar com varanda
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Cozinha americana
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Suíte master com closet
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Segundo quarto versátil
                    </p>
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <a href="#cadastro" className="cta-button w-full md:w-auto mt-4">
                    Tenho interesse nesta planta
                  </a>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="3-quartos" className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                  <img 
                    src="/placeholder.svg" 
                    alt="Planta Apartamento 3 Quartos" 
                    className="max-w-full rounded-lg shadow-sm border border-gray-200"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Apartamento 3 Quartos</h3>
                  <p className="text-lg mb-4">59,54m²</p>
                  <div className="space-y-3 mb-6">
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Ampla sala de estar e jantar com varanda
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Cozinha integrada
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Suíte master com closet
                    </p>
                    <p className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-orla-blue rounded-full mr-2"></span>
                      Dois quartos adicionais
                    </p>
                  </div>
                  <Badge className="bg-orla-green text-white font-medium mb-4">Piso laminado nos quartos – Comprou, ganhou!</Badge>
                  <a href="#cadastro" className="cta-button w-full md:w-auto mt-4">
                    Tenho interesse nesta planta
                  </a>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ApartmentTypes;
