import React, {useState} from 'react';
import { GiHamburgerMenu } from 'react-icons/gi' 
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { Link, useNavigate } from 'react-router-dom';
// import game from './Puzzles/index.html';

import TicTacToe from '../Tic_Tac_Toe/TicTacToe/TicTacToe';
import Cards from '../../memory_game/Cards'


import './Navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  const navigate = useNavigate();
  const navigateTicTac = () => {
    navigate("/tictac");  
  }
  const navigateCards=()=>{
    navigate("/cards");
  }
  const navigateLogin = () => {
    navigate("/login");  
  }
  const navigateRegister =() =>{
    navigate("/register");
  }
  const navigateApps= () =>{
    navigate("/apps");
  }

  return (
  
  <nav className="app__navbar">
     <div className="app__navbar-logo">
        <img src={images.gericht1} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href='http://localhost:5500/Puzzles/'>Organization</a></li>
        <li className="p__opensans" id='tic'><a onClick={navigateTicTac}>Decision Making</a></li>
        <li className="p__opensans"><a href='http://localhost:5500/Attention/'>Attention</a></li>
        <li className="p__opensans"><a href='http://localhost:5500/maze_game/'>Rat In A Maze</a></li>
        <li className="p__opensans"><a onClick={navigateCards}>Memory Game</a></li>
        <li className="p__opensans"><a onClick={navigateApps}>Quiz</a></li>
      </ul>
      <div className="app__navbar-login">
        <a onClick={navigateLogin} className="p__opensans" > Log In/ Register</a>

      <div/>
      
      </div>
      <div className="app_navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() =>setToggleMenu(true)}/>
        {toggleMenu && (
         <div className="app_navbar-smallscreen_overlay flex__centre slide-bottom">
          <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/> 
         
        <ul className="app__navbar-smallscreen_links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      </div>
         )}
  
</div>
  </nav>
);
}

export default Navbar;
