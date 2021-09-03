import React from 'react';
import { GitHub, Twitter, Mail, Linkedin } from 'react-feather';

function SideBar() {
  return (
    <div className="flex flex-col w-20 p-3  space-y-10 absolute inset-y-0 right-0 justify-center items-center border-solid border-l border-bGreyish side-bar">
      <span>
        <a href="https://github.com/Martinezoms" title="Github">
          <GitHub size="30" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/martins-enyinnaya-b4063b18b/" title="LinkedIn">
          <Linkedin size="30" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://twitter/martinezoms1" title="twitter">
          <Twitter size="30" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://mailto:martinezoms15@gmail.com">
          <Mail size="30" color="#eebbc3" className="side-menu" />
        </a>
      </span>
    </div>
  );
}

export default SideBar;
