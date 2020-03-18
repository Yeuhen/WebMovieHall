import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from "./configs/routes";
import Navbar from './components/Navbar/index';
// import 'materialize-css';
import './App.css'

function App() {

  return (
      <Router>
          <Navbar />
          <div className="container">
            <Routes />
          </div>
      </Router>
  );
}

export default App;
