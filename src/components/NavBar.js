import React from 'react';
import { NavLink } from 'react-router-dom';
import HamburgerIcon from './HamburgerIcon'
import XIcon from './XIcon'

class NavBar extends React.Component {
  state = {
    clicked: false
  }

  handleClick = event => {
    console.log('clicked button')
    console.log(this.state.clicked)
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render () {
    // let buttonInterior;

    // if (this.state.clicked) {
    //   buttonInterior = <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
    // } else {
    //   buttonInterior = <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
    // }

    // const hamburger = <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
    // const x = <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
    return (
      <nav className="flex flex-wrap items-center justify-between p-5 bg-blue-200">
        <img src="http://acmelogos.com/images/logo-1.svg" alt="ACME" width="120" />
      {/* <!-- hamburger --> */}
      <div className="flex md:hidden">
        <button onClick={this.handleClick}>
          {this.state.clicked ? <XIcon /> : <HamburgerIcon />}
        </button>
      </div>
      {/* <!-- links --> */}
      <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
        <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Home</a>
        <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Products</a>
        <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Pricing</a>
        <a href="#" className="block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none">Contact</a>
        <a href="#" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded">Create Account</a>
      </div>
      {/* <!-- cta --> */}
      </nav>
    )
  }
}

export default NavBar;

// const NavBar = () => {
//   // document.getElementById("hamburger").onclick = function toggleMenu() {
//   //   const navToggle = document.getElementsByClassName("toggle");
//   //   for (let i = 0; i < navToggle.length; i++) {
//   //     navToggle.item(i).classList.toggle("hidden");
//   //   }
//   // };

//   //TODOD: show if logged in

//   return (
//     <div className="navbar flex flex-wrap items-center justify-between p-5 bg-green-200">
//       <img src="../../img/eco-construction-1894026_1280.png" alt="green house" width="65" />
//       <div className="flex md:hidden">
//         <button id="hamburger">
//           <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
//           <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
//         </button>
//       </div>

//       <div className="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-gray-900 md:border-none">
//       <NavLink to="/plants/new" className="block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none">
//           Create Plant
//         </NavLink>
//         <NavLink to="/plants" className="block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none">
//           Plants
//         </NavLink>
//         <NavLink to="/home" className="block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none">
//           Home
//         </NavLink>
//         <NavLink to="/profile" className="block md:inline-block text-green-900 hover:text-green-500 px-3 py-3 border-b-2 border-green-900 md:border-none">
//           Profile
//         </NavLink>
//         <NavLink to="/logout" className="toggle hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-green-900 hover:bg-green-500 text-white md:rounded">
//           Logout
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default NavBar;


 // <img className="toggle block" src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png" width="40" height="40" />
          // <img className="toggle hidden" src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png" width="40" height="40" />
