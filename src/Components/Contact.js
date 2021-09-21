import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { XCircle, GitHub, Mail, Linkedin, Twitter } from 'react-feather';

function Contact({ setShowContact }) {
  const handleCloseContact = () => {
    setShowContact(false);
  };
  return (
    <div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="side-drawer text-whitey flex flex-col items-center"
        >
          <XCircle
            size="30"
            className="fixed top-0 right-0 mx-4 my-7  text-whitey cursor-pointer close-button"
            onClick={handleCloseContact}
          />
          <ul className="text-center space-y-10 flex flex-col ">
            <li>
              <Link to="/about">
                <div className="p-3 nav-hover">ABOUT</div>
              </Link>
            </li>
            <li>
              <a
                target="_blank"
                href="https://docs.google.com/document/d/14eo1bOESu3mwdCwech6vJXdilfJWjHc_3JnxnXaclFw/edit#"
                rel="noreferrer"
                className="p-3 nav-hover"
              >
                RESUME
              </a>
            </li>
            <li>
              <Link to="/projects">
                <div className="p-3 nav-hover">PROJECTS</div>
              </Link>
            </li>
            <li>
              <p className="cursor-pointer p-3 nav-hover">DOWNLOAD CV </p>
            </li>
          </ul>

          <div className="absolute bottom-0 my-20 flex items-center">
            <a href="https://github.com/Martinezoms" className="mx-2" title="Github">
              <GitHub color="#eebbc3" className="cursor-pointer hover:opacity-50 transition-all ease-out" />
            </a>
            <a href="https://www.linkedin.com/in/martins-enyinnaya-b4063b18b/" className="mx-2" title="LinkedIn">
              <Linkedin color="#eebbc3" className="cursor-pointer hover:opacity-50 transition-all ease-out" />
            </a>
            <a href="https://twitter/martinezoms1" className="mx-2" title="Twitter">
              <Twitter color="#eebbc3" className="cursor-pointer hover:opacity-50 transition-all ease-out" />
            </a>
            <a href="https://mailto:martinezoms15@gmail.com">
              <Mail color="#eebbc3" className="cursor-pointer mx-2 hover:opacity-50 transition-all ease-out" />
            </a>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Contact;
