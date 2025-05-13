
import React from 'react';
import { Pool, Users, Play, Dumbbell, LayoutDashboard, Flame, Dog, Bike, Anchor } from 'lucide-react';

const AmenitiesGallery: React.FC = () => {
  const amenities = [
    { 
      id: 1, 
      icon: <Pool className="h-8 w-8 text-orla-blue" />, 
      title: "Piscina adulto e infantil",
      image: "/placeholder.svg" 
    },
    { 
      id: 2, 
      icon: <Users className="h-8 w-8 text-orla-green" />, 
      title: "Playground",
      image: "/placeholder.svg" 
    },
    { 
      id: 3, 
      icon: <Play className="h-8 w-8 text-orla-blue" />, 
      title: "Brinquedoteca",
      image: "/placeholder.svg" 
    },
    { 
      id: 4, 
      icon: <Dumbbell className="h-8 w-8 text-orla-green" />, 
      title: "Academia",
      image: "/placeholder.svg" 
    },
    { 
      id: 5, 
      icon: <LayoutDashboard className="h-8 w-8 text-orla-blue" />, 
      title: "Coworking",
      image: "/placeholder.svg" 
    },
    { 
      id: 6, 
      icon: <Flame className="h-8 w-8 text-orla-green" />, 
      title: "Churrasqueiras",
      image: "/placeholder.svg" 
    },
    { 
      id: 7, 
      icon: <Dog className="h-8 w-8 text-orla-blue" />, 
      title: "Pet Place",
      image: "/placeholder.svg" 
    },
    { 
      id: 8, 
      icon: <Bike className="h-8 w-8 text-orla-green" />, 
      title: "Bicicletário",
      image: "/placeholder.svg" 
    },
    { 
      id: 9, 
      icon: <Anchor className="h-8 w-8 text-orla-blue" />, 
      title: "Lava-pranchas",
      image: "/placeholder.svg" 
    }
  ];

  return (
    <section className="section bg-white" id="lazer">
      <div className="container mx-auto">
        <h2 className="section-title">Lazer Completo para Toda a Família</h2>
        <p className="section-subtitle">
          No ORLA RECREIO, cada detalhe foi pensado para proporcionar momentos inesquecíveis para você e sua família.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {amenities.map((amenity) => (
            <div key={amenity.id} className="relative group overflow-hidden rounded-lg shadow-md">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={amenity.image} 
                  alt={amenity.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <div className="mr-3 bg-white rounded-full p-2">
                    {amenity.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{amenity.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a href="#cadastro" className="cta-button">
            Quero conhecer todos os benefícios
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesGallery;
