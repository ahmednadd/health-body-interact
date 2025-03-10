
import React from 'react';
import { motion } from 'framer-motion';

interface SelectedIndicatorProps {
  x: number;
  y: number;
}

const SelectedIndicator: React.FC<SelectedIndicatorProps> = ({ x, y }) => {
  return (
    <motion.div
      className="absolute pointer-events-none z-20"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: 'translate(-50%, -50%)'
      }}
    >
      <div className="relative">
        <div className="absolute rounded-full bg-primary w-4 h-4 animate-pulse" />
        <div className="absolute rounded-full border-2 border-primary w-12 h-12 -left-4 -top-4 animate-pulse opacity-50" />
      </div>
    </motion.div>
  );
};

export default SelectedIndicator;
