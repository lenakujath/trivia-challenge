import React from 'react';
import logo from './trivia-logo.png';
import logo2 from './logo2jpg.jpg';
import './Home.css';
import { Link } from 'react-router-dom';



const Home = () => (

    <div className="App">
       <div > 
           <img src={logo} className="logo" alt="logo" /> 
       </div> 
        <h1>This Trivia is great!</h1> <img src={logo2} className="logo" alt="logo2"/>
        <br></br>
        <Link to="roundone">Start first Round</Link>
         
    </div>
  );


export default Home;

