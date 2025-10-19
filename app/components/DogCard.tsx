'use client';

import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { type Dog } from '../types';

interface DogCardProps {
  dog: Dog;
  isFavorite: boolean;
  onFavorite: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

export function DogCard({ dog, isFavorite, onFavorite, onNext, onPrevious }: DogCardProps) {
  return (
    <div className="relative bg-surface rounded-2xl overflow-hidden shadow-card">
      <div className="relative h-96 bg-bg">
        <Image
          src={dog.imageUrl}
          alt={dog.name}
          fill
          className="object-cover"
          priority
        />
        
        <button
          onClick={onPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-bg/80 backdrop-blur-sm p-2 rounded-full hover:bg-bg transition-colors duration-200"
        >
          <ChevronLeft className="w-6 h-6 text-fg" />
        </button>
        
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-bg/80 backdrop-blur-sm p-2 rounded-full hover:bg-bg transition-colors duration-200"
        >
          <ChevronRight className="w-6 h-6 text-fg" />
        </button>

        <button
          onClick={onFavorite}
          className="absolute top-4 right-4 bg-bg/80 backdrop-blur-sm p-3 rounded-full hover:bg-bg transition-colors duration-200"
        >
          <Heart
            className={`w-6 h-6 ${
              isFavorite ? 'fill-accent text-accent' : 'text-fg'
            }`}
          />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg/90 to-transparent p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface">
              <Image
                src={dog.imageUrl}
                alt={dog.name}
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-fg">{dog.name}</h2>
              <p className="text-fg/70 text-sm">{dog.breed}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">{dog.age}</div>
            <div className="text-fg/60">Age</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fg">{dog.weight}</div>
            <div className="text-fg/60">lbs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-fg capitalize">{dog.energyLevel}</div>
            <div className="text-fg/60">Energy</div>
          </div>
        </div>

        <div className="pt-4 border-t border-fg/10">
          <p className="text-fg/80 leading-relaxed">{dog.description}</p>
        </div>

        <div className="flex items-center gap-2 pt-2">
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
            {dog.size}
          </span>
          <span className="bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium">
            {dog.energyLevel} energy
          </span>
        </div>
      </div>
    </div>
  );
}
