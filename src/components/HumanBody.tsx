
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import BodyRegion from './BodyRegion';
import SelectedIndicator from './SelectedIndicator';
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const HumanBody: React.FC = () => {
  const { regions, selectedRegion } = useBodyContext();

  return (
    <div className="relative w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-xs aspect-[1/2] relative">
        <motion.div 
          className="w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* SVG Skeleton Outline - Enhanced graphics */}
          <svg
            viewBox="0 0 200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            {/* Skull */}
            <path
              d="M100 20C113 20 124 32 124 42L124 60C124 70 113 80 100 80C87 80 76 70 76 60L76 42C76 32 87 20 100 20Z"
              fill="rgba(240,240,240,0.9)"
              stroke="#667085"
              strokeWidth="1.5"
            />
            
            {/* Cranium details */}
            <path
              d="M85 40 C 90 30 110 30 115 40"
              fill="none"
              stroke="#667085"
              strokeWidth="0.8"
            />
            <path
              d="M85 50 C 90 40 110 40 115 50"
              fill="none"
              stroke="#667085"
              strokeWidth="0.8"
            />
            
            {/* Jaw */}
            <path
              d="M85 65V75C85 85 115 85 115 75V65"
              fill="none"
              stroke="#667085"
              strokeWidth="1"
            />
            
            {/* Neck */}
            <path
              d="M90 80L90 95M110 80L110 95"
              stroke="#667085"
              strokeWidth="1.5"
            />
            
            {/* Shoulders */}
            <path
              d="M90 95H55M110 95H145"
              stroke="#667085"
              strokeWidth="1.5"
            />
            
            {/* Collar bones */}
            <path
              d="M90 95L100 105L110 95"
              stroke="#667085"
              strokeWidth="1.5"
            />
            
            {/* Spine */}
            <path
              d="M100 105L100 210"
              stroke="#667085"
              strokeWidth="2"
            />
            <path
              d="M100 115 L 98 117 L 102 119 L 98 121 L 102 123 L 98 125 L 102 127 L 98 129 L 102 131 L 98 133 L 102 135 L 98 137 L 102 139 L 98 141 L 102 143 L 98 145 L 102 147 L 98 149 L 102 151 L 98 153 L 102 155 L 98 157 L 102 159 L 98 161 L 102 163 L 98 165 L 102 167 L 98 169 L 102 171 L 98 173 L 102 175 L 98 177 L 102 179 L 98 181 L 102 183 L 98 185 L 102 187 L 98 189 L 102 191 L 98 193 L 102 195 L 98 197 L 102 199 L 98 201 L 102 203 L 98 205 L 102 207 L 100 210"
              stroke="#667085"
              strokeWidth="0.75"
              strokeLinecap="round"
            />
            
            {/* Ribs */}
            <path
              d="M100 115C100 115 80 120 75 125C70 130 70 135 75 140C80 145 100 145 100 145M100 115C100 115 120 120 125 125C130 130 130 135 125 140C120 145 100 145 100 145"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M100 125C100 125 80 130 75 135C70 140 70 145 75 150C80 155 100 155 100 155M100 125C100 125 120 130 125 135C130 140 130 145 125 150C120 155 100 155 100 155"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M100 135C100 135 82 140 78 145C74 150 74 155 78 160C82 165 100 165 100 165M100 135C100 135 118 140 122 145C126 150 126 155 122 160C118 165 100 165 100 165"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M100 145C100 145 84 150 80 155C76 160 76 165 80 170C84 175 100 175 100 175M100 145C100 145 116 150 120 155C124 160 124 165 120 170C116 175 100 175 100 175"
              stroke="#667085"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            
            {/* Pelvis */}
            <path
              d="M65 210C65 210 80 220 100 220C120 220 135 210 135 210"
              stroke="#667085"
              strokeWidth="1.5"
              fill="rgba(240,240,240,0.7)"
            />
            <path
              d="M65 210L65 230L85 240M135 210L135 230L115 240"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <path
              d="M85 240L100 220L115 240"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <ellipse cx="85" cy="230" rx="4" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            <ellipse cx="115" cy="230" rx="4" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            {/* Arms */}
            <path
              d="M55 95L45 140L35 185"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <ellipse cx="55" cy="95" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            <ellipse cx="45" cy="140" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            <path
              d="M145 95L155 140L165 185"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <ellipse cx="145" cy="95" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            <ellipse cx="155" cy="140" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            {/* Hands */}
            <path
              d="M35 185L30 195M35 185L35 195M35 185L40 195"
              stroke="#667085"
              strokeWidth="1"
            />
            <ellipse cx="35" cy="185" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            <path
              d="M165 185L160 195M165 185L165 195M165 185L170 195"
              stroke="#667085"
              strokeWidth="1"
            />
            <ellipse cx="165" cy="185" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            {/* Legs */}
            <path
              d="M85 240L80 300L75 360"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <ellipse cx="80" cy="300" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            <path
              d="M115 240L120 300L125 360"
              stroke="#667085"
              strokeWidth="1.5"
            />
            <ellipse cx="120" cy="300" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            {/* Feet */}
            <path
              d="M75 360L65 370M75 360L75 370M75 360L85 370"
              stroke="#667085"
              strokeWidth="1"
            />
            <ellipse cx="75" cy="360" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            <path
              d="M125 360L115 370M125 360L125 370M125 360L135 370"
              stroke="#667085"
              strokeWidth="1"
            />
            <ellipse cx="125" cy="360" rx="3" ry="2" fill="rgba(240,240,240,0.7)" stroke="#667085" strokeWidth="0.75" />
            
            {/* Skeleton glow effect */}
            <path
              d="M100 20C113 20 124 32 124 42L124 60C124 70 113 80 100 80C87 80 76 70 76 60L76 42C76 32 87 20 100 20Z"
              stroke="rgba(var(--primary), 0.2)"
              strokeWidth="3"
              strokeLinecap="round"
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
