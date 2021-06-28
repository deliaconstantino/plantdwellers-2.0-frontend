import React from "react";
import { connect } from "react-redux";
import loginUserFetch from '../actions/loginUserFetch'


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        email: "",
        password: ""
    }
  }

  //TODO: clear form on successful login

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("in submit");
    console.log(this.state)

    this.props.loginUser(this.state)
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="min-h-screen flex flex-col justify-top sm:py-12">
          <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
            <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
              <div className="px-5 py-7">
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  E-mail
                </label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <label className="font-semibold text-sm text-gray-600 pb-1 block">
                  Password
                </label>
                <input
                  type="text"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                />
                <input
                  type="submit"
                  value="Login"
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
    loginUser: (formData) => dispatch(loginUserFetch(formData))
  };
};

export default connect(null, mapDispatchToProps)(Login);
