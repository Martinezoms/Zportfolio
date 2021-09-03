import React from 'react';
import '../Assets/css/main.css';
import NavBar from '../Components/Navbar';
import Background from '../Components/Background';
import BeatingPulse from '../Components/BeatingPulse';
import Intro from '../Components/Intro';

function Main() {
  return (
    <div>
      <NavBar />
      <Background />
      <BeatingPulse />
      <Intro />
    </div>
  );
}

export default Main;
