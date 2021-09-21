import React, { useState } from 'react';
import Contact from './Contact';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import '../Assets/css/main.css';

function NavBar() {
  const [showcontact, setShowContact] = useState(false);
  const handleShowContact = () => {
    setShowContact(true);
  };
  return (
    <div>
      {showcontact && <Contact setShowContact={setShowContact} />}
      <div className=" bg-bgBluey mt-10 mr-10 ml-10 text-whitey rounded-full py-3 px-6 flex flex-auto items-center  justify-between nav">
        <div>
          <p>Martins</p>
          <p>Enyinnaya</p>
        </div>
        <Menu size="30" className="nav-menu cursor-pointer" onClick={handleShowContact} />

        <div className="space-x-10 flex justify-end nav-prop">
          <Link to="/about">
            <div className="p-3 nav-hover">ABOUT</div>
          </Link>
          <div className="p-3 cursor-pointer nav-hover">
            <a
              target="_blank"
              href="https://docs.google.com/document/d/14eo1bOESu3mwdCwech6vJXdilfJWjHc_3JnxnXaclFw/edit#"
              rel="noreferrer"
            >
              RESUME
            </a>
          </div>
          <Link to="/projects">
            <div className="p-3 nav-hover">PROJECTS</div>
          </Link>
          <div className="bg-pinky text-bluey p-3 rounded-full cursor-pointer download">
            <p className="rounded-full">DOWNLOAD CV &darr;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
