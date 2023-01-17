import React, { useState } from "react";
import Login from "./session/Login";
import Signup from "./session/Signup";

const Root = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLogin = () => {
    setLoginOpen(true);
    setSignupOpen(false);
  };

  const handleSignup = () => {
    setSignupOpen(true);
    setLoginOpen(false);
  };

  return (
    <div className="bg-cover">
      <div className="pt-24 pb-10 px-3">
        <h1 className="mb-4 text-5xl sm:text-6xl">PlantDwellers</h1>
        <p>
          An app for people who live together to share in the care of their
          houseplants.
        </p>
      </div>
      <div className="min-h-screen sm:py-12">
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
