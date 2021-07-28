import React, { useState } from "react";
import Login from "./session/Login";
import Signup from "./session/Signup";

const Root = (props) => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLogin = (event) => {
    setLoginOpen(true);
    setSignupOpen(false);
  };

  const handleSignup = (event) => {
    setSignupOpen(true);
    setLoginOpen(false);
  };

  return (
    <div className="bg-cover">
      <div className="p-10 text-6xl text-green-800">
        <p>Welcome to PlantDwellers</p>
      </div>
      <div className="min-h-screen  justify-top sm:py-12">
        <button
          className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded max-w-xs"
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded max-w-xs"
          onClick={handleSignup}
        >
          SignUp
        </button>

        {loginOpen && <Login />}
        {signupOpen && <Signup />}
      </div>
    </div>
  );
};

export default Root;
