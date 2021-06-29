import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/login">
        Login
      </NavLink>
      <NavLink to="/profile">
        Profile
      </NavLink>
      <NavLink to="/logout">
        Logout
      </NavLink>
    </div>
  );
};

export default NavBar;
