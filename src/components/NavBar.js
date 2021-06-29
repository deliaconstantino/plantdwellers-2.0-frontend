import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar flex flex-wrap items-center justify-between p-5 bg-blue-200">
      <div className="flex md:hidden">
        <button id="hamburger">
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
      </div>
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
