import React from 'react';
import { GitHub, Linkedin, Mail, Twitter } from 'react-feather';

function HorizontalBar() {
  return (
    <div className="flex flex-row w-20 p-3  space-x-20  justify-center items-center border-solid border-l border-bGreyish">
      <span>
        <a href="https://github.com/Martinezoms" title="Github">
          <GitHub size="50" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://www.linkedin.com/in/martins-enyinnaya-b4063b18b/" title="LinkedIn">
          <Linkedin size="50" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://twitter/martinezoms1" title="twitter">
          <Twitter size="50" color="#eebbc3" className="side-menu" />
        </a>
      </span>
      <span>
        <a href="https://mailto:martinezoms15@gmail.com">
          <Mail size="50" color="#eebbc3" className="side-menu" />
        </a>
      </span>
    </div>
  );
}

export default HorizontalBar;
