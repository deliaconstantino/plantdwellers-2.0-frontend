import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // document.getElementById("hamburger").onclick = function toggleMenu() {
  //   const navToggle = document.getElementsByClassName("toggle");
  //   for (let i = 0; i < navToggle.length; i++) {
  //     navToggle.item(i).classList.toggle("hidden");
  //   }
  // };

  return (
    <div className="navbar flex flex-wrap items-center justify-between p-5 bg-green-200">
      <img src="../../img/eco-construction-1894026_1280.png" alt="ACME" width="65" />
      <div className="flex md:hidden">
        <button id="hamburger">
          <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
        </button>
      </div>

      <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-900 md:border-none">

        <NavLink to="/profile" className="block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none">
          Profile
        </NavLink>
        <NavLink to="/logout" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-green-900 hover:bg-green-500 text-white md:rounded">
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
