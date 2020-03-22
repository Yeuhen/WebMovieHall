import React, {useState,} from 'react';
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome/index.es';
import {library as faLib} from '@fortawesome/fontawesome-svg-core';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import styles from './index.module.css';

faLib.add(faSearch);

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const history = useHistory();
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue("")
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    history.push(`/search/${searchValue}`);
    resetInputField();
  };

  return (
    <div className={styles.search}>
      <form
        action="#"
        method="post"
        className={styles.searchForm}
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
    </div>
  )
};

Search.propTypes = {};

export default Search;
