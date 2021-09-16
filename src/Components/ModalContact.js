import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HorizontalBar from './HorizontalBar';

function ModalContact() {
  return (
    <AnimatePresence>
      <motion.div classNme="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <div className="back-drop" />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
          <HorizontalBar />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalContact;
