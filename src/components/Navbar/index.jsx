import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { path } from 'ramda';
import routesEnv from '../../configs/routesEnv';
import resources from '../../configs/resources';
import styles from './index.module.css';


faLib.add(faBars, faTimes);

const Navbar = ({ handleLocale, locale }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLangBtn, setActiveLangBtn] = useState('');
  const history = useHistory();

  const setMenuStyle = showMenu ? [styles.wrapper, styles.showMenu].join(' ') : styles.wrapper;
  const setIconStyle = showMenu ? faTimes : faBars;

  const handleShowMenu = () => (
    setShowMenu(!showMenu)
  );

  const langBtnStyle = (lang) => {
    if (activeLangBtn === lang) {
      return [styles.langBtn, styles.langBtnActive].join(' ');
    }
    return styles.langBtn;
  };

  const handleGoTo = (target) => {
    const currentPath = path(['location', 'pathname'], history);

    if (currentPath !== target) {
      history.push(`${target}}`);
    }
  };

  useEffect( () => {
    setActiveLangBtn(locale)
  }, [locale]);

  const { topRatedMovies, topRatedTVs, about } = resources;

  return (
    <>
      <ul className={styles.localeWrapper}>
        <li>
          <button className={langBtnStyle('ru-RU')}
                  onClick={() => {
                    handleLocale('ru-RU');
                  }}>RU
          </button>
        </li>
        <li>
          <button className={langBtnStyle('en-US')}
                  onClick={() => {
                    handleLocale('en-US');
                  }}>EN
          </button>
        </li>
      </ul>
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
              {topRatedMovies[`${locale}`]}
            </button>
          </li>
          <li>
            <button
              className={styles.link}
              onClick={() => {
                handleShowMenu();
                handleGoTo(routesEnv.TOP_RATED_TV_SHOWS);
              }}>
              {topRatedTVs[`${locale}`]}
            </button>
          </li>
          <li>
            <button
              className={styles.link}
              onClick={() => {
                handleShowMenu();
                handleGoTo(routesEnv.INFO);
              }}>
              {about[`${locale}`]}
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

Navbar.propTypes = {
  handleLocale: PropTypes.func.isRequired,
  locale: PropTypes.string.isRequired,
};

export default Navbar;
