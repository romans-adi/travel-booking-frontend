import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../assets/Images/logo.png';
import { logoutUser } from '../../redux/reducers/auth/authActions';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const role = useSelector((state) => state.auth.user.role);

  const handleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const handleLogOut = () => {
    dispatch(logoutUser());
    navigate('/');
    handleMenu();
  };

  return (
    <div id="navpanel-container" className={showMenu ? '' : 'show z-40'}>
      <button
        onClick={handleMenu}
        type="button"
        className={showMenu ? 'burger-icon' : 'close-button'}
        style={{ zIndex: 100 }}
        data-testid="burger-icon"
      >
        <div className={showMenu ? 'burger-bar' : 'close-bar'} />
        <div className={showMenu ? 'burger-bar' : 'close-bar'} />
      </button>
      <ul className={showMenu ? 'nav-links' : 'nav-links show'} data-testid="nav-links">
        <li className="logo-container">
          <NavLink to="/" onClick={handleMenu}>
            <img src={Logo} alt="logo" className="logo-image" />
          </NavLink>
        </li>
        <li className="navigation">
          <NavLink to="/" onClick={handleMenu}>HOME</NavLink>
          <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/places" onClick={handleMenu}>{role === 'user' ? 'EXPLORE PLACES' : 'DELETE PLACES'}</NavLink>

          {isAuthenticated && role !== 'agency' && (
            <>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/reservations" onClick={handleMenu}>MY BOOKING</NavLink>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/booking" onClick={handleMenu}>BOOK TRAVEL</NavLink>
            </>
          )}
          {isAuthenticated && role === 'agency' && (
            <>
              <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to="/addplace" onClick={handleMenu}>ADD TRAVEL</NavLink>
            </>
          )}
          {isAuthenticated
            && (
            <button
              className="logout-button"
              type="button"
              onClick={handleLogOut}
              aria-label="logout-button"
              data-testid="logout-button"
            >
              <i className="fa-solid fa-door-open" />
            </button>
            )}
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
