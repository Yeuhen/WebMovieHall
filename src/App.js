import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./configs/routes";
import Header from './components/Header/index';
import './App.css';


function App() {

  return (
      <Router>
        <Header/>
        <div className="container">
          <Routes/>
        </div>
      </Router>
  );
}

export default App;
