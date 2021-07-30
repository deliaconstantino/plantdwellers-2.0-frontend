import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import XIcon from "./XIcon";
import Logout from "../session/Logout.js";

class NavBar extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = (event) => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    const navLinkClass =
      "block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none";

    return (
      <nav className="flex flex-wrap items-center justify-between p-3 bg-lime-100 ">
        <img
          src="../../img/eco-construction-1894026_1280.png"
          alt="green house"
          width="50"
          height="50"
        />
        {/* <!-- hamburger --> */}
        <div className="flex md:hidden">
          <button onClick={this.handleClick}>
            {this.state.clicked ? <XIcon /> : <HamburgerIcon />}
          </button>
        </div>
        {/* <!-- links --> */}
        <div
          className={
            this.state.clicked
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
          {/* <NavLink to="/logout" className="block md:flex w-full md:w-auto px-4 py-2 text-right bg-green-900 hover:bg-green-500 text-white md:rounded">
            Logout
          </NavLink> */}
        </div>
        {/* <!-- cta --> */}
      </nav>
    );
  }
}

export default NavBar;

// <NavLink to="/logout" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-green-900 hover:bg-green-500 text-white md:rounded">
//   Logout
// </NavLink>

//   <a
//   href="#"
//   className="block md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded"
// >
//   Create Account
// </a>
