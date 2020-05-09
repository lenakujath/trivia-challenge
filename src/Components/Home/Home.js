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
        <h1>Trivia knowledge Booster!</h1>
        <p>This fun trivia trainer will help you developing a well spread knowledge base by playling a game.
          We start it off with a common mix on different topics, then jump right into the movie world,
          to finally wrap it up with a dive into the field of music - difficulty will constantely increase. <br></br>
          <b>The motivation to play with us should be curiosity - you will meet no enemy and there won't be penaltys - 
            only yourself, filling up your knowledge holes round by round with the will to constantely keep learning!
          </b>
          </p> <img src={logo2} className="logo" alt="logo2"/>
        <br></br>
        <Link to="roundone">Start first Round</Link>
         
    </div>
  );


export default Home;

