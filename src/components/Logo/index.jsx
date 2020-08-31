import React from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../../assets/web-movie-hall-logo.png';
import routesEnv from '../../configs/routesEnv';
import styles from './index.module.css';

const Logo = () => {

  const history = useHistory();

  const handleLogoClick = () => {
    history.push(`${routesEnv.HOME}`);
  };

  return (
    <div className={styles.logoWrapper}>
      <button className={styles.logoButton} onClick={handleLogoClick}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </button>
    </div>
  );
};

export default Logo;
