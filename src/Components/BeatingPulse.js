import React from 'react';
import { Wrapper, Icon, Pulse } from './Styled';

import '../Assets/css/main.css';

function BeatingPulse() {
  return (
    <div className="beating">
      <Wrapper>
        <Icon className="font-bold">
          <p>Martins</p>
          <p>Enyinnaya</p>
        </Icon>
        <Pulse scale={1.5} />
        <Pulse scale={1.2} />
        <Pulse scale={1} />
      </Wrapper>
    </div>
  );
}

export default BeatingPulse;
