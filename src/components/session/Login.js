import React, { useState } from "react";
import { connect } from "react-redux";
import loginUserFetch from "../../actions/loginUserFetch";

const Login = ({ loginUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser({ email, password });
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
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
                value="Login"
                className="transition duration-200 bg-green-400 hover:bg-green-500 focus:bg-green-600 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (formData) => dispatch(loginUserFetch(formData)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
