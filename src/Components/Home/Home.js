import React from 'react';
import logo from './trivia-logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

//https://www.google.com/search?q=trivia+logo&client=firefox-b-d&source=lnms&tbm=isch&sa=X&ved=2ahUKEwibpa2Hv6bpAhUk8uAKHUx4DgcQ_AUoAXoECAwQAw&biw=1536&bih=727#imgrc=pH3QCPFm1h1SDM

const Home = () => (

    <div className="App">
       <div > 
           <img src={logo} className="logo" alt="logo" /> 
       </div> 
     <h1>This Trivia is great!</h1>
     <Link to="roundone">Start first Round</Link>
    </div>
  );


export default Home;

