import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import Logo from '../../assets/Images/logo.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <div id="navpanel-container" className={showMenu ? '' : 'show z-40'}>
      <button
        onClick={handleMenu}
        type="button"
        className={showMenu ? 'burger-icon' : 'close-button'}
        style={{ zIndex: 100 }}
      >
        <div className={showMenu ? 'burger-bar' : 'close-bar'} />
        <div className={showMenu ? 'burger-bar' : 'close-bar'} />
      </button>
      <ul className={showMenu ? 'nav-links' : 'nav-links show'}>
        <li className="logo-container">
          <NavLink to="/" onClick={handleMenu}>
            <img src={Logo} alt="logo" className="logo-image" />
          </NavLink>
        </li>
        <li className="navigation">
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/places" onClick={handleMenu}>PLACES</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/reservations" onClick={handleMenu}>RESERVATIONS</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/mybooking" onClick={handleMenu}>MY BOOKING</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/booktravel" onClick={handleMenu}>BOOK TRAVEL</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/removetravel" onClick={handleMenu}>REMOVE TRAVEL</NavLink>
        </li>
        <li className="social-icons">
          <i className="fa-brands fa-twitter" />
          <i className="fa-brands fa-facebook-f" />
          <i className="fa-brands fa-google" />
          <i className="fa-brands fa-pinterest-p" />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
