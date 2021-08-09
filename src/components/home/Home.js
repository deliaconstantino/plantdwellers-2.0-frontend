import React from "react";
import { connect } from "react-redux";
import HomeInfo from "./HomeInfo";
import CalendarContainer from "./CalendarContainer";
import NoHomeNotice from "./NoHomeNotice";

const Home = ({ currentUser }) => {
  if (currentUser.home.nickname) {
    return (
      <div className="md:container md:mx-auto font-mono p-2 justify-center">
        <h3 className="uppercase block mt-1 text-6xl leading-tight font-medium text-lime-700 p-4">
          {currentUser.home.nickname}
        </h3>
        <div className="flex flex-wrap space-x-6 space-y-4 items-start">
          <div className="mt-2">
            <HomeInfo currentUser={currentUser} />
          </div>
          <div>
            <CalendarContainer />
          </div>
        </div>
      </div>
    );
  } else {
    return <NoHomeNotice />
  }

};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
