
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import { motion } from 'framer-motion';
import { AlertTriangle, ShieldCheck, TrendingUp, Activity, HeartPulse, Brain } from 'lucide-react';

const RiskScorePanel: React.FC = () => {
  const { selectedRegion } = useBodyContext();

  return (
    <div className="w-full h-full p-5">
      <h2 className="text-lg font-medium mb-4">Health Risk Assessment</h2>
      
      <div className="space-y-4">
        {/* Overall Risk Score */}
        <motion.div 
          className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-medium">Overall Risk Score</h3>
            {selectedRegion ? (
              <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">Low</span>
            ) : (
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">Calculating...</span>
            )}
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
              <ShieldCheck className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <span className="text-3xl font-bold">23</span>
              <span className="text-sm text-muted-foreground ml-2">out of 100</span>
            </div>
          </div>
        </motion.div>
        
        {/* Specific Risk Categories */}
        <div className="space-y-3">
          <motion.div 
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
                <HeartPulse className="h-4 w-4 text-yellow-600" />
              </div>
              <span className="font-medium">Cardiovascular Risk</span>
            </div>
            <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">Moderate</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Activity className="h-4 w-4 text-green-600" />
              </div>
              <span className="font-medium">Metabolic Risk</span>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Low</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                <Brain className="h-4 w-4 text-green-600" />
              </div>
              <span className="font-medium">Neurological Risk</span>
            </div>
            <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">Low</span>
          </motion.div>
          
          <motion.div 
            className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-white"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-red-600" />
              </div>
              <span className="font-medium">Sleep Apnea Risk</span>
            </div>
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">Elevated</span>
          </motion.div>
        </div>
        
        {/* Trends */}
        <motion.div 
          className="rounded-xl bg-white border border-gray-100 p-5 shadow-sm mt-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium">Trends</h3>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last Month</span>
              <span className="font-medium text-green-600">-4%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last 3 Months</span>
              <span className="font-medium text-green-600">-7%</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Last 6 Months</span>
              <span className="font-medium text-green-600">-12%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RiskScorePanel;
