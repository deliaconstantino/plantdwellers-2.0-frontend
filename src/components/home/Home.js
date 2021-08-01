import React from "react";
import { connect } from "react-redux";
import HomeSidebar from "./HomeSidebar";
import CalendarContainer from "./CalendarContainer";

const Home = ({ currentUser }) => {
  return (
    <div className="md:container md:mx-auto font-mono p-2">
      <h3 className="uppercase block mt-1 text-6xl leading-tight font-medium text-lime-700 p-4">
        {currentUser.home.nickname}
      </h3>
      {/* <div class="grid grid-cols-12 gap-0 flex-wrap"> */}
      <div class="flex flex-wrap p-4 space-x-4 space-y-4">
        {/* <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4"> */}
        <div>
          <HomeSidebar currentUser={currentUser} />
        </div>
        {/* <div class="relative col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 hidden md:block"> */}
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
