import React, { useEffect } from "react";
import Root from "./components/Root";
import Logout from "./components/session/Logout";
import Profile from "./components/profile/Profile";
import Home from "./components/home/Home";
import Plants from "./components/plants/Plants";
import PlantForm from "./components/plants/PlantForm";
import { connect } from "react-redux";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import history from "./components/history.js";
import { ROOTURL } from "./constants";

const App = ({ loggedIn, dispatch }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch(`${ROOTURL}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((response) => {
          dispatch({
            type: "SET_CURRENT_USER",
            user: response.data.attributes,
          });
        });
    }
  }, []);

  if (!loggedIn) {
    return (
      <div className="text-center">
        <Root />
      </div>
    );
  } else {
    return (
      <Router history={history}>
        <div>
          <NavBar />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (loggedIn ? <Profile /> : <Root />)}
            />
            <Route path="/home" component={Home} />
            <Route path="/profile" component={Profile}></Route>
            <Route exact path="/plants" component={Plants}></Route>
            <Route path="/plants/new" component={PlantForm}></Route>
            <Route path="/logout" component={Logout}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: !!state.currentUser.name,
  };
};

export default connect(mapStateToProps)(App);
