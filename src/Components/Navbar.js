import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/main.css';

function Navbar() {
  return (
    <div className=" bg-bgBluey mt-10 mr-10 ml-10 text-whitey rounded-full py-3 px-6 flex items-center justify-between">
      <div>
        <p>Martins</p>
        <p>Enyinnaya</p>
      </div>

      <div className="space-x-10 flex justify-end">
        <Link to="/about">
          <span>ABOUT</span>
        </Link>
        <span>
          <a>RESUME</a>
        </span>
        <Link to="/projects">
          <span>PROJECTS</span>
        </Link>
        <span>
          <a>DOWNLOAD CV</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
