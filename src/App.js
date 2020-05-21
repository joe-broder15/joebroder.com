import React from 'react';
import logo from './logo.svg';
import './App.css'
import HomePage from './containers/home'
import NavBar from './containers/components/navbar'

function App() {


  return (
    <div className="App">
        <NavBar />
        <HomePage />                   
    </div>
  );
}

export default App;
