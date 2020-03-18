import React from 'react';
import './index.module.css';

const Search = () => {
  return (
    <div className='search'>
      <form
        action="#"
        method="post"
        className="search__form"
        onSubmit={handlerSearch}
      >
        <input type="text"
               className="search__input"
               placeholder="Search music"
               value={value}
               onChange={onChange}
               name='searchValue'
        />
        <input type="submit"
               value="search"
               className="search__btn"/>
        <span className='threeLine' onClick={showSidebar}>&#9776;</span>
      </form>
    </div>
  )
}
