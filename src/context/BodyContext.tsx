
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { BodyData } from '../data/bodyData';

interface BodyRegion {
  id: string;
  name: string;
  description: string;
  symptoms: string[];
  treatments: string[];
  position: { x: number; y: number };
  size: number;
}

interface BodyContextType {
  selectedRegion: BodyRegion | null;
  setSelectedRegion: (region: BodyRegion | null) => void;
  regions: BodyRegion[];
}

const BodyContext = createContext<BodyContextType | undefined>(undefined);

export const BodyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [regions] = useState<BodyRegion[]>(BodyData);

  return (
    <BodyContext.Provider value={{ selectedRegion, setSelectedRegion, regions }}>
      {children}
    </BodyContext.Provider>
  );
};

export const useBodyContext = (): BodyContextType => {
  const context = useContext(BodyContext);
  if (context === undefined) {
    throw new Error('useBodyContext must be used within a BodyProvider');
  }
  return context;
};
