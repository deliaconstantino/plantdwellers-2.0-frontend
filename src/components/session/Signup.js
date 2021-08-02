import React, { useState } from "react";
import { connect } from "react-redux";
import signupUser from "../../actions/signupUser";

const Signup = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      name,
      email,
      password,
    };
    props.signupUser(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <div className="px-5 py-7">
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Email
            </label>
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleEmailChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <label className="font-semibold text-sm text-gray-600 pb-1 block">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
            />
            <input
              type="submit"
              value="Signup"
              className="transition duration-200 bg-green-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signupUser: (userData) => dispatch(signupUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
