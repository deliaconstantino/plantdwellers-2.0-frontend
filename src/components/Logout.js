import React from "react";
import { connect } from "react-redux";
import logoutUser from '../actions/logoutUser'

class Logout extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    localStorage.removeItem("token")
    this.props.logoutUser();
  };


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="min-h-screen flex flex-col justify-top sm:py-12">
          <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
              <div className="px-5 py-7">
                <input
                  type="submit"
                  value="Logout"
                  className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(logoutUser())
  };
};

export default connect(null, mapDispatchToProps)(Logout);
