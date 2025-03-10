
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import { motion } from 'framer-motion';

interface BodyRegionProps {
  region: {
    id: string;
    name: string;
    position: { x: number; y: number };
    size: number;
    description: string;
    symptoms: string[];
    treatments: string[];
  };
}

const BodyRegion: React.FC<BodyRegionProps> = ({ region }) => {
  const { selectedRegion, setSelectedRegion } = useBodyContext();
  const isSelected = selectedRegion?.id === region.id;

  const handleClick = () => {
    if (isSelected) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(region);
    }
  };

  return (
    <motion.button
      className={`absolute rounded-full hover:bg-primary hover:bg-opacity-10 cursor-pointer flex items-center justify-center transition-all duration-300`}
      style={{
        left: `${region.position.x}%`,
        top: `${region.position.y}%`,
        width: `${region.size}%`,
        height: `${region.size}%`,
        transform: 'translate(-50%, -50%)',
        border: isSelected ? '2px solid rgb(var(--primary))' : '1px solid rgba(var(--primary), 0.3)',
        zIndex: isSelected ? 10 : 5
      }}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isSelected && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute inset-0 bg-primary bg-opacity-20 rounded-full"
        />
      )}
      <span className="sr-only">{region.name}</span>
    </motion.button>
  );
};

export default BodyRegion;
