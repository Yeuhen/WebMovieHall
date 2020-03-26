import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from "./configs/routes";
import Header from './components/Header/index';
import Footer from './components/Footer';
import './App.css';


function App() {
  const [localeLang, setLocaleLang] = useState('');

  function getLocale() {
    return JSON.parse(localStorage.getItem("lang")) !== null ? JSON.parse(localStorage.getItem("lang")) : "ru-Ru";
  }

  const handleLocale = (target) => {
    localStorage.setItem("lang", JSON.stringify(target));
    setLocaleLang(target);
  };

  useEffect( () => {
    setLocaleLang(getLocale());
  }, []);

  return (
      <Router>
        <Header handleLocale={handleLocale}
                locale={localeLang}
        />
        <div className="container">
          <Routes locale={localeLang} />
          <Footer locale={localeLang} />
        </div>
      </Router>
  );
}

export default App;
