import React from 'react';
import { NavLink } from 'react-router-dom';
// import resources from '../../configs/resources';


const Navbar = () => {
  return (
    <div>
      <nav className="nav-extended">
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">Logo</a>
          <a href="#" data-target="mobile-demo" className="sidenav-trigger">
            <i className="material-icons">menu</i>
           </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><NavLink to="/create">Movies</NavLink></li>
            <li><NavLink to="/create">Movies</NavLink></li>
            <li><NavLink to="/create">Movies</NavLink></li>
          </ul>
        </div>
        <div className="nav-content">
          <ul className="tabs tabs-transparent">
            <li className="tab"><NavLink to="/create">Movies</NavLink></li>
            <li className="tab"><NavLink to="/">Movies</NavLink></li>
            <li className="tab"><NavLink to="/create">Movies</NavLink></li>
            <li className="tab"><NavLink to="/create">Movies</NavLink></li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        < li><NavLink to="/">Movies 1</NavLink></
          li>
        < li><NavLink to="/">Movies 2</NavLink></
          li>
        < li><NavLink to="/">Movies 3</NavLink></
          li>
        </ul>
    </div>
)
};

export default Navbar;
