import React from 'react';
import { XCircle, Menu } from 'react-feather';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import projects from '../Utils/projects';

function Projects() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="page projects"
      >
        <Link to="/">
          <XCircle size="30" className="absolute top-0 right-0 mx-4 my-7 text-whitey cursor-pointer close-button" />
        </Link>
        <Link to="/menu">
          <Menu size="30" className="nav-menu cursor-pointer fixed top-0 left-0 mx-4 my-7 text-whitey" />
        </Link>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 w-3/5 mx-auto mt-20 relative h-auto overflow-y-scroll projects-grid-ctn"
          style={{ height: '80%' }}
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-gray-50 h-44 cursor-pointer hover:opacity-80 relative shadow-sm"
            >
              <div className="bg-black bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity duration-200 ease-in-out w-full h-full absolute top-0 flex flex-col items-center justify-center space-y-2">
                <h4 className="text-white text-1xl text-center font-semibold" style={{ lineHeight: '1.5rem' }}>
                  {project.title}
                </h4>
                <button className="px-2 py-1 text-xs bg-pinky text-bluey hover:opacity-70 transition-all">
                  <a href={project.link} rel="noreferrer" target="_blank">
                    View
                  </a>
                </button>
              </div>
              <img className="object-contain h-full" src={project.imageLink} alt="trending-gif" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Projects;
