import React from 'react';
import '../Assets/css/main.css';
import Navbar from '../Components/Navbar';
import Background from '../Components/Background';
import BeatingPulse from '../Components/BeatingPulse';
import Intro from '../Components/Intro';

function Main() {
  return (
    <div>
      <Navbar />
      <Background />
      <BeatingPulse />
      <Intro />
    </div>
  );
}

export default Main;
