import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Router, Switch } from "react-router-dom";
import history from "./components/history.js";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import { PlantAdd } from "./components/plants/PlantAdd";
import Plants from "./components/plants/Plants";
import Profile from "./components/profile/Profile";
import Root from "./components/Root";
import Logout from "./components/session/Logout";
import { ROOTURL } from "./constants";

const App = ({ loggedIn, dispatch }) => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("token", token);
    if (token) {
      fetch(`${ROOTURL}/profile`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => {
          if (resp.ok) {
            return resp.json();
          }
          throw new Error("Something went wrong");
        })
        .then((response) => {
          console.log("response", response);
          dispatch({
            type: "SET_CURRENT_USER",
            user: response.data.attributes,
          });
        })
        .catch((error) => {
          console.log(error);
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
            <Route path="/plants/new" component={PlantAdd}></Route>
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
