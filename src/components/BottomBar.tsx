
import React from 'react';
import { Home, BarChart, Calendar, Settings, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomBar: React.FC = () => {
  return (
    <div className="h-full px-4 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-primary"
        >
          <Home className="h-5 w-5" />
          <span className="text-xs mt-1">Home</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <BarChart className="h-5 w-5" />
          <span className="text-xs mt-1">Reports</span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <Calendar className="h-5 w-5" />
          <span className="text-xs mt-1">Calendar</span>
        </motion.button>
      </div>
      
      <div className="flex items-center space-x-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground relative"
        >
          <Bell className="h-5 w-5" />
          <span className="text-xs mt-1">Alerts</span>
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center justify-center text-muted-foreground hover:text-foreground"
        >
          <Settings className="h-5 w-5" />
          <span className="text-xs mt-1">Settings</span>
        </motion.button>
      </div>
    </div>
  );
};

export default BottomBar;
