import React from "react";
import { connect } from "react-redux";
import logoutUser from "../../actions/logoutUser";
import history from "../history.js";

const Logout = ({ logoutUser }) => {
  const handleClick = () => {
    localStorage.removeItem("token");
    logoutUser();
    history.push("/");
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-lime-500 text-white rounded-lg font-mono"
    >
      Logout
    </button>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(Logout);
