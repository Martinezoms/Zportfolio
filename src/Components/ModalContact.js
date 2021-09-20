import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HorizontalBar from './HorizontalBar';

function ModalContact({ setShowModal }) {
  return (
    <AnimatePresence>
      <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2 }}>
        <HorizontalBar setShowModal={setShowModal} />
      </motion.div>
    </AnimatePresence>
  );
}

export default ModalContact;
