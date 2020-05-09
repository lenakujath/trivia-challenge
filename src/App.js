import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { Switch, Route } from 'react-router-dom';
import RoundOne from './Components/RoundOne/RoundOne';


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
          </Switch>
       </div>
  );
 }
}

export default App;
