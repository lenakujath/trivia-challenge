import React from 'react';
import './styles.css';
import Home from './Components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import RoundOne from './Components/RoundOne/RoundOne';
import RoundTwo from './Components/RoundTwo/RoundTwo';
import RoundThree from './Components/RoundThree/RoundThree';
import TheEnd from './Components/TheEnd/TheEnd';


class App extends React.Component {


   render (){

  return (
     <div className="App">
        <Switch>
          <Route
            exact path="/"
            render={(props) => (
              <div> <Home  {...props} /> </div>
                )}
            />
          <Route
              path="/roundone"
            render={(props) => (
              <div> <RoundOne  {...props} /> </div>
                )}
            />
            <Route
              path="/roundtwo"
            render={(props) => (
              <div> <RoundTwo  {...props} /> </div>
                )}
            />
             <Route
              path="/roundthree"
            render={(props) => (
              <div> <RoundThree  {...props} /> </div>
                )}
            />
            <Route
              path="/theend"
            render={(props) => (
              <div> <TheEnd  {...props} /> </div>
                )}
            />
          </Switch>
       </div>
  );
 }
}

export default App;
