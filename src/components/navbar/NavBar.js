import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logout from "../session/Logout.js";
import HamburgerIcon from "./HamburgerIcon";
import XIcon from "./XIcon";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navLinkClass =
    "block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none font-mono";

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-lime-100 ">
      <a href="/home" className="text-blue-500 underline">
        <img
          src="../../img/eco-construction-1894026_1280.png"
          alt="green house"
          width="50"
          height="50"
        />
      </a>
      <div className="flex md:hidden">
        <button onClick={handleClick}>
          {clicked ? <XIcon /> : <HamburgerIcon />}
        </button>
      </div>
      <div
        className={
          clicked
            ? "toggle md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-green-900 md:border-none"
            : "hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-green-900 md:border-none"
        }
      >
        <NavLink to="/plants/new" className={navLinkClass}>
          Create Plant
        </NavLink>
        <NavLink to="/plants" className={navLinkClass}>
          Plants
        </NavLink>
        <NavLink to="/home" className={navLinkClass}>
          Home
        </NavLink>
        <NavLink to="/profile" className={navLinkClass}>
          Profile
        </NavLink>
        <Logout />
      </div>
    </nav>
  );
};

export default NavBar;
