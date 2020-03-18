import React, {useEffect} from 'react';
import M from 'materialize-css/dist/js/materialize.min';
import logo from '../../assets/web-movie-hall-logo.png';
import './index.module.css'

const Navbar = () => {

  useEffect(() => {
    const sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="/" className="brand-logo">
          <img className="materialboxed" width="150em" src={logo} alt="logo"/>
        </a>
        <a href="/" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="/">About</a></li>
          <li><a href="/">Registration</a></li>
          <li><a href="/">Login</a></li>
        </ul>
        <form className=" hide-on-med-and-down search-form" >
          <div className="input-field input-width" >
            <input id="search" type="search" required />
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons">close</i>
              <div className="search-results"></div>
          </div>
        </form>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="/">About</a></li>
          <li><a href="/">Registration</a></li>
          <li><a href="/">Login</a></li>
          <li className="search">
            <div className="search-wrapper card input-field">
              <input type="search"
                     required />
                <label className="label-icon" htmlFor="search">
                  <i className="material-icons">search</i>
                </label>
                <i className="material-icons">close</i>
                <div className="search-results"></div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
)
};

export default Navbar;
