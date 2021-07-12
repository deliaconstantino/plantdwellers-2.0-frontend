import React, { useState, useEffect } from "react";
import addHomeInfo from "../actions/addHomeInfo";
import { connect } from "react-redux";
import WateringScheduleCalendar from "./WateringScheduleCalendar";
import HomeInfo from "./HomeInfo";

const Home = (props) => {
  useEffect(() => {
    const token = localStorage.getItem("token"); //TODO: make this a constant?
    fetch("http://localhost:3001/api/v1/homes", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => resp.json())
      .then((resp) => {
        console.log("homeFetch", resp);
        const homeInfo = {
          homeAttributes: resp.data,
          users: resp.included,
        };
        console.log("myObject", homeInfo);
        props.addHomeInfo(homeInfo);
      });
  });

  return (
    <div>
      <HomeInfo />
      <WateringScheduleCalendar />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHomeInfo: (home) => dispatch(addHomeInfo(home)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
