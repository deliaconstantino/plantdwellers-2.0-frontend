import React from "react";
import { connect } from "react-redux";
import HomeSidebar from "./HomeSidebar";
import CalendarContainer from "./CalendarContainer";

const Home = ({ currentUser }) => {
  return (
    <div className="md:container md:mx-auto font-mono p-2 justify-center">
      <h3 className="uppercase block mt-1 text-6xl leading-tight font-medium text-lime-700 p-4">
        {currentUser.home.nickname}
      </h3>
      <div className="flex flex-wrap space-x-6 space-y-4 items-start">
        <div className="mt-2">
          <HomeSidebar currentUser={currentUser} />
        </div>
        <div>
          <CalendarContainer />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
