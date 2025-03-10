
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import { motion } from 'framer-motion';
import { Moon, Activity, Heart, Waves, AlertCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

const MetricsPanel: React.FC = () => {
  const { selectedRegion } = useBodyContext();

  if (!selectedRegion) {
    return (
      <div className="w-full h-full flex items-center justify-center text-center p-8">
        <div className="glass rounded-2xl p-8 max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-medium">Shield Ecosystem</h2>
            <p className="text-muted-foreground">
              Select a region on the human body to view detailed health metrics and analysis.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <motion.div
        key={selectedRegion.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="space-y-6"
      >
        <h1 className="text-2xl font-semibold">{selectedRegion.name} Analysis</h1>
        
        {/* Sleep Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Sleep Duration & Efficiency */}
          <motion.div 
            className="glass rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center">
                <Moon className="h-5 w-5 text-blue-600" />
              </div>
              <h3 className="font-medium text-lg">Sleep Duration & Efficiency</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Duration</span>
                  <span className="text-sm font-medium">7.5hrs (Normal: 7-9hrs)</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Efficiency</span>
                  <span className="text-sm font-medium">89% (Normal: &gt;85%)</span>
                </div>
                <Progress value={89} className="h-2" />
              </div>
            </div>
          </motion.div>
          
          {/* Sleep Apnea & Oxygenation */}
          <motion.div 
            className="glass rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-indigo-100 flex items-center justify-center">
                <Waves className="h-5 w-5 text-indigo-600" />
              </div>
              <h3 className="font-medium text-lg">Sleep Apnea & Oxygenation</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Apnea Events</span>
                  <span className="text-sm font-medium">3 events/hr (Normal: &lt;5)</span>
                </div>
                <Progress value={60} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Oxygen Saturation</span>
                  <span className="text-sm font-medium">96% (Normal: &gt;94%)</span>
                </div>
                <Progress value={96} className="h-2" />
              </div>
            </div>
          </motion.div>
          
          {/* Sleep Architecture */}
          <motion.div 
            className="glass rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center">
                <Moon className="h-5 w-5 text-purple-600" />
              </div>
              <h3 className="font-medium text-lg">Sleep Architecture</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Deep Sleep</span>
                  <span className="text-sm font-medium">22% (Normal: 20-25%)</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">REM Sleep</span>
                  <span className="text-sm font-medium">23% (Normal: 20-25%)</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
            </div>
          </motion.div>
          
          {/* Cardiovascular Metrics */}
          <motion.div 
            className="glass rounded-xl p-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-red-100 flex items-center justify-center">
                <Heart className="h-5 w-5 text-red-600" />
              </div>
              <h3 className="font-medium text-lg">Cardiovascular Metrics</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Resting Heart Rate</span>
                  <span className="text-sm font-medium">62 BPM (Normal: 60-100)</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Heart Rate Variability</span>
                  <span className="text-sm font-medium">42ms (Normal: &gt;35ms)</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
            </div>
          </motion.div>
          
          {/* Sleep Fragmentation & Stress */}
          <motion.div 
            className="glass rounded-xl p-5 col-span-1 md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center">
                <AlertCircle className="h-5 w-5 text-orange-600" />
              </div>
              <h3 className="font-medium text-lg">Sleep Fragmentation & Stress Markers</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Awakenings</span>
                  <span className="text-sm font-medium">8 times (Normal: &lt;10)</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Cortisol Level</span>
                  <span className="text-sm font-medium">Normal Range</span>
                </div>
                <Progress value={65} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Sleep Latency</span>
                  <span className="text-sm font-medium">14 min (Normal: &lt;20)</span>
                </div>
                <Progress value={70} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm">Stress Score</span>
                  <span className="text-sm font-medium">32 (Low: &lt;40)</span>
                </div>
                <Progress value={32} className="h-2" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MetricsPanel;
