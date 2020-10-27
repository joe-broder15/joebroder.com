import React from 'react';
import logo from './logo.svg';
import './App.css'
import HomePage from './containers/home'
import BlogPage from './containers/blog'
import NavBar from './containers/components/navbar'
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
          <Route path="/blog">
            <NavBar />
            <BlogPage/>
          </Route>
          <Route path="/">
            <NavBar />
            <HomePage />
          </Route>
        </Switch>
      </Router>                 
    </div>
  );
}

export default App;
