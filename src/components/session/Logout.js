import React from "react";
import { connect } from "react-redux";
import logoutUser from '../../actions/logoutUser'

class Logout extends React.Component {
  handleClick = (event) => {
    localStorage.removeItem("token")
    this.props.logoutUser();
  };


  render() {
    return (
      <button onClick={this.handleClick} className="px-4 py-2 bg-indigo-500 text-white rounded-lg">
        Logout
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);