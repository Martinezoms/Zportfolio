import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/css/main.css';

function NavBar() {
  return (
    <div className=" bg-bgBluey mt-10 mr-10 ml-10 text-whitey rounded-full py-3 px-6 flex flex-auto items-center  justify-between nav">
      <div>
        <p>Martins</p>
        <p>Enyinnaya</p>
      </div>

      <div className="space-x-10 flex justify-end">
        <Link to="/about">
          <div className="p-3 nav-hover">ABOUT</div>
        </Link>
        <div className="p-3 cursor-pointer nav-hover">
          <p>RESUME</p>
        </div>
        <Link to="/projects">
          <div className="p-3 nav-hover">PROJECTS</div>
        </Link>
        <div className="bg-pinky text-bluey p-3 rounded-full cursor-pointer download">
          <p>DOWNLOAD CV &darr;</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
