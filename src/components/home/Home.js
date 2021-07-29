import React from "react";
import { connect } from "react-redux";
import HomeSidebar from "./HomeSidebar";
import CalendarContainer from "./CalendarContainer";

const Home = ({ currentUser }) => {
  return (
    <>
      <div class="bg-white">
        Home
        <div class="grid grid-cols-12 gap-0 ">
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <HomeSidebar currentUser={currentUser} />
          </div>
          <div class="bg-fixed relative col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 hidden md:block">
            <CalendarContainer />
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
