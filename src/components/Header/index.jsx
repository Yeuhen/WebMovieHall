import React from "react";
import {useHistory} from 'react-router-dom';
import logo from "../../assets/web-movie-hall-logo.png";
import Navbar from "../Navbar";
import routesEnv from "../../configs/routesEnv";
import styles from "./index.module.css";
import Search from "../Search";

const Header = () => {
  const history = useHistory();

  const handleLogoClick = () => {
    history.push(routesEnv.HOME);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.logoWrapper}>
          <button className={styles.logoButton} onClick={handleLogoClick}>
            <img src={logo} alt="logo" className={styles.logo}/>
          </button>
        </div>
        <Navbar history={history}/>
      </div>
      <Search/>
    </div>
  )
};

export default Header;
