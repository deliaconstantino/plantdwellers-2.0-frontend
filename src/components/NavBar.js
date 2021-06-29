import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  document.getElementById("hamburger").onclick = function toggleMenu() {
    const navToggle = document.getElementsByClassName("toggle");
    for (let i = 0; i < navToggle.length; i++) {
      navToggle.item(i).classList.toggle("hidden");
    }
  };

  return (
    <div className="navbar flex flex-wrap items-center justify-between p-5 bg-blue-200">
      <img src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />
      <div className="flex md:hidden">
        <button id="hamburger">
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
      </div>

      <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">

        <NavLink to="/profile" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">
          Profile
        </NavLink>
        <NavLink to="/logout" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
