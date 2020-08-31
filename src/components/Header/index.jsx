import React from 'react';
import Proptypes from 'prop-types';
import Navbar from '../Navbar';
import styles from './index.module.css';
import Search from '../Search';
import Logo from '../Logo';

const Header = ({handleLocale, locale}) => {

  return (
    <div className={styles.wrapper}>
      <div className={styles.headContainer}>
        <Logo />
        <div className={styles.menuContainer}>
          <Navbar handleLocale={handleLocale}
                  locale={locale}
          />
          <Search locale={locale}/>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  handleLocale: Proptypes.func.isRequired,
  locale: Proptypes.string.isRequired
};

export default Header;
