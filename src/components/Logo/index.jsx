import React from 'react';
import {NavLink} from 'react-router-dom';
import resources from '../../configs/resources';
import styles from './index.module.css';


const Logo = () => {
  return (
    <NavLink to='/' className={styles["logo__container"]} >
      <h1 className={styles["logo__name"]} >{resources.logoName}</h1>
    </NavLink>
  );
};

export default Logo;
