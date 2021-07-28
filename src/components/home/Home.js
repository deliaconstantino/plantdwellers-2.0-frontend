import React from "react";
import { connect } from "react-redux";
import WateringScheduleCalendar from "./calendar/WateringScheduleCalendar";
import HomeInfo from "./HomeInfo";

const Home = ({ currentUser }) => {
  return (
    <div>
      <HomeInfo currentUser={currentUser} />
      <WateringScheduleCalendar />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Home);
