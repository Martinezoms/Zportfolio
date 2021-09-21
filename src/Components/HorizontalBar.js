import React from 'react';
import { motion } from 'framer-motion';
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

function HorizontalBar({ setShowModal }) {
  const handleBackdrop = () => {
    setShowModal(false);
  };
  return (
    <div className="back-drop cursor-pointer" onClick={handleBackdrop}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.4 }}>
        <div className="flex flex-row  space-x-20  justify-center  horizontal-bar ">
          <span>
            <a href="https://github.com/Martinezoms" title="Github">
              <GitHub size="50" color="#eebbc3" className="side-menu" />
            </a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/martins-enyinnaya-b4063b18b/" title="Linkedin">
              <Linkedin size="50" color="#eebbc3" className="side-menu" />
            </a>
          </span>
          <span>
            <a href="https://twitter/martinezoms1" title="twitter">
              <Twitter size="50" color="#eebbc3" className="side-menu" />
            </a>
          </span>
          <span>
            <a href="https://mailto:martinezoms15@gmail.com" title="Email">
              <Mail size="50" color="#eebbc3" className="side-menu" />
            </a>
          </span>
        </div>
      </motion.div>
    </div>
  );
}

export default HorizontalBar;
