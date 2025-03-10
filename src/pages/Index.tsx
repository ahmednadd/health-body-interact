
import React from 'react';
import { BodyProvider } from '../context/BodyContext';
import Sidebar from '../components/Sidebar';
import HumanBody from '../components/HumanBody';
import InfoPanel from '../components/InfoPanel';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <BodyProvider>
      <div className="min-h-screen w-full flex">
        {/* Left Column with Sidebar and Human Body */}
        <motion.div 
          className="w-full md:w-1/2 lg:w-2/5 xl:w-1/3 flex flex-col border-r border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Profile Section */}
          <div className="h-auto">
            <Sidebar />
          </div>
          
          {/* Human Body Display */}
          <motion.div 
            className="flex-1 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HumanBody />
          </motion.div>
        </motion.div>
        
        {/* Right Column - Information Panel */}
        <motion.div 
          className="hidden md:block md:w-1/2 lg:w-3/5 xl:w-2/3 min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <InfoPanel />
        </motion.div>
      </div>
    </BodyProvider>
  );
};

export default Index;
