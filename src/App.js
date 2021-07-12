import React from "react";
import "./App.css";
import Login from "./components/session/Login";
import Logout from "./components/session/Logout";
import Profile from "./components/Profile";
import Home from "./components/home/Home"
import Plants from "./components/Plants";
import PlantForm from './components/PlantForm'
import { connect } from "react-redux";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { Router, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import { Redirect } from 'react-router'
import history from './components/history.js';

class App extends React.Component {
  componentDidMount() {
    //TODO: auto-login functionality
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3001/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((response) => {
          console.log(response);
          this.props.dispatch({
            type: "SET_CURRENT_USER",
            user: response.data.attributes,
          });
        });
    }
  }

  render() {
    if (!this.props.loggedIn) {
      return (
        <div className="App bg-green-100">
          <Login />
        </div>
      );
    } else {
      return (
        <Router history={history}>
          <div>
            <NavBar />
            <Route exact path="/">
              {this.props.loggedIn ? <Redirect to="/profile" /> : <Login />}
            </Route>
            <Route path="/plants/new" component={PlantForm}></Route>
            <Route exact path="/plants" component={Plants}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/logout" component={Logout}></Route>
          </div>
        </Router>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser.name,
  };
};

export default connect(mapStateToProps)(App);
