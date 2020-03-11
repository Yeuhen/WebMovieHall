import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from "./configs/routes";
import Navbar from './components/Navbar/index';
import 'materialize-css';



function App() {
  return (
      <Router>
        <div className="wrapper">
          <Navbar />
          <div className="container blue">
            <Routes />
          </div>
        </div>

      </Router>
  );
}

export default App;
