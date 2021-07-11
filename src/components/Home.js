import React, { useState } from "react";

import { connect } from "react-redux";
import WateringScheduleCalendar from './WateringScheduleCalendar'


const Home = props => {
  return (
    <div>
      In home component
      <WateringScheduleCalendar />
    </div>
  )
}














export default connect(null)(Home);
