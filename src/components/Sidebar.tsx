
import React from 'react';
import { User, BellRing, Calendar, Heart, Settings, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar: React.FC = () => {
  return (
    <motion.div 
      className="h-full w-full flex flex-col bg-white border-r border-gray-200"
      initial={{ x: -20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
            <User className="h-5 w-5" />
          </div>
          <div>
            <h2 className="font-medium">Sarah Johnson</h2>
            <p className="text-sm text-muted-foreground">Patient ID: 392810</p>
          </div>
        </div>
        
        <div className="mt-8 space-y-1.5">
          <motion.div 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-primary font-medium bg-primary/5"
          >
            <Heart className="h-5 w-5" />
            <span>Body Health</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground"
          >
            <Calendar className="h-5 w-5" />
            <span>Appointments</span>
          </motion.div>
          
          <motion.div 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground"
          >
            <BellRing className="h-5 w-5" />
            <span>Notifications</span>
            <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
          </motion.div>
          
          <motion.div 
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-muted-foreground hover:text-foreground"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-auto p-6">
        <div className="glass rounded-xl p-4 mb-6">
          <div className="flex items-center space-x-3 mb-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Calendar className="h-4 w-4 text-primary" />
            </div>
            <span className="text-sm font-medium">Upcoming Appointment</span>
          </div>
          <p className="text-sm mb-1">Dr. Michael Chen</p>
          <p className="text-xs text-muted-foreground">Tomorrow, 10:30 AM</p>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center justify-center w-full space-x-2 px-4 py-2 rounded-lg text-sm text-muted-foreground hover:bg-gray-100 transition-colors"
        >
          <LogOut className="h-4 w-4" />
          <span>Sign Out</span>
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Sidebar;
