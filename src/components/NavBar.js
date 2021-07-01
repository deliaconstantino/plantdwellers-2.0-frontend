import React from "react";
import { NavLink } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon";
import XIcon from "./XIcon";

class NavBar extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = (event) => {
    console.log("clicked button");
    console.log(this.state.clicked);
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        <img
          src="http://acmelogos.com/images/logo-1.svg"
          alt="ACME"
          width="120"
        />
        {/* <!-- hamburger --> */}
        <div className="flex md:hidden">
          <button onClick={this.handleClick}>
            {this.state.clicked ? <HamburgerIcon /> : <XIcon />}
          </button>
        </div>
        {/* <!-- links --> */}
        <div
          className={
            this.state.clicked
              ? "toggle md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none"
              : "hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none"
          }
        >
          <a
            href="#"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Home
          </a>
          <a
            href="#"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Products
          </a>
          <a
            href="#"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Pricing
          </a>
          <a
            href="#"
            className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none"
          >
            Contact
          </a>
          <a
            href="#"
            className="block md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded"
          >
            Create Account
          </a>
        </div>
        {/* <!-- cta --> */}
      </nav>
    );
  }
}

export default NavBar;
