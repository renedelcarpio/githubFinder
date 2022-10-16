import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        className={({ isActive }) =>
          isActive ? 'navbar__active' : 'navbar__link'
        }
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? 'navbar__active' : 'navbar__link'
        }
        to="/repo"
      >
        Repository
      </NavLink>
    </nav>
  );
};

export default Navbar;
