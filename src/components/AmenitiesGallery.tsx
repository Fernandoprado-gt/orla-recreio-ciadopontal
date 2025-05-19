import React from 'react';
import { Waves, Users, Play, Dumbbell, Dog, Bike, Anchor } from 'lucide-react';
import { Motion } from '@/components/ui/motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AmenitiesGallery: React.FC = () => {
  const amenities = [
    { 
      id: 1, 
      icon: <Waves className="h-8 w-8 text-orla-blue" />, 
      title: "Piscina adulto e infantil",
      description: "Para seu lazer e diversão da família",
      image: "/lovable-uploads/07dbcdbc-e8fa-481f-af9e-46f3ff43815e.png" 
    },
    { 
      id: 2, 
      icon: <Users className="h-8 w-8 text-orla-green" />, 
      title: "Playground",
      description: "Espaço seguro para as crianças",
      image: "/lovable-uploads/15854e0c-b3c8-4e9d-a413-056b8fc173b7.png" 
    },
    { 
      id: 3, 
      icon: <Play className="h-8 w-8 text-orla-blue" />, 
      title: "Brinquedoteca",
      description: "Ambiente lúdico e educativo",
      image: "/lovable-uploads/90028153-a0e6-4c1b-80b8-b35615fb059b.png" 
    },
    { 
      id: 4, 
      icon: <Dumbbell className="h-8 w-8 text-orla-green" />, 
      title: "Academia",
      description: "Equipamentos modernos para seu treino",
      image: "/lovable-uploads/3a79d18c-5e03-4e28-8a3f-194043ba787d.png" 
    },
    { 
      id: 7, 
      icon: <Dog className="h-8 w-8 text-orla-blue" />, 
      title: "Pet Place",
      description: "Área exclusiva para seu pet",
      image: "/lovable-uploads/4b36a589-6073-4d6b-8bb6-4ae2f0a56eca.png" 
    },
    { 
      id: 8, 
      icon: <Bike className="h-8 w-8 text-orla-green" />, 
      title: "Bicicletário",
      description: "Espaço seguro para guardar sua bike",
      image: "/lovable-uploads/917c7bf4-2c17-4e06-b50b-326df08f161b.png" 
    },
    { 
      id: 9, 
      icon: <Anchor className="h-8 w-8 text-orla-blue" />, 
      title: "Lava-pranchas",
      description: "Para os amantes do surf",
      image: "/lovable-uploads/8eb4350b-b2b5-4e59-b400-1c87391c872f.png" 
    }
  ];

  return (
    <section className="section bg-white" id="lazer">
      <div className="container mx-auto">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Lazer Completo para Toda a Família</h2>
          <p className="section-subtitle">
            No ORLA RECREIO, cada detalhe foi pensado para proporcionar momentos inesquecíveis para você e sua família.
          </p>
        </Motion>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {amenities.map((amenity, index) => (
            <Motion
              key={amenity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <AspectRatio ratio={4/3} className="bg-gray-200">
                <img 
                  src={amenity.image} 
                  alt={amenity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
              </AspectRatio>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-3 bg-white rounded-full p-2">
                    {amenity.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">{amenity.title}</h3>
                    <p className="text-white/80 text-sm">{amenity.description}</p>
                  </div>
                </div>
              </div>
            </Motion>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#cadastro" className="cta-button">
              Quero conhecer todos os benefícios
            </a>
          </Motion>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallery;
