
import './Main.css';
import {useNavigate} from 'react-router-dom'

import Pic from '../Images/PortfolioPic.png'


function Main() {

  const navigate = useNavigate();
  function nav1(e) {
    navigate('/AboutMe')
  }

  function nav2(e) {
    navigate('/Education')
  }

  function nav3(e) {
    navigate('/Skills')
  }

  function nav4(e) {
    navigate('/Experience')
  }

  function nav5(e) {
    navigate('/Projects')
  }

  return (
    <div class='body'>
      <img src={Pic} alt='Pic' class='Pic'/>
      <br></br>
      <div class='title'>Kohl Nguyen</div>
      <ul>
        <li><button onClick={nav1}>About me</button></li>
        <li><button onClick={nav2}>Education</button></li>
        <li><button onClick={nav3}>Skills</button></li>
        <li><button onClick={nav4}>Experience</button></li>
        <li><button onClick={nav5}>Projects</button></li>
      </ul>
      <footer>
        Links
      </footer>
    </div>
  );
}

export default Main;