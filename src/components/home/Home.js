import React from "react";
import WateringScheduleCalendar from "./calendar/WateringScheduleCalendar";
import HomeInfo from "./HomeInfo";

const Home = (props) => {
  return (
    <div>
      <HomeInfo />
      <WateringScheduleCalendar />
    </div>
  );
};

export default Home;
