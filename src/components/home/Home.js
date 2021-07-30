import React from "react";
import { connect } from "react-redux";
import HomeSidebar from "./HomeSidebar";
import CalendarContainer from "./CalendarContainer";

const Home = ({ currentUser }) => {
  return (
    <>
      {/* <div className="w-full h-full bg-no-repeat bg-right-bottom bg-opacity-50 bg-origin-border"
        style={{backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/31/19/16/cleaning-1294867_960_720.png')"}}
      > */}
        {/* <div className=" bg-gradient-to-t from-yellow-400 via-red-500 to-pink-500 w-full h-full bg-no-repeat bg-cover" */}

	{/* // style={{ */}
	{/* //     backgroundImage: `url(/img/cleaning-1294867_1280.png)`, */}
  {/* //       }} */}
  {/* // > */}

        {/* // </div> */}
        <p className="uppercase block mt-1 text-6xl leading-tight font-medium text-green-700">
          {currentUser.home.nickname}
        </p>
        <div class="grid grid-cols-12 gap-0 ">
          <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4 xxl:col-span-4">
            <HomeSidebar currentUser={currentUser} />
          </div>
          <div class="relative col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8 xxl:col-span-8 hidden md:block">
            <CalendarContainer />
          </div>
        </div>
        {/* <img
          // className="h-48 w-full md:w-48"
          src="../../img/cleaning-1294867_1280.png"
          alt="Stock photo of home with plants"
        /> */}
    {/* </div> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
