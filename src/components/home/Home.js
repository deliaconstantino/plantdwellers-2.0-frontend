import React from "react";
import { connect } from "react-redux";
import HomeSidebar from "./HomeSidebar";
import CalendarContainer from "./CalendarContainer";

const Home = ({ currentUser }) => {
  return (
    <div className="container max-w-6xl font-mono">
      <h3 className="uppercase block mt-1 text-6xl leading-tight font-medium text-lime-700 p-4">
        {currentUser.home.nickname}
      </h3>
      <div class="grid grid-cols-12 gap-0 ">
        <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
          <HomeSidebar currentUser={currentUser} />
        </div>
        <div class="relative col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 hidden md:block">
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
