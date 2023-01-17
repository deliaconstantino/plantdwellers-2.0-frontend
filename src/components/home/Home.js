import React from "react";
import { connect } from "react-redux";
import WateringScheduleCalendar from "./calendar/WateringScheduleCalendar";
import HomeInfo from "./HomeInfo";
import NoHomeNotice from "./NoHomeNotice";

const Home = ({ currentUser }) => {
  if (currentUser.home.nickname) {
    return (
      <div className="md:container md:mx-auto font-mono px-4 py-12 justify-center">
        <h1>{currentUser.home.nickname}</h1>
        <div className="flex flex-col gap-8">
          <div className="mt-2">
            <HomeInfo currentUser={currentUser} />
          </div>
          <div>
            <WateringScheduleCalendar />
          </div>
        </div>
      </div>
    );
  } else {
    return <NoHomeNotice />;
  }
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
