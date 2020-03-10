import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from "./configs/routes";
import './App.css';


function App() {
  return (
      <Router>
        <div className="container">
          <Routes />
        </div>
      </Router>
  );
}

export default App;
