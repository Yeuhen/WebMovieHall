import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';
import {library as faLib} from '@fortawesome/fontawesome-svg-core';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import {path} from 'ramda'
import routesEnv from "../../configs/routesEnv";
import resources from "../../configs/resources";
import styles from './index.module.css'


faLib.add(faBars, faTimes);

const Navbar = ({history}) => {
  const [showMenu, setShowMenu] = useState(false);

  const setMenuStyle = showMenu ? [styles.wrapper, styles.showMenu].join(' ') : styles.wrapper;
  const setIconStyle = showMenu ? faTimes : faBars;

  const handleShowMenu = () => (
    setShowMenu(!showMenu)
  );

  const handleGoTo = (target) => {
    const currentPath = path(['location', 'pathname'], history);

    if (currentPath !== target) {
      history.push(target)
    }
  };

  const {topRatedMovies, topRatedTVs, about} = resources;

  return (
    <>
      <button
        onClick={handleShowMenu}
        className={styles.menuIcon}>
        <FontAwesomeIcon icon={setIconStyle}/>
      </button>
      <nav className={styles.menuWrapper}>
        <ul className={setMenuStyle}>
          <li>
            <button
              className={styles.link}
              onClick={() => {
                handleShowMenu();
                handleGoTo(routesEnv.TOP_RATED_MOVIES);
              }}>
              {topRatedMovies}
            </button>
          </li>
          <li>
            <button
              className={styles.link}
              onClick={() => {
                handleShowMenu();
                handleGoTo(routesEnv.TOP_RATED_TV_SHOWS);
              }}>
              {topRatedTVs}
            </button>
          </li>
          <li>
            <button
              className={styles.link}
              onClick={() => {
                handleShowMenu();
                handleGoTo(routesEnv.ABOUT);
              }}>
              {about}
            </button>
          </li>
        </ul>
      </nav>
    </>
  )
};

Navbar.propTypes = {
  history: PropTypes.shape({push: PropTypes.func, replace: PropTypes.func}).isRequired
};

export default Navbar;
