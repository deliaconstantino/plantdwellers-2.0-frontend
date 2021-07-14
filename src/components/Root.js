import React, { useState } from 'react';
import Login from "./session/Login"

const Root = props => {

  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);

  const handleLogin = event => {
    console.log('in login')
    setLoginOpen(true)
  }

  const handleSignup = event => {
    console.log('in signup')
    setSignupOpen(true)
  }

  return (
    <div>Root page
      <div className="p-10 text-6xl text-green-800">
          <p>Welcome to PlantDwellers</p>
        </div>
      <button className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded" onClick={handleLogin}>Login</button>
      <button className="m-1.5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded" onClick={handleSignup}>SignUp</button>
      {/* <Login /> */}

      {loginOpen && <Login />}
    </div>
  )
}

export default Root;
