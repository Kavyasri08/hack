import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


import './App.css';
import TicTacToe from './components/Tic_Tac_Toe/TicTacToe/TicTacToe';
import Cards from './memory_game/Cards';
import Login from './LoginRegister/Login/Login';
import Register from './LoginRegister/Register/Register'
import Apps from './Quiz/Apps';



const App = () => (
  <div>
     {/* <Navbar/>
     <Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Chef/>
     <Intro/>
     <Laurels/>
     <Gallery/>
     <FindUs/>
     <Footer/> */}

    <BrowserRouter>
    <Navbar/>
   < Header/>
     <AboutUs/>
     <SpecialMenu/>
     <Chef/>
     <Intro/>
     <Laurels/>
     <Gallery/>
     <FindUs/>
     <Footer/>
    
    
      <Routes>
      
        <Route path="/" element={<Header />}></Route>
        <Route path="/header" element={<AboutUs />}></Route>
        <Route path="/specialmenu" element={<SpecialMenu />}></Route>
        <Route path="/chef"element={<Chef />}></Route>
        <Route path="/intro" element={<Intro />}></Route>
        <Route path="/laurels" element={<Laurels />}></Route>
        <Route path="/gallery"element={<Gallery />}></Route>
        <Route path="/findus" element={<FindUs />}></Route>
        <Route path="/footer" element={<Footer />}></Route>
        <Route path="/tictac" element={<TicTacToe />}></Route>
        <Route path="/cards" element={<Cards />}></Route>
        <Route path="/apps" element={<Apps/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter> 
    
  </div>
);

export default App;
