import '../Assets/css/main.css';
import NavBar from '../Components/NavBar';
import Background from '../Components/Background';
import BeatingPulse from '../Components/BeatingPulse';
import Intro from '../Components/Intro';
import SideBar from '../Components/SideBar';

function Main() {
  return (
    <div>
      <NavBar />
      <Background />
      <BeatingPulse />
      <Intro />
      <SideBar />
    </div>
  );
}

export default Main;
