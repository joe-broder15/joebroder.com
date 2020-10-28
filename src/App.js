import React from 'react';
import './App.css';
import HomePage from './containers/home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>                 
    </div>
  );
}

export default App;
