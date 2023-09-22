import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div>
    <ul className="nav-links">
      <li>
        <NavLink to="/">LOGO</NavLink>
      </li>
      <li>
        <NavLink to="/travels">TRAVELS</NavLink>
      </li>
      <li>
        <NavLink to="/reservation">RESERVATION</NavLink>
      </li>
      <li>
        <NavLink to="/mytravels">MY TRAVELS</NavLink>
      </li>
      <li>
        <NavLink to="/addtravel">ADD TRAVEL</NavLink>
      </li>
      <li>
        <NavLink to="/deleteTravel">DELETE TRAVEL</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
