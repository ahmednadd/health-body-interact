
import React from 'react';
import { useBodyContext } from '../context/BodyContext';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, AlertCircle, Pill, Activity } from 'lucide-react';

const InfoPanel: React.FC = () => {
  const { selectedRegion, setSelectedRegion } = useBodyContext();

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
            <h2 className="text-2xl font-medium">Body Health Explorer</h2>
            <p className="text-muted-foreground">
              Select a region on the human body to view detailed health information, common symptoms, and recommended treatments.
            </p>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full overflow-y-auto p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedRegion.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          <button
            onClick={() => setSelectedRegion(null)}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to overview</span>
          </button>

          <div className="space-y-6">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="inline-flex px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Anatomy
                </div>
                <h1 className="text-3xl font-semibold tracking-tight">{selectedRegion.name}</h1>
              </motion.div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground mt-3"
              >
                {selectedRegion.description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full p-2 bg-red-500/10">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="text-xl font-medium">Common Symptoms</h3>
                </div>
                <ul className="space-y-2">
                  {selectedRegion.symptoms.map((symptom, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-red-400 mt-2 mr-3" />
                      <span>{symptom}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="rounded-full p-2 bg-green-500/10">
                    <Pill className="h-5 w-5 text-green-500" />
                  </div>
                  <h3 className="text-xl font-medium">Recommended Treatments</h3>
                </div>
                <ul className="space-y-2">
                  {selectedRegion.treatments.map((treatment, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-start"
                    >
                      <span className="flex-shrink-0 h-2 w-2 rounded-full bg-green-400 mt-2 mr-3" />
                      <span>{treatment}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InfoPanel;
