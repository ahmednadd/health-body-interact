
import React from 'react';
import { User } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  return (
    <motion.div 
      className="flex justify-center items-center py-4 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative ">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary">
          <User className="h-8 w-8 text-primary" />
          
           
        </div>
        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
