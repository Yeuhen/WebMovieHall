import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index.es';
import { library as faLib } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

faLib.add(faSearch);

const Search = ({locale}) => {
  const [searchValue, setSearchValue] = useState('');
  const [showSearchbar, seShowSearchbar] = useState(false);
  const history = useHistory();

  const setSearchFormStyle = showSearchbar ? [styles.searchForm, styles.showSearchForm].join(' ') : styles.searchForm;

  const handleSearchBarShow = () => {
    seShowSearchbar(!showSearchbar);
  };

  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue('');
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    history.push(`/search/${locale}/${searchValue}`);
    resetInputField();
    handleSearchBarShow();
  };

  return (
    <>
      <button className={styles.mobileSearchBtn}
              onClick={handleSearchBarShow}
      >
        <FontAwesomeIcon icon={faSearch}/>
      </button>
      <form
        action="#"
        method="post"
        className={setSearchFormStyle}
        onSubmit={callSearchFunction}
      >
        <input type="text"
               className={styles.searchInput}
               placeholder="Search video"
               value={searchValue}
               onChange={handleSearchInputChanges}
               name='searchValue'
        />
        <button type="submit"
                className={styles.searchBtn}>
          <FontAwesomeIcon icon={faSearch}/>
        </button>
      </form>
    </>
  );
};

Search.propTypes = {
  locale: PropTypes.string.isRequired
};

export default Search;
