import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

faLib.add(faSpinner);

const Loader = () => (
  <div className={styles.wrapper} >
    <FontAwesomeIcon icon = {faSpinner} className = {styles.spinner}/>
  </div>
);

export default Loader;
