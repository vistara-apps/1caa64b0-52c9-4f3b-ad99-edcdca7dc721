'use client';

import { useEffect, useState } from 'react';
import { Heart, MapPin, Calendar, Sparkles } from 'lucide-react';
import { DogCard } from './components/DogCard';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { type Dog } from './types';

const SAMPLE_DOGS: Dog[] = [
  {
    id: '1',
    name: 'Daisy Dow',
    breed: 'Jack Russell Terrier',
    age: 11,
    weight: 55,
    size: 'medium',
    energyLevel: 'high',
    description: 'Energetic and playful, loves to fetch and run around!',
    imageUrl: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800',
    shelterId: '0x123',
    shelterName: 'Happy Paws Shelter',
    location: 'San Francisco, CA',
    adoptable: true,
  },
  {
    id: '2',
    name: 'Hooira Commen',
    breed: 'Mixed Breed',
    age: 3,
    weight: 45,
    size: 'medium',
    energyLevel: 'medium',
    description: 'Sweet and gentle, great with kids and other pets.',
    imageUrl: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800',
    shelterId: '0x124',
    shelterName: 'Rescue Friends',
    location: 'Oakland, CA',
    adoptable: true,
  },
  {
    id: '3',
    name: 'Norther Fierdy',
    breed: 'Rottweiler Mix',
    age: 2,
    weight: 75,
    size: 'large',
    energyLevel: 'high',
    description: 'Loyal and protective, needs an experienced owner.',
    imageUrl: 'https://images.unsplash.com/photo-1568572933382-74d440642117?w=800',
    shelterId: '0x125',
    shelterName: 'Bay Area Rescue',
    location: 'Berkeley, CA',
    adoptable: true,
  },
  {
    id: '4',
    name: 'Saylan Wily Fox Hound',
    breed: 'Dachshund',
    age: 4,
    weight: 25,
    size: 'small',
    energyLevel: 'medium',
    description: 'Curious and friendly, loves to explore and snuggle.',
    imageUrl: 'https://images.unsplash.com/photo-1612536981610-2e8a6e3e7e3d?w=800',
    shelterId: '0x126',
    shelterName: 'Small Paws Rescue',
    location: 'San Jose, CA',
    adoptable: true,
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  const currentDog = SAMPLE_DOGS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_DOGS.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + SAMPLE_DOGS.length) % SAMPLE_DOGS.length);
  };

  const handleFavorite = (dogId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(dogId)) {
        newFavorites.delete(dogId);
      } else {
        newFavorites.add(dogId);
      }
      return newFavorites;
    });
  };

  if (!isReady) {
    return (
      <div className="min-h-screen bg-bg flex items-center justify-center">
        <div className="animate-pulse text-fg text-xl">Loading PawConnect...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <Header />
      
      <main className="container mx-auto px-4 py-6 max-w-md">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-fg mb-2 flex items-center gap-2">
            <Sparkles className="w-8 h-8 text-accent" />
            Find Your Match
          </h1>
          <p className="text-fg/70">
            Swipe through adoptable dogs near you
          </p>
        </div>

        <FilterBar />

        <div className="mb-6">
          <div className="text-center text-fg/60 text-sm mb-4">
            {currentIndex + 1} / {SAMPLE_DOGS.length}
          </div>
          
          <DogCard
            dog={currentDog}
            isFavorite={favorites.has(currentDog.id)}
            onFavorite={() => handleFavorite(currentDog.id)}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={handlePrevious}
            className="bg-surface text-fg py-3 px-6 rounded-lg font-medium hover:bg-surface/80 transition-all duration-200"
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            className="bg-accent text-white py-3 px-6 rounded-lg font-medium hover:bg-accent/90 transition-all duration-200"
          >
            Next Match
          </button>
        </div>

        <div className="bg-surface rounded-lg p-4 space-y-3">
          <div className="flex items-center gap-2 text-fg/80">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-sm">{currentDog.location}</span>
          </div>
          <div className="flex items-center gap-2 text-fg/80">
            <Calendar className="w-5 h-5 text-accent" />
            <span className="text-sm">{currentDog.age} years old</span>
          </div>
          <div className="flex items-center gap-2 text-fg/80">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm">{currentDog.shelterName}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button className="bg-accent text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-accent/90 transition-all duration-200 w-full">
            Apply to Adopt
          </button>
        </div>
      </main>
    </div>
  );
}
