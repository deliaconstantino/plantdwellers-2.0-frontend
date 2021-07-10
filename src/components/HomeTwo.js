import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import { connect } from "react-redux";

// import "react-calendar/dist/Calendar.css";
import CalendarPopUp from "./CalendarPopUp";
import CalendarTileContent from "./CalendarTileContent";
import addWateringEvents from "../actions/addWateringEvents";

const HomeTwo = props => {
  console.log('wateringEvents', props.wateringEvents)
  return (
    <div>HomeTwo</div>
  )
}

const mapStateToProps = state => {
  return {
    wateringEvents: state.wateringEvents
  }
}

export default connect(mapStateToProps)(HomeTwo);
