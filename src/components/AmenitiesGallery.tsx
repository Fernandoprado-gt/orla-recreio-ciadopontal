
import React from 'react';
import { Waves, Users, Play, Dumbbell, LayoutDashboard, Flame, Dog, Bike, Anchor } from 'lucide-react';
import { Motion } from '@/components/ui/motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const AmenitiesGallery: React.FC = () => {
  const amenities = [
    { 
      id: 1, 
      icon: <Waves className="h-8 w-8 text-orla-blue" />, 
      title: "Piscina adulto e infantil",
      description: "Para seu lazer e diversão da família",
      image: "https://images.unsplash.com/photo-1576013551627-0ae7d539b2f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 2, 
      icon: <Users className="h-8 w-8 text-orla-green" />, 
      title: "Playground",
      description: "Espaço seguro para as crianças",
      image: "https://images.unsplash.com/photo-1594774471399-a3f7d41e392c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 3, 
      icon: <Play className="h-8 w-8 text-orla-blue" />, 
      title: "Brinquedoteca",
      description: "Ambiente lúdico e educativo",
      image: "https://images.unsplash.com/photo-1526978753999-b8b01f0f0a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 4, 
      icon: <Dumbbell className="h-8 w-8 text-orla-green" />, 
      title: "Academia",
      description: "Equipamentos modernos para seu treino",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 5, 
      icon: <LayoutDashboard className="h-8 w-8 text-orla-blue" />, 
      title: "Coworking",
      description: "Espaço ideal para trabalho remoto",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 6, 
      icon: <Flame className="h-8 w-8 text-orla-green" />, 
      title: "Churrasqueiras",
      description: "Para seus momentos de confraternização",
      image: "https://images.unsplash.com/photo-1594818898109-44d25d97c6c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 7, 
      icon: <Dog className="h-8 w-8 text-orla-blue" />, 
      title: "Pet Place",
      description: "Área exclusiva para seu pet",
      image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 8, 
      icon: <Bike className="h-8 w-8 text-orla-green" />, 
      title: "Bicicletário",
      description: "Espaço seguro para guardar sua bike",
      image: "https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
    },
    { 
      id: 9, 
      icon: <Anchor className="h-8 w-8 text-orla-blue" />, 
      title: "Lava-pranchas",
      description: "Para os amantes do surf",
      image: "https://images.unsplash.com/photo-1531722569936-825d3dd91b15?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
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
