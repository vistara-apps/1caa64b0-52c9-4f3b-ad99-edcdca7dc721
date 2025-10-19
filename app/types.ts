export type DogSize = 'small' | 'medium' | 'large';
export type EnergyLevel = 'low' | 'medium' | 'high';

export interface Dog {
  id: string;
  name: string;
  breed: string;
  age: number;
  weight: number;
  size: DogSize;
  energyLevel: EnergyLevel;
  description: string;
  imageUrl: string;
  shelterId: string;
  shelterName: string;
  location: string;
  adoptable: boolean;
  ownerAddress?: string;
}

export interface Shelter {
  id: string;
  name: string;
  location: string;
  contactEmail: string;
  website: string;
  verified: boolean;
}

export interface AdopterProfile {
  fid: number;
  walletAddress: string;
  preferences: {
    size?: DogSize[];
    energyLevel?: EnergyLevel[];
    breeds?: string[];
  };
  location: string;
}

export interface PawPassNFT {
  tokenId: string;
  dogId: string;
  ownerAddress: string;
  ipfsMetadataUri: string;
  mintDate: number;
}
