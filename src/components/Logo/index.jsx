import React from 'react';
import {useHistory} from 'react-router-dom';
import logo from '../../assets/web-movie-hall-logo.png';
import routesEnv from '../../configs/routesEnv';
import styles from './index.module.css';
import PropTypes from 'prop-types';

const Logo = ({locale}) => {

  const history = useHistory(locale);

  const handleLogoClick = () => {
    history.push(`${routesEnv.HOME}/${locale}`);
  };

  return (
    <div className={styles.logoWrapper}>
      <button className={styles.logoButton} onClick={handleLogoClick}>
        <img src={logo} alt="logo" className={styles.logo}/>
      </button>
    </div>
  );
};
Logo.propTypes = {
  locale: PropTypes.string.isRequired
};


export default Logo;
