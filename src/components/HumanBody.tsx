
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import BodyRegion from './BodyRegion';
import SelectedIndicator from './SelectedIndicator';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const HumanBody: React.FC = () => {
  const { regions, selectedRegion } = useBodyContext();

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-full max-w-xs md:max-w-sm lg:max-w-md aspect-[1/2] relative">
        <motion.div 
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* SVG Human Body Outline */}
          <svg
            viewBox="0 0 200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              d="M100 30C113.807 30 125 18.8071 125 5H75C75 18.8071 86.1929 30 100 30Z"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M65 60C65 46.1929 76.1929 35 90 35H110C123.807 35 135 46.1929 135 60V100H65V60Z"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M135 100H65L60 180H140L135 100Z"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M140 180H60L55 240H145L140 180Z"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M60 100L40 120V170L60 180"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M140 100L160 120V170L140 180"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M40 120L25 150V165L40 170"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M160 120L175 150V165L160 170"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M70 240L65 340L85 350V370L95 380H105L115 370V350L135 340L130 240"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M65 340L55 350L65 360"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M135 340L145 350L135 360"
              fill="rgba(0,0,0,0.05)"
              stroke="currentColor"
              strokeWidth="1.5"
            />
          </svg>

          {/* Clickable Regions */}
          {regions.map((region) => (
            <BodyRegion key={region.id} region={region} />
          ))}

          {/* Selected region indicator */}
          <AnimatePresence>
            {selectedRegion && (
              <SelectedIndicator
                x={selectedRegion.position.x}
                y={selectedRegion.position.y}
              />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default HumanBody;
