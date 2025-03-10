
import React from 'react';
import { BodyProvider } from '../context/BodyContext';
import Sidebar from '../components/Sidebar';
import HumanBody from '../components/HumanBody';
import MetricsPanel from '../components/MetricsPanel';
import RiskScorePanel from '../components/RiskScorePanel';
import BottomBar from '../components/BottomBar';
import { motion } from 'framer-motion';

const Index: React.FC = () => {
  return (
    <BodyProvider>
      <div className="min-h-screen w-full flex flex-col">
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar - Profile and Human Body */}
          <motion.div 
            className="w-64 flex-shrink-0 flex flex-col border-r border-gray-200 bg-gray-200 overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Section */}
            <div className="p-4 border-b border-gray-200">
              <Sidebar />
              <div className='text-center text-blue-500'>Patient Id: 235235</div>

            </div>
            
            {/* Human Body Hotspots */}
            <div className="flex-1 overflow-y-auto">
              <HumanBody />
            </div>
          </motion.div>
          
          {/* Middle Content - Health Metrics */}
          <motion.div 
            className="flex-1 overflow-y-auto p-6 bg-background"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <MetricsPanel />
          </motion.div>
          
          {/* Right Sidebar - Risk Scores */}
          <motion.div 
            className="w-96 flex-shrink-0 border-l border-gray-200 overflow-y-auto bg-gray-200"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <RiskScorePanel />
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div
          className="h-16 border-t border-gray-200 bg-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <BottomBar />
        </motion.div>
      </div>
    </BodyProvider>
  );
};

export default Index;
