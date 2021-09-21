import '../Assets/css/main.css';
import { AnimatePresence, motion } from 'framer-motion';

function Background() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="main p-0 m-0"
      ></motion.div>
    </AnimatePresence>
  );
}

export default Background;
