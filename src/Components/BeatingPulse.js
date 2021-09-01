import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { rgba } from 'polished';

function BeatingPulse() {
  const Wrapper = styled.div`
    position: realtive;
    min-width: 100px;
    min-height: 100px;
  `;
  const duration = '2.27s';

  const sharedStyles = css`
    position: fixed;
    top: 40%;
    left: 45%;
    min-width: 10%;
    min-height: 20%;
    border-radius: 50%;
  `;
  const pulse = (scale) => keyframes`
    0% {
      transform: scale(1);
      opacity: 1;

    }
    50% {
      transform: scale(${scale});
      opacity: 1;
    }
    80% {
      transform: scale(1);
      opacity: 1;
    }
  `;
  const Pulse = styled.div`
    ${sharedStyles};
    z-index: 2;
    background: ${rgba('#eebbc3', 0.05)};
    animation: ${(p) => pulse(p.scale)} ${duration} infinite;
  `;
  const iconBeat = keyframes`
    0%{transform: scale(1)}
    10%{transform: scale(1.15)}
    30%{transform: scale(1)}
  `;
  const Icon = styled.div`
    ${sharedStyles}
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: ${rgba('white', 0.85)};
    background: #232946;
    border: 5px solid ${rgba('#232946', 0.65)};
    animation: ${iconBeat} ${duration} infinite;
  `;
  return (
    <div>
      <Wrapper>
        <Icon className="font-bold">
          <p>Martins</p>
          <p>Enyinnaya</p>
        </Icon>
        <Pulse scale={3} />
        <Pulse scale={2} />
        <Pulse scale={1} />
      </Wrapper>
    </div>
  );
}

export default BeatingPulse;
