import React, { useState } from 'react';
import { XCircle, Menu } from 'react-feather';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import ModalContact from '../Components/ModalContact';

function About() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(true);
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
        {showModal && <ModalContact setShowModal={setShowModal} />}
        <div className="about-bg">
          <Link to="/">
            <XCircle size="30" className="fixed top-0 right-0 mx-4 my-7 text-whitey cursor-pointer close-button" />
          </Link>
          <Link to="/menu">
            <Menu size="30" className="nav-menu cursor-pointer fixed top-0 left-0 mx-4 my-7 text-whitey" />
          </Link>
          <div className="py-3 px-10 ml-12 about flex flex-col pt-80 space-y-5">
            <h2 className="text-whitey text-6xl font-bold">About Me</h2>
            <div className="text-greyish flex flex-col space-y-5">
              <p>
                I am a software Engineer, passionate and determined to create simple,fuctional and interactive UI
                designs. I am very much focused in completing tasks assigned to me on or before time, mostly before
                time. Like I said earlier on the main page of my portfolio, I am a team player, innovative, adaptive,
                blah blah blah. I know, I sound too serious. Well, that's because I am being formal!.
              </p>
              <p>
                I like to do other fun stuff, yes, you read it right, coding is fun. I am a movie freak, I like to play
                video games too. I also love to listen to any music at all with good lyrics and good harmony. You see?
                Told you I am a fun guy.
              </p>
              <p>
                I am interested in working on oustanding projects and also learn from other people. Connect with me if
                you would love to work with me, or play video games with me.
              </p>
            </div>
            <div>
              <span className="text-whitey cursor-pointer connect" onClick={handleModal}>
                Let's connect
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default About;
