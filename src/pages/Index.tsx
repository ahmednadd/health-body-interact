
import React from 'react';
import { BodyProvider } from '../context/BodyContext';
import Sidebar from '../components/Sidebar';
import HumanBody from '../components/HumanBody';
import InfoPanel from '../components/InfoPanel';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <BodyProvider>
      <div className="min-h-screen w-full flex flex-col md:flex-row">
        {/* Sidebar */}
        <motion.div 
          className="w-full md:w-64 lg:w-80 md:min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Sidebar />
        </motion.div>
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Human Body Display */}
          <motion.div 
            className="w-full lg:w-1/2 h-[60vh] md:min-h-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <HumanBody />
          </motion.div>
          
          {/* Information Panel */}
          <motion.div 
            className="w-full lg:w-1/2 min-h-[40vh] md:min-h-screen border-t lg:border-t-0 lg:border-l border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InfoPanel />
          </motion.div>
        </div>
      </div>
    </BodyProvider>
  );
};

export default Index;
